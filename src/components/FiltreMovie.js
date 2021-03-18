import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';



class FiltreMovie extends React.Component {
    constructor (props){
        super(props);
        //Declaration du state
        this.state = {
            apiGeneres: [],
            generName:[]
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0eb1560cadbbc71b973ed8f868ef57fa&language=fr-FR')
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }
    
    render(){
        return (
              <div>
                 <FormControl>
                    <InputLabel id='select-genere'>Generes</InputLabel>
                    
                 </FormControl>
              </div>
        );
    };
    
}

export default FiltreMovie; 