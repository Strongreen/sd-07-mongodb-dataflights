db.getCollection("voos").findOne({
  litrosCombustivel: 1 }, {
  vooId: 1, _id: 0,
});
