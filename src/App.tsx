import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Remove GeistSans import as it's Next.js specific
import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-blue-100 selection:text-[#003566] font-sans">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App