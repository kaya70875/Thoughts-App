import './App.css'
import Editor from './components/Editor'
import History from './components/History'
import { FormProvider } from './context/FormContext'
import './index.css'
import '../src/css/ScrollBar.css'

function App() {
  return (
    <FormProvider>
      <div className="bg-background w-screen h-screen flex overflow-hidden">
        <Editor />
        <div className='flex-1 overflow-auto overflow-x-hidden smooth-scroll'>
          <History />
        </div>
      </div>
    </FormProvider>
    
  )
}

export default App
