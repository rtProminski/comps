import Button from './Button'
import { HiStar } from 'react-icons/hi'

function App() {
	const handleClick = () => {
		alert('click button')
	}

	return (
		<div>
			<div>
				<Button secondary outline rounded addedStyles={'mb-5 ml-3 mt-2'}>
					<HiStar />
					Click me!!
				</Button>
			</div>
			<div>
				<Button danger outline>
					<HiStar />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning>
					<HiStar />
					See Deal!
				</Button>
			</div>
			<div>
				<Button secondary outline>
					<HiStar />
					Hide Ads!
				</Button>
			</div>
			<div>
				<Button onClick={handleClick} primary rounded>
					<HiStar />
					Something!
				</Button>
			</div>
		</div>
	)
}

export default App
