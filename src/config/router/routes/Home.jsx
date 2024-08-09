import HomePage from "../../../pages/Home/HomePage";
import SewaPage from "../../../pages/Home/SewaPage";
import DetailPage from "../../../pages/Home/DetailPages";
const HomeRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cari",
    element: <SewaPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
];

export default HomeRoutes;
