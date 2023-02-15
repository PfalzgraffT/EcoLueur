import '../styles/Container.css'
import Flower from '../assets/flower.svg'
import Blob from '../assets/blob.svg'
import React, { useState, useEffect } from 'react';


function Container() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [blobVisibility, setBlobVisibility] = useState(true);
    const [h3Color, setH3Color] = useState('#A79B82');
    const [h3Width, seth3Width] = useState('45%');
    const [h3Margin, seth3Margin] = useState('');
    const [flowerWidth, setFlowerWidth] = useState('35%');
    const [flowerOpacity, setFlowerOpacity] = useState('');



    useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
    if (windowWidth < 768) {
        setBlobVisibility(false);
        setH3Color('#FFCE9A');
        seth3Width('50%');
        seth3Margin('25%');
        setFlowerWidth('100%');
        setFlowerOpacity('0.3');
    } else {
        setBlobVisibility(true);
        setH3Color('#A79B82');
        seth3Width('45%')
        seth3Margin('');
        setFlowerWidth('35%');
        setFlowerOpacity('');

    }
    }, [windowWidth]);


    return (
    <div className="lmj-container" style={{width: h3Width, marginLeft: h3Margin}}>
        <h3 style={{ color: h3Color }}>Commandez pour profiter de la chaleur 
    et du confort de bougies naturelles et artisanales</h3>
        {blobVisibility && <img src={Blob} alt="blob" className='blob' />}
        <img src={Flower} alt="flower" className="flower" style={{width: flowerWidth, maxWidth: flowerWidth, opacity: flowerOpacity}} />
    </div>
    );
    };

    export default Container
