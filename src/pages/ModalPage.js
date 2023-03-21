import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
const ModalPage = () => {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(prevState => !prevState)
	}

	const modal = (
		<Modal
			onClose={toggleModal}
			actionBar={
				<Button onClick={toggleModal} primary>
					Accept
				</Button>
			}>
			<p>do you accept the terms and conditions?</p>
		</Modal>
	)

	return (
		<div className="relative">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu volutpat risus. Vivamus vitae magna lorem. In
				viverra nec augue at placerat. In hac habitasse platea dictumst. Proin eu commodo massa. Donec tempor mattis
				cursus. In vitae lacinia felis. Nullam tempus condimentum quam, in placerat nunc dapibus a. Suspendisse potenti.
				Maecenas malesuada urna nec tortor commodo maximus. Proin tortor dolor, tincidunt sit amet nisl ullamcorper,
				iaculis lobortis quam. Integer et diam nec mi vulputate ultrices. Vivamus elementum sit amet metus quis congue.
				Aenean id turpis tempor lacus consequat ultricies.
			</p>
			<Button onClick={toggleModal} primary>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	)
}
export default ModalPage
