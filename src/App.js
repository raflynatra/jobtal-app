import { BrowserRouter } from "react-router-dom";
import { JobVacancyProvider } from "./context/JobVacancyContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <JobVacancyProvider>
          <AppRoutes />
        </JobVacancyProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
