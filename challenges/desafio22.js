db.voos.find({ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
  "aeroportoOrigem.sigla": { $eq: "SBGR" },
  "aeroportoDestino.sigla": { $eq: "KJFK" } }, { vooId: 1 }).sort({ ano: 1 }).limit(1).pretty();
