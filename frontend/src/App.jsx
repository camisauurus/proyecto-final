import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";

// Components
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// Views
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Gallery from "./views/Gallery";
import ProductDetail from "./views/ProductDetail";
import CreatePublication from "./views/CreatePublication";
import Profile from "./views/Profile";

function App() {
  return (
    <BrowserRouter>
      <SessionProvider>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: '1' }}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/catalogo" element={<Gallery />} />
              <Route path="/publicacion/:id" element={<ProductDetail />} />

              {/* Private Routes */}
              <Route 
                path="/publicar" 
                element={
                  <PrivateRoute>
                    <CreatePublication />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/perfil" 
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
          <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--border-color)', marginTop: '2rem' }}>
            <small>© {new Date().getFullYear()} MinimalStore. Todos los derechos reservados.</small>
          </footer>
        </div>
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;
