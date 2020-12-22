import { createContext } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { useAsyncEffect } from '@react-hook/async';

export const PdfDocumentContext = createContext({});

const DocumentLoader = ({ children, url }) => {
  const { value, error } = useAsyncEffect(() => {
    GlobalWorkerOptions.workerSrc = 'pdf.worker.js';
    const path = URL.createObjectURL(url);
    const task = getDocument({ url :path });
    task.onPassword = () => prompt('The document is password protected');
  }, [url]);
  console.log('value: ', value);
  console.log('error: ', error);

  return (
    <PdfDocumentContext.Provider value={value ?? {}}>
      {children}
    </PdfDocumentContext.Provider>
  );
};

export default DocumentLoader;
