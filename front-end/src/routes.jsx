import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Questions from "./pages/questions";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
