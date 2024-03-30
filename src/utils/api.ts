// distintas funcionalidades para simular un backend   +    util functions

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfwQMchsmpgOyRZTIw4vs8Yb3ZQkrrozA",
  authDomain: "vanslife-react-bc.firebaseapp.com",
  projectId: "vanslife-react-bc",
  storageBucket: "vanslife-react-bc.appspot.com",
  messagingSenderId: "423548564137",
  appId: "1:423548564137:web:1eb423692ac4b123e2efb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/**
 * an object that I will be using anytime I neet to interface with my app FireStore database
 */
const db = getFirestore(app)

const vansCollectionRef = collection(db, 'vans')


//  All vans
export async function getVans(){

    const vansQuerySnapshot = await getDocs(vansCollectionRef)
    const dataArr = vansQuerySnapshot.docs.map( doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr

}

//  Single van
    export async function getVan(id: string) {
        const docRef = doc(db, 'vans', id)
        const vanSnapshot = await getDoc(docRef)
        return { 
            ...vanSnapshot.data(),
            id : vanSnapshot.id
        }

    }

// export async function getVan(id?: string) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans() {
    const q = query(vansCollectionRef, where('hostId', '==', '123'));
    const vanCollectionSnapshot = await getDocs(q)
    const dataArr = vanCollectionSnapshot.docs.map( doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}
// export async function getHostVans(id?: string) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

type Credentials ={
    email: string,
    password: string
}

export async function loginUser(creds : Credentials) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds)  }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}