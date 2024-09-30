import React from 'react';

export function WhiteWall({ side }) {
    return (
        <div className={`wall ${side}`}></div>
    );
}
export function WhiteTiles() {
    return <div className="tile"></div>
}
function BlueWall() {
    return (
        <div className="wall" style={{
            backgroundImage: `url(../ src / textures / wall.png) `
        }}></div>
    )
}
function GreenWall() {
    return (
        <div className="wall" style={{
            backgroundImage: `url(../ src / textures / wall.png) `
        }}></div>
    )
}
function WhiteFloor() {
    return (
        < div className="wall" ></div >
    )
}
