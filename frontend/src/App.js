import React, { Component } from 'react';

import GlobalStyle from './styles/global'
import { Container, Content } from './styles'

import Upload from './components/Upload'; 

class App extends Component {
  render() {
    return (
      <Container>
      <GlobalStyle />
      <Content> 
        <Upload /> 
      </Content>
      </Container>
    )
  }
}

export default App;
