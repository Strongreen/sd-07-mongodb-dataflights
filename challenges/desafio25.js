db.voos.findOne({
  $and: [
    { "empresa.nome": "AZUL" },
    { litrosCombustivel: { $lte: 400 } },
  ],
});
