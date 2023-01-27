import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "../src/pages/AllQuotes";
import Newquote from "../src/pages/NewQuote";
import QuoteDetail from "../src/pages/QuoteDetail";
import Layout from "../src/components/layout/Layout"
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <Newquote />
      </Route>
      <Route path={"*"}>
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
