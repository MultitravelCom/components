// ******************* STYLED **********************
const AccordeonFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 32px;
  padding: 18px;
  width: 300px;
  border: 1px solid #cacaca;
  background: #fff;
`;
const AccordeonFooterOpen = styled.div`
  display: flex;
  width: 301px;
  padding: 16px;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid #0d4e88;
  background: #fff;
  margin-top: 11px;
  gap: 1rem;
`;

const FlagImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const StyledParagraph = styled.p`
  color: black;
  margin: 0;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.16px;
  cursor: pointer;
  &:hover {
    background: #EAF3FF;
  }
`;

const StyledTitle = styled.h1`
  gap: 73px;
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

  return <StyledTitle>{title}</StyledTitle>;
};

const AccodionNavegate = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("Argentina");

  const handleOptionClick = (country) => {
    setSelectedCountry(country);
    setIsOpen((prevState) => !prevState);
  };

  const handleRedirect = (url) => {
    window.location.href = url;
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
        <StyledParagraph>{selectedCountry}</StyledParagraph>
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
