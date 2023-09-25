import './App.css';
import Pokecard from './Pokecard';


/** Given an array of pokemon, returns HTML for the pokemon card
 *
 * Input: Pokemon array -> [{id, name, type, base_experience}, ...]
 *
 * Output: UL containing all pokecards from list.
 *
*/
function Pokedex({pokemonArray}) {
  return (
    <ul className="Pokedex">
      {/* {pokemonArray.map(pokemon => <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} />)} */}
      {pokemonArray.map(pokemon => <Pokecard {...pokemon} />)}
    </ul>
  )
}

export default Pokedex;
