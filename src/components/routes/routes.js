import Home from "./../home";
import PhotoBooks from "./../photobooks/index";
import Photos from "./../photos/index";
export const RootRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/photobooks",
    element: <PhotoBooks />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
];
