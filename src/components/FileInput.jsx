import { useRef } from 'react';

const FileInput = ({ onFile, ...rest }) => {
  const ref = useRef();

  return (
    <input
      ref={ref}
      type="file"
      onChange={() => onFile(ref.current?.files[0])}
      {...rest}
    />
  );
};

export default FileInput;
