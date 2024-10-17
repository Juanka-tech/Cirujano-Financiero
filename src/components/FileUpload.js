import React from 'react';

function FileUpload({ onUpload }) {
  return (
    <div className="file-upload">
      <h3>Sube tus Archivos Simulados</h3>
      <button onClick={onUpload} className="btn btn-primary">Cargar Archivos Simulados</button>
    </div>
  );
}

export default FileUpload;