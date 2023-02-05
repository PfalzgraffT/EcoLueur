import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
				>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat.charAt(0).toUpperCase() + cat.slice(1)}
					</option>
				))}
			</select>
			<button className='emptyButton' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories