import React from 'react';
import './App.css';
import image from './image.png';


export default function Modal(props) {

    return(
        <div className={ props.sports.length < 1  ? 'modal' : 'modal_hidden' } >
            <div className='modal__image'>
                <img  src={image} alt='modal-pic'/>
                <div className='modal__circle-one' ></div> 
                <div className='modal__circle-two' ></div> 
                <div className='modal__circle-three' ></div> 
                <h4>Oh no, you deleted all the sports :(</h4>
            </div>
        </div> 
    )
}