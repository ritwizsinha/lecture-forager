import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/Landing";
import UploadPage from "./pages/UploadPage";
import VideoList from "./pages/VideoList";
import VideoPlayerTab from "./components/VideoPlayerTab/test.js";
import VideoPlayer from "./pages/VideoPlayer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div
          className="container"
          style={{
            minHeight: "100vh",
            marginTop: "80px",
          }}
        >
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/upload" exact component={UploadPage} />
            <Route path="/video" exact component={VideoList} />
            <Route path="/test" exact component={VideoPlayerTab} />
            <Route path="/videoplayer" exact component={VideoPlayer} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
