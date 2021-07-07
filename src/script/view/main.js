const main = () => {
    const getDunia = () => {
        fetch(`https://covid19.mathdro.id/api`)
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllDunia(responseJson);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };
    
    const renderAllDunia = (duniaya) => {
        const listDuniaElement = document.querySelector("#dataDunia");
        listDuniaElement.innerHTML = `
        <div class="table-responsive">
            <table class="table table-borderless">
            <h4> Kasus Covid-19 di Dunia</h4>
            <caption>Terakhir diperbarui: ${duniaya.lastUpdate}</caption>
            <thead>
            <tr text-align="center">
              <th scope="col">Terkonfirmasi</th>
              <th scope="col">Sembuh</th>
              <th scope="col">Meningal</th>
            </tr>
          </thead>
          <tbody>
            <tr text-align="center">
              <td class="table-warning"><b>${duniaya.confirmed.value}</b></td>
              <td class="table-success"><b>${duniaya.recovered.value}</b></td>
              <td class="table-danger"><b>${duniaya.deaths.value}</b></td>
            </tr>
          </tbody>
            </table>
        </div>
        
        `;
    };
    
    const showResponseMessage = (message = "Check your internet") => {
        alert(message)
    };
    getDunia();

    const getIndonesia = () => {
        fetch(`https://covid19.mathdro.id/api/countries/Indonesia`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllIndonesia(responseJson);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };
    
    const renderAllIndonesia = (indonesias) => {
        const listIndoesiaElement = document.querySelector("#dataIndonesia");
        listIndoesiaElement.innerHTML = `
        <div class="table-responsive">
        <table class="table table-borderless">
        <h4> Kasus Covid-19 di Indonesia</h4>
        <caption>Terakhir diperbarui: ${indonesias.lastUpdate}</caption>
        <thead>
        <tr text-align="center">
          <th scope="col">Terkonfirmasi</th>
          <th scope="col">Sembuh</th>
          <th scope="col">Meningal</th>
        </tr>
      </thead>
      <tbody>
        <tr text-align="center">
          <td class="table-warning"><b>${indonesias.confirmed.value}</b></td>
          <td class="table-success"><b>${indonesias.recovered.value}</b></td>
          <td class="table-danger"><b>${indonesias.deaths.value}</b></td>
        </tr>
      </tbody>
        </table>
    </div>
        
        `;
    };
    
    getIndonesia();
};

export default main;