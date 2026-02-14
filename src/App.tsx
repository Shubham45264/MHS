import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import ProductServices from "./pages/ProductServices";
import IndustrialServices from "./pages/IndustrialServices";
import RentalServices from "./pages/RentalServices";
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

            {/* Individual Service Pages */}
            <Route path="/product-services" element={<ProductServices />} />
            <Route path="/industrial-services" element={<IndustrialServices />} />
            <Route path="/rental-services" element={<RentalServices />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
