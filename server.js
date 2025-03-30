const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });

app.get('/health', (req, res) => {
    const currentTime = Date.now(); 
    const uptime = process.uptime(); 
  
    res.status(200).send({
        "nama": "Fadhil Revinno Hairiman",
        "nrp": "5025231002",
        "status": "UP",
        "timestamp": currentTime,
        "uptime": uptime
    });
});

app.post('/health/:id', (req, res) => {
    const id = req.params.id; 
    const { message } = req.body; 
    const currentTime = Date.now(); 
    const uptime = process.uptime(); 

    res.status(200).send({
        "message": message || "bruh" 
    });
});