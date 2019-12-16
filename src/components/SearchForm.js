import React, { useState } from "react";

export default function SearchForm(props) {
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);

    const results = props.character.filter(char => {
      return character.toLowerCase().includes(search.toLowerCase());
    });

    

  }

  return (
    <section className="search-form">
     // Add a search form here
     <form onSubmit={submitHandler}>
       <input
       type="text"
       name="search"
       placeholder="Search"
       onChange={handleChange}>
       </input>
     </form>
    </section>
  );
}
