function Header() {
    const content = document.createElement("div")

    content.classList.add("headerMobile")
    content.innerHTML = `
        <a href="#/" class="headerMobile__logo">
            <img src="https://technext.github.io/dorne/img/core-img/logo.png" alt="Logo">
        </a>
        <div class="toggler" id="toggler">
            <span class="togglerBar"></span>
            <span class="togglerBar"></span>
            <span class="togglerBar"></span>
        </div>
        <nav class="headerMobile__list" id="togglerMenu">
            <ul>
                <li class="headerMobile__list__link">
                    <a href="#/">Home</a>
                </li>
                <li class="headerMobile__list__link" id="ExploreBtn">
                    <p class="" id="">Explore</p>
                </li>
                <li class="headerMobile__list__link" id="ListingBtn">
                    <p class="" id="">Listings</p>

                </li>
                
                <li class="headerMobile__list__link">
                    <a href="#/contact">Contact</a>
                </li>
                <li class="headerMobile__list__link">
                    <p class="" id="searchMobileBtn">Search</p>
                </li>
                <li class="headerMobile__list__link">
                    <p class="" id="">Sign in or Register</p>
                </li>
                <li class="headerMobile__list__link">
                    <p class="" id="">Add Listing</p>
                </li>
            </ul>
        </nav>
        <div class="headerMobile__list__link__menu" id="mobileMenuExplore">
            <a href="#/">Home</a>
            <a href="#/explore">Explore</a>
            <a href="#/listing">Listings</a>
            <a href="#/single_listing">Single Listing</a>
            <a href="#/contact">Contact</a>
        </div>
        <div class="headerMobile__list__link__menu" id="mobileMenuListing">
            <a href="#/">Home</a>
            <a href="#/explore">Explore</a>
            <a href="#/listing">Listings</a>
            <a href="#/single_listing">Single Listing</a>
            <a href="#/contact">Contact</a>
        </div>
        <div class="headerMobile__list__link__search" id="searchMobileBar">
            <input class="headerMobile__list__link__search__input" type="text" name="search" value="">
            <img src="../../assets/delete.svg" alt="" id="removeMobileSearch">
        </div>
    `;

    document.body.appendChild(content);

    document.addEventListener("DOMContentLoaded", function() {

        const toggler = document.querySelector("#toggler");
        const toggleMenu = document.querySelector("#togglerMenu");

        const ExploreBtn = document.querySelector("#ExploreBtn");
        const ListingBtn = document.querySelector("#ListingBtn");
        const mobileMenuExplore = document.querySelector("#mobileMenuExplore");
        const mobileMenuListing = document.querySelector("#mobileMenuListing");

        const searchMobileBtn = document.querySelector("#searchMobileBtn");
        const searchMobileBar = document.querySelector("#searchMobileBar");
        const removeMobileSearch = document.querySelector("#removeMobileSearch");

        const headerSectionM = document.querySelector(".headerMobile")

        toggler.addEventListener("click", function() {
            toggler.classList.toggle("active");
            toggleMenu.classList.toggle("active");
            mobileMenuExplore.classList.remove("active");
            mobileMenuListing.classList.remove("active");
            console.log("toggler clicked");
        });

        ExploreBtn.addEventListener("click", function() {
            mobileMenuExplore.classList.add("active");
            toggleMenu.classList.toggle("active");
        });

        ListingBtn.addEventListener("click", function() {
            mobileMenuListing.classList.add("active");
            toggleMenu.classList.toggle("active");
        });

        searchMobileBtn.addEventListener("click", function() {
            searchMobileBar.classList.add("active")
        });

        removeMobileSearch.addEventListener("click", function() {
            searchMobileBar.classList.remove("active")
        });

        function closeMenus() {
            toggler.classList.remove("active");
            toggleMenu.classList.remove("active");
            mobileMenuExplore.classList.remove("active");
            mobileMenuListing.classList.remove("active");
        }
        
        document.body.addEventListener("click", (event) => {
            const target = event.target;

            if (
                !target.closest("#toggleMenu") &&
                !target.closest("#listingBtn") &&
                !target.closest("#toggler")
            ) {
                closeMenus();
            }
        });

        document.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;

            const scrollThreshold = 10;

            if (scrollPosition > scrollThreshold) {
                headerSectionM.classList.add("move");
            } else {
                headerSectionM.classList.remove("move");
            }
        });
    });

    return content;
}

export default Header;