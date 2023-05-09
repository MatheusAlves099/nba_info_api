'use strict'

class card_player extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do jogador'
        this.foto = null
        this.lastName = ' '
        this.posicao = 'Posicao do jogador'
        this.time = 'Time do jogador'
    }

    static get observedAttributes() {
        return ['foto', 'nome', 'lastName', 'posicao', 'time']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .card_player {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 330px;
                width: 300px;
                gap: 10px;
                border: 1px solid #DDD;
                border-radius: 5px;
                box-shadow: 0px 0px 8px #0006;
                padding: 16px;
                cursor: pointer;
                background: linear-gradient(to right, blue, red);
                opacity: 50%;
            }
            .card__image {
                height: 250px;
                width: 250px;
                background-image: url(${this.foto});
                background-size: cover;
            }
            .card_player:hover {
                opacity: 100%;
            }
            .card__namePlayer {
                font-size: 1.3rem;
            }
            .card__positionPlayer {
                font-size: 1.3rem;
            }
            .card__teamPlayer {
                font-size: 1.3rem;
            }
        `

        return css
    }

    component() {
        const card_player = document.createElement('div')
        card_player.classList.add ('card_player')
        const imagem = document.createElement('div')
        imagem.classList.add ('card__image')
        const nomeJogador = document.createElement('div')
        nomeJogador.classList.add ('card__namePlayer')
        nomeJogador.textContent = this.nome
        const posicaoJogador = document.createElement('div')
        posicaoJogador.classList.add ('card__positionPlayer')
        posicaoJogador.textContent = this.posicao
        const timeJogador = document.createElement('div')
        timeJogador.classList.add ('card__teamPlayer')
        timeJogador.textContent = this.time

        card_player.append(imagem, nomeJogador, posicaoJogador, timeJogador)
        
        return card_player
    }
}

customElements.define('card-nba-player', card_player)