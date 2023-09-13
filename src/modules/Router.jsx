/** 
 * Provides a route component to listen to route changes and renders correct pages 
 * Provides a link component that triggers a route change (which the Route can listen to)
 * Provides a Router component that provides the routes with the updated routes (like BrowserRouter)
 * 
 * Note: Currently supports only path changes, hash and search changes to the url are not handled. use regular link tags <a /> for those use-cases
*/

import React from 'react'

const routerContext = React.createContext();

const Router = ({children}) => {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
    const [currentHash, setCurrentHash] = React.useState(window.location.hash);

    function handleNavigation(e){
        setCurrentPath(window.location.pathname);
    }

    React.useEffect(() => {
        console.log('setting currentPath ', currentPath)
    }, [currentPath])

    React.useEffect(() => {
        window.addEventListener('navigate', handleNavigation)
        window.addEventListener('popstate', handleNavigation)

        return () => {
            window.removeEventListener('navigate', handleNavigation);
            window.removeEventListener('popstate', handleNavigation);
        }
    },[]);

    React.useEffect(() => {
        setCurrentPath(window.location.pathname)
    })
    
    return (
        <routerContext.Provider value={{currentPath}}>
            {children}
        </routerContext.Provider>
    )
}

const Route = ({path, children}) => {
    const {currentPath} = React.useContext(routerContext);
    const [matchPath, setMatchPath] = React.useState(false);

    React.useEffect(() => {
        if(currentPath === path){
            setMatchPath(true);
        }
        else{
            setMatchPath(false)
        }
    }, [currentPath, path])
  return (
    <>
        {matchPath ? children: null}
    </>
  )
}

const Link = ({to, className='', children}) => {
    function handleClick(e){
        e.preventDefault();
        window.history.pushState({}, '', to);
        const navigationEvent = new PopStateEvent('navigate')
        window.dispatchEvent(navigationEvent)
    }

    return <a className={className} href={to} onClick={handleClick}>{children}</a>
}

export { Router, Route, Link };