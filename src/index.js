
import { createRoot } from 'react-dom/client'
import App from './App'
import AuthProvider from './store/Auth/Auth'
import UserProvider from './store/UserData/UserProvider'
const root = createRoot(document.getElementById('root'))

root.render(
    <AuthProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </AuthProvider>
)