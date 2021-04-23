db.voos.find(
    { $and: [{ "empresa.nome": "GOL" }, { ano: 2017 }]},
    {
        _id: false,
        vooId: true,
        "empresa.nome": true,
        "aeroportoOrigem.nome": true,
        "aeroporto.destino": true,
        mes: true,
        ano: true
    }
);
