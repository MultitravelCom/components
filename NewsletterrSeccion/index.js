const NewsletterSeccion = () => {

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar acciones adicionales, como enviar el formulario
        console.log('Email:', email);
    };
    return (
        <>
            <div className="main__container__newsletter">
                <div className="main__container__newsletter__text">
                    <h2>Enterate de nuestras novedades antes que nadie</h2>
                    <p>Suscribite a nuestro Newsletter para no perderte de nada</p>
                </div>
            </div>
            <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                    <form
                        action="https://multitravel.us9.list-manage.com/subscribe/post?u=d09ee86703b1761e8337397e9&amp;id=97b84e6acf&amp;f_id=00703ae1f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_self"
                        novalidate=""
                        onSubmit={handleSubmit}
                    >
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <label for="mce-EMAIL"><span className="asterisk"></span></label>
                                <svg className="icon_mc_embed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#646464" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email"
                                    id="mce-EMAIL"
                                    required=""
                                    value={email}
                                    onChange={handleEmailChange}
                                // placeholder="Email"ASDFSDFDFSAF
                                />
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                            </div>
                            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                                <input type="text" name="b_d09ee86703b1761e8337397e9_97b84e6acf" tabindex="-1" value="" />
                            </div>
                            <div className="clear">
                                <input
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                    value="Suscribirse" />
                            </div>
                            <div className="indicates-required">
                                <span className="asterisk"></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

ReactDOM.createRoot(document.querySelector('.newsletter__container')).render(<NewsletterSeccion />);