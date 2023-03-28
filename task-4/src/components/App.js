import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import EditServer from "./EditServer";
import Header from "./Header";
import AddServer from "./AddServer";
import ServerList from "./ServerList";
import api from "../api/servers";
function App() {
  const [servers, setServers] = useState([]);
  const [selectedServer, setSelectedServer] = useState();
  const LOCAL_STORAGE_KEY = "servers";

  //Receive Servers
  const receiveServers = async () => {
    const response = await api.get("/servers");
    return response.data;
  };
  const addServerHandler = async (s) => {
    console.log(s);
    const request = {
      id: uuidv4(),
      ...s,
    };
    const response = await api.post("/servers", request);
    setServers([...servers, response.data]);
  };

  const removeServerHandler = async (id) => {
    await api.delete(`/servers/${id}`);
    const newServerList = servers.filter((server) => {
      return server.id !== id;
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Data has been deleted successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    setServers(newServerList);
  };

  const editServerHandler = (id) => {
    const server = servers.find((s) => s.id === id);
    setSelectedServer(server);
  };

  const saveServerHandler = (updatedServer) => {
    const updatedServers = servers.map((server) => {
      if (server.id === updatedServer.id) {
        return updatedServer;
      }
      return server;
    });
    setServers(updatedServers);
    setSelectedServer(null);
  };

  const closeEditHandler = () => {
    setSelectedServer(null);
  };
  useEffect(() => {
    const getAllServers = async () => {
      const allServers = await receiveServers();
      if (allServers) setServers(allServers);
    };
    getAllServers();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(servers));
  }, [servers]);
  return (
    <div className="ui container">
      <Header />
      {selectedServer && (
        <EditServer
          server={selectedServer}
          onSave={saveServerHandler}
          onClose={closeEditHandler}
        />
      )}
      <AddServer addServerHandler={addServerHandler} />
      <ServerList
        servers={servers}
        getServerId={removeServerHandler}
        onEdit={editServerHandler}
      />
    </div>
  );
}

export default App;
