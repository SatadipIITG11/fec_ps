const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:5000/chat', { message: req.body.message });
        res.json(response.data);
    } catch (error) {
        console.error('Error communicating with the chatbot server:', error);
        res.status(500).send('Error communicating with the chatbot server');
    }
});

app.listen(6000, () => {
    console.log('Server is running on port 6000');
});
