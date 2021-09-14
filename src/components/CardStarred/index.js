import React from 'react'
import moment from 'moment'
import { Star, Usb, FiberManualRecordSharp } from '@material-ui/icons'

import {
    Container,
    ContainerBottom,
    BottomItem,
    TextBottom,
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
                <BottomItem>
                    <FiberManualRecordSharp  color="secondary" />
                    <TextBottom>{props.language}</TextBottom>
                </BottomItem>
                <BottomItem>
                    <Star color="primary" />
                    <TextBottom>{props.stargazers_count}</TextBottom>
                </BottomItem>
                <BottomItem>
                    <Usb />
                    <TextBottom>{props.forks}</TextBottom>
                </BottomItem>
                </ContainerBottom>
        </Container>
    )
}

export default CardStarred