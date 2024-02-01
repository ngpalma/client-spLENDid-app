// Dependencias
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const initI18n = async () => {
  const currentLanguage = localStorage.getItem("language") || "es";
  try {
    await i18n.use(initReactI18next).init({
      resources: {
        es: {
          translation: {
            documentTitle: "spLENDid - Rentas en comunidad",
            rent: "Renta",
            whatYouWant: "lo que quieras",
            inYourCommunity: "en tu comunidad",
            searchBarText: "Encuentra lo que estás buscando",
            search: "Buscar",
            day: "día",
            firstName: "Nombre",
            lastName: "Apellido",
            emailAddress: "Dirección de Email",
            password: "Contraseña",
            signUp: "Registrarse",
            signIn: "Ingresa aquí",
            haveAccount: "Ya tienes una cuenta?",
            repeat: "Repetir",
            termsServices: "Acepto los términos y condiciones del servicio.",
          },
        },
        en: {
          translation: {
            documentTitle: "spLENDid - Renting in community",
            rent: "Find",
            whatYouWant: "whatever you want",
            inYourCommunity: "in your community",
            searchBarText: "Find what you are looking for",
            search: "Search",
            day: "day",
            firstName: "First Name",
            lastName: "Last Name",
            emailAddress: "Email Address",
            password: "Password",
            signUp: "Sign Up",
            signIn: "Sign In",
            haveAccount: "Already have an account?",
            repeat: "Repeat",
            termsServices: "I accept the terms and conditions of the service.",
          },
        },
      },
      // Default language
      lng: currentLanguage,
      // Fallback language -> si no encuentra un idioma, utiliza ingles
      fallbackLng: "en",
      // OJO!! precaución para evitar vulnerabilidades de seguridad si los valores interpolados provienen de fuentes no confiables.
      interpolation: {
        escapeValue: false,
      },
    });
  } catch (error) {
    console.error("Error initializing i18next:", error);
  }

  return i18n;
};

const i18nInstance = await initI18n();

export default i18nInstance;
