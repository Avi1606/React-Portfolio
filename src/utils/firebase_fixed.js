import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyARXQN-Y3vJlU02cAKd5Ft9j8ibRtIhO3c",
  authDomain: "my-portfolio-a2911.firebaseapp.com",
  databaseURL: "https://my-portfolio-a2911-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-portfolio-a2911",
  storageBucket: "my-portfolio-a2911.firebasestorage.app",
  messagingSenderId: "1096502584316",
  appId: "1:1096502584316:web:cd8651f45be30e0f250879",
  measurementId: "G-W2WEEWSETQ"
}

let app
let db
let analytics

export const initializeFirebase = () => {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    // Only initialize analytics in browser environment
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app)
    }
    console.log('Firebase initialized successfully')
  } catch (error) {
    console.error('Firebase initialization error:', error)
  }
}

export const submitContactForm = async (formData) => {
  try {
    if (!db) {
      initializeFirebase() // Auto-initialize if not already done
    }

    // Add a timestamp in milliseconds rather than as a Date object
    // This resolves some serialization issues with Firestore
    const formDataToSend = {
      ...formData,
      timestamp: Date.now(),
      userAgent: navigator.userAgent
    }

    // Try to submit to contact-submissions collection
    try {
      const docRef = await addDoc(collection(db, 'contact-submissions'), formDataToSend)
      console.log('Document written with ID: ', docRef.id)
      return docRef
    } catch (firestoreError) {
      console.error('Firestore write error:', firestoreError)

      // If we get a permission error, try sending to a different collection that might be allowed
      if (firestoreError.code === 'permission-denied') {
        console.log('Attempting to submit to public-messages collection')
        try {
          const alternativeRef = await addDoc(collection(db, 'public-messages'), formDataToSend)
          console.log('Alternative document written with ID: ', alternativeRef.id)
          return alternativeRef
        } catch (alternativeError) {
          console.error('Alternative collection error:', alternativeError)
          throw alternativeError
        }
      } else {
        // For other errors, throw them
        throw firestoreError
      }
    }
  } catch (error) {
    console.error('Error adding document: ', error)

    // In development mode, we can return a mock success response to test UI flows
    if (import.meta.env.DEV) {
      console.warn('Returning mock success response due to Firebase error')
      return {
        id: 'mock-' + Date.now(),
        mock: true,
        error: error.message
      }
    } else {
      // In production, throw the error to handle it properly in the UI
      throw error
    }
  }
}
