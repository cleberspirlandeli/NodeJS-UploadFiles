import React from 'react';
// import

import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="https://avatars3.githubusercontent.com/u/34013079?s=460&v=4"/>
                <div>
                    <strong>profine.png</strong>
                    <span>64kb <button onClick={()=>{}}>Excluir</button> </span>
                </div>
            </FileInfo>


        </li>
    </Container>
);

export default FileList;
