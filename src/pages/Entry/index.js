import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

export default function Entry() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
  
    const { user } = useContext(UserContext);
    const navigator = useNavigate();
  
    async function handleSubmit(e) {
      e.preventDefault();
      const body = {
        description,
        type: 'entry',
        value: parseFloat(value)
      };

      const headers = {
        headers: { Authorization: `Bearer ${user.token}` }
      };

      try {
        await axios.post('http://localhost:5000/transfer', body, headers);
        alert('Nova entrada adicionada');
        navigator('/transfer');
      } catch (error) {
        alert('Erro ao enviar nova entrada');
        console.log(error.response);
      }
    }
  
    return (
      <div>
        <h1>Nova entrada</h1>
        <form>
          {/* valor */}
          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
  
          {/* valor */}
          <input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
  
          <button type="submit" onClick={handleSubmit}>
            Salvar entrada
          </button>
        </form>
      </div>
    );
}