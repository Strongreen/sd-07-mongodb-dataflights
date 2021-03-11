db.voos.countDocuments({
  aeroportoDestino: { $not: { $eq: "ESTADOS UNIDOS" } },
});
