db.voos.find(
  { litrosCombustivel: { $gte: 100 } },
  { vooId: 1, _id: 0 },
).limit(1);
