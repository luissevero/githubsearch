import React from 'react'
import moment from 'moment'

import {
    Container,
    Name,
    Description,
    UpdatedAt
} from './styles'

function CardRepos(props){
    
    function calcDays(date){
        return moment(date).fromNow()
    }
    
    return (
        <Container>
            <Name>{props.name}</Name>
            <Description>{props.description}</Description>
            <UpdatedAt>Updated {calcDays(props.updated_at)}</UpdatedAt>
        </Container>
    )
}

export default CardRepos