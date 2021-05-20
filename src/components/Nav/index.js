import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../../assets/stylesheets/nav.scss";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //on initialise le menu avec des string vide car initialement il ne s'affiche pas tant que l'on a pas cliqué sur le burger menu
      contact: "",
      actualite: "",
      don: "",
      nous: "",
      sengager: "",
      //on initialise un compteur pour gérer l'affichage conditionnellement c'est à dire au premier(0) clique afficher le menu au deuxième le caher ainsi de suite
      compteur: 0,
      n: 1, //n va s'incrément de 1 à chaque clique
    };
  }

  //on remplie le menu qui était initialement vide pour que lorsque l'on clique les éléments du menu s'affiche
  showMenu = () => {
    this.setState({
      contact: "Contact",
      actualite: "Actualité",
      don: "Faire un don",
      nous: "Qui sommes nous ?",
      sengager: "S'engager",
    });
  };

  //on revide le menu pour qu'au clique pour le femer le menu disparaisse
  hideMenu = () => {
    this.setState({
      contact: "",
      actualite: "",
      don: "",
      nous: "",
      sengager: "",
    });
  };

  //on créer un compteur pour qu'au premier(0) clique le menu s'affiche au second(1) il disparaissent au troisième(2) il apparaissent etc...
  compteur = () => {
    this.setState({
      compteur: this.state.compteur + this.state.n,
    });

    if (this.state.compteur % 2) {
      //au deuxième clique cacher le menu => deuxième clique = compteur à 2
      //autrement dit si le compteur = chiffre impair cacher le menu (soit 1 pour le deuxième clique, 3 pour le troisième clique etc...) sachant que le deuxième clique sera forcément pour fermer le menu
      this.hideMenu();
    } else {
      //au premier clique afficher le menu => premier clique = compteur à 1
      //autrement dit si compteur = chiffre pair afficher le menu
      this.showMenu();
    }
  };

  render() {
    console.log("compteur", this.state.compteur);
    return (
      <div className="LinkNav">
        {/*au clique du menu burger soit le menu s'affiche (if) soit il
        disparait(else)*/}

        <ul>
          {/*changement dynamique des valeur des liens de nav en alternant entre string vide et valeur exemple au clique on passe de lien invisible c'est à dire "" à des liens qui deviennent visible comme "contact"*/}
          <li>
            <a href="/contact">{this.state.contact}</a>
          </li>
          <li>
            <a href="/actualite">{this.state.actualite}</a>
          </li>
          <li>
            <a href="/don">{this.state.don}</a>
          </li>
          <li>
            <a href="/nous">{this.state.nous}</a>
          </li>
          <li>
            <a href="/sengager">{this.state.sengager}</a>
          </li>
          <li>
            {/* <Link to="#" onClick={this.compteur}>
              &rarr;
            </Link> ne marche pas*/}
            <a href="#" onClick={this.compteur}>
              &rarr;
            </a>
          </li>
        </ul>

        {/*gérer l'affichage*/}

        <div className="burgerMenu" onClick={this.compteur}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default index;
