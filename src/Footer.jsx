import './Footer.scss'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top__left">
                    <h3 className="footer__top__left__title">
                        What People Are Saying About Do With
                    </h3>
                    <h3 className="footer__top__left__text">
                        Everything you need to accept payments, grow your money, or manage it from anywhere on the planet
                    </h3>
                    <img src="static/quotes.svg" alt="" className="footer__top__left__quote" />
                    <h3 className="footer__top__left__text">
                        I am very helped by this e-wallet application. My days are made easy using this application, and it's very helpful in my life. I can even make payments in a short time. 
                    </h3>
                    <h3 className="footer__top__left__text">
                        _ Aria Zinanrio
                    </h3>
                    <div className="footer__top__left__members">
                        <img src="static/member (2).png" alt="" className="footer__top__left__members__item" />
                        <img src="static/member (3).png" alt="" className="footer__top__left__members__item" />
                        <img src="static/member (4).png" alt="" className="footer__top__left__members__item" />
                        <img src="static/member (1).png" alt="" className="footer__top__left__members__item" />
                        <img src="static/member-add.svg" alt="" className="footer__top__left__members__item" />

                    </div>
                </div>
                <div className="footer__top__right">
                    <img src="static/f-logo.svg" alt="" className="footer__top__right__logo" />
                    <h3 className="footer__top__right__title">Get Started</h3>
                    <div className="footer__top__right__input">
                        <h3 className="footer__top__right__input__label">Email</h3>
                        <input type="text" className="footer__top__right__input__field" placeholder="Enter your email"  />
                    </div>
                    <div className="footer__top__right__input">
                        <h3 className="footer__top__right__input__label">Message</h3>
                        <textarea type="text" className="footer__top__right__input__field" placeholder="What are you say ?"  />
                    </div>
                    <h3 className="footer__top__right__button">Request Demo</h3>
                    <h3 className="footer__top__right__option">
                        <span>or</span>
                        Start Free Trial
                    </h3>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__left">
                    <h3 className="footer__bottom__left__logo">Biccas</h3>
                    <h3 className="footer__bottom__left__text">Get started now try our products</h3>
                    <div className="footer__bottom__left__send">
                        <input type="text" className="footer__bottom__left__send__field" placeholder="Enter your email here" />
                        <img src="static/arrow.svg" alt="" className="footer__bottom__left__send__arrow" />
                    </div>
                </div>
                <div className="footer__bottom__right">
                    <div className="footer__bottom__right__item">
                        <h3 className="footer__bottom__right__item__title">Support</h3>
                        <h3 className="footer__bottom__right__item__link">Help center</h3>
                        <h3 className="footer__bottom__right__item__link">information</h3>
                        <h3 className="footer__bottom__right__item__link">About</h3>
                        <h3 className="footer__bottom__right__item__link">Contact</h3>
                    </div>
                    <div className="footer__bottom__right__item">
                        <h3 className="footer__bottom__right__item__title">Help Solution</h3>
                        <h3 className="footer__bottom__right__item__link">Talk to support</h3>
                        <h3 className="footer__bottom__right__item__link">get in touch</h3>
                        <h3 className="footer__bottom__right__item__link">docs</h3>
                        <h3 className="footer__bottom__right__item__link">System status</h3>
                    </div>
                    <div className="footer__bottom__right__item">
                        <h3 className="footer__bottom__right__item__title">Products</h3>
                        <h3 className="footer__bottom__right__item__link">Updates</h3>
                        <h3 className="footer__bottom__right__item__link">Security</h3>
                        <h3 className="footer__bottom__right__item__link">testing</h3>
                        <h3 className="footer__bottom__right__item__link">Pricing</h3>
                    </div>
                </div>
            </div>
            <div className="footer__end">
                <h3>© 2023 Biccas Inc. Copyright and rights reserved</h3>
                <h3><h4>Terms and Condtions</h4> <span>•</span> <h4>Privacy Policy</h4></h3>
            </div>
        </div>
    );
}
 
export default Footer;