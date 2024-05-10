import { Van } from '../types/vanType'

//  All vans
export async function getVans(){
    const dataArr = await fetch('/vans').then(res => res.json())

    return dataArr
}

//  Single van
    export async function getVan(id: string) {
        const singleVan = await fetch(`/vans/${id}`).then(res => res.json())
        
        return singleVan
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
    const hostVan : Van[] = await fetch('/host').then(res => res.json())

    return hostVan
}

export type Credens ={
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
}

export async function loginUser({email, password} : Credens) {
    console.log(email, password)
    const res = await fetch("/login",
        { method: "post", body: JSON.stringify({email, password}), headers: {
            "Content-Type": "application/json"
        } }
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