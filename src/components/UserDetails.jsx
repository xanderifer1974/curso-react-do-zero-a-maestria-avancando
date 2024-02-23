const UserDetails = ({name,job,age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Profissão: {job}</p>
        <p>Idade:  {age}</p>
        {age >=18? (<p>Pode tirar carteira de habilitação.</p>): (<p>Menor de Idade.</p>)}
    </div>
  )
}

export default UserDetails