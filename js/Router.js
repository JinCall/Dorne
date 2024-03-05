import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Explore from './components/Explore.js';
import Listing from './components/Listing.js';
import Header from './components/Header.js';
import HeaderMobile from './components/HeaderMobile.js';
import Footer from './components/Footer.js';
import SingleListing from './components/SingleListing.js';

const container = document.querySelector("#root");

const routes = {
    '/': Home,
    '#/contact': Contact,
    '#/explore': Explore,
    '#/listing': Listing,
    '#/single_listing': SingleListing,
    '#/about': About
};

const renderContent = () => {
    const path = window.location.hash;

    container.innerHTML = '';
    container.appendChild(Header());
    container.appendChild(HeaderMobile());

    const routeComponent = routes[path] || Home;
    container.appendChild(routeComponent());

    container.appendChild(Footer());
};

window.addEventListener('hashchange', renderContent);

renderContent();

export { renderContent };