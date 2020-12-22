import styled from '@emotion/styled';
import { useState } from 'react';
import FileInput from './components/FileInput';
import DocumentLoader from './layout/DocumentLoader';

const PdfViewer = (props) => {
  const [file, setFile] = useState();

  return (
    <Layout {...props}>
      {!file && <FileInput onFile={setFile} />}
      <DocumentLoader url={file} />
    </Layout>
  );
};

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PdfViewer;
