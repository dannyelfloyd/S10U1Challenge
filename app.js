// Importar Express
const express = require('express');
// Inicializar la aplicación Express
const app = express();
// Definir el puerto para el servidor
const PORT = 3000;

//rutas para la página principal (/)
app.get('/', (req, res) => {
  res.send('<h1>ruta principal</h1><a href="/marketing">marketing</a><a href="/developers">developers</a><a href="/error404">Error 404</a>');
});
//especialidades como marketing (/marketing)
app.get('/marketing', (req, res) => {
    res.send(filterSpecialty('marketing'));
});
//especialidades como developers (/developers)
app.get('/developers', (req, res) => {
    res.send('<h1>developers</h1><a href="/">home</a>');
});

// manejo de errores 404 para rutas no definidas.
app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><a href="/">home</a>');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

// función para filtrar usuarios por su especialidad
const usersData = require('./usersData.js');
function filterSpecialty(specialty) {

    if(specialty == 'marketing'){
        showData(specialty);
    } else if(specialty == 'developers'){
        showData(specialty);
    } else {
        showData(specialty);
    }
};
// Generación de Páginas HTML
function showData() {
    `<h1>${developers}</h1><a href="/">home</a>`
};