# Avikumar Portfolio - React + Vite

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring smooth animations, dark mode support, and Firebase integration.

## 🚀 Features

- ✨ Modern React 18 with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 🔥 Firebase integration for contact form
- ⚡ Fast development with Vite HMR
- 📧 Working contact form with email notifications
- 🎯 SEO optimized
- 🔧 ESLint configured

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Bootstrap Icons
- **Backend**: Firebase Firestore
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Avi1606/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase (Optional - for contact form)**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase config and update `src/utils/firebase.js`

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

## 🔧 Configuration

### Firebase Setup
Update the Firebase configuration in `src/utils/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
}
```

### Customization
- Update personal information in components
- Modify color scheme in `tailwind.config.js`
- Add/remove sections as needed
- Update social media links
- Replace project data with your own

## 🚀 Deployment

### Vercel
```bash
npm run build
# Upload dist folder to Vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Copy dist contents to gh-pages branch
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── FloatingButtons.jsx
├── utils/              # Utility functions
│   └── firebase.js
├── App.jsx             # Main App component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎯 Performance

- ⚡ Vite for lightning-fast development
- 📦 Code splitting and lazy loading
- 🗜️ Optimized bundle size
- 📱 Mobile-first responsive design
- 🎨 Efficient animations with Framer Motion

## 📧 Contact Form

The contact form integrates with Firebase Firestore to store submissions. Messages include:
- Name, email, and message content
- Timestamp
- User agent information

## 🎨 Customization Guide

1. **Colors**: Update `tailwind.config.js` primary colors
2. **Fonts**: Modify font imports in `index.html`
3. **Content**: Update component data arrays
4. **Animations**: Adjust Framer Motion variants
5. **Layout**: Modify component structure as needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Avikumar Prajapati**
- GitHub: [@Avi1606](https://github.com/Avi1606)
- LinkedIn: [aviiiprajapati](https://linkedin.com/in/aviiiprajapati)
- Email: aviiiprajapti16@gmail.com

---

⭐ Don't forget to star this repo if you found it helpful!