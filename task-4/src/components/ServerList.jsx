import React from 'react'
import ServerCard from './ServerCard'

const ServerList = (props) => {

  const deleteServerHandler=(id)=>{
    props.getServerId(id);
  }
  const editing=(id)=>{
    props.onEdit(id);
  }
  
  const renderServerList=props.servers.map((server) =>{
    return (
      <ServerCard server={server} clickHandler={deleteServerHandler}
      onEditNext={editing} key={server.id}/>
    )
  })
  return (
    <div className="main">
      <h2>
        Server List   
      </h2>
        
      <div className="ui called list">
        {renderServerList}
      </div>
    </div>
    
  )
}

export default ServerList