import './Home.scss'
import Navbar from './Navbar'
const Home = () => {
    return ( 
        <div className="home">
            {/* <div className="eclipse eclipse-top"></div> */}
            {/* <div className="eclipse eclipse-right"></div> */}
            <Navbar />
            <div className="home__body">
                <div className="home__body__left">
                    <h3 className="home__body__left__title">
                        We're here to Increase your Productivity
                    </h3>
                    <img src="static/arc.svg" className="home__body__left__vector" />
                    <h3 className="home__body__left__description">
                    Let's make your work more organized and efficient by using the Task.io Dashboard, which offers many latest features for managing tasks every day. With this tool, you can easily stay on top of your workload and increase productivity
                    </h3>
                    <div className="home__body__left__buttons">
                        <h3 className="home__body__left__buttons__left">Try free trial</h3>
                        <div className="home__body__left__buttons__left__right">
                            <img src="static/play.svg" alt="" />
                            <h3>View Demo</h3>
                        </div>
                    </div>
                </div>
                <div className="home__body__right">
                    <img src="static/body-bg.svg" alt="" className="home__body__right__bg" />
                    <img src="static/charlie2-1.png" alt="" className="home__body__right__image"/>                    
                    <img src="static/Frame (1).svg" alt="" className="home__body__right__item home__body__right__item-credit" />
                    <img src="static/Frame (2).svg" alt="" className="home__body__right__item home__body__right__item-amount" />
                    <img src="static/Frame (3).svg" alt="" className="home__body__right__item home__body__right__item-message" />
                    <img src="static/Frame (4).svg" alt="" className="home__body__right__item home__body__right__item-db" />
                    <img src="static/Frame (5).svg" alt="" className="home__body__right__item home__body__right__item-check" />
                    <img src="static/Frame (6).svg" alt="" className="home__body__right__item home__body__right__item-send" />
                </div>
            </div>
            <div className="home__bottom">
                <h3 className="home__bottom__top">More than 25,000 teams use Collabs</h3>
                <div className="home__bottom__down">
                    <div className="home__bottom__down__item">
                        <img src="static/Group (2).svg" alt="" className="home__bottom__down__item__img" />
                        <h3 className="home__bottom__down__item__name">Unsplash</h3>
                    </div>
                    <div className="home__bottom__down__item">
                        <img src="static/Group (4).svg" alt="" className="home__bottom__down__item__img" />
                        <h3 className="home__bottom__down__item__name">Notion</h3>
                    </div>
                    <div className="home__bottom__down__item">
                        <img src="static/Group (3).svg" alt="" className="home__bottom__down__item__img" />
                        <h3 className="home__bottom__down__item__name">INTERCOM</h3>
                    </div>
                    <div className="home__bottom__down__item">
                        <img src="static/Group (1).svg" alt="" className="home__bottom__down__item__img" />
                        <h3 className="home__bottom__down__item__name">descript</h3>
                    </div>
                    <div className="home__bottom__down__item">
                        <img src="static/Group (5).svg" alt="" className="home__bottom__down__item__img" />
                        <h3 className="home__bottom__down__item__name">grammarly</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;