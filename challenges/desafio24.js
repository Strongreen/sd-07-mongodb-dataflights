db.voos.findOne({
  $and: [{ litrosCombustivel: { $not: { $gt: 600 } } },
    { $or: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
    { litrosCombustivel: { $exists: true } }],
},
{
  vooId: 1,
  litrosCombustivel: 1,
  "empresa.nome": 1,
  _id: 0,
});
