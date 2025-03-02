import express from 'express';
import { Router } from 'express';
import { dbconnect } from './config.js';
import { modelUsers } from './userModels.js';
const app = express();
const port = 3000;
const router = Router();
dbconnect();


// Get User and Messages by API KEY (ID)
router.get('/api/:id', async (req,res)=>{
    const id = req.params.id;
    const response = await modelUsers.findById(id).select('name email messages');
    res.send(response);
});


app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});