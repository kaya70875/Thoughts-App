import './App.css'
import Editor from './components/Editor'
import History from './components/History'
import { FormProvider } from './context/FormContext'
import './index.css'

function App() {
  return (
    <FormProvider>
      <div className="bg-background w-screen h-screen flex">
        <Editor />
        <History />
      </div>
    </FormProvider>
    
  )
}

export default App
