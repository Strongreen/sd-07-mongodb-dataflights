use('dataFlights');

db.getCollection('voos')
    .findOne({ litrosCombustivel: { $exists: true }},
        { _id: 0, vooId: 1 });