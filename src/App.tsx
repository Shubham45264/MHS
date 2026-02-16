import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";

// ✅ Service Pages (should be inside /pages folder)
import BoomLift from "./components/BoomLift";
import ScissorLift from "./components/ScissorLift";
import TruckMountedManLift from "./components/TruckMounted";
import Cranes from "./components/Cranes";
import Gallery from "./components/Gallery"; // ✅ NEW

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>

            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* About */}
            <Route path="/about" element={<About />} />

            {/* Services Main Page */}
            <Route path="/services" element={<Services />} />

            {/* Dedicated Service Pages */}
            <Route path="/services/boom-lift" element={<BoomLift />} />
            <Route path="/services/scissor-lift" element={<ScissorLift />} />
            <Route
              path="/services/truck-mounted-manlift"
              element={<TruckMountedManLift />}
            />
            <Route path="/services/cranes" element={<Cranes />} />

            {/* ✅ Gallery Page */}
            <Route path="/gallery" element={<Gallery />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
