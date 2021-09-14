import React, {useEffect, useState} from 'react'
import { Tabs, Tab, Row, Col, FormControl } from 'react-bootstrap'
import { 
    Container, 
    Titulo
} from './styles'

import { Redirect } from 'react-router'
import CardUser from '../../components/CardUser'
import CardRepos from '../../components/CardRepos'
import CardStarred from '../../components/CardStarred'
import Message from '../../components/Message'

import api from '../../services/api'

function User(props){

    const [user, setUser] = useState([])
    const [repos, setRepos] = useState([])
    const [starred, setStarred] = useState([])
	const [showMessage, setShowMessage] = useState(false)
	const [redirect, setRedirect] = useState(false)
	const [searchRepos, setSearchRepos] = useState('')
	const [searchStarred, setSearchStarred] = useState('')

    useEffect(() => {
		if(!repos[0]){
			getUserData()
		}
    }, [getUserData])

	async function getUserData(){
		await api.get(`${props.match.params.user}`).then(
            async retorno => {
				await setUser(retorno.data)
				await searchUserStarred()
				await searchUserRepos()
			},
			error => {
				setShowMessage(true)
				setRedirect(true)
				setUser([])

			}
        )
	}

    async function searchUserStarred(){
		await api.get(`${user.login}/starred`).then(
			async retorno => {
				await setStarred(retorno.data)
			},
			error => {
				setShowMessage(true)
				setStarred([])
			} 
		)
	}

    async function searchUserRepos(){
		await api.get(`${user.login}/repos`).then(
			retorno => {
				setRepos(retorno.data)
			},
			error => {
				setShowMessage(true)
				setRepos([])
			} 
		)
	}

    return (
        <Container>
			
			{redirect &&
				<Redirect to="/" />
			}

			<Titulo>User {props.match.params.user}</Titulo>
            <CardUser {...user} />
			<Tabs className="mt-4 d-flex justify-content-center">
				<Tab eventKey="repos" title="Repos">
					<FormControl
						className="mt-3 mb-3"
                    	placeholder="Search repos here..."
                    	aria-label="search"
						value={searchRepos}
						onChange={event => setSearchRepos(event.currentTarget.value)}
                	/>

					{repos && repos.filter(each => each.name.toLowerCase().includes(searchRepos)).map(item => (
						<CardRepos key={item.id} {...item} />
					))}
				</Tab>
				<Tab eventKey="starred" title="Starred">
					<FormControl
						className="mt-3 mb-3"
                    	placeholder="Search starred here..."
                    	aria-label="search"
						value={searchStarred}
						onChange={event => setSearchStarred(event.currentTarget.value)}
                	/>
					<Row> 
					{starred && starred.filter(each => each.name.toLowerCase().includes(searchStarred)).map(item => (
						<Col xl={4} lg={4} md={6} sm={12} key={item.id}> 
							<CardStarred {...item} />
						</Col>
					))}
					</Row>
				</Tab>
			</Tabs>


			{showMessage &&
				<Message fechar={() => setShowMessage(false)} />
			}
        </Container>
    )
}

export default User