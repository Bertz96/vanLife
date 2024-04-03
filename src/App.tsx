import "./server";

import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vansDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard, { loader as loaderDashboard } from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVanLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFound from "./pages/NotFound";
import Login, {loader as loginLoader, action as actionLogin} from "./pages/Login";
import Error from "./components/Error";

import { requireAuth } from "./utils/login";
import ErrorHost from './components/ErrorHost';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          loader={vansLoader}
          element={<Vans />}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          loader={vansDetailLoader}
          element={<VanDetail />}
        />
        <Route path="login" element={<Login />} loader={loginLoader} action={actionLogin} />
        

        <Route path="host" element={<HostLayout />} loader={async ({request})=> requireAuth(request)} errorElement={<ErrorHost />}>
        
                  <Route
                    index
                    element={<Dashboard />}
                    loader={loaderDashboard}
                  />
        
        <Route
          path="income"
          element={<Income />}
          loader={async ({request}) => await requireAuth( request )}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({request}) => await requireAuth( request)}
        />
          <Route path="vans" loader={hostVanLoader} element={<HostVans />} />
          <Route
            path="vans/:id"
            loader={hostVanDetailLoader}
            element={<HostVanDetail />}
          >
              <Route
                index
                loader={async ({request}) => await requireAuth( request)}
                element={<HostVanInfo />}
              />
              <Route
                path="pricing"
                loader={async ({request}) => await requireAuth( request)}
                element={<HostVanPricing />}
              />
              <Route
                path="photos"
                loader={async ({request}) => await requireAuth( request)}
                element={<HostVanPhotos />}
              />
            </Route>
        </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/**
// -------------------------------IMPORTANT-----------------------------------
//
//    The DATA LAYER API is only available in ReactRouter 6.4 and beyond
//    this will let us handle the data before we go into our route
//    normally we jump into our  component and THEN we make a request with our useEffect
//    this is VERY importante because we display/handle the logic of what will be rendered before
//    the actual data is returned, so if for example we CAN'T fetch our data the page will crash
//    is VERY important to handle the SAD PATH to avoid a bad user experience and most important
//    to avoid crashing our app

//    aria labels are important for screen readers, DO NOT FORGET THEM is recommended to add then while the app is in development
//    otherwise it will be a very tedious task to add them one by one once the app is released/finished

// ⚠⚠⚠⚠⚠⚠   LIFTING UP THE ERROR ELEMENT PROP WITH A COMPONENT THAT HANDLE THE ERROR WILL WORK FOR EVERY CHILD IN THE APP
//        es importante para manejar los errores, puede ser en un componente especifico o mas arriba de la jerarquia
*/