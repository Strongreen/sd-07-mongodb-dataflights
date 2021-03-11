db.voos.count({ $not: { "aeroportoDestino.pais": "ESTADOS UNIDOS" } });
