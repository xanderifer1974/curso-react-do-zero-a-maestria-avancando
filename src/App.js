//Styles
import './App.css';
import City from './asset/city.png'


//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const userName = "Rodrigo Pereira";
  return (
    <div className="App">
     <h1>Avancando no React</h1>
     {/*Imagem em Public */}
     <img src="/developer.png" alt="Developer" />

     {/*Imagens em Asset */}
     <div>
      <img src={City} alt="Cidade" />
     </div>
     <ManageData/>
     <ListRender/>
     <ConditionalRender/>

     {/*Props*/}
     <ShowUserName name={userName}/>
     {/*Destructiring*/}
     <CarDetails brand="Honda" km={50000} color="Vermelho"/>
     {/*Reaproveitando */}
     <CarDetails brand="Forkd" km={0} color="Azul"/>
     <CarDetails brand="Fiat" km={4500} color="Branco"/>
    </div>
  );
}

export default App;
