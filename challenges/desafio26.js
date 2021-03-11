db.voos.deleteMany({ $and: [{ passageiros: { $gte: 5 } }, { passageiros: { $lte: 10 } }], "empresa.nome": "GOL" });
