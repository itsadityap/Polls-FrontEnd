import MainDashboard from './containers/mainDashBoard';
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    // <Routes>
    //     {/*<Route path='/' element={<MainDashboard />}>*/}
    //     {/*    /!*<Route path='/result' element={<Result />}></Route>*!/*/}
    // </Routes>
      <div><MainDashboard /></div>
  );
}

export default App;
