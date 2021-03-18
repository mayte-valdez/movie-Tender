import React from 'react';
import Button from '@material-ui/core/Button';
import '../components/StyleGeneral.css'
import ModalInfo from './ModalInfo';

export default function InfoBtn(props) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(["1"]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    
    return (
        <div>
          <Button
            variant="outlined"
            className='btnInfo'
            type="button" 
            onClick={handleClickOpen}>
                i
          </Button>
          <ModalInfo open={open}  onClose={handleClose} infoFilm={props.infoFilm} ranking={props.ranking}
                        rankingNote={props.rankingNote} filmCasting={props.filmCasting}/>
        </div>
      );


}