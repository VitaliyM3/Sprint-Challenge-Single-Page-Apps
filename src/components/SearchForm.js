import React, { useState } from "react";


export default function SearchForm(props) {

  const handleChange = event => {
    props.setSearch(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();
  }

  return (
    <section className="search-form">
     
     <form onSubmit={submitHandler}>
       <input
       type="text"
       name="search"
       placeholder="Search"
       onChange={handleChange}
       value={props.search}>
       </input>
     </form>
    </section>
  );
}
