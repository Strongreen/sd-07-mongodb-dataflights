db.voos.findOne({
  $and: [
    {
      $or: [
        { "empresa.nome": { $eq: "DELTA AIRLINES" } },
        { "empresa.nome": { $eq: "AMERIAN AIRLINES" } },
      ],
    },
    { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
    { "aeroportoDestino.sigla": { $eq: "KJFK" } },
  ],
}, { _id: 0, vooId: 1 });
