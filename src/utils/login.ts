import { redirect } from "react-router-dom"

export async function requireAuth( request : Request ) {
    const isLoggedIn = localStorage.getItem('loggedIn')

    const prevPath = new URL(request.url).pathname 
    
    if (!isLoggedIn) {
        return redirect(`/login?message=You must log in first!&redirectTo=${prevPath}`)
    }
    return null
}