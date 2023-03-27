package com.server.restapi.serverrestapi.dto;

public class ServerDTO {
    private String serverId;
    private String name;

    private String language;
    private String framework;

    public ServerDTO(){

    }

    public ServerDTO(String id,String name,String language, String framework){
        this.serverId=id;
        this.name = name;
        this.language = language;
        this.framework = framework;
    }

    public String getId() {
        return serverId;
    }

    public void setId(String id) {
        this.serverId = id;
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
}
