// Dependencias
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeConfig } from "./config/theme.config.tsx";
import i18n, { initI18n } from "./config/i18next.config.ts";
import { I18nextProvider } from "react-i18next";

//Axios URL usada como base
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "http://dirección.del.deploy.del.back";

//Redux
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

// Components defined
import App from "./App.tsx";

// Types & Configs
import "./index.css";

initI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeConfig>
          <App />
        </ThemeConfig>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
