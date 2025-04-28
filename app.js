// Importar Express
const express = require('express');
// Inicializar la aplicación Express
const app = express();
// Definir el puerto para el servidor
const PORT = 3000;

const usersData = require('./usersData.js');
const specialities = ['marketing','developers','QAs','ventas']

//rutas para la página principal (/)
app.get('/', (req, res) => {
  res.send(`
    <h1>ruta principal</h1>
    <nav>
        <a href="/marketing">marketing</a>
        <a href="/developers">developers</a>
        <a href="/QAs">QAs</a>
        <a href="/ventas">ventas</a>
        <a href="/Error404">Error 404</a>
    </nav>
    `);
});

//especialidades 
specialities.forEach(route => {
    app.get(`/${route}`, (req, res) => {
        const specialty = route;
        const filterUsers = getUsersbySpeciality(specialty);
        res.send(template(specialty, filterUsers));
    });
});

// manejo de errores 404 para rutas no definidas.
app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><a href="/">home</a>');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
}); // node --watch app.js --> pakage.json

// función para filtrar usuarios por su especialidad
const getUsersbySpeciality = (specialty) => {
    return usersData.filter(user => user.specialty === specialty)
};

// Generación de Páginas HTML
const template = (specialty, filterUsers) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${specialty}</title>
            </head>
            <body>
                <a href="/">home</a>
                <h1>${specialty}</h1>
                <ul>
                    ${filterUsers.map(user => {
                        const {name, age} = user;
                        return `name: ${name}, age${age}`
                    }).join("")}
                </ul>
            </body>
        </html>
        `
};