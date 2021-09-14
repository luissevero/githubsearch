
import GitHub from '@material-ui/icons/GitHub'
import React from 'react'

import {
    Container,
    ContainerHeader,
    ContainerBody,
    Avatar,
    Name,
    Login,
    PersonalInformations,
    Informations,
    InformationContainer,
    Information,
    Text,
    Bio
} from './styles'

function CardUser(props){
    return (
        <Container>

            <ContainerHeader>
                <Avatar src={props.avatar_url} alt={props.name}/>
                <GitHub alt="github icon"/>
            </ContainerHeader>
            <ContainerBody>
                <PersonalInformations>
                    <Name>{props.name}</Name>
                    <Login>@{props.login}</Login>
                    <Bio>{props.bio}</Bio>
                </PersonalInformations>
                <Informations>
                    <InformationContainer>
                        <Information>{props.followers}</Information>
                        <Text>Followers</Text>
                    </InformationContainer>
                    <InformationContainer>
                        <Information>{props.following}</Information>
                        <Text>Following</Text>
                    </InformationContainer>
                    <InformationContainer>
                        <Information>{props.public_repos}</Information>
                        <Text>Repositories</Text>
                    </InformationContainer>
                </Informations>
            </ContainerBody>
        </Container>
    )
}

export default CardUser

/*<Avatar 
                    source={{
                        uri: `${props.avatar_url}`
                    }}
                />*/