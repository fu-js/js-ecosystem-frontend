declare module "nuxt/schema" {
  interface AppConfig {
    ui: {
      colors: {
        primary: string;
        secondary: string;
        info: string;
        success: string;
        warning: string;
        error: string;
        neutral: string;
        bcm: string;
        bdn: string;
        bnd: string;
        btt: string;
        bvh: string;
      };
    };
  }

  interface SharedPublicRuntimeConfig {
    apiUrl: string;
    googleClientId: string;
  }
}

declare global {
  interface Window {
    handleCredentialResponse: (response: any) => void;
  }
}

export {};
