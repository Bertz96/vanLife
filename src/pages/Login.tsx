// import { requireAuth } from "../utils/login";
import { useLoaderData, useNavigation, Form, redirect, useActionData, LoaderFunctionArgs, ActionFunctionArgs } from "react-router-dom";
import { loginUser } from '../utils/api';


export function loader( {request} : LoaderFunctionArgs ) {
  const mensaje = new URL(request.url).searchParams.get('message')

  const loggedUser = localStorage.getItem('loggedIn')

  if(loggedUser){
    return redirect('/host')
  }

  // console.log(loggedUser)

  return mensaje
}

export async function action({request} : ActionFunctionArgs) {
  const formData = await request.formData()
  
  const email = formData.get('email')
  const password = formData.get('password')
  
  const prevPath = new URL(request.url).searchParams.get('redirectTo') || '/host'
    try{
        const infoLogin = await loginUser({email, password })
        console.log(infoLogin);
        localStorage.setItem('loggedIn', 'true')
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err : any ){
        return err.message;
    }

    const infoRedirect = redirect(prevPath)
    return infoRedirect
}


export default function Login() {
  const message = useLoaderData() as string
  const actionMessage = useActionData()  as string
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
            className=" mt-9 w-72 self-center  rounded-md bg-orangeButton py-2 text-center text-xl font-bold  text-white disabled:bg-gray-500 "
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Loggin in..." : "Login"}
          </button>
      </Form>
    </div>
  );
}
