use('dataFlights');

db.getCollection('voos')
    .findOne({ litrosCombustivel: { $gte: 1000 }},
    { _id: 0, vooId: 1 });