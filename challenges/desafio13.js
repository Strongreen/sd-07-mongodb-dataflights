db.voos.count({ $nor: [
  { "aeroportoDestino.continente": { $eq: "EUROPA" } },
  { "aeroportoDestino.continente": { $eq: "ÁSIA" } },
  { "aeroportoDestino.continente": { $eq: "OCEANI0A" } },
] });
