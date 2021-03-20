db.voos.find({ $or: [{ "empresa.nome": "DELTA AIRLINES" }, { "empresa.nome": "AMERICAN AIRLINES" }] }, { "aeroportoOrigem.sigla": ["SBGR", "KJFK"] }, { vooId: 1, _id: 0 }).limit(1);
