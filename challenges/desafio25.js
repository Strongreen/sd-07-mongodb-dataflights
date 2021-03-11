db.voos.deleteMany({ $and: [{ "empresa.nome": "AZUL" }, { payloads: { $lt: 400 } }] });
