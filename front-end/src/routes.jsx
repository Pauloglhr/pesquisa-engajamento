import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Questions from "./pages/questions";
import Result from "./pages/result";
import ResetCss from "./components/ResetCss";
import { ApiContextProvider } from "./contexts/ApiContext";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ResetCss />
      <ApiContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </ApiContextProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
