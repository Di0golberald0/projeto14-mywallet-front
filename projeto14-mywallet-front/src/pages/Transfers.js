import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function Transfers() {
    const { user } = useContext(UserContext);
    const [transfersList, setTransfersList] = useState([]);
  
    useEffect(() => {
      async function getTransfersList() {
        try {
          const { data } = await axios.get('http://localhost:5000/transfers', {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          });
          console.log(data);
          setTransfersList(data);
        } catch (error) {
          alert('Erro ao chamar lista de transferências');
          console.error(error.response);
        }
      }
  
      getTransfersList();
    }, []);
  
    function showTransfers() {
      return transfersList.map((t, index) => (
        <p key={index} style={t.type === 'entry' ? { color: 'green' } : { color: 'red' }}>
          {t.createAt} | {t.description} | {t.value}
        </p>
      ));
    }
  
    function calculateBalance() {
      if (transfersList.length > 0) {
        return transfersList.reduce((previous, current) => {
          if (current.type === 'entry') {
            return previous + current.value;
          }
  
          return previous - current.value;
        }, 0);
      } else {
        return 0;
      }
    }
  
    const balance = calculateBalance();
  
    return (
      <div className="">
        <p>Olá {user.name}</p>
        <Link to="/"> Sair </Link>
        <div style={{ backgroundColor: 'white', width: 200, height: 250 }}>
          {transfersList.length > 0 ? (
            <p style={{ color: 'gray', fontSize: 12 }}>
              Lista de transações
              <p>{showTransfers()}</p>
            </p>
          ) : (
            <span style={{ color: 'gray', fontSize: 12 }}>
              Não há registros de entrada ou saída
            </span>
          )}
          <h4>Saldo: {balance}</h4>
        </div>
        <p>
          <Link to="/entry">Nova Entrada</Link> |{' '}
          <Link to="/exit">Nova Saída</Link>
        </p>
      </div>
    );
}

export default Transfers;