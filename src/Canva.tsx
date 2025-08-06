import React from 'react';

const Excalidraw = React.lazy(() =>
  import('@excalidraw/excalidraw').then(module => ({ default: module.Excalidraw }))
);

function Canva() {

  return (
    <div className="h-[100vh] flex justify-center items-center bg-neutral-900 text-grey-100">
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Excalidraw theme="dark"/>
      </React.Suspense>
    </div>
  );
}

export default Canva;