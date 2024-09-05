import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardSection from './CardSection.jsx';
import UperSection from './UperSection.jsx';
import datab from './Data.jsx';

function App() {
  const data = datab;

  return (
    <>
      <UperSection />
      <CardSection data={data} />
    </>
  );
}

export default App;
