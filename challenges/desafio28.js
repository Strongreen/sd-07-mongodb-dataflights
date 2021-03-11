db.voos.count({
  $and: [
    { "empresa.nome": "LATAM AIRLINES BRASIL" },
    { natureza: "Doméstica" },
  ],
});
db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: 20026,
});
db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
db.voos.find();
