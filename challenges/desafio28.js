/** @format */

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos
    .find({
      "empresa.nome": "LATAM AIRLINES BRASIL",
      natureza: "Doméstica",
    })
    .countDocuments(),
});

db.resumoVoos.findOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 0,
  },
);
