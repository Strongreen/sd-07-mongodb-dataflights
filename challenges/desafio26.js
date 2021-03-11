db.voos.deleteMany({
  $and: [
    { "empresa.nome": "GOL" },
    { "passageiros.pagos": { $gte: 1 } },
    { "passageiros.pagos": { $lte: 5 } },
  ],
});
