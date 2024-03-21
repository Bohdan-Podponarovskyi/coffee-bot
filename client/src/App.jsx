import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Users from "./components/Users/Users";
import CreateUser from "./components/Users/CreateUser";
import UpdateUser from "./components/Users/UpdateUser";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    path: '/',
                    element: <Users />
                },
                {
                    path: '/create',
                    element: <CreateUser />
                },
                {
                    path: '/update',
                    element: <UpdateUser />
                }
            ]
        }
    ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
