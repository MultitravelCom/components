const NewsletterSeccion = () => {
    return (
        <>
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
                    >
                        <div id="mc_embed_signup_scroll">
                            
                            <div className="mc-field-group">
                                <label for="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email"
                                    id="mce-EMAIL"
                                    required=""
                                    value=""
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
                                    value="Subscribe" />
                            </div>
                            <div className="indicates-required">
                                <span className="asterisk">*</span>indicates required
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

ReactDOM.createRoot(document.querySelector('.newsletter__container')).render(<NewsletterSeccion />);