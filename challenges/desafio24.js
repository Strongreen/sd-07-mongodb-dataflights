db.voos.findOne({ litrosCombustivel: { $lt: 600, $exists: true } ,
  "empresa.nome": { $nin: ["GOL", "AZUL"] },
}, { _di: 0, vooId: 1, litrosCombustivel: 1 });
