
import './index.css';
import NavigationBar from './NavigationBar';
import HomePage from './Home';
import ServicesPage from './Services';
import VehiclesPage from './Vehicles';
import ContactPage from './Contact';
import ReservePage from './Reserve';
import Footer from './Footer';

//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar></NavigationBar>
        <div className="content">
          <Switch>
            <Route path="/Home">
              <HomePage></HomePage>
            </Route>

            <Route path="/Services">
              <ServicesPage></ServicesPage>
            </Route>

            <Route path="/Vehicles">
              <VehiclesPage></VehiclesPage>
            </Route>

            <Route path="/Contact">
              <ContactPage></ContactPage>
            </Route>

            <Route path="/Reserve">
              <ReservePage></ReservePage>
            </Route>
            
            

          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
