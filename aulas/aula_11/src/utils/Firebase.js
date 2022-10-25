import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import {firebaseConfig} from '../keys/firebaseConfig'

class Firebase {
    
    constructor(){
        this.app = initializeApp(firebaseConfig)
    }

    getFirestoreDb(){
        return getFirestore(this.app)
    }
}

export {Firebase}