import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
