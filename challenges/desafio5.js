use('dataFlights');

db.getCollection('voos')
.find({}, { _id: 0, vooId : 1 }).limit(3).skip(9);