import Header from "./Header";
import Releases from "./Releases";
import { Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Route exact path="/" component={Header} />
      <Route path="/release" component={Releases} />
    </>
  );
};

export default Home;
