const listaCiudades = document.querySelector("#listaCiudades");

async function obtenerDatosCiudad(nombreCiudad, url) {
    listaCiudades.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ac5674456mshbe678e8595bcc8ap1ccafajsnf283d0e7d782',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const responseData = await response.json();

        const ciudadInfo = responseData.locations[nombreCiudad];

        const nombre = ciudadInfo.name;
        const direccion = ciudadInfo.address;
        const latitud = ciudadInfo.latitude;
        const longitud = ciudadInfo.longitude;
        const zonaHoraria = ciudadInfo.tz;

        console.log("Nombre:", nombre);
        console.log("Dirección:", direccion);
        console.log("Latitud:", latitud);
        console.log("Longitud:", longitud);
        console.log("Zona horaria:", zonaHoraria);

        // Llama a la función que contiene la lógica después de cargar los datos
        manejarDatosDespuesDeCargar(nombre, direccion, latitud, longitud, zonaHoraria);
    } catch (error) {
        console.error(`Error al obtener datos de ${nombreCiudad}:`, error);
        alert(`Error al obtener datos de ${nombreCiudad}. Por favor, inténtelo de nuevo.`);
    }
}

function manejarDatosDespuesDeCargar(nombre, direccion, latitud, longitud, zonaHoraria) {
    const div = document.createElement("div");
    div.classList.add("ciudad");
    div.innerHTML = `
        <p class="ciudad-id-back">${nombre}</p>
        <div class="ciudad-info">
            <div class="nombre-contenedor">
                <p class="ciudad-id">${nombre}</p>
                <h2 class="nombre-ciudad">${nombre}</h2>
            </div>
            <div class="ciudad-stats">
                <p class="stat">${direccion}</p>
                <p class="stat">Latitud: ${latitud}</p>
                <p class="stat">Longitud: ${longitud}</p>
                <p class="stat">${zonaHoraria}</p>
            </div>
        </div>`;

    listaCiudades.append(div);
}

// Llama a la función para obtener y trabajar con los datos de cada ciudad
obtenerDatosCiudad('QUITO', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=QUITO&contentType=json&unitGroup=us&shortColumnNames=0');
obtenerDatosCiudad('WASHINGTON', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=WASHINGTON&contentType=json&unitGroup=us&shortColumnNames=0');
obtenerDatosCiudad('MANCHESTER', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=MANCHESTER&contentType=json&unitGroup=us&shortColumnNames=0');
obtenerDatosCiudad('ROMA', 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=ROMA&contentType=json&unitGroup=us&shortColumnNames=0');




/*let nombreQuito, direccionQuito, latitudQuito, longitudQuito, zonaHorariaQuito;
const listaCiudades = document.querySelector("#listaCiudades");

async function obtenerDatosQuito() {
    const urlQuito = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=QUITO&contentType=json&unitGroup=us&shortColumnNames=0';
    const optionsQuito = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ac5674456mshbe678e8595bcc8ap1ccafajsnf283d0e7d782',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(urlQuito, optionsQuito);
        const responseQuito = await response.json();

        const quitoInfo = responseQuito.locations.QUITO;

        // Asigna los valores a las variables
        nombreQuito = quitoInfo.name;
        direccionQuito = quitoInfo.address;
        latitudQuito = quitoInfo.latitude;
        longitudQuito = quitoInfo.longitude;
        zonaHorariaQuito = quitoInfo.tz;

        console.log("Nombre:", nombreQuito);
        console.log("Dirección:", direccionQuito);
        console.log("Latitud:", latitudQuito);
        console.log("Longitud:", longitudQuito);
        console.log("Zona horaria:", zonaHorariaQuito);

        // Llama a la función que contiene la lógica después de cargar los datos
        manejarDatosDespuesDeCargar(listaCiudades);
    } catch (error) {
        console.error('Error al obtener datos de Quito:', error);
        alert('Error al obtener datos de Quito. Por favor, inténtelo de nuevo.');
    }
}

function manejarDatosDespuesDeCargar(listaCiudades) {
    listaCiudades.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("ciudad");
    div.innerHTML = `
        <p class="ciudad-id-back">${nombreQuito}</p>
        <div class="ciudad-info">
            <div class="nombre-contenedor">
                <p class="ciudad-id">${nombreQuito}</p>
                <h2 class="nombre-ciudad">${nombreQuito}</h2>
            </div>
            <div class="ciudad-stats">
                <p class="stat">${direccionQuito}</p>
                <p class="stat">${latitudQuito}</p>
                <p class="stat">${longitudQuito}</p>
                <p class="stat">${zonaHorariaQuito}</p>
            </div>
        </div>`;
    
    listaCiudades.append(div);
}

// Llama a la función para obtener y trabajar con los datos
obtenerDatosQuito();


*/


/*
// Primer fetch para Quito
fetch(urlQuito, optionsQuito)
    .then(res => res.json())
    .then(responseQuito => {
        mostrarCiudad(responseQuito);

        // Segundo fetch para Washington
        const urlWashington = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=WASHINGTON&contentType=json&unitGroup=us&shortColumnNames=0';
        const optionsWashington = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9ac5674456mshbe678e8595bcc8ap1ccafajsnf283d0e7d782',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        return fetch(urlWashington, optionsWashington);
    })
    .then(res => res.json())
    .then(responseWashington => {
        mostrarCiudad(responseWashington);

        // Tercer fetch para Manchester
        const urlManchester = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=MANCHESTER&contentType=json&unitGroup=us&shortColumnNames=0';
        const optionsManchester = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9ac5674456mshbe678e8595bcc8ap1ccafajsnf283d0e7d782',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        return fetch(urlManchester, optionsManchester);
    })
    .then(res => res.json())
    .then(responseManchester => {
        mostrarCiudad(responseManchester);

        // Cuarto fetch para Roma
        const urlRoma = 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=ROMA&contentType=json&unitGroup=us&shortColumnNames=0';
        const optionsRoma = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9ac5674456mshbe678e8595bcc8ap1ccafajsnf283d0e7d782',
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        return fetch(urlRoma, optionsRoma);
    })
    .then(res => res.json())
    .then(responseRoma => {
        mostrarCiudad(responseRoma);
    });

const listaCiudades = document.querySelector("#listaCiudades");

function mostrarCiudad(responseQuito, responseWashington, responseManchester, responseRoma) {
    listaCiudades.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("ciudad");
    div.innerHTML = `
        <p class="ciudad-id-back">${responseQuito.name}</p>
        <div class="ciudad-info">
            <div class="nombre-contenedor">
                <p class="ciudad-id">${responseQuito.name}</p>
                <h2 class="nombre-ciudad">${responseQuito.name}</h2>
            </div>
            <div class="ciudad-stats">
                <p class="stat">${responseQuito.address}</p>
                <p class="stat">${responseQuito.latitude}</p>
                <p class="stat">${responseQuito.longitude}</p>
                <p class="stat">${responseQuito.tz}</p>
            </div>
        </div>
        <p class="ciudad-id-back">${responseWashington.name}</p>
        <div class="ciudad-info">
            <div class="nombre-contenedor">
                <p class="ciudad-id">${responseWashington.name}</p>
                <h2 class="nombre-ciudad">${responseWashington.name}</h2>
            </div>
            <div class="ciudad-stats">
                <p class="stat">${responseWashington.address}</p>
                <p class="stat">${responseWashington.latitude}</p>
                <p class="stat">${responseWashington.longitude}</p>
                <p class="stat">${responseWashington.tz}</p>
            </div>
        </div>
        <p class="ciudad-id-back">${responseManchester.name}</p>
        <div class="ciudad-info">
            <div class="nombre-contenedor">
                <p class="ciudad-id">${responseManchester.name}</p>
                <h2 class="nombre-ciudad">${responseManchester.name}</h2>
            </div>
            <div class="ciudad-stats">
                <p class="stat">${responseManchester.address}</p>
                <p class="stat">${responseManchester.latitude}</p>
                <p class="stat">${responseManchester.longitude}</p>
                <p class="stat">${responseManchester.tz}</p>
            </div>
        </div>
        <p class="ciudad-id-back">${responseRoma.name}</p>
        <div class="ciudad-info">
            <div class="nombre-contenedor">
                <p class="ciudad-id">${responseRoma.name}</p>
                <h2 class="nombre-ciudad">${responseRoma.name}</h2>
            </div>
            <div class="ciudad-stats">
                <p class="stat">${responseRoma.address}</p>
                <p class="stat">${responseRoma.latitude}</p>
                <p class="stat">${responseRoma.longitude}</p>
                <p class="stat">${responseRoma.tz}</p>
            </div>
        </div>
        `;

    listaCiudades.append(div);
}*/
