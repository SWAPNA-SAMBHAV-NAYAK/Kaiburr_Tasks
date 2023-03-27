package com.server.restapi.serverrestapi.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="servers")

public class Server {

    private String name;
    @Id
    private String serverId;
    private String language;
    private String framework;

    public Server(){

    }
    public Server(String name,String language, String framework){
        super();
        this.name = name;
//        this.serverId = serverId;
        this.language = language;
        this.framework = framework;
    }

    public String getId() {
        return serverId;
    }

    public void setId(String serverId) {
        this.serverId = serverId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getFramework() {
        return framework;
    }

    public void setFramework(String framework) {
        this.framework = framework;
    }

    @Override
    public String toString() {
        return "Server{" +
                "name='" + name + '\'' +
                ", serverId='" + serverId + '\'' +
                ", language=" + language +
                ", framework='" + framework + '\'' +
                '}';
    }
}
