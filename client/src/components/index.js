import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
} from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";
import Bmi from "./shop/Bmi/BmiCal";
import NutName from "./shop/Nut/nutName.js";
import NewsPage from "./shop/news/NewsPage.js";
import Navbar from "./Home/Home";
import Eun from "./Home/eun/eun";
import Dong from "./Home/dong/dong";
import Jun from "./Home/jun/jun";
import Map from "./shop/Nut/sub.js";
import App222 from "./shop/Nut/subsub.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/nut" component={NutName}/>
        <Route path="/sub" component={Map}/>
        <Route path="/subsub" component={App222}/>
        <Route exact path="/bmi" component={Bmi} />
        <Route exact path="/user/orders" component={UserOrders} />
        <Route exact path="/user/profile" component={UserProfile} />
        <Route exact path="/user/setting" component={SettingUser} />

        <Route exact path="/About" component={Navbar} />
        <Route exact path="/eun" component={Eun} />
        <Route exact path="/jun" component={Jun} />
        <Route exact path="/dong" component={Dong} />
        
        
        <Route exact path="/wish-list" component={WishList} />
        <Route path="/health:category?" component={NewsPage} />
        <Route exact path="/products/:id" component={ProductDetails} />
       
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />
        {/* Admin Routes End */}

        {/* User Dashboard */}
        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />
        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route component={PageNotFound} />
        
      </Switch>
    </Router>
  );
};

export default Routes;
