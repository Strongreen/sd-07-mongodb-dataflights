db.voos.aggregate([
  { $match: { "empresa.nome": "GOL" } },
  { $match: { ano: 2017 } },
  { $project: { vooId: true, "empresa.nome": true, "aeroportoOrigem.nome": true, "aeroportoDestino.nome": true, mes: true, ano: true } },
]);
