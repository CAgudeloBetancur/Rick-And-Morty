import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {

  const {id} = useParams();

  const [isLoaded,setIsLoaded] = useState(false);
  const [character,setCharacter] = useState({});

  const URL_BASE = 'http://localhost:3001/rickandmorty/character';
  // const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
  // const API_KEY = '28d5485db6dd.6bf5b4c90dcebb8cf27c';

  useEffect(() => {
    setIsLoaded(false);
    // axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(
    axios(`${URL_BASE}/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setIsLoaded(true);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    )
    return setCharacter({});
  }, [id]);

  // const [episode,setEpisode] = useState([]);
  
  // console.log(character);

  // ? Trae los capítulos del personaje
  // Ahora no sirve porque estamos trabajando con nuestro propio servidor que no trae esa info

  /* useEffect(() => {
    if(isLoaded){
      for(let ep of character.episode) {
        // axios(`${ep}?key=${API_KEY}`).then(
        axios('http://localhost:3001/rickandmorty/character').then(
        ({ data }) => {
          if (data.name) {
              setEpisode(oldEp => [...oldEp,data]);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          }
        )
      }
      return setEpisode([]);
    }
  },[character,isLoaded]);   */

  return (
    <div className="detail_cont">

      <div className="detail_header">
        <img className="detail_img" src={character.image} alt={character.name}/>
        <h1>{character.name}</h1>
      </div>

        <h3 className="detail_infoTitle">Character Information</h3>
        <div className="detail_privateInfo">
          <div className="card_divDescription">
            <div>
              <h4>Status</h4>
              <p>{character.status}</p>
            </div>
            <div>
              <h4>Gender</h4>
              <p>{character.gender}</p>
            </div>
            <div>
              <h4>Species</h4>
              <p>{character.species}</p>
            </div>
            <div>
              <h4>Origin</h4>
              {isLoaded ? <p>{character.origin.name}</p> : null}
            </div>
          </div>
        </div>

      {/* Vemos los capitulos */}

     {/*  <h3 className="detail_infoTitle">Episodes ({isLoaded && character.episode.length})</h3>
      <div className="detail_infoGroup">
        {
          episode.map((x,i) => {
            return (
              <div className="detail_episodeInfo" key={i}>
                <div className="card_divDescription">
                  <div>
                    <h4>Name</h4>
                    <p>{x.name}</p>
                  </div>
                  <div>
                    <h4>Air Date</h4>
                    <p>{x.air_date}</p>
                  </div>
                  <div>
                    <h4>Episode</h4>
                    <p>{x.episode}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div> */}

    </div>
  );
};

export default Detail;
