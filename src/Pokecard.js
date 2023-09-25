import './App.css';

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"


/** Given a pokemon, returns HTML for the pokemon card
 *
 * Input: Pokemon object -> {id, name, type, base_experience}
 *
 * Output: HTML pokecard
 *
*/
function Pokecard({id, name, type}) {
  return (
    <div>
      <h5>{name}</h5>
      <img src={`${BASE_URL}/${id}.png`}></img>
      <p>{type}</p>
    </div>
  )
}

export default Pokecard;