db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lte: 600 } },

    { $or: [
      { "empresa.nome": "GOL" },
      { "empresa.nome": "AZUL" },
    ] },

    {
      litrosCombustivel: { $exists: true },
    },
  ],
}, { vooId: true, _id: false, "empresa.nome": true, litrosCombustivel: true });
