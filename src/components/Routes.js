import Home from "./Home";
import Releases from "./Releases";
import Description from "../pages/Description";
import { Route } from "react-router-dom";

function AllRoutes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/release" component={Releases} />
      <Route path="/description" component={Description} />
    </>
  );
};

export default AllRoutes;