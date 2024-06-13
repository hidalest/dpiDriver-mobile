export interface LoginProps {
    onSignIn: (username: string, password: string) => void;
    loginLogoAltText: string;
    loginHeader: string;
    loginSlogan: string;
    loginUsernamePlaceholder: string;
    loginPasswordPlaceholder: string;
    loginButtonText: string
}