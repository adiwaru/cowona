class GlobalData extends HTMLElement {
  connectedCallback(){
    this.render();
  }

  render()
  {
    this.innerHTML = `
<div class="container">
     <div class="row mt-3">
        <div class="col">
         <h2>Pantau COVID19 - Data Global</h2>
        </div>
    </div>

    <div class="row mt-3">
    <div class="col">
    <div class="row">

      <div class="col">
        <div class="card text-white bg-primary mb-3">
          <div class="card-body">
            <h5 class="card-title" id="kasus">Total Kasus Positif</h5>
            <h5 class="card-title"><div id="conf"></div></h5>
            <p class="card-text">Orang</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card text-white bg-success mb-3">
          <div class="card-body">
            <h5 class="card-title">Total Sembuh</h5>
            <h5 class="card-title"><div id="reco"></div></h5>
            <p class="card-text">Orang</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card text-white bg-danger mb-3">
          <div class="card-body">
            <h5 class="card-title">Total Meninggal</h5>
            <h5 class="card-title"><div id="deat"></div></h5>
            <p class="card-text">Orang</p>
          </div>
        </div>
      </div>

    </div>
    </div>
    </div>
</div>`;
  }
}

customElements.define("global-data", GlobalData);
