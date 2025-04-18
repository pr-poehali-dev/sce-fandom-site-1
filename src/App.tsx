import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ObjectPage from "./pages/ObjectPage";
import SeriesPage from "./pages/SeriesPage";
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
          <Route path="/object/:id" element={<ObjectPage />} />
          <Route path="/series/:seriesId" element={<SeriesPage />} />
          {/* Добавляем маршруты для прямого доступа к сериям */}
          <Route path="/series-i" element={<SeriesPage />} />
          <Route path="/series-ii" element={<SeriesPage />} />
          <Route path="/series-iii" element={<SeriesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
