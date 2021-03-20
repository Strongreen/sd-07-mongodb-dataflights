db.voos.find(
  { "aeroportoDestino.pais":
    { $ne: "Estados Unidos" },
  },
).count();
