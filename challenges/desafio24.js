db.voos.find({ litrosCombustivel: { $exists: true, $lt: 600 },
  "empresa.nome": { $nin: ["GOL", "AZUL"] } },
{ vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 }).sort({ ano: 1 }).limit(1).pretty();
