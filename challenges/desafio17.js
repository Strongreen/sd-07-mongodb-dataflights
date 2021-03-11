use('dataFlights');

db.getCollection('voos')
    .countDocuments({ natureza: "Doméstica" });