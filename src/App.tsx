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