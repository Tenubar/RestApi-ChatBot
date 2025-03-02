import express from 'express';
import { Router } from 'express';
import { dbconnect } from './config.js';
import { modelUsers } from './userModels.js';
const app = express();
const port = 3000;
const router = Router();
dbconnect();


router.get('/chat', async (req, res) => {
    const apiKey = req.query.api;
    if (!apiKey) {
        return res.status(400).send({ error: "The 'api' parameter is mandatory." });
    }
    try {
        const response = await modelUsers.findOne({ api: apiKey }).select('name email messages');
        if (!response) {
            return res.status(404).send({ error: "No user was found with the provided API." });
        }
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal server error." });
    }
});


app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
