import React from 'react';

const NasaPhoto = (props) => {
    // console.log(props);
    return (
        <div className="nasa-photo-wrapper">
            <h3> {props.data.title} </h3>
            <img src={props.data.hdurl} />
            <p className="explanation"> {props.data.date} </p>
        </div>
    )
}

export default NasaPhoto;
