import React, {Component} from 'react'
import { Tabs, Tab, Row, Col, FormControl } from 'react-bootstrap'
import { 
    Container, 
    Titulo,
	NewSearch,
	ContainerNewSearch,
	ContainerBodyNewSearch
} from './styles'

import { ChevronLeftOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import CardUser from '../../components/CardUser'
import CardRepos from '../../components/CardRepos'
import CardStarred from '../../components/CardStarred'
import Message from '../../components/Message'

import api from '../../services/api'

class User extends Component {

	state = {
		user: [],
		repos: [],
		starred: [],
		showMessage: false,
		redirect: false,
		searchRepos: '',
		searchStarred: ''
	}

	componentDidMount = async () => {
		await api.get(`${this.props.match.params.user}`).then(
			retorno => {
				this.setState({user: retorno.data})
			},
			error => {
				this.setState({redirect: true, showMessage: true})
			}
		)
		await this.searchUserRepos()
		await this.searchUserStarred()
	}

    searchUserStarred = async () => {
		await api.get(`${this.state.user.login}/starred`).then(
			async retorno => {
				await this.setState({starred: retorno.data})
			},
			error => {
				this.setState({redirect: true, showMessage: true})
			} 
		)
	}
	
    searchUserRepos = async () => {
		await api.get(`${this.state.user.login}/repos`).then(
			async retorno => {
				await this.setState({repos: retorno.data})
			},
			error => {
				this.setState({redirect: true, showMessage: true})
			} 
		)
	}

	

	render(){

		return (
			<Container>
				
				{this.state.redirect &&
					<Redirect to="/" />
				}

				<Titulo>User {this.props.match.params.user}</Titulo>
				<CardUser {...this.state.user} />
				<ContainerNewSearch>
					<Link to='/' style={{textDecoration: 'none'}} >
						<ContainerBodyNewSearch>
							<ChevronLeftOutlined fontSize="large" color="secondary" />
							<NewSearch className="text-center">New search</NewSearch>
						</ContainerBodyNewSearch>
					</Link>
				</ContainerNewSearch>
				<Tabs className="mt-4 d-flex justify-content-center">
					<Tab eventKey="repos" title="Repos">
						<FormControl
							className="mt-3 mb-3"
							placeholder="Search repos here..."
							aria-label="search"
							value={this.state.searchRepos}
							onChange={event => this.setState({searchRepos: event.currentTarget.value})}
						/>

						{this.state.repos && this.state.repos.filter(each => each.name.toLowerCase().includes(this.state.searchRepos.toLowerCase())).map(item => (
							<CardRepos key={item.id} {...item} />
						))}
					</Tab>
					<Tab eventKey="starred" title="Starred">
						<FormControl
							className="mt-3 mb-3"
							placeholder="Search starred here..."
							aria-label="search"
							value={this.state.searchStarred}
							onChange={event => this.setState({searchStarred: event.currentTarget.value})}
						/>
						<Row> 
						{this.state.starred && this.state.starred.filter(each => each.name.toLowerCase().includes(this.state.searchStarred.toLowerCase())).map(item => (
							<Col xl={4} lg={4} md={6} sm={12} key={item.id}> 
								<CardStarred {...item} />
							</Col>
						))}
						</Row>
					</Tab>
				</Tabs>


				{this.state.showMessage &&
					<Message fechar={() => this.setState({showMessage: false})} />
				}
			</Container>
		)
	}
}

export default User