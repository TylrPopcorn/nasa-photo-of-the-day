import React from 'react';
import styled from 'styled-components';

const NasaStyle = styled.div`
    img{
        border-radius: 10px;
    }

    h3{
        height: 40px;
    }

    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: grey;

        h3{
            color: white;
            font-size: 20px;
        }
    }
  }
`

const NasaPhoto = (props) => {
    // console.log(props);
    return (
        <NasaStyle className="nasa-photo-wrapper">
            <h3> {props.data.title} </h3>
            <img src={props.data.hdurl} />
            <p className="explanation"> {props.data.date} </p>
        </NasaStyle>
    )
}

export default NasaPhoto;
