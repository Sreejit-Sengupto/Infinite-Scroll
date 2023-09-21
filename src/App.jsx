import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import CardDetail from "./utils/CardDetail"
import Home from "./components/Home"
import ErrorPage from "./utils/ErrorPage"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
    <Route path=":id" element={<CardDetail />} errorElement={<ErrorPage />} />
    </>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
