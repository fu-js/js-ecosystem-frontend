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

export {};
