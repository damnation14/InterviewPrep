import React from "react";
import Folder from "./Folder";
import { data as folderData } from "./data"; // Assuming the data file is named `data.js`

const FileExplorer = () => {
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <Folder folderData={folderData} />
    </div>
  );
};

export default FileExplorer;
