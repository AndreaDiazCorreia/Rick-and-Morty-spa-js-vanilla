const Character = () => {
    const view =`
    <div class="Character-inner">
        <article class="Character-card">
            <img src="image" alt="name"></img>
            <h2>Name</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes:</h3>
            <h3>Status:</h3>
            <h3>Species:</h3>
            <h3>Genero</h3>
            <h3>Origen</h3>
            <h3>Last Location</h3>
        </article>
    </div>
    `;
    return view;
};

export default Character;