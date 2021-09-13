import React, {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { 
    Container, 
    Titulo,
    ContainerButtons,
    ContainerListRepos 
} from './styles'

import { Redirect } from 'react-router'
import CardUser from '../../components/CardUser'
import CardRepos from '../../components/CardRepos'
import Message from '../../components/Message'

import api from '../../services/api'

function User(props){

    const [user, setUser] = useState([])
    const [repos, setRepos] = useState([])
    const [starred, setStarred] = useState([])
    const [showRepos, setShowRepos] = useState(false)
    const [showStarred, setShowStarred] = useState(false)
	const [showMessage, setShowMessage] = useState(false)
	const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        setarUser()
    }, [user])

    async function setarUser(){
        await api.get(`${props.match.params.user}`).then(
            retorno => {
				setUser(retorno.data)
			},
			error => {
				setShowMessage(true)
				setRedirect(true)
				setUser([])

			}
        )
    }

    async function searchStarredRepos(){
		await api.get(`${user.login}/starred`).then(
			retorno => {
				setStarred(retorno.data)
                setShowRepos(false)
                setShowStarred(true)
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
                setShowRepos(true)
                setShowStarred(false)
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
            <ContainerButtons>
				<Button
					className="w-25"
					variant="primary"
					disabled={!user.id}
					onClick={searchUserRepos}
				>
					Repos
				</Button>
				<Button
					className="w-25"
					variant="secondary"
					disabled={!user.id}
					onClick={searchStarredRepos}
				>
					Starred
				</Button>
			</ContainerButtons>

            <ContainerListRepos>
                {showRepos && repos.map(item => (
                    <CardRepos key={item.id} {...item} />
                ))}
                {showStarred && starred.map(item => (
                    <CardRepos key={item.id} {...item} />
                ))}
            </ContainerListRepos>

			{showMessage &&
				<Message fechar={() => setShowMessage(false)} />
			}
        </Container>
    )
}

export default User