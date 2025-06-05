import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
}

let app
let db

export const initializeFirebase = () => {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore(app)
    console.log('Firebase initialized successfully')
  } catch (error) {
    console.error('Firebase initialization error:', error)
  }
}

export const submitContactForm = async (formData) => {
  try {
    if (!db) {
      throw new Error('Firebase not initialized')
    }
    
    const docRef = await addDoc(collection(db, 'contact-submissions'), {
      ...formData,
      timestamp: new Date(),
      userAgent: navigator.userAgent
    })
    
    console.log('Document written with ID: ', docRef.id)
    return docRef
  } catch (error) {
    console.error('Error adding document: ', error)
    throw error
  }
}