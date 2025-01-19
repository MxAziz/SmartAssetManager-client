import { createContext, useState } from "react";
import auth from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const signOutUser = () => {
      setLoading(true);
      return signOut(auth);
    };



    const authInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signOutUser,
      signInWithGoogle,
    };

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>


};

export default AuthProvider;