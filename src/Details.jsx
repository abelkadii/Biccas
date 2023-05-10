import './Details.scss'
import './Details-top.scss'
import './Details-center.scss'
import './Details-bottom.scss'

const Details = () => {
    return ( 
        <div className="details">
            <div className="details__top">
                <h3 className="details__top__title">What we can offer</h3>
                <h3 className="details__top__description">We offer a variety of interesting features that can help increase your productivity at work and manage your projects easily</h3>
                <h3 className="details__top__button">Get Started</h3>
            </div>
            <div className="details__center">
                <div className="details__center__item">
                    <img src="static/collab.svg" alt="" className="details__center__item__img" />
                    <h3 className="details__center__item__name">Collboration Teams</h3>
                    <h3 className="details__center__item__desc">Here you can handle projects together with team virtually</h3>
                </div>
                <div className="details__center__item">
                    <img src="static/cloud.svg" alt="" className="details__center__item__img" />
                    <h3 className="details__center__item__name">Cloud Storage</h3>
                    <h3 className="details__center__item__desc">No need to worry about storage because we provide up to 2 TB of storage</h3>
                </div>
                <div className="details__center__item">
                    <img src="static/analytics.svg" alt="" className="details__center__item__img" />
                    <h3 className="details__center__item__name">Daily Analytics</h3>
                    <h3 className="details__center__item__desc">We always provide useful information to make your daily life easier</h3>
                </div>
            </div>
            <div className="details__benefit">
                <div className="details__benefit__left">
                    <h3 className="details__benefit__left__title">What Benefit Will You Get</h3>
                    <div className="details__benefit__left__item">
                        <img src="static/green-check.svg" alt="" className="details__benefit__left__icon" />
                        <h3 className="details__benefit__left__name">Free consulting with experts to save money</h3>
                    </div>
                    <div className="details__benefit__left__item">
                        <img src="static/green-check.svg" alt="" className="details__benefit__left__icon" />
                        <h3 className="details__benefit__left__name">Online Banking</h3>
                    </div>
                    <div className="details__benefit__left__item">
                        <img src="static/green-check.svg" alt="" className="details__benefit__left__icon" />
                        <h3 className="details__benefit__left__name">Investment report available every month</h3>
                    </div>
                    <div className="details__benefit__left__item">
                        <img src="static/green-check.svg" alt="" className="details__benefit__left__icon" />
                        <h3 className="details__benefit__left__name">Saving money for the future</h3>
                    </div>
                    <div className="details__benefit__left__item">
                        <img src="static/green-check.svg" alt="" className="details__benefit__left__icon" />
                        <h3 className="details__benefit__left__name">Online Transaction</h3>
                    </div>
                </div>
                <div className="details__benefit__right">
                    <img src="static/laptop.png" alt="" className="details__benefit__right__bg" />
                    
                    <img src="static/Frame (2).svg" alt="" className="details__benefit__right__item details__benefit__right__item-amount" />
                    <img src="static/Group 111.svg" alt="" className="details__benefit__right__item details__benefit__right__item-user" />
                    <img src="static/Group 113.svg" alt="" className="details__benefit__right__item details__benefit__right__item-galery" />
                    <img src="static/Group 114.svg" alt="" className="details__benefit__right__item details__benefit__right__item-success" />

                </div>
            </div>
            <div className="details__bill">
    
                <h3 className="details__bill__title">Choose Plan That's Right For You</h3>
                <h3 className="details__bill__text">Choose a plan that works best for you and feel free to contact us</h3>
                <div className="details__bill__slider">
                    <h3 className="details__bill__slider__item">Bil Monthly</h3>
                    <h3 className="details__bill__slider__item details__bill__slider__item-acive">Bil Yearly</h3>
                </div>
                <div className="details__bill__options">
                    <div className="details__bill__options__item">
                        <h3 className="details__bill__options__item__title">Free</h3>
                        <h3 className="details__bill__options__item__text">Have a go  and test your  superpowers</h3>
                        <div className="details__bill__options__item__price">
                            <h3>$</h3>
                            <span>0</span>
                        </div>
                        <div className="details__bill__options__item__features">
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">2 Users</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">2 Files</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Public Share & Comments</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Chat Support</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">New income apps</h3>
                            </div>
                            <h3 className="details__bill__options__item__features__button">Sign up for free</h3>
                        </div>
                    </div>



                    <div className="details__bill__options__item details__bill__options__item-active">
                        <img src="static/pro-bill.svg" alt="" className="details__bill__options__item-active-bg" />
                        <h3 className="details__bill__options__item__title details__bill__options__item__title-active">Pro</h3>
                        <h3 className="details__bill__options__item__text details__bill__options__item__text-active">Experience the power of infinite possibilities</h3>
                        <div className="details__bill__options__item__price details__bill__options__item__price-active">
                            <h3>$</h3>
                            <span>8</span>
                        </div>
                        <h3 className="details__bill__options__item__price-active-save">save 50$ a year</h3>
                        <div className="details__bill__options__item__features details__bill__options__item__features-active">
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">2 Users</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">2 Files</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Public Share & Comments</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Chat Support</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">New income apps</h3>
                            </div>
                            <h3 className="details__bill__options__item__features__button details__bill__options__item__features__button-active">Go to Business</h3>
                        </div>
                    </div>


                    <div className="details__bill__options__item">
                        <h3 className="details__bill__options__item__title">Business</h3>
                        <h3 className="details__bill__options__item__text">Unleash new superpowers and join the Design League</h3>
                        <div className="details__bill__options__item__price">
                            <h3>$</h3>
                            <span>16</span>
                        </div>
                        <div className="details__bill__options__item__features">
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">All the features of pro plan</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Account success Manager</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Single Sign-On (SSO)</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Co-conception program</h3>
                            </div>
                            <div className="details__bill__options__item__features__item">
                                <img src="static/green-check.svg" alt="" className="details__bill__options__item__features__item__icon" />
                                <h3 className="details__bill__options__item__features__item__name">Collaboration-Soon</h3>
                            </div>
                            <h3 className="details__bill__options__item__features__button">Go to Business</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Details;