db.voos.find({ $and: [{ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] }}, { "aeroportoOrigem": "SBGR" }, {"aeroportoDestino.sigla": "kjfk"}]}, { vooId: 1, _id: 0 });
