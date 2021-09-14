import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 125px;
    width: 100%;
    border-top: 1px solid;
    margin-top: 5px;
    margin-bottom: 12px;
    padding-top: 8px;
`

export const Name = styled.h2`
    font-size: 18px;
`

export const Description = styled.h6`
    font-weight: 100;
    font-size: 16px;
    text-align: justify;
`

export const UpdatedAt = styled.p`
    font-size: 14px;
`