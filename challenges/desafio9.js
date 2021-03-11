db.voos.countDocuments({ $or: [{ ano: { $lte: 2018 } }, { ano: { $gte: 2017 } }] });
