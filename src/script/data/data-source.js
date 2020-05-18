function main() {

//klik tombol Cari
  document.querySelector("#tampil-negara").style="display:none";
  document.getElementById("cari-button").addEventListener("click", getNegara);
    async function getNegara() {
      const nilai = document.getElementById("cari-input").value.toUpperCase();
      const tampilNegara = document.querySelector("#tampil-negara");
      tampilNegara.innerHTML = "";
      tampilNegara.innerHTML  += `
      <div class="container">
      <div class="row mt-2">
         <div class="col">
           <h5>Data Negara: ${nilai}</h5>
         </div>
      </div> </div>`;
      //const nilai = 'indonesia';
      const baseUrl = `https://covid19.mathdro.id/api/countries/${nilai}`;
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            const {confirmed, recovered, deaths} = data;
            if (data.error) {
              console.log("error"); //jika negara tidak ditemukan
              //renderError();
              document.querySelector("#tampil-negara").style="display:block";
              document.querySelector("#list-negara").style="display:none";
              tampilNegara.innerHTML = "";
              tampilNegara.innerHTML  += `
              <div class="row mt-2">
                <div class="col">
                  <h5>Data Negara: ${nilai} Tidak Ditemukan</h5>
                </div>
              </div>`;
            } else {
              console.log(`${deaths.value} ${recovered.value} ${confirmed.value}`);
              renderCari(confirmed, recovered, deaths); //negara ditemukan
            }
              }
        catch {
        }
    }
    getNegara();

//pencarian tidak ditemukan
//    const renderError = () =>
//    {
//    document.querySelector("#tampil-negara").style="display:block";
//    document.querySelector("#list-negara").style="display:none";
//    const tampilError = document.querySelector("#tampil-negara");
//    tampilError.innerHTML = "";
//    tampilError.innerHTML  += `
//    <div class="row mt-2">
//       <div class="col">
//         <h5>Data Negara: ${nilai} Tidak Ditemukan</h5>
//       </div>
//    </div>`;
//  };


//tampilkan pencarian
    const renderCari = (confirmed, recovered, deaths) =>
    {
            document.querySelector("#tampil-negara").style="display:block";
            document.querySelector("#list-negara").style="display:compact";
            const listNegara = document.querySelector("#list-negara");
            listNegara.innerHTML = "";
                listNegara.innerHTML  += `
                    <div class="col">
                      <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="kasus">Kasus Positif</h5>
                          <h5 class="card-title">${confirmed.value}</h5>
                          <p class="card-text">Orang</p>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="meninggal">Meninggal</h5>
                          <h5 class="card-title">${deaths.value}</h5>
                          <p class="card-text">Orang</p>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-white bg-success mb-3" style="max-width: 25rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="sembuh">Sembuh</h5>
                          <h5 class="card-title">${recovered.value}</h5>
                          <p class="card-text">Orang</p>
                        </div>
                      </div>
                    </div>
                `;
      };


//data global
const api_url= 'https://covid19.mathdro.id/api/'

async function getConfirm()
{
  const response = await fetch(api_url);
  const data = await response.json();
  const {confirmed} = data;
  const {value} = confirmed;
  console.log(value);
  document.getElementById('conf').textContent = value;
}

async function getRecover()
{
  const response = await fetch(api_url);
  const data = await response.json();
  const {recovered} = data;
  const {value} = recovered;
  console.log(value);
  document.getElementById('reco').textContent = value;
}

async function getDeath()
{
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
}

export default main;
