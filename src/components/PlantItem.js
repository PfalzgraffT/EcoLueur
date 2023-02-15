import CareScale from './CareScale'
import '../styles/PlantItem.css'
import React, { useState, useEffect } from 'react';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, scent, duration, price }) {

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [plantItemWidth, setPlantItemWidth] = useState('250px');

	useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

	useEffect(() => {
		if (windowWidth < 1113) {
			setPlantItemWidth('20vw');
		} else {
			setPlantItemWidth('250px')
		}
	}, [windowWidth]);

	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} style={{width: plantItemWidth, height: plantItemWidth}}/>
			{name}
			<span className='lmj-plant-item-price'>{price}€</span>
			<div>
				<CareScale careType='scent' scaleValue={scent} />
				<CareScale careType='duration' scaleValue={duration} />
			</div>
		</li>
	)
}

export default PlantItem