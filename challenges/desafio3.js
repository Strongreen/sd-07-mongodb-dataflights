/** @format */

db.voos
  .find({
    "empresa.nome": "AZUL",
  })
  .countDocuments();
