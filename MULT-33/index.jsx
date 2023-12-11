// ******************* STYLED **********************
const AccordeonFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  border-radius: 32px;
  padding: 18px;
  width: 300px;
`;
const AccordeonFooterOpen = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const FlagImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const StyledParagraph = styled.p`
  color: black;
  marigin: 0;
`;

// **************************************************
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
      <AccordeonFooter onClick={() => setIsOpen((prevState) => !prevState)}>
        <FlagImage src={getFlagImage(selectedCountry)} alt="" />
        <p>{selectedCountry}</p>
      </AccordeonFooter>
      {isOpen && (
        <AccordeonFooterOpen>
          <StyledParagraph onClick={() => handleOptionClick("Argentina")}>
            <FlagImage src={getFlagImage("Argentina")} alt="" />
            Argentina
          </StyledParagraph>
          <StyledParagraph onClick={() => handleOptionClick("Brasil")}>
            <FlagImage src={getFlagImage("Brasil")} alt="" />
            Brasil
          </StyledParagraph>
        </AccordeonFooterOpen>
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
