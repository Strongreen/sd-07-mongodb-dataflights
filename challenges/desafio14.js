db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }, { _id: false, decolagens: true });
