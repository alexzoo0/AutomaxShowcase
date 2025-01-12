import React from 'react';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import useStyles from './style.js'



function Map () {
    const classes = useStyles(); 

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: 'AIzaSyANvKHaUD3YXZHt1sj9EX0ZSJLxYqyShJM',
    })

    if (!isLoaded) return <div className={classes.box}><p className={classes.text}>Loading...</p></div>
    return <Maps />  
}

function Maps () {
    return <GoogleMap 
    zoom={10}
    center={{lat: 30.482019, lng: -97.584167}}
    mapContainerClassName='googleMap'></GoogleMap>
}

export default Map;