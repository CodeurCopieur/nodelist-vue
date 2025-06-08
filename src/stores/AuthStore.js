import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../js/firebase';
import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
    const user = ref(null);
    const init = () => {
        onAuthStateChanged(auth, (userDetails) => {
            if (userDetails) {
               
                user.value = {email: userDetails.email, uid: userDetails.uid};
                console.log('User is logged in', user.value);
            } else {
                user.value = {};
                console.log('User is logged out');
            }
        });
    }

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

    const loginUser = (credentials) => {
        const {email, password} = credentials;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.error('Error logging in:', error);
            });
    }

    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out');
            });
    }

    const getUser = () => {
        return user.value;
    }

    return {
        registerUser,
        loginUser,
        logoutUser,
        init,
        getUser,
        user    
    }
});