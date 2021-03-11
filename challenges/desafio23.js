db.voos.find({ litrosCombustivel: { $exists: true, $gt: 1000 } },
  { vooId: 1, litrosCombustivel: 1 }).sort({ ano: 1 }).limit(1).pretty();
