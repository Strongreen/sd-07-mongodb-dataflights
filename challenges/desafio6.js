use("dataFlights");
db.getCollection("voos")
  .find({ "vooId": 756807}, { "empresa.sigla": true, "empresa.nome": true, "passageiros": true, "_id": false });