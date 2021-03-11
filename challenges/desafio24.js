db.voos.find({
    $and: [
        {litrosCombustivel: {$not: {$gt: 600}}},
        {litrosCombustivel: {$exists: true}},
    {$nor: [
        {"empresa.name":"GOL"},
        {"empresa.name":"AZUL"}
    ]}
    ]
},{vooId:1, "empresa.nome":1, litrosCombustivel:1, _id:0}).limit(1);