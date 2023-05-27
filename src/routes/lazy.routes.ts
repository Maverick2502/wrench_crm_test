import { lazy } from "react";

const MainPage = lazy(() => import("../pages/Main/main.tsx"));
const SearchAddress = lazy(
  () => import("../pages/SearchAddress/searchAddress.tsx")
);

export { MainPage, SearchAddress };
