//import { Fragment } from "react";
import PropTypes from 'prop-types';

const newMessage='Hola Mundo';

//props
export const FirstApp=({title,subtitle})=>{
    
   // console.log(props);

    return (
    <>
        <h1>{ title }</h1>
        <p>Soy un subtitulo {subtitle}</p>
    </>

    );
}

FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}

FirstApp.defaultProps={
    title:'No hay titulo',
    subtitle:1234,
    name:'Miguel',
}