db.voos.find({ litrosCombustivel: { $exists: true } }, { vooId: 1 });
