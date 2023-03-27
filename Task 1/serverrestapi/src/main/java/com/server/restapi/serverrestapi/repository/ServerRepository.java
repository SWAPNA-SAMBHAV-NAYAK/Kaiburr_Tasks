package com.server.restapi.serverrestapi.repository;
import com.server.restapi.serverrestapi.model.Server;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ServerRepository extends MongoRepository<Server,String> {
    Server findByServerId(String id);

}
