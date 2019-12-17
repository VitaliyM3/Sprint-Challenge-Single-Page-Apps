import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacter] = useState(null);
const [search, setSearch] = useState('');
const [results, setResults] = useState(null)
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      setCharacter(response.data.results);
      setResults(response.data.results);
    })
    .catch(error => {
      console.log("error", error)
    })

  }, []);

  useEffect(() => {
    if (characters) {
      const results = characters.filter(character => {
        return character.name.toLowerCase().includes(search.toLowerCase());
  
      });
  setResults(results);
    }
    
  },[search]);
if (!results) {
  return (
    <div>
    loading data...
    </div>
  )
}
  return (
    <section className="character-list">
     <SearchForm search={search} setSearch={setSearch}/>
      {results.map(char => {
        return (
        <div>
           <CharacterCard 
        key={char.id}
        name={char.name}
        image={char.image}
        species={char.species} 
        />
        </div>
        )
      })}
    </section>
  );
}

