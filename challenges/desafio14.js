db.voos.find({ "aeroportoOrigem.nome": { $ne: "BRASIL" } }, { _id: false, decolagens: true });
