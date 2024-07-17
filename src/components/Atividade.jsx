// import React from 'react';

// const Livros = ({ livros }) => {
//   return (
//     <ul>
//       {livros.map((livro, index) => (
//         <li key={index}>{livro}</li>
//       ))}
//     </ul>
//   );
// };

// export default Livros;


import React from 'react';

const Atividade = ({ tarefas }) => {
  return (
    <div>
      <h3>Tarefas:</h3>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default Atividade;
