import './Body.scss';
const Body = () => {
    return ( 
        <div className="body">
            <div className="body__container">
                <div className="body__container__servecies">
                    <div className="body__container__servecies__left">
                    <div className="body__container__servecies__left__title">How we support our partners all over the world</div>
                    <div className="body__container__servecies__left__text">Biccas has become a common delivery model for many business applications, including office software, messaging software, payroll processing software, DBMS software, and management software</div>
                        <div className="body__container__servecies__left__ratings">
                            <div className="body__container__servecies__left__ratings__item">
                                <div className="body__container__servecies__left__ratings__item__star">
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-f.svg" />
                                </div>
                                <h3 className="body__container__servecies__left__ratings__item__value">4.9 <span>/ 5 rating</span></h3>
                                <h3 className="body__container__servecies__left__ratings__item__name">databricks</h3>
                            </div>
                            <div className="body__container__servecies__left__ratings__item">
                                <div className="body__container__servecies__left__ratings__item__star">
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-f.svg" />
                                    <img src="static/Star-e.svg" />
                                </div>
                                <h3 className="body__container__servecies__left__ratings__item__value">4 <span>/ 5 rating</span></h3>
                                <h3 className="body__container__servecies__left__ratings__item__name">Chainalysis</h3>
                            </div>
                        </div>
                    </div>
                    <div className="body__container__servecies__right">
                        <div className="body__container__servecies__right__item">
                            <div className="body__container__servecies__right__item__icon">
                                <img src="static/activity.svg" alt="" />
                            </div>
                            <div className="body__container__servecies__right__item__right">
                                <h3 className="body__container__servecies__right__item__right__title">Publishing</h3>
                                <h3 className="body__container__servecies__right__item__right__text">Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.</h3>
                            </div>
                        </div>
                        <div className="body__container__servecies__right__item">
                            <div className="body__container__servecies__right__item__icon">
                                <img src="static/pie-chart.svg" alt="" />
                            </div>
                            <div className="body__container__servecies__right__item__right">
                                <h3 className="body__container__servecies__right__item__right__title">Analytics</h3>
                                <h3 className="body__container__servecies__right__item__right__text">Analyze your performance and create detailed report.</h3>
                            </div>
                        </div>
                        <div className="body__container__servecies__right__item">
                            <div className="body__container__servecies__right__item__icon">
                                <img src="static/command.svg" alt="" />
                            </div>
                            <div className="body__container__servecies__right__item__right">
                                <h3 className="body__container__servecies__right__item__right__title">Engagement</h3>
                                <h3 className="body__container__servecies__right__item__right__text">Quickly navigate and engage with your audience.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Body;