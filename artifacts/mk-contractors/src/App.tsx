import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import PublicSector from "@/pages/services/public-sector-infrastructure";
import CommercialSite from "@/pages/services/commercial-site-development";
import UtilityExcavation from "@/pages/services/utility-excavation";
import StormwaterManagement from "@/pages/services/stormwater-management";
import SiteRestoration from "@/pages/services/site-restoration";

import { LocalBusinessSchema } from "@/components/Schema";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={About} />
      <Route path="/services/public-sector-infrastructure" component={PublicSector} />
      <Route path="/services/commercial-site-development" component={CommercialSite} />
      <Route path="/services/utility-excavation" component={UtilityExcavation} />
      <Route path="/services/stormwater-management" component={StormwaterManagement} />
      <Route path="/services/site-restoration" component={SiteRestoration} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "") || ""}>
          <div className="dark">
            <ScrollToTop />
            <LocalBusinessSchema />
            <Router />
            <Toaster />
          </div>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
