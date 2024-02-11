import { initializeApp } from "firebase/app"

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "<api-key-here>",
        authDomain: "<auth-domain-here>",
        projectId: "<project-Id-here>",
        storageBucket: "<storage-bucket-here>",
        messagingSenderId: "<messaging-Sender-Id>",
        appId: "<app-Id-here>"
    }
    const app = initializeApp(firebaseConfig)

    return {
        provide: {
            firebaseApp : app
        }
    }
})

