module.exports = async function (context, req) {
    context.log('Deleting a car.');

    // Import cars data
    const cars = require('../shared/cars.json');

    const id = parseInt(req.params.id);
    const index = cars.findIndex(car => car.id === id);

    if (!index) {
    
        context.res = {
            status: 404,
            body: `Car with id ${id} not found`
        };
    }
    cars.splice(index, 1);
    context.res = {
        status: 200,
        body: `Car with id ${id} deleted`
    };
};