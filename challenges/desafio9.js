db.voos.find({ ano: { $and: [{ $gt: 2017 }, { $lt: 2018 }] } }).count();
