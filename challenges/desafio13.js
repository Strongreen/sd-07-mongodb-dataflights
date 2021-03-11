db.getCollection("voos")
  .find({
    $and: [
      { "aeroportoDestino.continente": { $ne: "EUROPA" } },
      { "aeroportoDestino.continente": { $ne: "OCEANIA" } },
      { "aeroportoDestino.continente": { $ne: "ÁSIA" } },
    ],
  });
