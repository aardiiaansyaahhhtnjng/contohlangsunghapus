import { BrowserRouter as 
  Router, 
  // Routes, 
  Route, 
  // HashRouter,
  Routes, 
  // Link 
} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Modbus from './components/comp/Modbus/Modbus';
import Sorting from './components/comp/Sorting/Sorting';


const App = () => {
  return (      
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/modbus' element={<Modbus />} />
        <Route path='/sorting' element={<Sorting />} />
      </Routes>
    </Router>
    // <HashRouter basename='/'>
    //   <div>
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/modbus">Modbus</Link></li>          
    //     </ul>
    //     <hr />
    //     <Routes>
    //       <Route exact path="/" component={<Home />} />
    //       <Route path="/modbus" component={<Modbus />} />
    //     </Routes>
    //   </div>
    // </HashRouter>
  );
}

export default App;
