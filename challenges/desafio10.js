db.voos.find({
  ano: 2017,
  "empresa.nome": "GOL",
})
  .limit(10);
