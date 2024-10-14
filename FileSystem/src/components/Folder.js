import { useState } from "react";

function Folder({ handleInsertNode, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return explorer.isFolder ? (
    <div style={{ marginTop: 5 }}>
      <div className="folder" onClick={() => setExpand((prev) => !prev)}>
        <span>
          📂 {explorer.name} <br />
        </span>
        <div>
          <button onClick={(e) => handleNewFolder(e, false)}> Add File</button>
          <button onClick={(e) => handleNewFolder(e, true)}>Add Folder</button>
        </div>
      </div>

      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {showInput.visible && (
          <div className="inputContainer">
            <span>{showInput.isFolder ? "📂" : "📄"}</span>
            <input
              input="text"
              autoFocus
              onKeyDown={(e) => onAddFolder(e)}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              className="inputContainer_input"
            />
          </div>
        )}
        {explorer.items.map((item) => {
          return (
            <Folder
              key={explorer.id}
              handleInsertNode={handleInsertNode}
              explorer={item}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <span className="file">📄 {explorer.name}</span>
  );
}

export default Folder;
