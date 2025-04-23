const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;

app.use(cors());
app.use(express.json());


const customerRoutes = require('./routes/customers');
app.use('/api/customers', customerRoutes);

const carRoutes = require('./routes/car');
app.use('/api/cars', carRoutes);

const appointmentRoutes = require('./routes/appointment');
app.use('/api/appointments', appointmentRoutes);


const partRoutes = require('./routes/part');
app.use('/api/parts', partRoutes);

const serviceHistoryRoutes = require('./routes/serviceHistory');
app.use('/api/serviceHistoric', serviceHistoryRoutes);


app.get('/', (req,res) =>{
    res.send("Mergeee");
});

app.listen(PORT, (error)=>{
    if(!error)
        console.log("Server is successfully listening", PORT);
    else
        console.log('An error occured');
    }
);



main().catch((error) => console.error(error));
async function main(){
    const connectionString = 'mongodb://localhost:27017/GarageWorld';
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery',true);
};