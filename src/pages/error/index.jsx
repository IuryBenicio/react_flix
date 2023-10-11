import { Link } from "react-router-dom"
import { ErroTitle, DivErro } from "./styles"
import './styles.css'

function Erro(){
  return(
    <DivErro>
      <ErroTitle>ERRO</ErroTitle>
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <Link className="erroLinks" to='/'>Veja todos os filmes</Link>
    </DivErro>
  )
}

export default Erro
