db.voos.find({ rtk: { $exists: false } }, { vooId: false });
