import React from 'react'
import moment from 'moment'
import { Star, Usb, FiberManualRecordSharp } from '@material-ui/icons'

import {
    Container,
    ContainerBottom,
    Name,
    UpdatedAt
} from './styles'

function CardStarred(props){
    
    function calcDays(date){
        return moment(date).fromNow()
    }
    
    return (
        <Container>
            <Name>{props.name}</Name>
            <p>{props.description}</p>
            <UpdatedAt>Updated {calcDays(props.updated_at)}</UpdatedAt>
            <ContainerBottom>
                <FiberManualRecordSharp />
                <p>{props.language}</p>
                <Star />
                <p>{props.stargazers_count}</p>
                <Usb />
                <p>{props.forks}</p>
                </ContainerBottom>
        </Container>
    )
}

export default CardStarred