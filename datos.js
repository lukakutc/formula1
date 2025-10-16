const arrayEquipos = [
    {
        id:"mercedes", 
        nombre: "Mercedes-AMG Petronas Formula One Team",
        nombreCorto: "Mercedes",
        logo: "assets/img/equipos/mercedes/logo/logo-mercedes.png",
        historia: "Mercedes ha sido una fuerza dominante en la era híbrida desde 2014, consiguiendo múltiples campeonatos de constructores y pilotos. Cuenta con una larga tradición en la F1 y con pilotos de alto nivel cada temporada.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #018076 180%)",
        logoChico: "assets/img/equipos/mercedes/logo/imgi_43_2025mercedeslogowhite.webp",
        colorCard: "#00d7b6",
        imagenAuto: "assets/img/equipos/mercedes/auto/2025mercedescarright.webp",
    },
    {
        id:"red-bull",
        nombre: "Oracle Red Bull Racing",
        nombreCorto: "Red Bull Racing",
        logo: "assets/img/equipos/redbullracing/logo/logo-red-bull.png",
        historia: "Red Bull Racing ha sido uno de los equipos más exitosos en los últimos años. Con motores Honda RBPT, han conseguido varios títulos tanto de pilotos como de constructores. Max Verstappen es uno de sus pilotos más destacados.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #182e5fff 180%)",
        logoChico: "assets/img/equipos/redbullracing/logo/imgi_47_2025redbullracinglogowhite.webp",
        colorCard: "#012f73ff",
        imagenAuto: "assets/img/equipos/redbullracing/auto/2025redbullracingcarright.webp"
    },
    {
        id: "ferrari",
        nombre: "Scuderia Ferrari",
        nombreCorto: "Ferrari",
        logo: "assets/img/equipos/ferrari/logo/logo-ferrari.png",
        historia: "Ferrari es la escudería más antigua de las que permanecen activas en Fórmula 1, presente desde los inicios del campeonato. Símbolo de tradición, pasión y carreras épicas.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #710e10 180%)",
        logoChico: "assets/img/equipos/ferrari/logo/imgi_35_2025ferrarilogowhite.webp",
        colorCard: "#ed1131",
        imagenAuto: "assets/img/equipos/ferrari/auto/2025ferraricarright.webp"
    },
    {
        id: "aston-martin",
        nombre: "Aston Martin Aramco Formula One Team",
        nombreCorto: "Aston Martin",
        logo: "assets/img/equipos/aston-martin/logo/pngegg.png",
        historia: "Aston Martin ha resurgido como constructor fuerte con gran respaldo financiero. En los últimos años ha mejorado su competitividad y está entre los equipos que aspiran a lo más alto.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #0d490dff 180%)",
        logoChico: "assets/img/equipos/aston-martin/logo/imgi_33_2025astonmartinlogowhite.webp",
        colorCard: "#229971",
        imagenAuto: "assets/img/equipos/aston-martin/auto/2025astonmartincarright.webp"
    },
    {
        id: "alpine", 
        nombre: "BWT Alpine F1 Team",
        nombreCorto: "Alpine",
        logo: "assets/img/equipos/alpine/logo/logo-alpine.png",
        historia: "Alpine, antes conocido como Renault, mantiene una sólida herencia técnica. Busca consolidarse entre los mejores con buena estrategia, desarrollo constante y talento en sus pilotos.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #1e3f8cff 180%)",
        logoChico: "assets/img/equipos/alpine/logo/imgi_31_2025alpinelogowhite.webp",
        colorCard: "#00a1e8",
        imagenAuto: "assets/img/equipos/alpine/auto/2025alpinecarright.webp"
    },
    {
        id: "haas",
        nombre: "MoneyGram Haas F1 Team",
        nombreCorto: "Haas",
        logo: "assets/img/equipos/haas/logo/logo-haas.png",
        historia: "Haas es el único equipo estadounidense en la parrilla fija. Aunque no ha ganado títulos, ha tenido buenos momentos y su ambición es mejorar año tras año.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #b6b6b6ff 180%)",
        logoChico: "assets/img/equipos/haas/logo/imgi_37_2025haaslogowhite.webp",
        colorCard: "#9c9fa2",
        imagenAuto: "assets/img/equipos/haas/auto/2025haascarright.webp"
    },
     {
        id: "williams",
        nombre: "Williams Racing",
        nombreCorto: "Williams",
        logo: "assets/img/equipos/williams/logo/logo-williams.png",
        historia: "Williams tiene una rica historia en Fórmula 1, con múltiples campeonatos en el pasado. Aunque ha pasado por altibajos, sigue siendo una escudería emblemática y querida por los fans.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #5d8be0ff 180%)",
        logoChico: "assets/img/equipos/williams/logo/imgi_49_2025williamslogowhite.webp",
        colorCard: "#1868db",
        imagenAuto: "assets/img/equipos/williams/auto/2025williamscarright.webp"
    },
    {
        id: "racing-bulls",
        nombre: "RB Formula One Team",  // antes AlphaTauri / nombre corto Racing Bulls
        nombreCorto: "Racing Bulls",
        logo: "assets/img/equipos/racingbulls/logo/logo-racing-bulls.png",
        historia: "El equipo anteriormente conocido como AlphaTauri se renombra para seguir desarrollando jóvenes talentos dentro de la estructura de Red Bull. Busca consolidar su lugar en la parrilla y ganar consistencia.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #425fa7ff 180%)",
        logoChico: "assets/img/equipos/racingbulls/logo/imgi_45_2025racingbullslogowhite.webp",
        colorCard: "#6c98ff",
        imagenAuto: "assets/img/equipos/racingbulls/auto/2025racingbullscarright.webp"
    },
    {
        id: "kick-sauber",
        nombre: "Stake F1 Team Kick Sauber",
        nombreCorto: "Kick Sauber",
        logo: "assets/img/equipos/kicksauber/logo/logo-kick-sauber.png",
        historia: "Sauber, con nombres de patrocinadores como Kick y Stake, ha sido tradicionalmente un equipo de media parrilla. Tiene buena reputación técnica y busca alianzas fuertes para subir posiciones.",
        colorFondo: "radial-gradient(circle, #0d0d1a 50%, #52E252 180%)",
        logoChico: "assets/img/equipos/kicksauber/logo/imgi_39_2025kicksauberlogowhite.webp",
        colorCard: "#01c00e",
        imagenAuto: "assets/img/equipos/kicksauber/auto/2025kicksaubercarright.webp"
    },{
           id:"mclaren",
           nombre: "McLaren Formula 1 Team",
           logo: "assets/img/equipos/mclaren/logo/logo-mclaren.png",
           historia: "McLaren es uno de los grandes históricos del automovilismo británico. Ha tenido épocas de gloria con múltiples campeonatos, y recientemente está intentando volver al podio con jóvenes promesas y buen rendimiento.",
           colorFondo: "radial-gradient(circle, #0d0d1a 50%, #ff8700ff 180%)",
           logoChico: "assets/img/equipos/mclaren/logo/imgi_41_2025mclarenlogowhite.webp",
           nombreCorto: "McLaren",
           colorCard: "#f47600",
           imagenAuto: "assets/img/equipos/mclaren/auto/2025mclarencarright.webp"
       },
    ];
    

function paginaActual(){
    
    let pagina = document.getElementsByClassName("pagina-equipos2");
    console.log("antes del if")
    if(pagina[0]){
        console.log(pagina[0]);
        cargarEquipos();
    }else{
        pagina = document.getElementsByClassName("pagina-perfilEscuderia");
        console.log(pagina[0])
        cargarPerfil();
    }
    
}
paginaActual();


function cargarEquipos() {
    const listaEquipos = document.getElementById("lista-equipos");
    console.log(listaEquipos);
    arrayEquipos.forEach(equipo => {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="card-equipo" style="--team-color: ${equipo.colorCard}">
                <div class="barra-card">
                    <h2>${equipo.nombreCorto}</h2>
                    <div class="container-logo-equipo">
                        <a href = "perfilEscuderia.html?team=${equipo.id}"><img src="${equipo.logoChico}" alt="${equipo.nombre}"></a>
                    </div>
                </div>
                <img src="${equipo.imagenAuto}" alt="auto Red Bull" class="auto-equipo">
            </div>
        `;
        listaEquipos.appendChild(li);
        console.log(li);
    });
};


//cargarEquipos();
function cargarPerfil() {

    console.log("entra a cargar perfil")
    const params = new URLSearchParams(window.location.search);
    const teamId = params.get("team");
    console.log(teamId);
    let  i = 0;
    let  encontrado = false;
    let equipo;
    while(arrayEquipos.length>i && !encontrado){
        if(arrayEquipos[i].id==teamId){
            encontrado = true;
            equipo = arrayEquipos[i];
        }else{
            i++;
        }
    }
    const fondo = document.querySelector(".fondo-color");

    if (encontrado) {
        document.getElementById("logo-equipo").src = equipo.logo;
        document.getElementById("nombre-equipo").alt = equipo.nombre;
        document.getElementById("nombre-equipo").textContent = equipo.nombre;
        // document.getElementById("historia-equipo").textContent = equipo.historia; esto lo saqué pq me daba problema a la carga que venía después
        fondo.style.background = equipo.colorFondo;
    }
}
/*cargarPerfil()*/