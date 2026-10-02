import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/NoteDetailPage'

const App = () => {
  return (<div data-theme="dracula">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<DetailPage />} />
    </Routes>
  </div>
  )
}

export default App