import style from "./Modal.module.css"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

export default function Modal() {
  return <div className={style.modal}>
    <Header />
    <main className={style.mainContainer}>
      <section className={style.firstSection}>
      </section>
      <section className={style.secondSection}></section>
      <section className={style.modalContainer}>
        <div className={style.modalTitle}>Благодарим Вас за заказ!</div>
        <div className={style.modalContent}>
          <div className={style.order}>
            <div className={style.number}>№Заказа 285АА</div>
            <div className={style.sum}>
              <div className={style.sumText}>сумма</div>
              <div className={style.sumNum}>7 760</div>
              <div className={style.sumIcon}></div>
            </div>
          </div>
          <div className={style.modalIconsContainer}>
            <div className={style.iconsContainer}>
              <div className={style.column}>
                <div className={style.modalIcon}>
                  <div className={style.liftIcon}></div>
                </div>
                <p className={`${style.iconText} ${style.leftIconText}`}>билеты будут отправлены
                  на ваш <span className={style.bold}>e-mail</span></p>
              </div>
              <div className={style.column}>
                <div className={style.modalIcon}>
                  <div className={style.middleIcon}></div>
                </div>
                <p className={style.iconText}><span className={style.bold}>распечатайте </span>
                  и сохраняйте билеты
                  до даты поездки</p>
              </div>
              <div className={style.column}>
                <div className={style.modalIcon}>
                  <div className={style.rightIcon}></div>
                </div>
                <p className={style.iconText}><span className={style.bold}>предьявите </span>распечатанные
                  билеты при посадке</p>
              </div>
            </div>
          </div>
          <div className={style.clientontainer}>
            <div className={style.nameContainer}>
              <span className={style.clientName}>Ирина Эдуардовна!</span>
            </div >
            <div className={style.orderCompleted}>
              <div className={style.orderCompletedText}>Ваш заказ успешно оформлен.</div>
              <div className={style.orderCompletedText}>
                В ближайшее время с вами свяжется наш оператор для подтверждения.
              </div>
            </div>
            <div className={style.wishesContainer}>
              <span className={style.wishes}>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</span>
            </div>
          </div>
          <div className={style.modalContentFooter}>
            <div className={style.stars}>
              <span className={style.starsText}>Оценить сервис</span>
              <div className={style.starsIconsContainer}>
                <div className={style.starsIcon}></div>
                <div className={style.starsIcon}></div>
                <div className={style.starsIcon}></div>
                <div className={style.starsIcon}></div>
                <div className={style.starsIcon}></div>
              </div>
            </div>
            <button className={style.modalContentFooterBtn}>вернуться на главную</button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}