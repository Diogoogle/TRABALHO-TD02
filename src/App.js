import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Admin from './components/pages/Admin'
import Professores from './components/pages/Professores'
import Profissionais from './components/pages/Profissionais'
import Alunos from './components/pages/Alunos'
import Eventos from './components/pages/Eventos'
import Agendamentos from './components/pages/Agendamentos'
import Usuarios from './components/pages/Usuarios'


import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <ul>
        <Navbar />
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/professores" element={<Professores />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
