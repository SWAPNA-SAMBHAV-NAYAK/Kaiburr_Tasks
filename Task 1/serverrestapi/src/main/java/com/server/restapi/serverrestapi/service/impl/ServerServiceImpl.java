package com.server.restapi.serverrestapi.service.impl;
import com.server.restapi.serverrestapi.model.Server;
import com.server.restapi.serverrestapi.repository.ServerRepository;
import com.server.restapi.serverrestapi.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ServerServiceImpl implements ServerService{
    @Autowired
    private ServerRepository serverRepository;

    @Override
    public List<Server> findAll() {
        return serverRepository.findAll();
    }
    @Override
    public Server findByServerId(String id){
        return serverRepository.findByServerId(id);
    }

    @Override
    public Server saveServer(Server server) {
        return serverRepository.save(server);
    }

    @Override
    public void deleteServerById(String id) {
        serverRepository.deleteById(id);
    }
}
