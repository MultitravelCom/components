const AccodionNavegateSiteTitle = () => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const handleTitle = () => {
      const currentPath = window.location.href;
      const isBR = currentURL.includes("https://br.multitravel.com/");
      const isAR = currentURL.includes("https://ar.multitravel.com/");

      console.log("--isAR/isBR->", isAR, isBR);
      const newTitle = isBR
        ? 'Navegar en este sitio:'
        : isAR
        ? 'Navegar no site de:'
        : 'Navegar en este sitio:';
      setTitle(newTitle);
    };

    handleTitle();

    window.addEventListener("popstate", handleTitle);
    return () => window.removeEventListener("popstate", handleTitle);
  }, []);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const AccodionNavegate = () => {
  return <></>;
};

const AccodionNavegateSite = () => {
  return <AccodionNavegateSiteTitle />;
};

ReactDOM.render(
  <AccodionNavegateSite />,
  document.getElementById("main-footer-checkbooking")
);
