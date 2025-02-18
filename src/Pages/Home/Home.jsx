import style from "./Home.module.css"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import FormFindTicket from "../../Components/Forms/FormFindTicket"
import {ReactComponent as Monitor} from "../../Assets/Images/iconItem1.svg"
import {ReactComponent as Office} from "../../Assets/Images/iconItem2.svg"
import {ReactComponent as Globus} from "../../Assets/Images/iconItem3.svg"

export default function Home() {
    return <div className={style.Home}>
        <Header/>
        <main>
        <section className={style.firstSection}>
             <p className={style.slogan}>Вся жизнь - <span>путешествие!</span></p>
             <div className={style.formContainer}>
                <FormFindTicket/>
             </div>
         </section>
         <section className={style.aboutUs}>
            <div className={style.aboutUs_container}>
            <h2 class={style.aboutUs_title}>О НАС</h2>
                <div class={style.aboutUs_description}>
                    <p class={style.description}>Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как
                        с каждым днем 
                        все больше людей заказывают жд билеты через интернет.
                    </p>
                    <p class={style.description}> Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но
                        стоит ли это делать? 
                        Мы расскажем о преимуществах заказа через интернет.
                    </p>
                    <p class={`${style.description} ${style.text_bold}`}> Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
                </div>
            </div>
         </section>
         <section className={style.info}>
                <div className={style.infoAboutUs}>
                    <p className={style.infoQuestion}>Как это работает</p>
                    <button className={style.infoBtn}>Узнать больше</button>
                </div>
                <div className={style.infoIcons}>
                    <div className={style.infoIcon}>
                        <div className={style.iconItem}><Monitor /></div>
                        <div className={style.iconDes}>Удобный заказ на сайте</div>
                    </div>
                    <div class={style.infoIcon}>
                        <div className={style.iconItem}><Office /></div>
                        <div className={style.iconDes}>Нет необходимости  ехать в офис</div>
                    </div>
                    <div class={style.infoIcon}>
                        <div className={style.iconItem}><Globus /></div>
                        <div className={style.iconDes}>Огромный выбор  направлений</div>
                    </div>
                </div>
         </section>
         <section className={style.mainReviews}>
                <h3 className={style.reviews}>ОТЗЫВЫ</h3>
                <div className={style.userFeedback}>
                    <div className={style.user__container}>
                        <div className={style.userPhoto1}></div>
                        <p className={style.userDesc}><span className={style.userName}>Екатерина Вальнова</span> 
                            <i> Доброжелательные подсказки 
                                на всех этапах помогут правильно заполнить поля и без затруднений
                                купить авиа или ж/д  билет, даже если вы заказываете онлайн билет  впервые.</i>
                        </p>
                    </div>
                    <div className={style.user__container}>
                        <div className={style.userPhoto2}></div>
                        <p className={style.userDesc}><span className={style.userName}>Евгений Стрыкало</span>
                            <i> СМС-сопровождение до посадки 
                                Сразу после оплаты ж/д билетов 
                                и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</i></p>
                        </div>
                    </div>
                <div className={style.scrolling}></div>
            </section>
        </main>
        <Footer/>
    </div >
}