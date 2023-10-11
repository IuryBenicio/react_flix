import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api";
import './styles.css'
import { toast } from "react-toastify";


const Filme = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [filme, setFilme] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`,{
        params:{
          api_key: '7cfb834dc3c3099f0200937b20d4fb8c',
          language: 'pt-BR',
        }
      })
    .then((Response)=>{
      setFilme(Response.data);
      setLoading(false);
    })
    .catch(()=>{
      navigation('/', { replace:true });
      return
    })
  }

  loadFilme();

  },[navigation, id])

  function salvarFilme(){
    const minhaLista = localStorage.getItem('@primeflix');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id)

    if(hasFilme){
      toast.warn('esse filme já está na lista');
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
    toast.success('filme salvo com sucesso')
  }

  if(loading){
    return(
      <h1>CARREGANDO ...</h1>
    )
  }

  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title}trailer`}>
            Trailler
          </a>
        </button>
      </div>
    </div>
  )

}

export default Filme
