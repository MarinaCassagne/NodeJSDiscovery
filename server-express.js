// Charger le package express
const express = require ("express");

//Instanciation (processus qui consiste à lire ou à spécifier des informations) d'une nouvelle application express 
const app = new express();
/*          
            Callback
            (req, res, next, error)
               |   |                      */
app.get("/", (req,res) => {
    res.send
    (
        `<!DOCTYPE html>
                <html lang="en">
                <head>
                 <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Index</title>
                </head>
                <body>
                    <h1>COUCOU EXPRESS</h1>
                </body>
                </html>`
    );
});

app.get("/contact", (req,res) => {
    res.send
    (
       `<!DOCTYPE html>
                <html lang="en">
                <head>
                 <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact</title>
                </head>
                <body>
                    
                </body>
                </html>`
    );
});

app.get("/a-propos", (req,res) => {
    res.send
    (
        `<!DOCTYPE html>
                <html lang="en">
                <head>
                 <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>À propos</title>
                </head>
                <body>
                    
                </body>
                </html>`
    );
});

app.get("/api/data", (req,res) => {
    const datas = 
            {
                "message de l'api": "coucou api",
                timestamp: new Date().toISOString(),
                server: "nodejs"          
            };
    res.json(datas);  
});

app.listen(3008);

app.use((req,res)=>{
    res.status(404).send(
        `<p>Le code de l'url<code>${req.url}</code></p>`
    );
});


