import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBounary";
import "./index.css";

const elem = document.getElementById("root");
if (!elem) {
  throw new Error("Unable to initialize: Cannot find #root.");
}

// TODO: Inject this from an environment variable
const GOOGLE_CLIENT_ID =
  "939646942886-1ur1kf4vgq1im89i26igcfn6n2uf7600.apps.googleusercontent.com";

const app = (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  </GoogleOAuthProvider>
);

if (import.meta.hot) {
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  createRoot(elem).render(app);
}
