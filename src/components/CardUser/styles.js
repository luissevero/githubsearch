import styled from 'styled-components'

export const Container = styled.div`
    margin: auto;
    height: 360px;
    width: 300px;
    border: 1px solid;
    border-radius: 5px;
`

export const ContainerHeader = styled.div`
    display: flex;
    height: 100px;
    flex-direction: row;
    align-items: 'center';
    justify-content: space-between;
    background-color: blueviolet;
    padding: 5px;
`

export const ContainerBody = styled.div`
    height: 260px;
    padding: 5px;
    border-top: 2px solid orangered;
`

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 25px;
`

export const Name = styled.h2`
    font-size: 22px;
    color: blueviolet;
`

export const Login = styled.h4`
    font-size: 18px;
`

export const Bio = styled.p`
    font-size: 16px;
    color: black;
`
export const PersonalInformations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Informations = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    padding: 3px;
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
`
export const Information = styled.h3`
    font-size: 24px;
    color: black;
`
export const Text = styled.p`
    font-size: 16px;
`
