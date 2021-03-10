db.voos.findOne(
  { 
    $and: [
      { $or: 
        [{
          "empresa.nome": { $eq: "DELTA AIRLINES", $eq: "AMERICAN AIRLINES" }
        }]
      },
      { "aeroportoOrigem.sigla": "SBGR"},
      { "aeroportoDestino.sigla": "KJFK"}
    ]
  },
  { "vooId": 1, "_id": 0 }
);
