db.getCollection("voos")
  .find(
    { $and: [
      { litrosCombustivel: { $exist: true } },
      { litrosCombustivel: { $lt: 1000 } },
    ],
    }, {},
  ).limit(1);
