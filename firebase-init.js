// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// --- IMPORTANT ---
// 1. Go to your Firebase project console.
// 2. In Project settings, find your web app's configuration object.
// 3. Replace the placeholder values below with your actual Firebase config.
  const firebaseConfig = {
    apiKey: "AIzaSyDGb70k3GG2s067U4UNr2tkA_ddvkvxgtI",
    authDomain: "dennisad-portfolio.firebaseapp.com",
    projectId: "dennisad-portfolio",
    storageBucket: "dennisad-portfolio.firebasestorage.app",
    messagingSenderId: "515618445483",
    appId: "1:515618445483:web:ff64550ccbd168490c7fee"
  };

// --- IMPORTANT ---
// 1. Go to your Cloudinary account dashboard.
// 2. Find your "Cloud name" on the dashboard.
// 3. Go to Settings > Upload > Upload presets.
// 4. Create a new UNSIGNED upload preset.
// 5. Replace the placeholder values below.
const cloudinaryConfig = {
    cloudName: "drdsrm5zn",
    uploadPreset: "dennisad-portfolio" 
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services and config for use in other files
export { auth, db, cloudinaryConfig };
