
/* custom element*/

class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Hello world</h1> 
        <p> Aqui estem </p>
        <button> Clica aqui sobre </button>`;
    }
  }
      
  customElements.define('my-component', MyComponent); /*aixo defineix el component per poder-lo utilitzar al index.html*/


  /*shadow DOM*/

  const shadowRoot = document.getElementById('example').attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = `<style>
  button {
    background: tomato;
    color: white;
  }
  </style>
  <button id="button"><slot></slot> tomato</button>`;
  