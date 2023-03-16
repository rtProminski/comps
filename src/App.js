// import ButtonPage from './pages/ButtonPage'
import Accordion from './components/Accordion'

const App = () => {
	const items = [
		{
			id: '1',
			label: 'Can I use React on a project?',
			content:
				'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
		},
		{
			id: '2',
			label: 'Can I use Javascript on a project?',
			content:
				'You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.',
		},
		{
			id: '3',
			label: 'Can I use CSS on a project?',
			content:
				'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.',
		},
	]

	return (
		<div>
			<Accordion items={items} />
		</div>
	)
}

export default App
