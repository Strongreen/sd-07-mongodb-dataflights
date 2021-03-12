db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lt: 600, $exists: true } },
    { $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
  ],
}, { _di: 0, vooId: 1, litrosCombustivel: 1 });
