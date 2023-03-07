import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout1 } from "components/layout/Layout1";
import { PhotoDetailPage } from "pages";
import { PhotoListPage } from "pages/PhotoListPage";
import { ErrorPage404 } from "components/global/ErrorPage404";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<PhotoListPage />} />
          <Route path="photo-detail/:photoId" element={<PhotoDetailPage />} />
          <Route path="/*" element={<ErrorPage404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
