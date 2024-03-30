// import { requireAuth } from "../utils/login";
import { useLoaderData, useNavigation, Form, redirect, useActionData } from "react-router-dom";
import { loginUser } from '../utils/api';


export function loader({ request }) {
  const mensaje = new URL(request.url).searchParams.get('message')
  return mensaje
}

export async function action({request}) {
  const formData = await request.formData()
  
  const email = formData.get('email')
  const password = formData.get('password')
  
  
  const prevPath = new URL(request.url).searchParams.get('redirectTo') || '/host'
  console.log(prevPath)
    try{
        const infoLogin = await loginUser({email, password})
        console.log(infoLogin)
        localStorage.setItem('loggedIn', 'true')
    } catch (err){
        return err.message
    }

    
    //    the reason about this is a BUG with MirageJS
    const infoRedirect = redirect(prevPath)
    infoRedirect.body = true
    console.log(infoRedirect)
    return infoRedirect
    }

export default function Login() {
  const message = useLoaderData()
  const actionMessage = useActionData()
  const navigation = useNavigation()



  return (
    <div className=" flex flex-col px-40 py-64">

      <h1 className=" text-center text-5xl font-bold text-black">
        Sing in to your account
      </h1>

        <>
        {message && <h3 className='text-center mt-3 font-bold text-red-600 text-2xl'>{message}</h3>}
        {actionMessage && <h3 className=' text-center mt-3 font-bold text-red-600 text-2xl'>{actionMessage}</h3>}
        </>

      <Form method='post' replace className="mt-9 flex flex-col  justify-center">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="h-10 w-96 self-center rounded-t-md border-2 border-b-transparent pl-4  focus:outline-gray-900"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="h-10 w-96 self-center rounded-b-md border-2  pl-4"
          />

          <button
            className=" mt-9  rounded-md bg-orangeButton py-2 text-center text-xl font-bold  text-white disabled:bg-gray-500 "
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Loggin in..." : "Login"}
          </button>
      </Form>
    </div>
  );
}
