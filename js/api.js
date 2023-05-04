'use strict'

export const showTeams = async () => {
    const url = `https://www.balldontlie.io/api/v1/teams`
    const response = await fetch(url)
    const teams = await response.json()

    return teams
}

export const showPlayers = async () => {
    const url = `https://www.balldontlie.io/api/v1/players`
    const response = await fetch(url)
    const players = await response.json()

    return players
}