const AccodionNavegateSiteTitle = () => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const handleTitle = () => {
      const currentURL = window.location.href;
      const isBR = currentURL.includes("https://br.multitravel.com/");
      const isAR = currentURL.includes("https://ar.multitravel.com/");

      console.log("--isAR/isBR->", isAR, isBR);
      const newTitle = isBR
        ? "Navegar en este sitio:"
        : isAR
        ? "Navegar no site de:"
        : "Navegar en este sitio:";
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
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const accordeonFooter = document.querySelector(".accordeon-footer");

    const handleClick = () => {
      setIsOpen((prevState) => !prevState);
    };

    accordeonFooter.addEventListener("click", handleClick);

    return () => {
      accordeonFooter.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="accordeon-footer">
        <p>Argentina</p>
      </div>
      {isOpen && (
        <div className="accordeon-footer-open">
          <p>Argentina</p>
          <p>Brasil</p>
        </div>
      )}
    </>
  );
};

const AccodionNavegateSite = () => {
  return (
    <>
      <AccodionNavegateSiteTitle />
      <AccodionNavegate />
    </>
  );
};

ReactDOM.render(
  <AccodionNavegateSite />,
  document.getElementById("main-footer-checkbooking")
);
