use('dataFlights');

db.getCollection('voos')
.countDocuments({ "aeroportoDestino.pais":
{ $ne: "ESTADOS UNIDOS" } });