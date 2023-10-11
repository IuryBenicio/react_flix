import { useEffect, useState } from "react"
import api from "../../services/api"
import { Container, Loading } from "./styles"
import { Link } from "react-router-dom"
import './styles.css'

//movie/now_playing?api_key=7cfb834dc3c3099f0200937b20d4fb8c&language=pt-BR

const Home = () => {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      async function loadFilmes(){
        const response = await api.get('/movie/now_playing?', {
          params:{
            api_key: '7cfb834dc3c3099f0200937b20d4fb8c',
            language: 'pt-BR',
            page: 1,
          }
        })

        setFilmes(response.data.results.slice(0, 10))
        setLoading(false)

      }

      loadFilmes();

    }, [])

  if(loading){
    return(
      <Loading>
        <h2>CARREGANDO ... </h2>
      </Loading>
    )
  }
  return(
    <Container>
      <div className="lista">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}> Acessar </Link>
            </article>
          )
        })}
      </div>
    </Container>
  )
}

export default  Home
