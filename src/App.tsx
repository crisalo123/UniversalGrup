import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';


import './index.css'
import RoutesComponent from './feature/routes';
import { ModalProvider } from './context/modalContex';


function App() {

  return (
    <ModalProvider>
      <Router>
      <Routes>
        {RoutesComponent.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, idx) =>
              child.index ? (
                <Route key={idx} index element={child.element} />
              ) : (
                <Route key={idx} path={child.path} element={child.element} />
              )
            )}
          </Route>
        ))}
      </Routes>
    </Router>
    </ModalProvider>
  )
}

export default App
