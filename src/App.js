import MainDashboard from './containers/mainDashBoard';
import ResultPage from "./containers/ResultPageConintainer";
import SharePage from "./containers/SharePollPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
          <Route exact path='/' >
              <MainDashboard />
          </Route>
          <Route exact path='/result'>
              <ResultPage />
          </Route>
          <Route exact path='/share'>
              <SharePage />
          </Route>
      </Router>
  );
}

export default App;
