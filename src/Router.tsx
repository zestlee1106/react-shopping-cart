import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { ROUTE } from "./constants/route";
import List from "./routes/ProductList";
import Detail from "./routes/ProductDetail";
import Cart from "./routes/Cart";
import OrderList from "./routes/OrderList";
import SubLayout from "./components/SubLayout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTE.HOME} exact>
          <Redirect to={ROUTE.PRODUCTS} />
        </Route>
        <Route path={ROUTE.PRODUCTS} exact>
          <Layout>
            <List></List>
          </Layout>
        </Route>
        <Route path={`${ROUTE.PRODUCTS}/:id`}>
          <Layout>
            <Detail></Detail>
          </Layout>
        </Route>
        <Route path={ROUTE.CART}>
          <Layout>
            <SubLayout>
              <Cart />
            </SubLayout>
          </Layout>
        </Route>
        <Route path={ROUTE.ORDERS}>
          <Layout>
            <SubLayout>
              <OrderList />
            </SubLayout>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
