import { HeaderStyled } from './styles';
import './styles.css'
import { Link } from "react-router-dom";


export const Header = () => {
  return(
    <HeaderStyled>
      <Link className="Logo" to='/'>Prime Flix</Link>
      <Link className="Favoritos" to='/favoritos'>Meus filmes</Link>
    </HeaderStyled>
  )
}
