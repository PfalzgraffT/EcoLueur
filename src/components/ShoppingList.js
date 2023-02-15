import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import '../styles/AddButton.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1}])
		}
	}

	function handleAddButtonClick(event) {
		event.target.classList.add("animate");
		setTimeout(function() {
			event.target.classList.remove("animate");
		}, 900);
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, scent, duration, price, category }) =>
					!activeCategory || activeCategory === category ? (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							scent={scent}
							duration={duration}
							price={price}
						/>
						<button className='addButton' onClick={(e) => {addToCart(name, price); handleAddButtonClick(e)}}>+</button>
					</div>
				) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList