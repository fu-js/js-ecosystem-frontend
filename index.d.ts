declare module "nuxt/schema" {
  interface AppConfig {
    debug: {
      enable: boolean;
    };
    ui: {
      colors: {
        debug: "debug" | "transparent";
      };
    };
  }
}

declare global {
  interface Window {
    handleCredentialResponse: (response: any) => void;
  }
}

export {};
