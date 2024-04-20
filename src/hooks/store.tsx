import React, { createContext, useContext, useEffect, useState } from 'react'

type ContextProps = {
  sidebar: boolean
  setSidebar: (x: boolean) => void
}

export const AppContext = createContext<ContextProps>({
  sidebar: true,
  setSidebar: (x: boolean) => x,
})

export default function AppProvider({ children }: React.PropsWithChildren) {
  const [sidebar, setSidebar] = useState<boolean>(localStorage.getItem('sidebar') === 'true')

  useEffect(() => {
    localStorage.setItem('sidebar', JSON.stringify(sidebar))
  }, [sidebar])

  const store = { sidebar, setSidebar }

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
