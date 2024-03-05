const Contact = () => {
    const container = document.createElement('div');
    container.innerHTML = `
        <div class="contact">
            <div class="overlay"></div>
            <div class="contact__banner">
                <img class="contact__banner__img" src="https://technext.github.io/dorne/img/bg-img/hero-1.jpg" alt="">
            </div>
            <div class="contact__form">
                <h3>HELLO, GET IN TOUCH WITH US</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue sit amet vestibulum. Proin tempus lacus porta lorem blandit aliquam eget quis ipsum. Vivamus accumsan consequat ligula non volutpat. Sed mollis orci non cursus vestibulum. Pellentesque vitae est a augue laoreet venenatis sed eu felis. Sed cursus magna nec turpis ullamcorper, eget rutrum felis egestas. Nunc odio ex, fermentum efficitur nunc vitae, efficitur hendrerit diam. Lorem ipsum dolor sit amet, consectetur.</span>
                <div class="contact__form__container">
                    <p>Main Avenue Soho, NY</p>
                    <p>No. 25-33</p>
                    <p>contact@yourbusiness.com</p>
                    <p>+34 567 22478 49567</p>
                </div>
                <div class="contact__form__input">
                    <h3>Contact Business</h3>
                    <form action="#">
                        <div class="contact__form__input__container">
                            <input type="text" name="name" class="" placeholder="Your Name">
                            <input type="email" name="email" class="" placeholder="Email Address">
                        </div>
                        <input type="text" name="subject" class="" placeholder="Subject">
                        <textarea name="message" class="" id="Message" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <button type="submit" class="">Send</button>
                    </form>
                </div>
            </div>
            <div class="contact__map">
                
            </div>
        </div>
    `;

    return container;
};


export default Contact;