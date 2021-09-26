import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ChannelCards from "./ChannelCards";
import CustomSection from "./CustomSection";

const Channels = () => (
  <Router>
    <section className="channels">
      <Switch>
    <Route exect path="/custom" component={CustomSection}/>
      </Switch>
    <ChannelCards/>
  </section>
  </Router>
  
);

export default Channels;