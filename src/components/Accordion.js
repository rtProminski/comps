import { useState } from 'react'
import { HiArrowDown, HiArrowLeft } from 'react-icons/hi'
const Accordion = ({ items }) => {
	const [expendedIndex, setExpendedIndex] = useState(-1)

	const handleClick = index => {
		if (expendedIndex === index) {
			setExpendedIndex(-1)
		} else {
			setExpendedIndex(index)
		}
	}

	const renderedItems = items.map((item, index) => {
		const isExpended = index === expendedIndex
		const icon = <span className="text-xl">{isExpended ? <HiArrowDown /> : <HiArrowLeft />}</span>

		return (
			<div key={item.id}>
				<div
					className="flex justify-between p-3 bg-gray-100 border-b items-center  cursor-pointer"
					onClick={() => handleClick(index)}>
					{item.label}
					{icon}
				</div>
				{isExpended && <div className="border-b p-5">{item.content}</div>}
			</div>
		)
	})

	return <div>{renderedItems}</div>
}

export default Accordion
