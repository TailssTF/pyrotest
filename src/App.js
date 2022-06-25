import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import PromoBlock from './Components/PromoBlock';
import ChooseBlock from './Components/ChooseBlock';
import InfoBlock from './Components/InfoBlock';
import AllinclusiveBlock from './Components/AllinclusiveBlock';
import TabletBlock from './Components/TabletBlock';



function App() {
  return (
    <div className='App'>
      <Header />
      <Menu />
      <PromoBlock />
      <ChooseBlock />
      <InfoBlock /> 
      <AllinclusiveBlock />
      <TabletBlock />
    </div>
  );
}
export default App;
