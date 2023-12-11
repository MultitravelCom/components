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
  const [selectedCountry, setSelectedCountry] = React.useState("Argentina");

  const handleOptionClick = (country) => {
    setSelectedCountry(country);
    setIsOpen((prevState) => !prevState);
  };

  const getFlagImage = (country) => {
    if (country === "Argentina") {
      return "https://multitravelcom.github.io/components/MULT-33/AR.png";
    } else if (country === "Brasil") {
      return "https://multitravelcom.github.io/components/MULT-33/BR.png";
    }
    return "";
  };

  return (
    <>
      <div
        className="accordeon-footer"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <img src={getFlagImage(selectedCountry)} alt="" />
        <p>{selectedCountry}</p>
      </div>
      {isOpen && (
        <div className="accordeon-footer-open">
          <p onClick={() => handleOptionClick("Argentina")}>
            <img src={getFlagImage("Argentina")} alt="" />
            Argentina
          </p>
          <p onClick={() => handleOptionClick("Brasil")}>
            <img src={getFlagImage("Brasil")} alt="" />
            Brasil
          </p>
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
