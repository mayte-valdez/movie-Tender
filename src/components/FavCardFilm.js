import React from "react";
import "../components/StyleGeneral.css";
import InfoBtn from "../components/InfoBtn";
import Button from "@material-ui/core/Button";
import "../components/StyleGeneral.css";
import ModalInfo from "./ModalInfo";
import { useState, useEffect } from "react";
import { Favorite } from "@material-ui/icons";
import Ranking5 from "./Ranking5";
import Ranking4 from "./Ranking4";
import Ranking3 from "./Ranking3";
import Ranking2 from "./Ranking2";
import Ranking1 from "./Ranking1";
import SansRanking from "./SansRanking";

export default function FavCardFilm(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(["1"]);
  const [casting, setCasting] = useState(null);
  const film = props.infoFilm;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        film.id +
        "/credits?api_key=0eb1560cadbbc71b973ed8f868ef57fa&language=fr-FR"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setCasting(data);
      });
  }, []);

  /* Pour generer les etoiles du Rannking à partir du la note */
  const getRanking = (note) => {
    let x = note;
    if (x >= 9) {
      return <Ranking5 />;
    } else if (x >= 7.5) {
      return <Ranking4 />;
    } else if (x >= 5) {
      return <Ranking3 />;
    } else if (x >= 3) {
      return <Ranking2 />;
    } else if (x >= 2) {
      return <Ranking1 />;
    } else {
      return <SansRanking />;
    }
  };

  const titleFilm = props.title;

  return (
    <div className="favCardFilm">
      <img src={props.poster} alt={titleFilm} />
      <div className="blockButtons">
        <Button className="btnFavInfo" type="button" onClick={handleClickOpen}>
          Plus d'info
        </Button>

        <Button className="btnSupFav" onClick={props.handleRemoveFavorite}>
          Supprimer
        </Button>

        <ModalInfo
          open={open}
          onClose={handleClose}
          infoFilm={film}
          ranking={getRanking(film.vote_average)}
          rankingNote={props.rankingNote}
          filmCasting={casting}
        />
      </div>
    </div>
  );
}