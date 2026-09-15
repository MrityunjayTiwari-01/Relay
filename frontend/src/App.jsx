import { useAuth } from '@clerk/react'
import { ThemeProvider } from './context/themecontext'
import { WallpaperProvider } from './context/WallpaperContext'
import {  Navigate, Route, Routes } from 'react-router'
import ChatPage from './page/ChatPage'
import AuthPage from './page/AuthPage'
import PageLoader from './component/PageLoader'

function App() {
  const {isSignedIn,isLoaded} = useAuth();
  if(!isLoaded) return <PageLoader />
  return (
    <>
      <ThemeProvider>
        <WallpaperProvider>
          <Routes>
            <Route path="/" element= { isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace /> } />
            <Route path="/auth" element= { !isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace /> } />
          </Routes>
        </WallpaperProvider>
      </ThemeProvider>
    </>
  )
}

export default App
