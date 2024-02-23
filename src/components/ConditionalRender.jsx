import { useState } from "react"


const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Matheus");
    return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso!</p>}
        <h2>If Ternário</h2>
        {name ==="João"? (
            <div>
                <p>O nome é João!</p>
            </div>
        ): (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Alterar o nome para João</button>
    </div>
  )
}

export default ConditionalRender