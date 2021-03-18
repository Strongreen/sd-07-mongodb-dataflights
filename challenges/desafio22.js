db.voos.findOne(
  {
    $or: [
      { "empresa.nome": "DELTA AIRLINES" },
      { "empresa.nome": "AMERICAN AIRLINES" },
    ],
    "aeroportoOrigem.sigla": "SBGR",
    aeroportoDestino: "KJFK",
  },
  { vooId: 1 },
);
