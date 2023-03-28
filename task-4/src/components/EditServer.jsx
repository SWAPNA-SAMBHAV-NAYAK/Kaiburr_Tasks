import React, { useState } from 'react'

const EditServer = ({ server, onSave, onClose }) => {
  const [name, setName] = useState(server.name)
  const [language, setLanguage] = useState(server.language)
  const [framework, setFramework] = useState(server.framework)

  const handleSave = () => {
    const updatedServer = { ...server, name, language, framework }
    onSave(updatedServer)
  }

  return (
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">Edit Server Details</div>
        <div className="content">
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
              <label>Language</label>
              <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
            </div>
            <div className="field">
              <label>Framework</label>
              <input type="text" value={framework} onChange={(e) => setFramework(e.target.value)} />
            </div>
          </form>
        </div>
        <div className="actions">
          <div className="ui black deny button" onClick={onClose}>Cancel</div>
          <div className="ui positive right labeled icon button" onClick={handleSave}>
            Save
            <i className="checkmark icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditServer
