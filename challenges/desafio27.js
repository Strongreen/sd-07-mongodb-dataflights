db.getCollection("resumoVoos")
  .insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.count(
      {
        "empresa.nome": "PASSAREDO",
        natureza: "Doméstica",
      },
    ),
  });

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  {
    _id: false,
    empresa: true,
    totalVoosDomesticos: true,
  },
);
