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

  const handleOptionClick = (country) => {
    if (country === 'Ar') {
    //   window.location.href = 'https://ar.multitravel.com/';
    console.log("-AR-->")
    } else if (country === 'Br') {
    //   window.location.href = 'https://br.multitravel.com/';
    console.log("-BR-->")
    }
  };

  return (
    <>
      <div className="accordeon-footer" onClick={() => setIsOpen(prevState => !prevState)}>
        <img src="./MULT-33\AR.png" alt="" />
        <p>Argentina</p>
      </div>
      {isOpen && (
        <div className="https://multitravelcom.github.io/components/MULT-33/AR.png">
          <p onClick={() => handleOptionClick('Ar')}>Argentina</p>
          <p onClick={() => handleOptionClick('Br')}>Brasil</p>
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
