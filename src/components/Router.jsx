import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import AppLayout from "./AppLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "navbar",
        element: <NavBar />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
]);
export default router;