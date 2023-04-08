import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./config";

export const signup = async (payload) => {
    userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
}

export const signin = async (payload) => {
    try {
        return userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password)
    } catch (error) {
        return null
    }
}

export const logout = async () => {
    await signOut(auth)
}

export const checkAuth = (setLogin) => {
    onAuthStateChanged(auth, (user) => {
        if (user)
            setLogin(true)
        else
            setLogin(false)
    })
}