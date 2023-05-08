'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do time'
        this.logo = null
        this.cidade = 'Cidade do time'
        this.conference = 'Conferencia do time'
    }

    static get observedAttributes() {
        return ['logo', 'nome', 'cidade', 'conference']
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
            .card {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                height: 300px;
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
            .card:hover {
                opacity: 100%;
            }
            .card__image {
                height: 150px;
                width: 150px;
                background-image: url(${this.logo});
                background-size: cover;
            }
            .card__text {
                font-size: 1.3rem;
            }
            .card__textCity {
                font-size: 1.3rem;
            }
            .card__textConference {
                font-size: 1.3rem;
            }
        `

        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add ('card')
        const imagem = document.createElement('div')
        imagem.classList.add ('card__image')
        const nomeTime = document.createElement('div')
        nomeTime.classList.add ('card__text')
        nomeTime.textContent = this.nome
        const cidade = document.createElement('div')
        cidade.classList.add ('card__textCity')
        cidade.textContent = this.cidade
        const conferencia = document.createElement('div')
        conferencia.classList.add ('card__textConference')
        conferencia.textContent = this.conference

        card.append(imagem, nomeTime, cidade, conferencia)
        
        return card
    }
}

customElements.define('card-nba', card)