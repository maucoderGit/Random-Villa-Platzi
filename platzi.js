var up = document.getElementById("Platzita");
var paper = up.getContext("2d");
var cantidad = aleatorio(1,5);
console.log(cantidad + " vacas");
console.log(cantidad + " cerdos");
console.log(cantidad + " pollos");

var vaca = {
    url: "vaca.jpg",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.jpg",
    cargaOK: false
};

var fondo = {
    url: "tile.jpg",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar()
};
 
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar()
};

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar()
};

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar()
};

function dibujar()
{
    if (fondo.cargaOK)
    {
        paper.drawImage(fondo.imagen,0,0);

        // paper.drawImage sirve para dibujar noestras imagenes en el canvas. tal como lo hariamos en html5
    }
    if (vaca.cargaOK)
    {
        for(var v = 0; v < cantidad; v++ ){
            var y = aleatorio(0,420);
            var x = aleatorio(0,420);
            paper.drawImage(vaca.imagen,y,x);
            
        }
    }
    if (pollo.cargaOK)
    {
        for(var v = 0; v < cantidad; v++ ){
            var y = aleatorio(0,420);
            var x = aleatorio(0,420);
            paper.drawImage(pollo.imagen,y,x);
            
        }
    }
    if (cerdo.cargaOK)
    {
        for(var v = 0; v < cantidad; v++ ){
            var y = aleatorio(0,420);
            var x = aleatorio(0,420);
            paper.drawImage(cerdo.imagen,y,x);
            
        }
    }
};

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
