const SingleListing = () => {
    const container = document.createElement('div');
    container.innerHTML = `
        <div class="overlayS"></div>
        <div class="bannerS">
            <img class="banner__img" src="https://technext.github.io/dorne/img/bg-img/breadcumb.jpg" alt="">
        </div>
        <div class="single">
            <div class="single__review">
                <div class="single__review__location">
                    location
                </div>
                <div class="single__review__rating">
                    8.7
                </div>
                <div class="single__review__write">
                    Write a review
                </div>
            </div>
            <div class="single__description">
                <div class="single__description__title">
                    <h2>BURGER HOUSE SOHO</h2>
                    <p>First Avenue no 83</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue sit amet vestibulum. Proin tempus lacus porta lorem blandit aliquam eget quis ipsum. Vivamus accumsan consequat ligula non volutpat. Sed mollis orci non cursus vestibulum. Pellentesque vitae est a augue laoreet venenatis sed eu felis. Sed cursus magna nec turpis ullamcorper, eget rutrum felis egestas. Nunc odio ex, fermentum efficitur nunc vitae, efficitur hendrerit diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue sit amet vestibulum. Proin tempus lacus porta lorem blandit aliquam eget quis ipsum.</p>
                    <div class="single__description__title__select">
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
                </div>
                <div class="single__description__input">
                    <p>Verified Listing</p>
                    <div class="single__description__input__form">
                        <form>
                            <h2>Book A Table</h2>
                            <select class="explore__form__container__input__box__select">    
                                <option selected="">Your Destinations</option>
                                <option value="1">New York</option>
                                <option value="2">Latvia</option>
                                <option value="3">Dhaka</option>
                                <option value="4">Melbourne</option>
                                <option value="5">London</option>
                            </select>
                            <select class="explore__form__container__input__box__select">    
                                <option selected="">Your Destinations</option>
                                <option value="1">Guest 1</option>
                                <option value="2">Guest 2</option>
                                <option value="3">Guest 3</option>
                                <option value="4">Guest 4</option>
                            </select>
                            <button type=""><img src="../../assets/search1.svg" alt="">Search</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    `;

    return container;
};

export default SingleListing;