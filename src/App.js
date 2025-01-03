import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { auth } from './firebase/init.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

function App() {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then(({ user }) => {
      console.log(user)
      setUser(user)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  function logout() {
    signOut(auth)
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar 
        user={user}
        logout={logout}
        register={register}
        login={login}
      />

      {loading ? (
        'loading...' 
        ) : user ? (
          // Only show email if the user is not null
          <div>{user?.email}</div>
        ) : (
          <div>Please Log In</div>
        )}     
    </div>
  )
}

export default App;
