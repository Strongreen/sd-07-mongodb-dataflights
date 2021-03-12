db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lt: 1000 } },
    { litrosCombustivel: { $exist: true } },
  ],
}, { _id: 0, vooId: 1, litrosCombustivel: 1 });
