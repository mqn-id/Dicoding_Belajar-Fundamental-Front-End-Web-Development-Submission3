initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(-7.0016372,110.4428114),
      zoom: 4
    });
    const infoWindow = new google.maps.InfoWindow;

      downloadUrl('https://covid19.mathdro.id/api/confirmed', function(data) {

        const markers=JSON.parse(data.responseText);
        markers.forEach(element => {          
            let nama_negara = "Negara : " +element.countryRegion;
            let terkonfirmasi = "Terkonfirmasi : " +element.confirmed;
            let sembuh = "Sembuh : " +element.recovered;
            let meninggal = "meninggal : " +element.deaths;
            let point = new google.maps.LatLng(
                parseFloat(element.lat),
                parseFloat(element.long));
            let infowincontent = document.createElement('div');
            let strong = document.createElement('strong');
            strong.textContent = nama_negara;
            infowincontent.appendChild(strong);
            infowincontent.appendChild(document.createElement('br'));
            let text1 = document.createElement('text');
            text1.textContent = terkonfirmasi;
            infowincontent.appendChild(text1);
            infowincontent.appendChild(document.createElement('br'));
            let text2= document.createElement('text');
            text2.textContent = sembuh;
            infowincontent.appendChild(text2);
            infowincontent.appendChild(document.createElement('br'));
            let text3= document.createElement('text');
            text3.textContent = meninggal;
            infowincontent.appendChild(text3);
            infowincontent.appendChild(document.createElement('br'));
            const icon ='./src/img/covid.png'
            let marker = new google.maps.Marker({
              map: map,
              position: point,
              icon: icon,
            });
            marker.addListener('click', function() {
              infoWindow.setContent(infowincontent);
              infoWindow.open(map, marker);
            });
        });
        
      });
    }
  downloadUrl = (url, callback) => {
    const request = window.ActiveXObject ?
        new ActiveXObject('Microsoft.XMLHTTP') :
        new XMLHttpRequest;

    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        request.onreadystatechange = doNothing;
        callback(request, request.status);
      }
    };

    request.open('GET', url, true);
    request.send(null);
  }

  function doNothing() {}