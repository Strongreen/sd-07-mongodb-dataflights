/** @format */

db.voos
  .find({
    ano: {
      $in: [2017, 2018],
    },
  })
  .countDocuments();
