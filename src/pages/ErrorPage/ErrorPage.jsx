import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

  const error = useRouteError()

  return (
    <div className="w-full text-center mt-[20%] ">
        <h2 className="text-5xl font-bold">Oops! </h2>
        <p className="uppercase text-2xl mt-4">
          {error.statusText || error.message}
        </p>
    </div>
  )
}

export default ErrorPage