db.voos.count({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }, { _id: false, decolagens: true });
