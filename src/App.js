import { Router } from 'react-router-dom'

import Routes from './routes'
import { AuthProvider } from './context/authContext'
import history from './history'

import 'react-router-modal/css/react-router-modal.css'

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  )
}

export default App;
