import "./App.css";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import SiparisFormu from "./SiparisFormu";
import Anasayfa from "./Anasayfa";
import SiparisOnaylandi from "./SiparisOnaylandi";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/siparisFormu'>
          <Header />
          <SiparisFormu />
        </Route>
        <Route exact path='/anasayfa'>
          <Header />
          <Anasayfa />
        </Route>
        <Route path='/siparisOnaylandi'>
          <Header />
          <SiparisOnaylandi />
        </Route>
      </Switch>
      <div className='dev-navigation'>
        <Link to='/anasayfa'>Anasayfa</Link>
        <Link to='/siparisFormu'>Siparis Formu</Link>
        <Link to='/siparisOnaylandi'>Siparis Onaylandı</Link>
      </div>
    </>
  );
}

export default App;
