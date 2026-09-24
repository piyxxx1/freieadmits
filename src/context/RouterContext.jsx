/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    // Normalization: fallback to '/' if root or empty
    const path = window.location.pathname;
    return path || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path, scrollToTop = true) => {
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className = '', activeClassName = '', onClick, ...props }) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;
  const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={to} className={combinedClassName} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
