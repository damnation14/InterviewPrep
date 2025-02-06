import "./styles.css";
import React, { useState } from "react";

const makeInnerFolderDataStructure = (innerFolderData) => {
  const { name, id, type } = innerFolderData;
  if (type === "folder") {
    return (
      <>
        <FileExplorer folderData={innerFolderData} id={id} />
      </>
    );
  }
  return (
    <div className="file" key={id}>
      🗄 {name}
    </div>
  );
};

const FileExplorer = ({ folderData }) => {
  const [expand, setExpand] = useState(false);
  const [edit, setEdit] = useState(false);

  const { children: innerFolderDataList, name, id } = folderData;
  const innerFolderDataStructure = innerFolderDataList.map(
    makeInnerFolderDataStructure
  );

  const handleFolderClick = () => {
    setExpand((prev) => !prev);
  };

  const handleEdit = (id) => () => {
    setEdit((prev) => !prev);
  };

  return (
    <div className="folder">
      <div className="folderName">
        {edit ? (
          <>
            <input></input>
            <div onClick={handleEdit(id)}>Cancel</div>
          </>
        ) : (
          <>
            <div onClick={handleFolderClick}>🗂 {name}</div>
            <div onClick={handleEdit(id)}>Edit</div>
          </>
        )}
      </div>
      {expand ? <div>{innerFolderDataStructure}</div> : null}
    </div>
  );
};

export default FileExplorer;
