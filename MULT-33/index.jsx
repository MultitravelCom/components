const AccodionNavegateSiteTitle = () => {
    const [title, setTitle] = React.useState('');

    React.useEffect(() => {
      const handleTitle = () => {
        const currentPath = window.location.pathname;
        const newTitle =
          currentPath === 'ar.multitravel.com' ? 'Navegar en este sitio:' : currentPath === 'br.multitravel.com' ? 'Navegar no site de:' : 'Navegar en este sitio';
        setTitle(newTitle);
      };
  
      handleTitle();
  
      window.addEventListener('popstate', handleTitle);
      return () => window.removeEventListener('popstate', handleTitle);
    }, []);

    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

const AccodionNavegateSite = () => {
    return(
        <div>
            <h1>Test</h1>
        </div>
    )
}

ReactDOM.render(<AccodionNavegateSite />, document.getElementById("main-footer-checkbooking"));