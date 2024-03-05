const About = () => {
    const container = document.createElement('div');
    container.innerHTML = `
        <div>
            <h2>About Component</h2>
            <p>Welcome to the About page!</p>
        </div>
    `;

    return container;
};

export default About;