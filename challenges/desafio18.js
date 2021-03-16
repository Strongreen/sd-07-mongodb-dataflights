db.voos.findOne(
  { "passageiros.pagos": 7000 },
  {
    _id: 0,
    vooId: 1,
    mes: 1,
    ano: 1,
  },
);
