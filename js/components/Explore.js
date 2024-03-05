const Explore = () => {
    const container = document.createElement('div');
    container.innerHTML = `
        <div class="explore">
            <div class="overlay"></div>
            <div class="explore__banner">
                <img class="explore__banner__img" src="https://technext.github.io/dorne/img/bg-img/hero-1.jpg" alt="">
            </div>
            <div class="explore__form">
                <div class="explore__form__container">
                    <div class="explore__form__box">
                        <h3>What are you looking for?</h3>
                        <div class="explore__form__container__btn">
                            <h3 id="placesExploreBtn" class="active">PLACES</h3>
                            <h3 id="eventsExploreBtn">EVENTS</h3>
                        </div>
                        <div class="explore__form__container__input active" id="placesExplore">
                            <form class="explore__form__container__input__box" action="#" method="get">
                                <select class="explore__form__container__input__box__select">    
                                    <option selected="">Your Destinations</option>
                                    <option value="1">New York</option>
                                    <option value="2">Latvia</option>
                                    <option value="3">Dhaka</option>
                                    <option value="4">Melbourne</option>
                                    <option value="5">London</option>
                                </select>
                                <select class="explore__form__container__input__box__select">
                                    <option selected="">All Catagories</option>
                                    <option value="1">Catagories 1</option>
                                    <option value="2">Catagories 2</option>
                                    <option value="3">Catagories 3</option>
                                </select>
                                <select class="explore__form__container__input__box__select">
                                    <option selected="">Price Range</option>
                                    <option value="1">$100 - $499</option>
                                    <option value="2">$500 - $999</option>
                                    <option value="3">$1000 - $4999</option>
                                </select>
                                <div class="explore__form__container__input__box__check">
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Accepts credit cards</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Bike Parking</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Wireless Internet</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Reservations</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Private Parking</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Smoking Area</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Wheelchair Accesible</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" value="">
                                        <span>Coupons</span>
                                    </div>
                                </div>
                                <button type=""><img src="../../assets/search1.svg" alt="">Search</button>
                            </form>
                        </div>
                        <div class="explore__form__container__input" id="eventsExplore">
                        <form class="explore__form__container__input__box" action="#" method="get">
                            <select class="explore__form__container__input__box__select">
                                <option selected="">Your Destinations</option>
                                <option value="1">New York</option>
                                <option value="2">Latvia</option>
                                <option value="3">Dhaka</option>
                                <option value="4">Melbourne</option>
                                <option value="5">London</option>
                            </select>
                            <select class="explore__form__container__input__box__select">
                                <option selected="">All Catagories</option>
                                <option value="1">Catagories 1</option>
                                <option value="2">Catagories 2</option>
                                <option value="3">Catagories 3</option>
                            </select>
                            <select class="explore__form__container__input__box__select">
                                <option selected="">Price Range</option>
                                <option value="1">$100 - $499</option>
                                <option value="2">$500 - $999</option>
                                <option value="3">$1000 - $4999</option>
                            </select>
                            <button type=""><img src="../../assets/search1.svg" alt="">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="explore__form__list">
                <div class="explore__form__list__card">
                    <span>From $59/night</span>
                    <img src="../../assets/feature-1.jpg" alt="">
                    <div class="explore__form__list__card__info">
                        <div>
                            <h3 class="explore__form__list__card__info__text">Ibiza</h3>
                            <h3 class="explore__form__list__card__info__text">Party</h3>
                        </div>
                        <div>
                            <img class="explore__form__list__card__info__img" src="../../assets/heart.svg" alt="Heart" id="heart1">
                        </div>
                    </div>
                </div>
                <div class="explore__form__list__card">
                    <span>From $59/night</span>
                    <img src="../../assets/feature-2.jpg" alt="">
                    <div class="explore__form__list__card__info">
                        <div>
                            <h3 class="explore__form__list__card__info__text">Ibiza</h3>
                            <h3 class="explore__form__list__card__info__text">Party</h3>
                        </div>
                        <div>
                            <img class="explore__form__list__card__info__img" src="../../assets/heart.svg" alt="Heart" id="heart2">
                        </div>
                    </div>
                </div>
                <div class="explore__form__list__card">
                    <span>From $59/night</span>
                    <img src="../../assets/feature-3.jpg" alt="">
                    <div class="explore__form__list__card__info">
                        <div>
                            <h3 class="explore__form__list__card__info__text">Ibiza</h3>
                            <h3 class="explore__form__list__card__info__text">Party</h3>
                        </div>
                        <div>
                            <img class="explore__form__list__card__info__img" src="../../assets/heart.svg" alt="Heart" id="heart3">
                        </div>
                    </div>
                </div>
                <div class="explore__form__list__card">
                    <span>From $59/night</span>
                    <img src="../../assets/feature-4.jpg" alt="">
                    <div class="explore__form__list__card__info">
                        <div>
                            <h3 class="explore__form__list__card__info__text">Ibiza</h3>
                            <h3 class="explore__form__list__card__info__text">Party</h3>
                        </div>
                        <div>
                            <img class="explore__form__list__card__info__img" src="../../assets/heart.svg" alt="Heart" id="heart4">
                        </div>
                    </div>
                </div>
            </div>
            <div class="explore__form__map">
            </div>
        </div>
    `;

    document.body.appendChild(container);

    document.addEventListener("DOMContentLoaded", function () {
        const placesExploreBtn = document.querySelector("#placesExploreBtn");
        const eventsExploreBtn = document.querySelector("#eventsExploreBtn");
        const placesExplore = document.querySelector("#placesExplore");
        const eventsExplore = document.querySelector("#eventsExplore");

        const heart1 = document.querySelector("#heart1")
        const heart2 = document.querySelector("#heart2")
        const heart3 = document.querySelector("#heart3")
        const heart4 = document.querySelector("#heart4")
    
        placesExploreBtn.addEventListener("click", function() {
            placesExploreBtn.classList.toggle("active");
            eventsExploreBtn.classList.toggle("active");
            placesExplore.classList.add("active");
            eventsExplore.classList.remove("active");
        });
    
        eventsExploreBtn.addEventListener("click", function() {
            placesExploreBtn.classList.toggle("active");
            eventsExploreBtn.classList.toggle("active");
            placesExplore.classList.remove("active");
            eventsExplore.classList.add("active");
        });

        heart1.addEventListener("click", function() {
            heart1.classList.toggle("active")
        });

        heart2.addEventListener("click", function() {
            heart2.classList.toggle("active")
        });

        heart3.addEventListener("click", function() {
            heart3.classList.toggle("active")
        });

        heart4.addEventListener("click", function() {
            heart4.classList.toggle("active")
        });
    });
    

    return container;
};

export default Explore;