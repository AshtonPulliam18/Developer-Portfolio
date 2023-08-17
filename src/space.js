import React from 'react';
import Star from './star';
import './App.css';


const Space = (props) => {
    const numStars = 30;

    const generatePos = () => {
        return Math.floor(Math.random() * 100);
    }

    const generateSize = () => {
        return Math.floor(Math.random() * 4) + 2;
    }

    const generateColor = () => {
        const red = Math.floor(Math.random() * 100);
        const blue = Math.floor(Math.random() * 200 + 55);
        const green = Math.floor(Math.random() * 200 + 55);
        return {red, green, blue};
    }

    let height = props.height;
    let stars = [];
    for (let i = 0; i < numStars; i++) {
        const size = generateSize();
        const timer =  Math.floor(Math.random() * 15) + 20;
        const {red, green, blue} = generateColor();
        let backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        let  borderColor = `transparent`;
        if (props.starType == 1) {
             borderColor = `rgb(${red}, ${green}, ${blue})`;
             backgroundColor = `transparent`;
        }
        stars.push(
            <Star key={`star-${backgroundColor} - ${i}`} style={
                {
                    position: 'absolute',
                    margin: '0',
                    padding: '0',
                    left: `${generatePos()}%`,
                    top: `${generatePos()}%`,
                    backgroundColor: backgroundColor,
                    width: `${size}vw`,
                    height: `${size}vw`,
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderColor: borderColor,
                    animation: `zoom ${timer}s linear -1s infinite`,
                    zIndex: `${i}`
                }
            }/>
        )}
    const {red, green, blue} = generateColor()
    return <div className={"space"} style={{
        position: 'absolute',
        top: `${props.start}vh`,
        width: `${100}vw`,
        height: `${height}vh`,
        overflow: 'hidden',
    }} > {stars} </div>;
};

export default Space;