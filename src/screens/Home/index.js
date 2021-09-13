import React, {useState, useEffect} from 'react'

import { 
	Container, 
	Titulo,
	Icon,
	ContainerUser
} from './styles'

import { 
    InputGroup, 
    FormControl
} from 'react-bootstrap'

import CardUser from '../../components/CardUser'
import Message from '../../components/Message'

import {Link} from 'react-router-dom'

import api from '../../services/api'

function Home(){

	const [search, setSearch] = useState('')
	const [user, setUser] = useState([])
	const [showMessage, setShowMessage] = useState(true)

	
	useEffect(() => {
		console.log('Usuário alterado!')
	}, [user])
	
	
	async function searchUser(){
		await api.get(`${search}`).then(
			retorno => {
				setUser(retorno.data)
			},
			error => {
				setShowMessage(true)
				setUser([])
			}
		)
	}

    return (
        <Container className="m-2">
            <Titulo className="text-center">Teste Compasso</Titulo>
            <InputGroup className="mb-3 p-5">
                <InputGroup.Text id="search">
					<Icon 
						cursor="pointer"
						onClick={searchUser}
					/>
                </InputGroup.Text>
                <FormControl
                    placeholder="Search here..."
                    aria-label="search"
					value={search}
					onChange={event => setSearch(event.currentTarget.value)}
                />
            </InputGroup>
			{user.id &&
				<Link
					to={{pathname: `/${search}`}}
					style={{textDecoration: 'none'}}
				>
					<ContainerUser>
						<CardUser {...user} />
					</ContainerUser>
				</Link>
			}			
			{showMessage &&
				<Message fechar={() => setShowMessage(false)}/>
			}
        </Container>
    )
}

export default Home
