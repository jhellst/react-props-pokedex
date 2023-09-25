import './Pokecard.css';

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"


/** Given a pokemon, returns HTML for the pokemon card
 *
 * Input: Pokemon object -> {id, name, type, base_experience}
 *
 * Output: HTML pokecard
 *
*/
function Pokecard({id, name, type, base_experience}) {
  return (
    <div className="Pokecard">
      <h5 className="Pokecard-name">{name}</h5>
      <img className="Pokecard-img" src={`${BASE_URL}/${id}.png`}></img>
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard;