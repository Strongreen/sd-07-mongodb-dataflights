db.voos.find(
  { $and:
  [{ "empresa.nome": { $in: ["DELTA AIRLNES", "AMERICAN AIRLINES"] } },
    {}] },
  { vooId: 1, _id: 0 },
).limit(1);
