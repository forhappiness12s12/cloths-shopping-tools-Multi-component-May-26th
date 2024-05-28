
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Trousers } from './Components/Trousers/Trousers';
import { Tshirt } from './Components/Tshirt/Tshirt';
import { Polo } from './Components/Polo/Polo';
import { Joggers } from './Components/Joggers/Joggers';
import { Shorts } from './Components/Shorts/Shorts';
import { Selectoptiontotall } from './Components/Selectoptiontotall';
import { StyleProvider } from './Components/SelectoptionProvider';

function App() {
  return (
    <StyleProvider>
     <Router>
      <Routes>
        <Route path='/' exact Component={Trousers}/>
        <Route path='/Tshirt' Component={Tshirt}/>
        <Route path='/Polo' Component={Polo}/>
        <Route path='/Joggers' Component={Joggers}/>
        <Route path='/Shorts' Component={Shorts}/>
        {/* <Route exact path='/' Component={Selectoptiontotall}/> */}
      </Routes>
     </Router>
     </StyleProvider>
  );
}

export default App;
