db.voos.deleteMany(
  {
    "empresa.nome": "AZUL",
    $and:
    [
      {
        litrosCombustivel:
        {
          $lt: 400,
        },
      },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
  },
);
