// function agregarScript() {
//     const scriptElement = document.createElement('script');
//     scriptElement.src = 'https://unpkg.com/styled-components/dist/styled-components.min.js';
//     document.body.appendChild(scriptElement);
//   }

//   agregarScript();

// ******************* STYLED **********************
const AccordeonFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 32px;
  padding: 6px;
  width: 100%;
  height: 60px;
  border: 1px solid #cacaca;
  background: #fff;
  cursor: pointer;
`;

const AccordeonFooterOpen = styled.div`
  display: flex;
  width: 100%;
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
    top: 96px;
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
  font-size: ${(props) => props.fontSize || '16px'};
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

const StyledTitle = styled.h4`
  gap: 73px;
`;

const ChevronIcon = styled.span`
  &.glyphicon-chevron-down {
    position: absolute;
    right: 50px;
    transition: transform 0.3s ease-in-out;
    ${(props) =>
      props.isOpen &&
      `
        transform: rotate(180deg);
      `}
  }
`;
// **************************************************
const AccordionNavegateSiteTitle = () => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const handleTitle = () => {
      const currentURL = window.location.href;
      const isBR = currentURL.includes("https://br.multitravel.com/");
      const isAR = currentURL.includes("https://ar.multitravel.com/");

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

const getCountryFromUrl = () => {
  const currentUrl = window.location.href;
  if (currentUrl.includes("https://ar.multitravel.com/")) {
    return "Argentina";
  } else if (currentUrl.includes("https://br.multitravel.com/")) {
    return "Brasil";
  }
  return null;
};

const AccordionNavegate = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(
    getCountryFromUrl()
  );
  const [redirectUrl, setRedirectUrl] = React.useState(null);
  const accordionRef = React.useRef(null);

  const handleOptionClick = (country) => {
    const argentinaUrl = "https://ar.multitravel.com/";
    const brazilUrl = "https://br.multitravel.com/";

    const currentUrl = window.location.href;
    let urlToRedirect = "";

    if (
      country === "Argentina" &&
      !currentUrl.includes("https://ar.multitravel.com/")
    ) {
      urlToRedirect = argentinaUrl;
    } else if (
      country === "Brasil" &&
      !currentUrl.includes("https://br.multitravel.com/")
    ) {
      urlToRedirect = brazilUrl;
    }

    if (urlToRedirect) {
      setSelectedCountry(country);
      setRedirectUrl(urlToRedirect);
    }
  };

  const getFlagImage = (country) => {
    if (country === "Argentina") {
      return "https://multitravelcom.github.io/components/MULT-33/AR.png";
    } else if (country === "Brasil") {
      return "https://multitravelcom.github.io/components/MULT-33/BR.png";
    }
    return "";
  };

  const handleClickOutside = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return (
    <>
      <div ref={accordionRef}>
        <AccordeonFooter onClick={() => setIsOpen((prevState) => !prevState)}>
          <FlagImage src={getFlagImage(selectedCountry)} alt="" />
          <StyledParagraph noHover>{selectedCountry}</StyledParagraph>
          <ChevronIcon className="glyphicon glyphicon-chevron-down" isOpen={isOpen} />
        </AccordeonFooter>
        {isOpen && (
          <AccordeonFooterOpen>
            <StyledParagraph fontSize="14px" onClick={() => handleOptionClick("Argentina")}>
              <FlagImage src={getFlagImage("Argentina")} alt="" />
              Argentina
            </StyledParagraph>
            <StyledParagraph fontSize="14px" onClick={() => handleOptionClick("Brasil")}>
              <FlagImage src={getFlagImage("Brasil")} alt="" />
              Brasil
            </StyledParagraph>
          </AccordeonFooterOpen>
        )}
      </div>
    </>
  );
};

const AccordionNavegateSite = () => {
  return (
    <>
      <AccordionNavegateSiteTitle />
      <AccordionNavegate />
    </>
  );
};

const mainFooterCheckbooking = document.querySelector('#main-footer-checkbooking')
console.log(".mainFooterCheckbooking------->>", mainFooterCheckbooking)
if(mainFooterCheckbooking){
    ReactDOM.render(<AccordionNavegateSite />, mainFooterCheckbooking);
}else{
    console.log(".NOOOOOOO")

}

