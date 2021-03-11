db.voos.find({ litrosCombustivel: { $exists: true } }).limit(1).pretty();
