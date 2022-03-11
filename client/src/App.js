import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Acceuil from './components/HomePage/Acceuil'
import Profile from './components/LeylaNjim/Profile';
// import Prestations from './components/Prestation/Prestation';
import Forfaits from './components/Forfaits/Forfaits';
import Réalisations from './components/Réalisations/Réalisations';
import Devis from './components/Devis/Devis';
import Contacts from './components/Contacts/Contacts'
import CoursdeCoaching from './components/Cours_de_Coaching'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Enregistrer from './components/Contacts/Enregistrer'
import Agencements from './components/Prestation/Agencements'
import Decorations from './components/Prestation/Decorations'
import ContactPage from './components/ContactPage'


function App() {

  return (
    <div className="App">
       <BrowserRouter> 
       <NavBar />
      <Switch>
      <Route  path="/" exact component={Acceuil} />
      <Route  path="/LeylaNjim" component={Profile} />   
      {/* <Route  path="/Prestations" component={Prestations} /> */}
      <Route  path="/Forfaits" component={Forfaits} />
      <Route  path="/Réalisations" component={Réalisations} />
      <Route  path="/Cours de Coaching" component={CoursdeCoaching} />
      <Route  path="/Devis" component={Devis} />
      <Route  path="/SignUP" component={Contacts} />
      <Route  path="/SingIN" component={Enregistrer} />
      <Route  path="/Agencement & de locaux professionnels" component={Agencements} />
      <Route  path="/Décorattion & aménagement pour particulier" component={Decorations} />      
      <Route  path="/Contact" component={ContactPage} />  

     </Switch>
     </BrowserRouter> 
      
      
      <Footer /> 
    </div>
  );
}

export default App;
