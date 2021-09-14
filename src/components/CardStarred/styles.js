import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 200px;
    width: 95%;
    border: 1px solid blueviolet;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 12px;
    margin-left: 2px;
    margin-right: 2px;
    padding: 8px;
`

export const ContainerHeader = styled.div`
    height: 80px;
    background-color: blueviolet;
`

export const ContainerBody = styled.div`
    height: 160px;
    background-color: black;
`

export const ContainerBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
`

export const BottomItem = styled.div`
    text-align: center;
`

export const TextBottom = styled.p`
    font-size: 14px;
`

export const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 20px;
`

export const Name = styled.h2`
    font-size: 22px;
`

export const Login = styled.h4`
    font-size: 18px;
`

export const Informations = styled.div`

`
export const Followers = styled.div`

`
export const Following = styled.div`

`
export const Repositories = styled.div`

`

export const UpdatedAt = styled.p`
    font-size: 18px;
`