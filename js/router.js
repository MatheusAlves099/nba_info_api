'use strict'

import { carregarCard } from "./index.js"
import { carregarCardJogador } from "./index.js"

const routes = {
    '/'         : '/pages/home.html',
    '/teams' : '/pages/teams.html',
    '/players'     : '/pages/players.html',
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if(window.location.pathname == '/teams') {
        carregarCard()
    } else if (window.location.pathname == '/players') {
        carregarCardJogador()
    }
}

window.route = route