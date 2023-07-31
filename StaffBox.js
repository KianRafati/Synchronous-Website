const template = document.createElement('template')
template.innerHTML = `
    <style>
        .staff-box{
            width: 20%;
            padding: 10px;
            margin: 10px;
            border: #515151 solid 2px;
            border-radius: 10px;
            display: inline-block;
        }

        .staff-box img{
            width: 100%;
            border-radius: 10px;
        }

        .staff-box h3{
            margin: 1px;
        }
        
        .staff-box p{
            color: rgb(126, 126, 126);
            margin: 0;
            font-size: 14px;
        }
    </style>
    <div class="staff-box">
        <img />
        <h3><slot name="name"></slot></h3>
        <p><slot name="position" /></p>
    </div>
`

class StaffBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
    }

    connectedCallback() {
        const name = this.getAttribute('name');
        const avatar = this.getAttribute('avatar');

        const nameElement = this.shadowRoot.querySelector('h3');
        const imgElement = this.shadowRoot.querySelector('img');

        nameElement.textContent = name;
        imgElement.src = avatar;
    }
}

window.customElements.define('staff-box', StaffBox)