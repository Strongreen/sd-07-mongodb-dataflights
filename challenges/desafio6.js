db.voos.find(
  { vooId: 756807 },
  { _id: false, vooId: true, "empresa.sigla": true, "empresa.nome": true, passageiros: true },
);
