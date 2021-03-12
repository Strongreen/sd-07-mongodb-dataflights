// 27 - Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.

db.resumoVoos.insertOne({
  empresa: 'PASSAREDO',
  totalVoosDomesticos: db.voos.count({
    'empresa.nome': 'PASSAREDO',
    natureza: 'Doméstica',
  }),
});

db.resumoVoos.findOne({}, { _id: false });
