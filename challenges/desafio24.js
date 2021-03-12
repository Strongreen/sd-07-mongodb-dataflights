db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lt: 600, $exist: true } },
    { $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
  ],
}, { _di: 0, vooId: 1, litrosCombustivel: 1 });
