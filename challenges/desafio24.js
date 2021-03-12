db.getCollection("voos")
  .find(
    {
      $and: [
        { litrosCombustivel: { $exist: true } },
        { litrosCombustivel: { $lt: 600 } },
      ],
    }, {},
  ).limit(1);
