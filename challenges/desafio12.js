db.getCollection("voos")
  .find({
    $or: [
      { "aeroportoDestino.pais": "BRASIL" },
      { "aeroportoDestino.pais": "ARGENTINA" },
      { "aeroportoDestino.pais": "CHILE" },
    ],
  });
