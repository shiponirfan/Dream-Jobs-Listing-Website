import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../config/firebase.config";
import useAxios from "../hooks/useAxios";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [homeSearchFiled, setHomeSearchFiled] = useState("");
  const [homeSearchJobTypes, setHomeSearchJobTypes] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const axios = useAxios();
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 300 });
  }, []);
  // Dark Mode Theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").classList.add(localTheme);
  }, [theme]);

  // Sign UP With Email & Password
  const signIn = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login With Email & Password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login With Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  // user's profile
  const userProfile = (name, profileUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profileUrl,
    })
      .then(() => {
        setUser(auth.currentUser);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Logged In Users
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true);
      // JWT Token
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      if (userEmail) {
        axios.post("/auth/access-token", loggedUser).then((res) => {
          console.log(res.data);
          setLoading(false);
        });
      } else {
        axios.post("/auth/access-cancel", loggedUser).then((res) => {
          console.log(res.data);
          logOut().then(() => {});
          setLoading(false);
        });
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [axios, user]);

  const AuthInfo = {
    user,
    loading,
    setLoading,
    theme,
    setTheme,
    signIn,
    logIn,
    googleLogin,
    logOut,
    userProfile,
    homeSearchFiled,
    setHomeSearchFiled,
    setHomeSearchJobTypes,
    homeSearchJobTypes
  };
  return (
    <HelmetProvider>
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </HelmetProvider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
