/** @format */

db.voos
  .find({
    ano: {
      $lt: 2017,
    },
  })
  .countDocuments();
