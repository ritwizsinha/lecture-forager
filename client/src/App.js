import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/Landing';
import UploadPage from './pages/UploadPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container" style={{
          minHeight: '100vh',
          marginTop: '80px'
        }}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/upload" exact component={UploadPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;