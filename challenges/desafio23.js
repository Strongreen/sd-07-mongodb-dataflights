db.voos.findOne({ litrosCombustivel: { $lt: 1000, $exist: true } }, { _id: 0, vooId: 1, litrosCombustivel: 1 });
