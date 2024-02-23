const CarDetails = ({brand,km,color}) => {
  return (
    <div>
        <h1>Exemplo de Props</h1>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails