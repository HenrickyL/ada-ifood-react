import { createContext, useContext, useMemo, useState } from "react";
import GlobalStyle from "../globalCss"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

interface ThemeContextData {
    theme: Theme,
    toggle():void,
    changeToTheme(theme: 'dark'|'light'): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);


export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [theme, setTheme] = useState<Theme>(lightTheme)

    function toggle():void{
        changeToTheme(theme === lightTheme? 'dark' : 'light' )
    }

    function changeToTheme(theme: 'dark'|'light'): void{
        setTheme(theme === 'dark'? darkTheme : lightTheme)
    }
    
    const providerData = useMemo<ThemeContextData>(
        () => ({
            theme,
            toggle,
            changeToTheme
        }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={providerData}>
            <StyledThemeProvider theme={providerData.theme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}


export const useTheme = () :ThemeContextData =>{
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error('useTheme must be used within an ThemeProvider');
    return context;
}


interface ThemeSettings{
    fastTransition?: number,
    normalTransition: number,
    slowTransition?: number,
    iconSize: number,
  }

interface ThemeNotificationFields{
  default: string,
  background?: string
}
  
  interface ThemeNotification{
    success: ThemeNotificationFields,
    warning: ThemeNotificationFields,
    error: ThemeNotificationFields,
    report: ThemeNotificationFields,
  }
  
  interface ThemeInputsSettings{
    background: string,
  }
  
  export interface Theme {
    text: string,
    text2?: string,
    text3?: string,
  
    contrast: string,
    contrastLight?: string,
  
    settings:ThemeSettings,
    input: ThemeInputsSettings,
  
    notification: ThemeNotification,
    background: string;
    backgroundSnd: string;
    backgroundTer: string;
    black: string;
    black2: string;
    black3: string;
    white: string;
    white2: string;
    white3: string;
    gray: string;
    primary: string;
    primaryLight?: string;
    secondary: string;
    secondaryLight?: string;
    tertiary?: string;
    tertiaryLight?: string;
  }
  
// Tema Light
export const lightTheme: Theme = {
  text: "#000000",
  contrast: "#FFFFFF",
  settings: {
    normalTransition: 0.3,
    iconSize: 24,
  },
  input: {
    background: "#F0F0F0",
  },
  notification: {
    success: {
      default: "#4CAF50",
    },
    warning: {
      default: "#FF9800",
    },
    error: {
      default: "#F44336",
    },
    report: {
      default: "#2196F3",
    },
  },
  background: "#FFFFFF",
  backgroundSnd: "#F0F0F0",
  backgroundTer: "#C8C8C8",
  black: "#000000",
  black2: "#333333",
  black3: "#666666",
  white: "#FFFFFF",
  white2: "#F0F0F0",
  white3: "#C8C8C8",
  gray: "#9E9E9E",
  primary: "#4CAF50",
  secondary: "#8BC34A",
};

// Tema Dark
export const darkTheme: Theme = {
  text: "#FFFFFF",
  contrast: "#000000",
  settings: {
    normalTransition: 0.3,
    iconSize: 24,
  },
  input: {
    background: "#333333",
  },
  notification: {
    success: {
      default: "#81C784",
      background: "#2E7D32",
    },
    warning: {
      default: "#FFB74D",
      background: "#FF6D00",
    },
    error: {
      default: "#E57373",
      background: "#C62828",
    },
    report: {
      default: "#64B5F6",
      background: "#1565C0",
    },
  },
  background: "#424242",
  backgroundSnd: "#616161",
  backgroundTer: "#757575",
  black: "#FFFFFF",
  black2: "#F0F0F0",
  black3: "#C8C8C8",
  white: "#000000",
  white2: "#333333",
  white3: "#666666",
  gray: "#9E9E9E",
  primary: "#81C784",
  secondary: "#AED581",
};

  
export const notificationColors = {
  success: (props: any) => props.theme.notification.success,
  warning: (props: any) => props.theme.notification.warning,
  error: (props: any) => props.theme.notification.error,
  report: (props: any) => props.theme.notification.report
};