
use('dataFlights');

// Search for documents in the current collection.
db.getCollection('voos')
.countDocuments({ "empresa.nome" : "GOL" });