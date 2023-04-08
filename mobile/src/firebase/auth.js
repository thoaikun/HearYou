import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import { auth } from './config'
import { getUserData } from './firestore'

export const signup = async (payload) => {
    userCredential = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
    )
}

export const signin = async (payload) => {
    try {
        userCredential = await signInWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
        )
        return await getUserData(userCredential.user.uid)
    } catch (error) {
        return null
    }
}

export const logout = async () => {
    await signOut(auth)
}

export const checkAuth = (setLogin) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    })
}
