import style from "./CarLayoutReserved.module.css"


export default function carLayoutReserved (){
    return <div className={style.carlayout}>
    <div className={style.roomContainer}>
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
    <div className={style.sideSeats}>
        <div className={style.sideSeatsRoom}>
            <div className={style.sideSeatsPlase}>33</div>
            <div className={style.sideSeatsPlase}>34</div>
        </div>
        <div className={style.sideSeatsRoom}>
        <div className={style.sideSeatsPlase}>35</div>
        <div className={style.sideSeatsPlase}>36</div>
        </div>
        <div className={style.sideSeatsRoom}>
        <div className={style.sideSeatsPlase}>37</div>
        <div className={style.sideSeatsPlase}>38</div>
        </div>
        <div className={style.sideSeatsRoom}>
        <div className={style.sideSeatsPlase}>39</div>
        <div className={style.sideSeatsPlase}>40</div>
        </div>
        <div className={style.sideSeatsRoom}>
        <div className={style.sideSeatsPlase}>41</div>
        <div className={style.sideSeatsPlase}>42</div>
        </div>
        <div className={style.sideSeatsRoom}>
        <div className={style.sideSeatsPlase}>43</div>
        <div className={style.sideSeatsPlase}>44</div>
        </div>
        <div className={style.sideSeatsRoom}>
        <div className={style.sideSeatsPlase}>45</div>
        <div className={style.sideSeatsPlase}>46</div>
        </div>
        <div className={`${style.sideSeatsRoom} ${style.sideSeatsRoomlast}`}>
        <div className={style.sideSeatsPlase}>47</div>
        <div className={style.sideSeatsPlase}>48</div>
        </div>
    </div>
</div>
}