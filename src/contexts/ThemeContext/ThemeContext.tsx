import React, { createContext, useState, useContext } from "react"

interface Theme {
  mode: "dark" | "light" | "portal"
}

const initialTheme: Theme = {
  mode:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
}

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  forceTheme: () => void
  revertTheme: () => void
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  toggleTheme: () => {},
  forceTheme: () => {},
  revertTheme: () => {},
})
export const useTheme = () => useContext(ThemeContext)

interface Props {
  children: React.ReactElement
}

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState(initialTheme)
  const [revert, setRevert] = useState(initialTheme)

  const toggleTheme = () => {
    const newTheme: Theme = {
      mode: theme.mode === "dark" ? "light" : "dark",
    }
    setTheme(newTheme)
  }

  const forceTheme = () => {
    // force a theme for a certain view with intent to revert to user-specified
    setRevert(theme)
    setTheme({ mode: "portal" })
  }

  const revertTheme = () => {
    // revert from a forced theme
    setTheme(revert)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, forceTheme, revertTheme }}
    >
      <div className={`app--${theme.mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
