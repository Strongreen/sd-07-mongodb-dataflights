db.voos.find(
  {
    litrosCombustivel: { $exists: true },
    // eslint-disable-next-line no-dupe-keys
    litrosCombustivel: { $lt: 1000 },
  },
  { vooId: 1, litrosCombustivel: 1, _id: 0 },
).limit(1);
