db.voos.count({$not: {"aeroportoDestino.continente": {$nin: ["EUROPA", "ÁSIA", "OCEANIA"]}}});
