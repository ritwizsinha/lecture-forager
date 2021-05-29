import Header from './components/Header';
import LandingPage from './pages/Landing';
import UploadPage from './pages/UploadPage';
import VideoList from './pages/VideoList';
import VideoPlayerTab from "./components/VideoPlayerTab/test.js";
import VideoPlayer from "./pages/VideoPlayer";
import { SERVER_HOST } from './constants';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { NotificationContainer } from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchStarted, setSearchStarted] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const searchTermChange = (newSearchTerm) => {
    if (newSearchTerm.length === 0) setSearchStarted(false);
    setSearchTerm(newSearchTerm);
  }
  return (
    <Router>
      <div>
        <Header searchTerm={searchTerm} searchT/>
        <div
          className="container-fluid"
          style={{
            minHeight: "100vh",
            marginTop: "80px",
          }}
        >
          <NotificationContainer />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/list" exact component={VideoList} />
            <Route path="/upload" exact component={UploadPage} />
            <Route path="/video" exact component={VideoList} />
            <Route path="/videoplayer" exact component={VideoPlayer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
