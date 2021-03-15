/** @format */

db.voos
  .find({
    natureza: "Doméstica",
  })
  .countDocuments();
