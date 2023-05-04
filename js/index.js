'use strict'

import { showTeams } from "./api"
const teams = await showTeams();

const criaCard = ( team ) => {
    const card = document.createElement('card-nba')
    card.classList.add('card')
    card.setAttribute('teste', team.name)

    const teamName = document.createElement('h5')
    teamName.classList.add('card__text')
    card.nome = team.full_name
    
    const teamCity = document.createElement('p')
    teamCity.classList.add('card__textCity')
    card.cidade = team.city

    const teamConference = document.createElement('p')
    teamConference.classList.add('card__textConference')
    card.conference = team.conference

    card.append(teamName, teamCity, teamconference)

    return card
}

export const carregarCard = () => {

    alert ('oi')
    const container = document.getElementById('root')
    const listTeams = teams.map( criaCard )

    container.replaceChildren(...listTeams)
}

// carregarCard()