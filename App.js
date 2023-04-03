import logo from './logo.svg';
import './App.css';
import Ecommercenavbar from "./Ecommercenavbar";
import Homepage from "./Homepage";
import Viewproduct from './Viewproduct';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Categories from './Categories';
import Loginnpage from './Loginnpage';
import Cart from './Cart';

function App() {
  return (
    <>
   

    
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<Homepage/>}></Route>
      <Route  path="/Viewproduct/:id"   element={<Viewproduct/>}></Route>
      <Route  path="/Categories/:dsd"   element={<Categories/>}></Route>
     <Route path="/Loginnpage" element={<Loginnpage/>} ></Route>
     <Route path="/Cart/:id" element={<Cart/>} ></Route>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
