import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

// class Gryffindor extends React.Component {
//     constructor (props) {
//         super(props);
        
const Gryffindor = (props) => {
    // return ( 
    
        // }
    // render() {
        {console.log(props.characters)}
        {props.characters.map((character) =>{
            if(character.house === "Gryffindor") {
                console.log(character)
            }
        })};
        return (
            <div>
            </div>
        )
    // }
}



export default Gryffindor;