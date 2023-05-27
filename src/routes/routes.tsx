import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage, SearchAddress } from "./lazy.routes";
import { Wrapper } from "../components";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Wrapper />}>
        <Route
          index
          element={
            <Suspense>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path="address"
          element={
            <Suspense>
              <SearchAddress />
            </Suspense>
          }
        />
        <Route path="*" element={<p>А тут ничего :(</p>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
