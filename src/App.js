import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import axios from 'axios';
import {Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';


function App() {

  const baseurl="https://localhost:7044/v1/Aluno";

  const [data,setData] = useState([]);

  const alunosGet = async() => {
    await axios.get(baseurl)
    .then(response => {

      setData(response.data); 

    }).catch(err => {
      
      console.log(err);

    })
  }

  useEffect(() => {
    alunosGet();  
},[])

  return (
    <div className="App">
      <header className="App-header">        
        <button className="btn btn-sucess">Incluir Novo Aluno</button>
      </header>
      <table>
        <thead>
           <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Idade</th>
              <th>Operação</th>
           </tr>
        </thead>
        <tbody>
          {
            data.map(aluno =>(
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.email}</td>
                <td>{aluno.idade}</td>
                <td>
                    <button className="btn btn-primary">Editar</button>{"  "}
                    <button className="btn btn-danger">Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
