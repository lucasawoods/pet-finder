const express = require('express'); const app = express();

const PORT = 8080;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

// create get command to get list of all pets
app.get('/api/v1/pets', (req, res) => { res.send('List of all pets'); })


// create get command to get list of pets according to name
app.get('/api/v1/pets/:name', (req, res) => { const name = req.params.name; res.send(`Here are the pets named ${name}`); })

//create get command to get list of pets according to their owner's name
app.get('/api/v1/pets/owner', (req, res) => { res.send(`Here are the pets of owners named ${owner}`); })

app.get('/', (req, res) => {res.sendFile(__dirname + '/public/index.html'); })