db.voos.find({}, { _id: false, vooId: true, "empresa.nome": true }).skip(9).limit(3);
