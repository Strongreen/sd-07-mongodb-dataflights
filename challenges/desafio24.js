db.voos.findOne({ $and: [{ litrosCombustivel: { $lt: 600 } }, { "empresa.nome": { $ne: { $in: ["GOL", "AZUL"] } } }, {}] }, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });
