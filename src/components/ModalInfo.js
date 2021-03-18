import React from 'react';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Dialog from '@material-ui/core/Dialog';
import { useState, useEffect } from 'react';
import '../components/StyleGeneral.css'

function ModalInfo(props) {
  
  const [infoFilm, SetInfoFilm] = useState(0);
  const { onClose, selectedValue, open } = props;
  const casting = props.filmCasting;
  const [watchProviders, SetWatchProviders] = useState(null)

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  useEffect(()=>{
    SetInfoFilm(props.infoFilm);
    /*fetch('https://api.themoviedb.org/3/movie/'+ infoFilm.id +'/credits?api_key=0eb1560cadbbc71b973ed8f868ef57fa&language=fr-FR')
            .then((resp) => resp.json())
            .then((data) => { setCasting(data)})*/
  },[]);


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <img src={'https://image.tmdb.org/t/p/original/'+infoFilm.backdrop_path}/>
      
      <div className='contentModal'>
        <div>
          <Button 
            variant="contained"
            className="redBtn allBtn"
            startIcon={<PlayCircleFilledIcon />}>
              Regarder</Button>
          <h3>{infoFilm.title}</h3>
        </div>
        <div className='blockRanking'>
          {props.ranking} 
          <p>{props.rankingNote}/10</p>
        </div>
        <p>{infoFilm.overview}</p>
        <p><b>Casting :</b></p>
        <div className='casting'>
          {
          casting !== null &&
          casting.cast.slice(0,5).map( actor => (
            <div key={actor.id}>
              <img src={'https://image.tmdb.org/t/p/w200/'+actor.profile_path} alt={'Portrait de '+ actor.name}/>
              <p>{actor.name}</p>
            </div>
          ))
          }
        </div>
      </div>  
    </Dialog>
  );
}

export default ModalInfo;