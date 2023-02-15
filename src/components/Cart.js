import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import shoppingCart from '../assets/cartFigma.svg'
import trashCan from '../assets/moins.svg'


function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(false)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	const removePlant = (index) => {
		const newCart = [...cart]
		if (newCart[index].amount > 1) {
		  newCart[index].amount -= 1
		} else {
		  newCart.splice(index, 1)
		}
		updateCart(newCart)
	  }

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				↪ 
			</button>
			{cart.length > 0 ? (
				<div style={{textAlign: 'center'}}>

					<ul className='ulCart'>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} className='productsCart'>
								<button className='deleteButton' onClick={() => removePlant(index)}>
									<img src={trashCan} alt="Supprimer" className='deleteButton' />
								</button>
								{amount} ✖ {name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} {price}€
							</div>
						))}
					</ul>
					<h3 className='totalCart'>Total : {total}€</h3>
					<button className='emptyCart' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				<img src={shoppingCart} alt="Shopping-cart" className='cart-image' />
			</button>
		</div>
	)
}

export default Cart