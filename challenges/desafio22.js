db.voos
  .find(
    {
      $or: [
        { "empresa.nome": "DELTA AIRLINES" },
        { "empresa.nome": "AMERICAN AIRLINES" },
      ],

      $and: [
        { "aeroportoOrigem.sigla": "SBGR" },
        { "aeroportoDestino.sigla": "KJFK" },
      ],
    },
    { vooId: 1, _id: 0 },
  )
  .limit(1);
