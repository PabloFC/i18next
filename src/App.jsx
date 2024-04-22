import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
const {t,i18n} = useTranslation('home')

function changeLanguage(){
  i18n.language==="es"
  ? i18n.changeLanguage("en")
  :i18n.changeLanguage("es")
}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <h4>{t('title',{name:"Pablo"})}</h4> */}
        <p dangerouslySetInnerHTML={{__html:t('title',{name:"Pablo"})}}></p>
        <p>Idioma actual: {i18n.language}</p>
        <button onClick={changeLanguage}>{t('button')}</button>
      </div>
     
    </>
  )
}

export default App
