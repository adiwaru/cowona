//tombol Cari
document.getElementById("cari-button").addEventListener("click", getNegara);
    async function getNegara() {
      console.clear();
      const nilai = document.getElementById("cari-input").value;
      //Sementara Masih saya isi manual data sudah mau tercetak di console
      //const nilai = 'indonesia';
      const baseUrl = `https://covid19.mathdro.id/api/countries/${nilai}`;
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            const {confirmed, deaths, recovered} = data;
            //const {deaths} = data;
            //const {recovered} = data;
console.log(`${deaths.value} ${recovered.value} ${confirmed.value}`);
    renderConf(`${deaths.value} ${recovered.value} ${confirmed.value}`);
    //renderDeat(`${deaths.value}`);
    //renderReco(`${recovered.value}`);
        }
        catch {
            console.log(error);
        }
    }
    getNegara();

    const renderConf = (value) =>
    {
            const listNegara = document.querySelector("#list-negara");
            listNegara.innerHTML = "";
                listNegara.innerHTML  += `
                    <div class="col">
                      <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="kasus">Kasus</h5>
                          <p class="card-text">(${value})</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="kasus">Meninggal</h5>
                          <p class="card-text">(${value})</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="kasus">Sembuh</h5>
                          <p class="card-text">(${value})</p>
                        </div>
                      </div>
                    </div>
                `;
        };


//data seluruh dunia
const api_url= 'https://covid19.mathdro.id/api/'

async function getConfirm() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {confirmed} = data;
  const {value} = confirmed;
  console.log(value);
  document.getElementById('conf').textContent = value;
}

async function getRecover() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {recovered} = data;
  const {value} = recovered;
  console.log(value);
  document.getElementById('reco').textContent = value;
}

async function getDeath() {
  const response = await fetch(api_url);
  const data = await response.json();
  const {deaths} = data;
  const {value} = deaths;
  console.log(value);
  document.getElementById('deat').textContent = value;
}
getConfirm();
getRecover();
getDeath();
