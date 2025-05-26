import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../js/firebase';

export const useAuthStore = defineStore('authStore', () => {
    const registerUser = (credentials)=> {
        const {email, password} = credentials;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.error('Error registering user:', error);
            });
    }

    return {
        registerUser
    }
});