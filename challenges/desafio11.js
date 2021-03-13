db.voos.find({
  "aeroportoDestino.nome": {
    $ne: "ESTADOS UNIDOS",
  },
}).count();
