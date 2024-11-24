// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAkbi9cfohAdQALFXhcwx5l0JMBM7X3nPA",
  authDomain: "jsi-thang-82c27.firebaseapp.com",
  projectId: "jsi-thang-82c27",
  storageBucket: "jsi-thang-82c27.appspot.com",
  messagingSenderId: "115346198588",
  appId: "1:115346198588:web:45ec33914ce468261bf339",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const btn_signin = document.querySelector(".btn_signin");

btn_signin.addEventListener("click", () => {
  const email_value = document.querySelector("#email").value;
  const password_value = document.querySelector("#pwd").value;

  signInWithEmailAndPassword(auth, email_value, password_value)
    .then((item) => {
      console.log(item);
      alert("Đăng nhập thành công");
    })
    .catch((err) => {
      console.log(err);
    });
});

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    window.location.href = "index.html";
  } else {
    console.log("Chưa đăng nhập");
  }
});
