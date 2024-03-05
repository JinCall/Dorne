const HomeDiscover = () => { 
    const container = document.createElement('div');
    container.classList.add("home")
    container.innerHTML = `
        <div class="home__discover">
            <div class="home__discover__title">
                <div>
                    <h2>Discover places near you</h2>
                    <p>This is the best guide of your city</p>
                </div>
            </div>
            <div class="home__discover__form">
                <div class="home__discover__form__btn">
                    <h3 id="placesBtn" class="active">PLACES</h3>
                    <h3 id="eventsBtn">EVENTS</h3>
                </div>
                <div class="home__discover__form__input active" id="places">
                    <h3>What are you looking for? 1</h3>
                    <form class="home__discover__form__input__box" action="#" method="get">
                        <select class="home__discover__form__input__box__select">    
                            <option selected="">Your Destinations</option>
                            <option value="1">New York</option>
                            <option value="2">Latvia</option>
                            <option value="3">Dhaka</option>
                            <option value="4">Melbourne</option>
                            <option value="5">London</option>
                        </select>
                        <select class="home__discover__form__input__box__select">
                            <option selected="">All Catagories</option>
                            <option value="1">Catagories 1</option>
                            <option value="2">Catagories 2</option>
                            <option value="3">Catagories 3</option>
                        </select>
                        <select class="home__discover__form__input__box__select">
                            <option selected="">Price Range</option>
                            <option value="1">$100 - $499</option>
                            <option value="2">$500 - $999</option>
                            <option value="3">$1000 - $4999</option>
                        </select>
                        <button type=""><img src="../../assets/search.png" alt="">Search</button>
                    </form>
                </div>
                <div class="home__discover__form__input" id="events">
                    <h3>What are you looking for? 2</h3>
                    <form class="home__discover__form__input__box" action="#" method="get">
                        <select class="home__discover__form__input__box__select">
                            <option selected="">Your Destinations</option>
                            <option value="1">New York</option>
                            <option value="2">Latvia</option>
                            <option value="3">Dhaka</option>
                            <option value="4">Melbourne</option>
                            <option value="5">London</option>
                        </select>
                        <select class="home__discover__form__input__box__select">
                            <option selected="">All Catagories</option>
                            <option value="1">Catagories 1</option>
                            <option value="2">Catagories 2</option>
                            <option value="3">Catagories 3</option>
                        </select>
                        <select class="home__discover__form__input__box__select">
                            <option selected="">Price Range</option>
                            <option value="1">$100 - $499</option>
                            <option value="2">$500 - $999</option>
                            <option value="3">$1000 - $4999</option>
                        </select>
                        <button type=""><img src="../../assets/search.png" alt="">Search</button>
                    </form>
                </div>
            </div>
            <div class="home__discover__social">
                <h2>Follow us on Social Media</h2>
                <div class="home__discover__social__img">
                <a href="">
                    <img src="../../assets/facebook-svgrepo-com.svg" alt="">
                </a>
                <a href="">
                    <img src="../../assets/gmail-svgrepo-com.svg" alt="">
                </a>
                <a href="">
                    <img src="../../assets/instagram-svgrepo-com.svg" alt="">
                </a>
                <a href="">
                    <img src="../../assets/linkedin-svgrepo-com.svg" alt="">
                </a>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(container);

    document.addEventListener("DOMContentLoaded", function(){

        const placesBtn = document.querySelector("#placesBtn");
        const eventsBtn = document.querySelector("#eventsBtn");

        const places = document.querySelector("#places");
        const events = document.querySelector("#events");

        placesBtn.addEventListener("click", function() {
            placesBtn.classList.toggle("active");
            eventsBtn.classList.remove("active");
            places.classList.add("active");
            events.classList.remove("active");
        });

        eventsBtn.addEventListener("click", function() {
            eventsBtn.classList.add("active");
            placesBtn.classList.remove("active");
            places.classList.remove("active");
            events.classList.add("active");
        });
    });
    return container;
};


export default HomeDiscover;