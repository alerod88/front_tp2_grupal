import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    
    window.scrollTo(0, 0);

    const contenidoDashboard = document.querySelector('.dashboard-content');
    if (contenidoDashboard) {
      contenidoDashboard.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;