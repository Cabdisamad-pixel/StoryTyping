
import { createRoot } from 'react-dom/client'
import App from './app'
import AuthProvider from './store/Auth/Auth'
const root = createRoot(document.getElementById('root'))

root.render(<AuthProvider><App/></AuthProvider>)