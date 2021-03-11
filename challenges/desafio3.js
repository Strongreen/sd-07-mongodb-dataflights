
use('dataFlights');

db.getCollection('voos')
.countDocuments({ "empresa.nome" : "AZUL" });