import React from "react";
import { Route, Link } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Route exaxt path="/" render={props => <WelcomePage {...props} />} />
      <Route path="/characterlist" render={props => <CharacterList {...props} />} />
      <Link to="/">Home</Link>
      <Link to="/characterlist">Characters</Link>
    </header>
  );
}
