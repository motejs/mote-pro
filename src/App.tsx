import { useRoutes } from 'react-router-dom';
import { routers } from './routers'

// 全局样式
import './App.css';

function App() {
  return useRoutes(routers);
}

export default App;
