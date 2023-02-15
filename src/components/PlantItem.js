import CareScale from './CareScale'
import '../styles/PlantItem.css'
import React, { useState, useEffect } from 'react';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, scent, duration, price }) {

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [plantItemWidth, setPlantItemWidth] = useState('250px');
	const [plantItemPricePadding, setPlantItemPricePadding] = useState('15px');
	const [plantItemPriceSize, setPlantItemPriceSize] = useState('');

	useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

	useEffect(() => {
		if (windowWidth < 600) {
		  setPlantItemWidth('18vw');
		  setPlantItemPricePadding('10px');
		  setPlantItemPriceSize('1.5vw');
		} else if (windowWidth < 1113) {
		  setPlantItemWidth('20vw');
		  setPlantItemPricePadding('15px');
		  setPlantItemPriceSize('');
		} else {
		  setPlantItemWidth('250px');
		  setPlantItemPricePadding('15px');
		  setPlantItemPriceSize('');
		}
	  }, [windowWidth]);

	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} style={{width: plantItemWidth, height: plantItemWidth}}/>
			{name}
			<span className='lmj-plant-item-price' style={{padding: plantItemPricePadding, fontSize: plantItemPriceSize}}>{price}€</span>
			<div>
				<CareScale careType='scent' scaleValue={scent} />
				<CareScale careType='duration' scaleValue={duration} />
			</div>
		</li>
	)
}

export default PlantItem