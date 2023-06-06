// routeData.js
import Home from "../Pages/Home";
import About from "../Pages/About";
import Paintings from "../Pages/Paintings";
import PreUsed from "../Pages/PreUsed";
import Sell from "../Pages/Sell";
import Stationary from "../Pages/Stationary";
import Textile from "../Pages/Textile";
import AddProduct from "../ProductsDisplay/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Userboard from "../dashboard/UserDashboard/Userboard";
import New from "../Pages/New/New";
import AdminDash from "../Dashboards/Admin/AdminPages/AdminDash";

import Pg404 from "../Pages/Pg404";
import Profile from "../Pages/Profile/Profile";

import AdminOrder from "../Dashboards/Admin/AdminPages/AdminOrder";
import RSF1 from "../Pages/SellerPage/SellerForm/RSF1";
import RSF2 from "../Pages/SellerPage/SellerForm/RSF2";
import RSF3 from "../Pages/SellerPage/SellerForm/RSF3";
import RSF4 from "../Pages/SellerPage/SellerForm/RSF4";
import RSF5 from "../Pages/SellerPage/SellerForm/RSF5";
import RSFPreview from "../Pages/SellerPage/SellerForm/RSFPreview";
import MultiStepForm from "../Pages/SellerPage/SellerForm/MultiStepForm";
import Multistep from "../Pages/SellerPage/SellerForm/multistep";
import AdminSellerForms from "../Dashboards/Admin/AdminPages/AdminSellerForms";
import Vendorlist from "../Dashboards/Admin/AdminPages/Vendorlist";
import ProductList from "../Dashboards/Admin/AdminPages/ProductList";
import Complaints from "../Dashboards/Admin/AdminPages/Complaints";

import SellerDash from "../Dashboards/Seller/SellerPages/sellerDashboard";
import Sellerorders from "../Dashboards/Seller/SellerPages/Sellerorders.jsx";
import Sellerpaintings from "../Dashboards/Seller/SellerPages/Sellerpaintings";
import Sellerproducts from "../Dashboards/Seller/SellerPages/Sellerproducts";

import CustomerDash from "../Dashboards/Customer/CustomerPages/CustomerDash";
import Usercart from "../Dashboards/Customer/CustomerPages/Usercart";
import Userprofile from "../Dashboards/Customer/CustomerPages/UserProfile";
import Userorders from "../Dashboards/Customer/CustomerPages/Userorder";

import Biddingsystem from "../Pages/Biddingsystem";
const routeData = [
  {
    path: "/multistep",
    element: <Multistep />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/textile",
    element: <Textile />,
  },
  {
    path: "/stationary",
    element: <Stationary />,
  },

  {
    path: "/paintings",
    element: <Paintings />,
  },
  {
    path: "/preused",
    element: <PreUsed />,
  },

  {
    path: "/sell",
    element: <Sell />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/admin",
    element: <AdminDash />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  // Admin Dashboard
  {
    path: "/adminDash",
    element: <AdminDash />,
  },
  {
    path: "/adminSellerForms",
    element: <AdminSellerForms />,
  },
  {
    path: "/vendorlist",
    element: <Vendorlist />,
  },
  {
    path: "/productlist",
    element: <ProductList />,
  },
  {
    path: "/orderlist",
    element: <AdminOrder />,
  },
  {
    path: "/complaints",
    element: <Complaints />,
  },

  // Seller Dashboard
  {
    path: "/sellerDash",
    element: <SellerDash />,
  },
  {
    path: "/sellerproducts",
    element: <Sellerproducts />,
  },
  {
    path: "/sellerpaintings",
    element: <Sellerpaintings />,
  },
  {
    path: "/sellerorders",
    element: <Sellerorders />,
  },

  // Customer Dashboard

  {
    path: "/customerDash",
    element: <CustomerDash />,
  },
  {
    path: "/myorders",
    element: <Userorders />,
  },

  {
    path: "/mycart",
    element: <Usercart />,
  },
  {
    path: "/bid",
    element: <Biddingsystem />,
  },
  {
    path: "/userprofile",
    element: <Userprofile />,
  },

  {
    path: "/user/:userId/new",
    element: <New />,
  },
  {
    path: "/products/:productId/new",
    element: <New />,
  },
  {
    path: "/products/:productId",
    element: <Stationary />,
  },

  {
    path: "*",
    element: <Pg404 />,
  },
];
export default routeData;
{
  /* 
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/registersellerform2",
    component: RSF2,
  },
  {
    path: "/registersellerform3",
    component: RSF3,
  },*/
}
