import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/NoteDetailPage'

const App = () => {
  return (<div data-theme="dracula">
  <button className="btn btn-active">Default</button>
  <button className="btn btn-active btn-neutral">Neutral</button>
  <button className="btn btn-active btn-primary">Primary</button>
  <button className="btn btn-active btn-secondary">Secondary</button>
  <button className="btn btn-active btn-accent">Accent</button>
  <button className="btn btn-active btn-ghost">Ghost</button>
  <button className="btn btn-active btn-link">Link</button>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<DetailPage />} />
    </Routes>
  </div>
  )
}

export default App