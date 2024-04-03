    import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore/lite"
    import { app } from '../config/firebase'

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
    export async function getVan(id: string) : Promise<Van> {
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

export type Credens ={
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
}

export async function loginUser({email, password} : Credens) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify({email, password})  }
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