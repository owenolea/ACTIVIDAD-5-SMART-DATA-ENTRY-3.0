const formulario = document.getElementById("formulario");
const descripcion = document.getElementById("descripcion");
const ubicacion = document.getElementById("ubicacion");
const tipo = document.getElementById("tipo");
const urgencia = document.getElementById("urgencia");

const imagen = document.getElementById("imagen");
const preview = document.getElementById("preview");
const areaImagen = document.getElementById("areaImagen");
const borrarImagen = document.getElementById("borrarImagen");

/* IMAGEN */
areaImagen.addEventListener("click", ()=> imagen.click());

imagen.addEventListener("change", ()=>{
    const archivo = imagen.files[0];

    if(archivo){
        const lector = new FileReader();
        lector.onload = e=>{
            preview.src = e.target.result;
            preview.style.display = "block";
            borrarImagen.style.display = "block";
        }
        lector.readAsDataURL(archivo);
    }
});

borrarImagen.addEventListener("click", ()=>{
    imagen.value = "";
    preview.style.display = "none";
    borrarImagen.style.display = "none";
});

/* MAPA */
let mapa = L.map('mapa').setView([-34.60, -58.38], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

let marcador;

mapa.on('click', async function(e){

    let lat = e.latlng.lat;
    let lng = e.latlng.lng;

    document.getElementById("latitud").value = lat;
    document.getElementById("longitud").value = lng;

    if(marcador){
        mapa.removeLayer(marcador);
    }

    marcador = L.marker([lat, lng]).addTo(mapa);

    ubicacion.value = "Cargando dirección...";

    try{
        let res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        let data = await res.json();

        if(data.display_name){
            ubicacion.value = data.display_name;
        }else{
            ubicacion.value = lat.toFixed(4) + ", " + lng.toFixed(4);
        }

    }catch{
        ubicacion.value = lat.toFixed(4) + ", " + lng.toFixed(4);
    }
});

/* VALIDACION */
formulario.addEventListener("submit", (e)=>{

    let valido = true;

    if(descripcion.value.trim() === ""){
        descripcion.classList.add("error");
        valido = false;
    }

    if(ubicacion.value.trim() === ""){
        ubicacion.classList.add("error");
        valido = false;
    }

    if(tipo.value === ""){
        tipo.classList.add("error");
        valido = false;
    }

    if(urgencia.value === ""){
        urgencia.classList.add("error");
        valido = false;
    }

    if(imagen.files.length === 0){
        areaImagen.style.border = "2px solid red";
        valido = false;
    }

    if(document.getElementById("latitud").value === ""){
        alert("Seleccioná una ubicación en el mapa");
        valido = false;
    }

    if(!valido){
        e.preventDefault();

        Toastify({
            text: "Completa todos los campos",
            duration: 3000,
            backgroundColor: "red"
        }).showToast();
    }

});