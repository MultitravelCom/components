// ******************* STYLED **********************
const AccordeonFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 32px;
  padding: 6px;
  width: 300px;
  height: 60px;
  border: 1px solid #cacaca;
  background: #fff;
  cursor: pointer;
`;
const AccordeonFooterOpen = styled.div`
  display: flex;
  width: 301px;
  padding: 16px 0;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid #0d4e88;
  background: #fff;
  margin-top: 11px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 64px;
    left: 10px;
    z-index: 999;
  }
`;

const FlagImage = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 8px;
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
  padding: 8px 0;
  ${(props) =>
    !props.noHover &&
    `
      &:hover {
        background: #eaf3ff;
      }
    `}
`;

const StyledTitle = styled.h1`
  gap: 73px;
`;
// **************************************************
const AccordionNavegateSiteTitle = () => {
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

const AccordionNavegate = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("Argentina");

  const handleOptionClick = (country) => {
    const url =
      country === "Argentina"
        ? "https://ar.multitravel.com/"
        : "https://br.multitravel.com/";
    window.location.href = url;

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
        <StyledParagraph noHover>{selectedCountry}</StyledParagraph>
      </AccordeonFooter>
      {isOpen && (
        <AccordeonFooterOpen>
          <StyledParagraph onClick={() => handleOptionClick("Argentina")}>
            Argentina
            <FlagImage src={getFlagImage("Argentina")} alt="" />
          </StyledParagraph>
          <StyledParagraph onClick={() => handleOptionClick("Brasil")}>
            Brasil
            <FlagImage src={getFlagImage("Brasil")} alt="" />
          </StyledParagraph>
        </AccordeonFooterOpen>
      )}
    </>
  );
};

const AccordionNavegateSite = () => {
  const accordeonRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (accordeonRef.current && !accordeonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AccordionNavegateSiteTitle />
      <AccordionNavegate ref={accordeonRef} />
    </>
  );
};

ReactDOM.render(
  <AccordionNavegate />,
  document.getElementById("main-footer-checkbooking")
);
