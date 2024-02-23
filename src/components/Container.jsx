const Container = ({children,anotherValue}) => {
  return (
    <div>
        <h2>Este é o título do Container</h2>
        {children}
        <hr/>
        <h3>Valor vindo de uma props: {anotherValue}</h3>
    </div>
  )
}

export default Container