import Header from './components/Header';
import LandingPage from './pages/Landing';
import UploadPage from './pages/UploadPage';
import VideoList from './pages/VideoList';
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
  const startSearch = async () => {
    setSearchStarted(true);
    try {
      const response = await axios.get(`${SERVER_HOST}/video/multiple`, {
        params: {
          search: searchTerm
        },
      });
      setVideoList(response.data.videos);
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <Router>
      <div>
        <Header searchTerm={searchTerm} setSearchTerm={searchTermChange} startSearch={startSearch} />
        <div className="container" style={{
          marginTop: '100px'
        }}>
          <NotificationContainer />
          {searchStarted && <VideoList videoList={videoList ?? []}/>}
          {!searchStarted && (<Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/upload" exact component={UploadPage} />
          </Switch>)}
        </div>
      </div>
    </Router>
  )
}

export default App;