import s from './App.module.css';

function App() {
  return (
    <div>
      <table className={s.table}>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>phone</td>
          <td>mail</td>
          <td>city</td>
          <td>ip</td>
          <td>card</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
