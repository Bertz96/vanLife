import { Van } from '../types/vanType'

//  All vans
export async function getVans(){
    const dataArr = await fetch('https://backvanlife.onrender.com/vans').then(res => res.json())

    return dataArr
}

//  Single van
    export async function getVan(id: string) {
        const singleVan = await fetch(`https://backvanlife.onrender.com/vans/${id}`).then(res => res.json())
        
        return singleVan
}


export async function getHostVans() {
    const hostVan : Van[] = await fetch('https://backvanlife.onrender.com/host').then(res => res.json())

    return hostVan
}

export type Credens ={
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null
}

export async function loginUser({email, password} : Credens) {
    console.log(email, password)
    const res = await fetch("https://backvanlife.onrender.com/login",
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