db.voos.find(
  { "aeroportoOrigen.pais": { $ne: "BRASIL" } },
).count();
