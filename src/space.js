import React from 'react';
import Star from './star';
import './App.css';


const Space = () => {
    const numStars = 50;

    const generatePos = () => {
        return Math.floor(Math.random() * 100) + 10;
    }

    const generateSize = () => {
        return Math.floor(Math.random() * 10);
    }

    const generateColor = () => {
        const red = Math.floor(Math.random() * 100);
        const blue = Math.floor(Math.random() * 200 + 55);
        const green = Math.floor(Math.random() * 200 + 55);
        return {red, green, blue};
    }
    let stars = [];
    for (let i = 0; i < numStars; i++) {
        const size = generateSize();
        const timer =  Math.floor(Math.random() * 15) + 3;
        const {red, green, blue} = generateColor();
        console.log(100);
        stars.push(
            <Star key={i} style={
                {
                    position: 'absolute',
                    left: `${generatePos() - 10}vw`,
                    top: `${generatePos() - 23}vh`,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    width: `${size}vw`,
                    height: `${size}vw`,
                    borderRadius: '50%',
                    animation: `zoom ${timer}s linear infinite`,
                    zIndex: '-1'
                }
            }/>
        )}
    return <div className={"space"}> {stars} </div>;
};

export default Space;