import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EvLab from "./pages/EvLab";
import UnderConstruction from "./pages/UnderConstruction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ev-lab" element={<EvLab />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/drone-lab" element={<UnderConstruction title="Drone Lab - Coming Soon" />} />
          <Route path="/automotive-lab" element={<UnderConstruction title="Automotive Lab - Coming Soon" />} />
          <Route path="/3d-printing-lab" element={<UnderConstruction title="3D Printing Lab - Coming Soon" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
