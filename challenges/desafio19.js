db.voos.find({ litrosCombustivel: { $exists: true } }, { vooId: true }).limit(1);
