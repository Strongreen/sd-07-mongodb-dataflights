db.voos.findOne({ litrosCombustivel: { $exits: true } }, { vooId: 1, _id: 0 });
