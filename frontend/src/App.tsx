import './App.css'
import Dashboard from './components/dashboard'
import Nav from './components/nav'

function App() {

  return (
    <div className='w-screen h-screen m-auto bg-slate-600 text-white'>
      <Nav />
      <Dashboard />
    </div>
  )
}

export default App
