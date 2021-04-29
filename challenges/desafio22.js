db.voos.findOne({
  $or: [
    { "empresa.nome": { $eq: "DELTA AIRLINES" } },
    { "empresa.nome": { $eq: "AMERIAN AIRLINES" } },
  ],
}, { _id: 0, vooId: 1 });
