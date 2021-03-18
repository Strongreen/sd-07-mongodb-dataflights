db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: {
        $exists: 1,
      },
       },
      { litrosCombustivel: {
        $not: {
         $gt: 600,
        },
      },
     },
      {
        "empresa.nome": { $nin: ["GOL", "AZUL"],
      },
      },
    ],
  },
  { _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 },
);
