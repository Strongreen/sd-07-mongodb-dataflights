db.voos.find({
  $or: [
    { "aeroportoDestino.continente": { $ne: "EUROPA" } },
    { "aeroportoDestino.continente": { $ne: "ASIA" } },
    { "aeroportoDestino.continente": { $ne: "OCEANIA" } }],
});
