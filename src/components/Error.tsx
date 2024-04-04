import { useRouteError } from "react-router-dom";


type ErrorData = {
  message: string;
  status: number;
  statusText: string;
}



export default function Error() {
  const error = useRouteError() as ErrorData;


  return (
    <>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
}
