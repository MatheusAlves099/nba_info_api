'use strict'

export const getTeams = async () => {
    const url = `https://www.balldontlie.io/api/v1/teams`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getPlayers = async () => {
    const url = `https://www.balldontlie.io/api/v1/players?=page=1`
    const response = await fetch(url)
    const data = await response.json()

    return data
}