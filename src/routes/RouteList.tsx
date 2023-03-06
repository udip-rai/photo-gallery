import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout1 } from "components/layout/Layout1";
import { PhotoDetailPage } from "pages";
import { PhotoListPage } from "pages/PhotoListPage";

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<PhotoListPage />} />
          <Route path="photo-detail/:photoId" element={<PhotoDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
