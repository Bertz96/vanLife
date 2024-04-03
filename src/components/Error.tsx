import { useRouteError } from "react-router-dom";

type LoginError = {
  message : string ,
  statusText : string,
  status : number,
}
export default function Error() {
  const error = useRouteError();
  console.log(error);


  // Customizar el error para que sea mas generico en caso de ser necesario

  return (
    <>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
}
