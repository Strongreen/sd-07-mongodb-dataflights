// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.

db.resumoVoos.insertOne({
  empresa: 'LATAM AIRLINES BRASIL',
  totalVoosDomesticos: db.voos.count({
    'empresa.nome': 'LATAM AIRLINES BRASIL',
    natureza: 'Doméstica',
  }),
});

db.resumoVoos.findOne({ empresa: 'LATAM AIRLINES BRASIL' }, { _id: false });
