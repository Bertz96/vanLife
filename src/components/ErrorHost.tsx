import { useRouteError } from "react-router-dom";
type ErrorData = {
  message: string;
  status: number;
  statusText: string;
  headers : string;
}
export default function Error() {
  const error = useRouteError() as ErrorData;
  console.log(error);

  // Customizar el error para que sea mas generico en caso de ser necesario

  return (
    <>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.headers}
      </pre>
    </>
  );
}
