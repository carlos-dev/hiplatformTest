import ListNode from './components/listNode';

import data from './data.json';

const App = () => {
  return (
    <div className="container">
      <h1>Árvore de itens</h1>
      <ListNode data={data} />
    </div>
  );
}

export default App;
