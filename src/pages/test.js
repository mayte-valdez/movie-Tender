{/*
                    <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={genresName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className='chips'>
                                {selected.map((value) => (
                                <Chip key={value} label={value} className='chip' />
                                ))}
                            </div>
                        )}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre.id} value={genre.name}>
                                {genre.name}
                            </MenuItem>
                        ))}
                        </Select>*/}


    /*/recuperer les generes
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=0eb1560cadbbc71b973ed8f868ef57fa&language=fr-FR')
            .then(response => response.data)
            .then(data => {
                setGeneres(data.genres);
                console.log(generes) 
                }
            )
    },[]);*/