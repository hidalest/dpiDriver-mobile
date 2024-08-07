export interface LoginProps {
  isLoading: boolean;
  isError: boolean;
  onSignIn: (username: string, password: string) => void;
  loginLogoAltText: string;
  loginHeader: string;
  loginSlogan: string;
  loginUsernamePlaceholder: string;
  loginPasswordPlaceholder: string;
  loginButtonText: string;
  forgotButton: string;
  forgotPasswordModalInstructions: string;
  errorLoginMessage: string;
}
