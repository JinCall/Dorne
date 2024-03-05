import HomeDescription from './HomeDescription.js';
import HomeDiscover from './HomeDiscover.js'

const Home = () => {
    const container = document.createElement('div');

    container.append(HomeDiscover())
    container.append(HomeDescription())

    return container;
};

export default Home;