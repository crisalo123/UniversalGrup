import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';


import './index.css'
import RoutesComponent from './feature/routes';


function App() {

  return (
    <Router>
    <Routes>
      {RoutesComponent.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  </Router>
  )
}

export default App
