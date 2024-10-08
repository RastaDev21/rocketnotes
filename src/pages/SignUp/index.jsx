import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salver e gerenciar seus links úteis.</p>
        <h2>Crie sua conta </h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="senha" type="password" icon={FiLock} />
        <Button title="Cadastrar"></Button>
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
