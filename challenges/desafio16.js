/** @format */

db.voos
  .find({
    natureza: "Internacional",
  })
  .countDocuments();
