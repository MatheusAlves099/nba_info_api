'use strict'

import './router.js'
import { getTeams } from "./api.js"
import { getPlayers } from './api.js';

const teams = await getTeams();
const players = await getPlayers();

const criarCard = ( team ) => {

    const card = document.createElement('card-nba')
    card.nome = team.full_name
    card.cidade = team.city
    card.conference = team.conference

    return card
}

export const carregarCard = () => {

    const card = document.getElementById('card-container')
    const cardsTeams = teams.data.map( criarCard )

    card.replaceChildren(...cardsTeams)
}

const criarCardJogador = ( player ) => {

    const card = document.createElement('card-nba-player')
    card.nome = player.first_name + ' ' + player.last_name
    card.posicao = player.position
    card.time = player.team.full_name

    return card
}

export const carregarCardJogador = () => {

    const cardPlayer = document.getElementById('card-container')
    const cardsPlayer = players.data.map( criarCardJogador )

    cardPlayer.replaceChildren(...cardsPlayer)
}