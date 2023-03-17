import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Task1 from "./pages/task1";
import Task12 from "./pages/task12";
import Task16 from "./pages/task16";
import ButtonOutlinedText from "./pages/button-outlined-text";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/task-12":
        title = "";
        metaDescription = "";
        break;
      case "/task-16":
        title = "";
        metaDescription = "";
        break;
      case "/buttonoutlined-text":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Task1 />} />
      <Route path="/task-12" element={<Task12 />} />
      <Route path="/task-16" element={<Task16 />} />
      <Route path="/buttonoutlined-text" element={<ButtonOutlinedText />} />
    </Routes>
  );
}
export default App;
