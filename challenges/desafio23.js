db.voos.findOne({ litrosCombustivel: { $not: { $gt: 1000 } }, litrosCombustivel: { $exists: true } }, { vooId: 1, litrosCombustivel: 1 });
