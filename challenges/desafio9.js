db.voos.find({ $and: [{ ano: { $gte: 2017 } }, { ano: { $lt: 2018 } }] }).count();
