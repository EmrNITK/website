import React from "react";
import { useRoutes } from "react-router-dom";

// componenets
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />
        },
        // {
        //   path: 'projects',
        //   element: <Projects />
        // }
      ]
    },
    {
      path: '*',
      element: <h1>404-NOT FOUND</h1>,
    }
  ])

  return (
    <>
      <main>
        {routes}
      </main>
    </>
  );
}

export default App;
