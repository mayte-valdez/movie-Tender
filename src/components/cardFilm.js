import React from 'react';
import '../components/StyleGeneral.css';
import InfoBtn from '../components/InfoBtn';
import './RandomCards.css';

export default function CardFilm(props) {



    const titleFilm = props.title;
    const rankingFilm = props.ranking;
    const rankingNoteFilm = props.rankingNote;

    return (
        <div className="cardFilm">
          <img src={props.poster} alt={titleFilm}/>
          <div className='blocktexte'>
            <p>{titleFilm}</p>
            <div>   
              <div>
                <div className='blockRanking'>
                  {rankingFilm} 
                  <p>{rankingNoteFilm}/10</p>
                </div>
                <p>{props.year}</p>
              </div>
              <InfoBtn infoFilm={props.infoFilm} ranking={rankingFilm} rankingNote={rankingNoteFilm} filmCasting={props.filmCasting}/>
            </div>
            <p><small>{props.genres}</small></p> 
          </div>
          
        </div>
    );
}