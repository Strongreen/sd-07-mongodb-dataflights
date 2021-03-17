db.voos.countDocuments({ natureza: { $eq: 'Doméstica' }, "empresa.nome": 'PASSAREDO' });

db.resumoVoos.insertOne({ empresa: 'PASSAREDO', totalVoosDomesticos: 4187 });

db.resumoVoos.find({ empresa: 'PASSAREDO' }, { empresa: 1, totalVoosDomesticos: 1 });
