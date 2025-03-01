import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/frontend/Home";
import About from "./pages/frontend/About";
import Drugs from "./pages/frontend/Drugs";
import Blog from "./pages/frontend/Blog";
import Contact from "./pages/frontend/Contact";
import Login from "./pages/backend/Login";

import "./App.css";
import Index from "./pages/backend";
import Brand from "./pages/backend/brand/Brand";
import AddBrand from "./pages/backend/brand/AddBrand";
import UpdateBrand from "./pages/backend/brand/UpdateBrand";
import Category from "./pages/backend/category/Category";
import AddCategory from "./pages/backend/category/AddCategory";
import UpdateCategory from "./pages/backend/category/UpdateCategory";
import ImportDrug from "./pages/backend/drug/ImportDrug";
import DrugList from "./pages/backend/drug/DrugList";
import AddDrug from "./pages/backend/drug/AddDrug";
import UpdateDrug from "./pages/backend/drug/UpdateDrug";
import Register from "./pages/frontend/Register";
import Signin from "./pages/frontend/Signin";
import Carts from "./pages/frontend/Carts";
import Logout from "./pages/backend/Logout";
import DrugDetails from "./pages/frontend/DrugDetails";
import Checkout from "./pages/frontend/Checkout";
import AdminList from "./pages/backend/admin/AdminList";
import UpdateAdmin from "./pages/backend/admin/UpdateAdmin";
import AddAdmin from "./pages/backend/admin/AddAdmin";
import Accounts from "./pages/frontend/user/Accounts";
import Orders from "./pages/frontend/user/Orders";
import Profile from "./pages/frontend/user/Profile";
import ChangePassword from "./pages/frontend/user/ChangePassword";
import Address from "./pages/frontend/user/Address";
import TrackOrder from "./pages/frontend/user/TrackOrder";
import TermsAndConditions from "./pages/frontend/TermsAndConditions";
import Thankyou from "./pages/frontend/user/Thankyou";
import OrderDetails from "./pages/frontend/user/OrderDetails";
import City from "./pages/backend/city/City";
import Tier from "./pages/backend/tier/Tier";
import AddTier from "./pages/backend/tier/AddTier";
import AddCity from "./pages/backend/city/AddCity";
import UpdateCity from "./pages/backend/city/UpdateCity";
import UpdateTier from "./pages/backend/tier/UpdateTier";
import Supplier from "./pages/backend/supplier/Supplier";
import AddSupplier from "./pages/backend/supplier/AddSupplier";
import UpdateSupplier from "./pages/backend/supplier/UpdateSupplier";
import ResetPassword from "./pages/frontend/user/ResetPassword";

function App() {
  return (
    <Router basename={"medmart"}>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/drugs" element={<Drugs />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/account" element={<Accounts />} />
          <Route
            exact
            path="/reset-password/:token/:id"
            element={<ResetPassword />}
          />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/order-detail/:id" element={<OrderDetails />} />

          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/thankyou" element={<Thankyou />} />

          <Route
            exact
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route exact path="/change-password" element={<ChangePassword />} />
          <Route exact path="/address" element={<Address />} />
          <Route exact path="/track-orders" element={<TrackOrder />} />

          <Route exact path="/carts" element={<Carts />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/drug-detail/:id" element={<DrugDetails />} />
          <Route exact path="/admin/login" element={<Login />} />
          <Route exact path="/admin" element={<Index />} />
          <Route exact path="/admin/admin-list" element={<AdminList />} />
          <Route exact path="/admin/add-admin" element={<AddAdmin />} />
          <Route
            exact
            path="/admin/update-admin/:id"
            element={<UpdateAdmin />}
          />
          <Route exact path="/admin/brand" element={<Brand />} />
          <Route exact path="/admin/add-brand" element={<AddBrand />} />
          <Route
            exact
            path="/admin/update-brand/:id"
            element={<UpdateBrand />}
          />
          <Route exact path="/admin/categories" element={<Category />} />
          <Route exact path="/admin/add-category" element={<AddCategory />} />

          <Route
            exact
            path="/admin/update-category/:id"
            element={<UpdateCategory />}
          />
          <Route exact path="/admin/drugs" element={<DrugList />} />
          <Route exact path="/admin/add-drug" element={<AddDrug />} />
          <Route exact path="/admin/update-drug/:id" element={<UpdateDrug />} />
          <Route exact path="/admin/import-drugs" element={<ImportDrug />} />
          <Route exact path="/admin/cities" element={<City />} />
          <Route exact path="/admin/add-city" element={<AddCity />} />
          <Route exact path="/admin/update-city/:id" element={<UpdateCity />} />
          <Route exact path="/admin/tiers" element={<Tier />} />
          <Route exact path="/admin/add-tier" element={<AddTier />} />
          <Route exact path="/admin/update-tier/:id" element={<UpdateTier />} />
          <Route exact path="/admin/supplier" element={<Supplier />} />
          <Route exact path="/admin/add-supplier" element={<AddSupplier />} />
          <Route
            exact
            path="/admin/update-supplier/:id"
            element={<UpdateSupplier />}
          />

          <Route exact path="/admin/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
