module.exports = async function (context, req) {
    context.log('Creating a new car.');
    //const { v4: uuidv4 } = require('uuid');

    // Import cars data
    const cars = require('../shared/cars.json');

    
    if (req.body) {
        const newCar = req.body;
        //id = uuidv4();
        //newCar.id = id;
        console.log(newCar);
        cars.push(newCar);
        context.res = {
            status: 200,
            body: newCar
        };
    }
    
};