import "./styles.css";
import Folder from "./components/Folder.js";
import useTraverseTree from "./hooks/useTraverseTree.js";
import explorer from "./data/folderData";
import { useState } from "react";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, name, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, name, isFolder);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorer} />
    </div>
  );
}
