class WebBar extends HTMLElement {
  connectedCallback(){
    this.render();
  }

  render()
  {
    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
      <img src="./img/cov.png" width="50">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home</a>
        <a class="nav-item nav-link" href="#">About</a>
      </div>
    </div>
    </div>
  </nav>`;
  }
}

customElements.define("web-bar", WebBar);
