const v2 = db.voos.count({
  "empresa.nome": "LATAM AIRLINES BRASIL",
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: v2,
});

db.resumoVoos.find({
},
{
  _id: 0,
}).skip(1);
