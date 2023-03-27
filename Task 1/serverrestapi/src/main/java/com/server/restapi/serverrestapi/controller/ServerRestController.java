package com.server.restapi.serverrestapi.controller;
import com.server.restapi.serverrestapi.model.Server;
import com.server.restapi.serverrestapi.dto.ServerDTO;
import com.server.restapi.serverrestapi.service.ServerService;
import com.server.restapi.serverrestapi.util.ObjectMapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/servers")
public class ServerRestController {

    @Autowired
    private ServerService serverService;

    @GetMapping(value = "/")
    public List<ServerDTO> getAllServers() {
        return ObjectMapperUtils.mapAll(serverService.findAll(), ServerDTO.class);
    }
    @GetMapping(value = "/byServerId/{serverId}")
    public ServerDTO getServerByServerId(@PathVariable("serverId") String serverId) {
        return ObjectMapperUtils.map(serverService.findByServerId(serverId), ServerDTO.class);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> saveServer(@RequestBody ServerDTO serverDTO) {
        serverService.saveServer(ObjectMapperUtils.map(serverDTO, Server.class));
        return new ResponseEntity("Server added successfully", HttpStatus.OK);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<?> updateServer(@RequestBody ServerDTO serverDTO) {
        serverService.saveServer(ObjectMapperUtils.map(serverDTO, Server.class));
        return new ResponseEntity("Server updated successfully", HttpStatus.OK);
    }
    @DeleteMapping(value = "/delete/{serverId}")
    public ResponseEntity<?> deleteServerByServerId(@PathVariable String serverId) {
        serverService.deleteServerById(serverService.findByServerId(serverId).getId());
        return new ResponseEntity("Server deleted successfully", HttpStatus.OK);
    }
}
