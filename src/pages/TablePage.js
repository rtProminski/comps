import SortableTable from '../components/SortableTable'
const TablePage = () => {
	const config = [
		{ label: 'Name', render: fruit => fruit.name, sortValue: fruit => fruit.name },
		{ label: 'Color', render: fruit => <div className={`p-2 m-3  ${fruit.color}`}></div> },
		{ label: 'Score', render: fruit => fruit.score, sortValue: fruit => fruit.score },
	]

	const data = [
		{ name: 'Orange', color: 'bg-orange-500', score: 5 },
		{ name: 'Apple', color: 'bg-red-300', score: 3 },
		{ name: 'Banana', color: 'bg-yellow-500', score: 1 },
		{ name: 'Lime', color: 'bg-green-500', score: 2 },
	]

	const keyFn = fruit => {
		return fruit.name
	}

	return <SortableTable data={data} config={config} keyFn={keyFn} />
}

export default TablePage

// const config = [
//     { label: 'Fruits', render: fruit => fruit.name },
//     { label: 'Color', render: <div className={`p-2 m-3  ${fruit.color}`}></div> },
//     { label: 'Score', render: fruit => fruit.score, sort: (a,b) => },
// ]
