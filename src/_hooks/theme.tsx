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
    hover: string
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
  contrast: "#0c0c0c",
  contrastLight: '#888',
  settings: {
    normalTransition: 0.3,
    iconSize: 24,
  },
  input: {
    background: "#F0F0F0",
    hover: "#FcFdFc"
  },
  notification:{
    success: {
      default: '#28be8e',
      background: '#F0FFF0' 
    },
    warning: {
        default: '#ffe100',
        background: '#fffff0' 
    },
    error: {
        default: '#ff0000',
        background: '#fff0f0' 
    },
    report: {
        default: '#0089ff',
        background: '#f0f0ff'
    }
  },
  background: "#e8f4ea",
  backgroundSnd: "#b8d8be",
  backgroundTer: "#d2e7d6",
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
  contrast: "#fcfcfc",
  contrastLight: "#6a6a6a",
  settings: {
    normalTransition: 0.3,
    iconSize: 24,
  },
  input: {
    background: "#333333",
    hover: '#444'
  },
  notification: {
    success: {
      default: "#ceffd0",
      background: "#81C784",
    },
    warning: {
      default: "#ffe6c1",
      background: "#FFB74D",
    },
    error: {
      default: "#ffc5c5",
      background: "#E57373",
    },
    report: {
      default: "#adbdf7",
      background: "#64B5F6",
    },
  },
  background: "#252b25",
  backgroundSnd: "#6c7c6c",
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