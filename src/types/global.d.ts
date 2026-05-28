declare global {
  interface Window {
    recaptchaVerifier: unknown;
    confirmationResult: unknown;
  }
}

export {};