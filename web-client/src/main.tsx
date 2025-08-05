import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './lib/redux/store'
import { AuthProvider } from './components/AuthProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
        
      </Provider>
  </StrictMode>,
)
