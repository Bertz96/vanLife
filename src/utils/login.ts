import { redirect } from "react-router-dom"

export async function requireAuth( request : Request ) {
    const isLoggedIn = localStorage.getItem('loggedIn')

    const prevPath = new URL(request.url).pathname 
    
    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first!&redirectTo=${prevPath}`)
        response.body = true  // It's silly, but it works
        return response
        // return redirect("/login")
    }
    return null
}


// ALTERNATIVA ---- bug ESPECIFICO con MirageJS

// export async function requireAuth() {
//   const isLoggedIn = false;

//   if (!isLoggedIn) {
//     const response = redirect('/login')
//     Object.defineProperty(response, "body", {value: true})
//     throw response
//   }

//   return null;
// }

