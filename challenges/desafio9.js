db.voos.count({ $and: [
  { ano: { $gte: 2017, $lte: 2018 } },
] });
