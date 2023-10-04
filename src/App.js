import React from 'react';
import {
  Container,
  Link,
  Paragrafo,
  Body,
  FormDiv,
  Input,
  Label,
  H2,
  Button,
} from './style';

const App = () => {
  const textLogin = 'Seja bem vindo';
  const textButton = 'Login';
  const textPara = 'Nao tem conta?';
  const textCreateLogin = 'Criar';

  return (
    <Body>
      <Container>
        <FormDiv>
          <H2>{textLogin}</H2>
          <Label for="nome">Nome</Label>
          <Input id="nome" placeholder="Digite seu nome"></Input>
          <Label for="senha">Senha</Label>
          <Input type="password" placeholder="Digite seu nome"></Input>
          <Button>{textButton}</Button>
          <Paragrafo>{textPara} <Link>{textCreateLogin}</Link> </Paragrafo>
        </FormDiv>
      </Container>
    </Body>
  );
};

export default App;
