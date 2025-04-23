import style from "./CarLayout.module.css"


export default function carLayout (){
    return <div className={style.carlayout}>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>2</div>
            <div className={style.plase}>1</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>3</div>
            <div className={style.plase}>4</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>6</div>
            <div className={style.plase}>5</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>8</div>
            <div className={style.plase}>7</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>10</div>
            <div className={style.plase}>9</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>12</div>
            <div className={style.plase}>11</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>14</div>
            <div className={style.plase}>13</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>16</div>
            <div className={style.plase}>15</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>18</div>
            <div className={style.plase}>17</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>20</div>
            <div className={style.plase}>19</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>22</div>
            <div className={style.plase}>21</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>24</div>
            <div className={style.plase}>23</div>
        </div>
    </div>
    <div className={style.room}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>26</div>
            <div className={style.plase}>25</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>28</div>
            <div className={style.plase}>27</div>
        </div>
    </div>
    <div className={`${style.room} ${style.last}`}>
        <div className={style.plaseContainer}>
            <div className={style.plase}>30</div>
            <div className={style.plase}>29</div>
        </div>
        <div className={style.plaseContainer}>
            <div className={style.plase}>32</div>
            <div className={style.plase}>31</div>
        </div>
    </div>
</div>
}