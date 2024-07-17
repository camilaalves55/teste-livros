import React, { useState, useCallback } from 'react';
import logo from './livro-imagem.png';
import './App.css';
import Leitura from './components/Leitura';

function App() {
  const [livros, setLivros] = useState([
    { id: 1, text: "Daisy Jones & the Six" },
    { id: 2, text: "A Hipótese do Amor" },
    { id: 3, text: "Teto Para Dois" },
  ]);

  const [novoLivro, setNovoLivro] = useState('');
  const [livroEdicao, setLivroEdicao] = useState(null);  // Para gerenciar a edição de livros

  const adicionarLivro = () => {
    if (novoLivro.trim()) {
      setLivros((prevLivros) => [
        ...prevLivros,
        { id: Date.now(), text: novoLivro.trim() },
      ]);
      setNovoLivro('');
      setLivroEdicao(null);  // Limpar estado de edição após adicionar
    }
  };

  const editarLivro = (id, novoTexto) => {
    setLivros((prevLivros) =>
      prevLivros.map((livro) =>
        livro.id === id ? { ...livro, text: novoTexto } : livro
      )
    );
    setLivroEdicao(null);  // Limpar estado de edição após editar
  };

  const removerLivro = (id) => {
    setLivros((prevLivros) => prevLivros.filter((livro) => livro.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <h2>Lista de Livros Para Ler</h2>
        <div className="livro-form">
          <input type="text" value={novoLivro} onChange={(e) => setNovoLivro(e.target.value)} placeholder={livroEdicao ? 'Edite o livro' : 'Digite um novo livro'}>
          
          </input>

          <button className='botao-input' onClick={() => (livroEdicao ? editarLivro(livroEdicao.id, novoLivro) : adicionarLivro())}>
            {livroEdicao ? 'Atualizar Livro' : 'Adicionar Livro'}
          </button>
         
        </div>
        <Leitura livros={livros} removerLivro={removerLivro} setLivroEdicao={setLivroEdicao} />
      </div>
    </div>
  );
}

export default App;











// import logo from './livro-imagem.png';
// import './App.css';
// import React, { useState, useCallback } from 'react';
// import Livros from './components/Atividade';
// import ListaLivros from './components/Leitura';


// function App() {

//   const livros = [
//     {id: 1, text: "Harry Potter"},
//     {id: 2, text: "A Hipótese do Amor"},
//     {id: 3, text: "Teto Para Dois"},
//   ];

//   const [tarefas, setTarefas] = useState([]);
//   const [novaTarefa, setNovaTarefa] = useState('');
//   const adicionarTarefa = useCallback(() => {
//     if (novaTarefa.trim()) {
//       setTarefas((prevTarefas) => [...prevTarefas, novaTarefa.trim()]);
//       setNovaTarefa('');
//     }
//   }, [novaTarefa]);

//   const handleChange = (event) => {
//     setNovaTarefa(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     adicionarTarefa();
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//         <div className='container'>
//           <h2>Lista de Livros Para Ler</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="text" value={novaTarefa} onChange={handleChange} placeholder="Digite uma nova tarefa"/>
//             <button type="submit">Adicionar</button>
//           </form>
//         <Livros tarefas={tarefas} />
//         <ListaLivros livros={livros}/>
//         </div>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import React, { useState, useCallback } from 'react';
// import ListaTarefas from './components/ListaTarefas';

// const App = () => {
//   const [tarefas, setTarefas] = useState([]);
//   const [novaTarefa, setNovaTarefa] = useState('');
//   const adicionarTarefa = useCallback(() => {
//     if (novaTarefa.trim()) {
//       setTarefas((prevTarefas) => [...prevTarefas, novaTarefa.trim()]);
//       setNovaTarefa('');
//     }
//   }, [novaTarefa]);

//   const handleChange = (event) => {
//     setNovaTarefa(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     adicionarTarefa();
//   };

//   return (
//     <div>
//       <h1>Lista de Tarefas</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={novaTarefa}
//           onChange={handleChange}
//           placeholder="Digite uma nova tarefa"
//         />
//         <button type="submit">Adicionar</button>
//       </form>
//       <ListaTarefas tarefas={tarefas} />
//     </div>
//   );
// };

// export default App;

