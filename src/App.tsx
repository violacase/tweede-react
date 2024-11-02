import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopMenu } from "@/components/TopMenu";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Gallery } from "@/pages/Gallery";
import { FullGallery } from "@/pages/FullGallery";
import { SwipeGallery } from "@/pages/SwipeGallery";
import { YALightboxGallery } from "@/pages/YALightboxGallery";

export function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="app-theme">
        <div className="min-h-screen bg-background">
          <TopMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/fullgallery" element={<FullGallery />} />
            <Route path="/swipe" element={<SwipeGallery />} />
            <Route path="/yalightbox" element={<YALightboxGallery />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}