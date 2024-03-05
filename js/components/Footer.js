function Footer() {
    const content = document.createElement("div");
    
    content.classList.add("footer");
    const date = new Date().getFullYear();
    
    content.innerHTML = `
        <p>Copyright © ${date} All rights reserved | Made with Colorlib  & distributed by ThemeWagon</p>
        <nav class="footer__list">
            <a href="">
                <img src="../../assets/facebook-svgrepo-com1.svg" alt="Facebook"></img>
            </a>
            <a href="">
                <img src="../../assets/gmail-svgrepo-com1.svg" alt=""></img>
            </a>
            <a href="">
                <img src="../../assets/instagram-svgrepo-com1.svg" alt=""></img>
            </a>
            <a href="">
                <img src="../../assets/linkedin-svgrepo-com1.svg" alt=""></img>
            </a>
        </nav>
    `;
    return content;
}

export default Footer;
