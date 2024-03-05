function Header() {
    const content = document.createElement("div")

    content.classList.add("header")
    content.innerHTML = `
        <a href="#/" class="header__logo">
            <img src="https://technext.github.io/dorne/img/core-img/logo.png" alt="Logo">
        </a>
        <nav class="header__list">
            <ul>
                <li class="header__list__link"><a href="#/">Home</a></li>
                <li class="header__list__link">
                    <p class="" id="exploreBtn">Explore</p>
                </li>
                <div class="header__list__link__menu" id="exploreMenu">
                    <a href="#/">Home</a>
                    <a href="#/explore">Explore</a>
                    <a href="#/listing">Listings</a>
                    <a href="#/single_listing">Single Listing</a>
                    <a href="#/contact">Contact</a>
                </div>
                <li class="header__list__link">
                    <p class="" id="listingBtn">Listings</p>
                </li>
                <div class="header__list__link__menu" id="listingMenu">
                    <a href="#/">Home</a>
                    <a href="#/explore">Explore</a>
                    <a href="#/listing">Listings</a>
                    <a href="#/single_listing">Single Listing</a>
                    <a href="#/contact">Contact</a>
                </div>
                <li class="header__list__link"><a href="#/contact">Contact</a></li>
            </ul>
        </nav>
        <nav class="header__button">
            <ul>
                <li class="header__button__link" id="searchBtn">
                    <img src="../../assets/search.png" alt="Search Icon" id="searchBtn"><p>Search</p>
                </li>
                <div class="header__button__link__search" id="searchBar">
                    <input class="header__button__link__search__input" type="text" name="search" value="">
                    <img src="../../assets/delete.svg" alt="" id="removeSearch">
                </div>
                <li class="header__button__link">
                    <a class="signIn" href="#/signIn">Sign in or Register</a>
                </li>
                <li class="header__button__link">
                    <a class="addListing" href="#/add_listing">Add listings</a>
                </li>
            </ul>
        </nav>
    `;

    document.body.appendChild(content);

    let exploreMenu;
    let listingMenu;
    let searchBar;

    document.addEventListener("DOMContentLoaded", function () {

        exploreMenu = document.querySelector("#exploreMenu");
        listingMenu = document.querySelector("#listingMenu");
        searchBar = document.querySelector("#searchBar");

        const exploreBtn = document.querySelector("#exploreBtn");
        const listingBtn = document.querySelector("#listingBtn");

        const searchBtn = document.querySelector("#searchBtn");
        const removeSearch = document.querySelector("#removeSearch");

        const headerSection = document.querySelector(".header");

        document.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;

            const scrollThreshold = 10;

            if (scrollPosition > scrollThreshold) {
                headerSection.classList.add("move");
            } else {
                headerSection.classList.remove("move");
            }
        });

        exploreBtn.addEventListener("click", () => {
            exploreMenu.classList.add("active");
            listingMenu.classList.remove("active");
        });

        listingBtn.addEventListener("click", () => {
            listingMenu.classList.add("active");
            exploreMenu.classList.remove("active");
        });

        searchBtn.addEventListener("click", () => {
            searchBar.classList.add("active");
            listingMenu.classList.remove("active");
            exploreMenu.classList.remove("active");
        });

        removeSearch.addEventListener("click", () => {
            searchBar.classList.remove("active");
        });
    });

    function closeMenus() {
        exploreMenu.classList.remove("active");
        listingMenu.classList.remove("active");
        searchBar.classList.remove("active");
    }

    document.body.addEventListener("click", (event) => {
        const target = event.target;

        if (
            !target.closest("#exploreBtn") &&
            !target.closest("#listingBtn") &&
            !target.closest("#searchBtn") &&
            !target.closest("#exploreMenu") &&
            !target.closest("#listingMenu") &&
            !target.closest("#searchBar")
        ) {
            closeMenus();
        }
    });


    return content;
}

export default Header;
