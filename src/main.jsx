import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import firebaseConfig from './firebase-config.jsx'
import {
  FirebaseAppProvider
} from 'reactfire'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  </FirebaseAppProvider>,
)
