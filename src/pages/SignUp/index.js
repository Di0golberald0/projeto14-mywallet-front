import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigator = useNavigate();
  
  async function handleSubmit(e) {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert('Senhas precisam ser iguais!');
      return;
    }

    const body = { name, email, password };
    try {
      console.log(body)
      await axios.post('http://localhost:5000/sign-up', body);
      navigator('/');
    } catch (error) {
      console.error('Erro ao cadastrar o usuário');
    }
  }
  
  return (
    <div className="">
      <form>
        <input type="text" onChange={e => setName(e.target.value)} placeholder="Nome" />
        <br />
        <input type="text" onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
        <br />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <input
          type="password"
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirme a Senha"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Cadastrar
        </button>
        <p>
          <Link to="/" style={{ fontSize: 14, color: 'white' }}>
            Já tem uma conta? Entre agora!
          </Link>
        </p>
      </form>
    </div>
  );
}