import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/Landing';
import UploadPage from './pages/UploadPage';
import VideoList from './pages/VideoList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container" style={{
          marginTop: '100px'
        }}>
          <NotificationContainer />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/upload" exact component={UploadPage} />
            <Route path="/video" exact component={VideoList} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;