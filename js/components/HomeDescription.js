const HomeDescription = () => { 
    const container = document.createElement('div');
    container.classList.add("home")
    container.innerHTML = `
        <div class="home__description" id="description">
            <div class="home__description__container">
                <div class="home__description__container__card" id="card1">
                    <img src="" alt="">
                    <p>Hotels</p>
                </div>
                <div class="home__description__container__card" id="card2">
                    <img src="" alt="">
                    <p>Restaurants</p>
                </div>
                <div class="home__description__container__card" id="card3">
                    <img src="" alt="">
                    <p>Shopping</p>
                </div>
                <div class="home__description__container__card" id="card4">
                    <img src="" alt="">
                    <p>Beauty & Spa</p>
                </div>
                <div class="home__description__container__card" id="card">
                    <img src="" alt="">
                    <p>Cinema</p>
                </div>
            </div>
            <div class="home__description__text">
                <h1>DISCOVER YOUR CITY WITH</h1>
                <h1>DORNE</h1>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit. Sed efficitur tortor neque, vitae aliquet urna varius sit amet. Ut rhoncus, nunc nec tincidunt volutpat, ex libero.</p>
            </div>
        </div>
    `; 

    document.body.appendChild(container);

    document.addEventListener("DOMContentLoaded", function(){

        const cards = container.querySelectorAll('.home__description__container__card');

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        cards[index].classList.add('view');
                    }, index * 200);
                } 
            });
        });

        cards.forEach(card => {
            cardObserver.observe(card);
        });
    });

    return container;
};


export default HomeDescription;