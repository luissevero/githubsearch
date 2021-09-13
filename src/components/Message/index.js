import React from 'react'
import {ToastContainer, Toast} from 'react-bootstrap'

import moment from 'moment'
import {SITE_NAME} from '../../constants'

function Message(props){
	return (
		<ToastContainer 
			position="bottom-end" 
		>
			<Toast 
				animation={true}
				bg="dark"
				onClose={() => props.fechar()}
				delay={2500}
				autohide
			> 
				<Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
					<strong className="me-auto">{SITE_NAME}</strong>
					<small>{moment().fromNow()}</small>
				</Toast.Header>
				<Toast.Body className='text-white'>Sua busca não obteve resultados.</Toast.Body>
			</Toast>
		</ToastContainer>
	)
}

export default Message