import React,{useState} from 'react'
import serverImg from "../images/boy-cartoon-face-free-vector.jpg";
const ServerCard = (props) => {
  const {id,name,language,framework}=props.server;
  
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <img className="right floated mini ui image" src={serverImg}></img>
          <div className="header">
            {name}
          </div>
          <div className="description">
            {language}
          </div>
          <div className="description">
            {framework}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={() => props.onEditNext(id)}>Edit</div>
            <div className="ui basic red button" onClick={()=>props.clickHandler(id)}>Remove</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerCard