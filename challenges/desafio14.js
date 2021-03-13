db.voos.find(
  { "aeroportoOrigen.pais": { $nin: ["BRASIL"] } },
).count();
