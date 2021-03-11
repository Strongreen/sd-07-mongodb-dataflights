db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.count({
    natureza: "Doméstica",
    "empresa.nome": "PASSAREDO",
  })
});
