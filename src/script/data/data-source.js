function main() {

//jquery dari W3school tapi gak jalan
//  $(document).ready(function(){
//  $("#tulisan").hide();
//    $("#hide").click(function(){
//      $("#tulisan").hide();
//    });
//    $("#show").click(function(){
//      $("#tulisan").show();
//    });
//  });

//pake cara ini dari panduan juga gak jalan
//  document.addEventListener("DOMContentLoaded", () => {
//      const buttonCari = document.querySelector("#buttonCari");
//      $("#tulisan").hide();
//    buttonCari.addEventListener("click", function () {
//    $(document).ready(function(){
//
//  $("#buttonCari").click(function(){
//  $("#tulisan").show();
// console.log("dipencet");
//     });
//       });

//tombol Cari
document.getElementById("cari-button").addEventListener("click", getNegara);
    async function getNegara() {
      //console.clear();
      const nilai = document.getElementById("cari-input").value;
      const tampilNegara = document.querySelector("#tampilNegara");
      tampilNegara.innerHTML = "";
      tampilNegara.innerHTML  += `
      <div class="row mt-2">
         <div class="col">
           <h5>Data Negara: ${nilai}</h5>
         </div>
      </div>`;
      //const nilai = 'indonesia';
      const baseUrl = `https://covid19.mathdro.id/api/countries/${nilai}`;
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            const {confirmed, recovered, deaths} = data;
            //const {deaths} = data;
            //const {recovered} = data;
          //  if(response == '400') {
            //console.log(country not found);
            //const tampilError = document.querySelector("#tampilNegara");
          //  tampilError.innerHTML = "";
          //  tampilError.innerHTML  += `
          //  <div class="row mt-2">
          //     <div class="col">
            //     <h2> Data Negara: ${nilai} Tidak Ditemukan</h2>
          //  tampilError.innerHTML = ""
          //     </div>
        //    </div>`;
            //} else {
            console.log(`${deaths.value} ${recovered.value} ${confirmed.value}`);
            renderConf(confirmed, recovered, deaths);
            }
        catch {
        }
    }
    getNegara();



//tampilkan pencarian
    const renderConf = (confirmed, recovered, deaths) =>
    {
            const listNegara = document.querySelector("#list-negara");
            listNegara.innerHTML = "";
                listNegara.innerHTML  += `
                    <div class="col">
                      <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="kasus">Kasus</h5>
                          <p class="card-text">${confirmed.value}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="kasus">Sembuh</h5>
                          <p class="card-text">${recovered.value}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title" id="kasus">Meninggal</h5>
                          <p class="card-text">${deaths.value}</p>
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

}

export default main;
