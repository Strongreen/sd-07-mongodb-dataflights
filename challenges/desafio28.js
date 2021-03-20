db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: db.voos.count({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" }) });

db.resumoVoos.find({ natureza: "Doméstica" }, { _id: 0 }).limit(1);
