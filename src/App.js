//Styles
import './App.css';
import City from './asset/city.png'


//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
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
    </div>
  );
}

export default App;
