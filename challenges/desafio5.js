db.voos.find({}, { vooId: true, _id: false }).skip(10).limit(2);
