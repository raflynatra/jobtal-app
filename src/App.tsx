import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes/route-list";

function App() {
  const router = createBrowserRouter([...PUBLIC_ROUTES]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
