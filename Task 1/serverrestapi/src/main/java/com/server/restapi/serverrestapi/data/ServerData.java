package com.server.restapi.serverrestapi.data;
import com.server.restapi.serverrestapi.dto.ServerDTO;
import java.util.List;
public class ServerData {
    private List<ServerDTO> servers;

    public List<ServerDTO> getServers() {
        return servers;
    }

    public void setServers(List<ServerDTO> servers) {
        this.servers = servers;
    }
}
