db.voos.findOne(
  {
    $and: [
      {
        litrosCombustivel: {
          $exists: 1,
        },
      },
      {
        litrosCombustivel: {
          $not: {
            $gt: 1000,
          },
        },
      },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
  },
);
