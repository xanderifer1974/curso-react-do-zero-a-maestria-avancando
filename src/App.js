//Styles
import "./App.css";
import City from "./asset/city.png";

//Components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";

function App() {
  const userName = "Rodrigo Pereira";
  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Amarela" },
    { id: 2, brand: "Kia", km: 1500, color: "Branco" },
    { id: 3, brand: "Renault", km: 3500, color: "Azul" },
    { id: 4, brand: "Ford", km: 0, color: "Vermelho" },
    { id: 5, brand: "Fiat", km: 50000, color: "Preto" },
  ];

  return (
    <div className="App">
      <h1>Avancando no React</h1>
      {/*Imagem em Public */}
      <img src="/developer.png" alt="Developer" />

      {/*Imagens em Asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      <h1>Exemplo de Props</h1>
      {/*Props*/}
      <ShowUserName name={userName} />
      {/*Destructiring*/}
      <CarDetails brand="Honda" km={50000} color="Vermelho" />
      {/*Reaproveitando */}
      <CarDetails brand="Forkd" km={0} color="Azul" />
      <CarDetails brand="Fiat" km={4500} color="Branco" />
      {/*Loop em Array de Objetos */}
      <h3>Fazendo um loop em Array de Objetos</h3>
      {cars.map((car) => (
        <CarDetails brand={car.brand} km={car.km} color={car.color} />
      ))}
      {/*Fragments */}
      <h2>Component criado utilizando fragment</h2>
      <Fragment/>
    </div>
  );
}

export default App;
