
import Time from '../assets/time.svg'
import Scent from '../assets/scent.svg'

// Ici, il s'agit d'une manière de faire.
//Vous auriez aussi pu utiliser une fonction qui retourne l'élément souhaité, ou bien faire directement des conditions
const quantityLabel = {
	1: 'peu',
	2: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2]
	const scaleType =
		careType === 'duration' ? (
			<img src={Time} alt='time-icon' />
		) : (
			<img src={Scent} alt='scent-icon' />
		)

	return (
		<div
			onClick={() =>
				alert(
					`Cette bougie ${careType === 'duration' ? 'dure' : 'a'} ${quantityLabel[scaleValue]} ${
						careType === 'duration' ? 'de temps' : "d'odeur"
					}`
				)
			}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale