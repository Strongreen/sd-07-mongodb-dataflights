db.voos.find({
  $or: [
    { "aeroportoDestino.pais": "ARGENTINA" },
    { "aeroportoDestino.pais": "CHILE" },
  ],
}).count();
