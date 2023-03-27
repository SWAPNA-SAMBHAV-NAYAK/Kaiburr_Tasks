package com.server.restapi.serverrestapi.service;

import com.server.restapi.serverrestapi.model.Server;
import java.util.List;
public interface ServerService {
    List<Server> findAll();

    Server findByServerId(String id);
    Server saveServer(Server server);

    void deleteServerById(String id);
}
