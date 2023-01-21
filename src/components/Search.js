const Search = () => {
    return (
        <header>
            <h2 className="header__title">Search it. Explore it.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Enter an address, neighborhood, city, or ZIP"
            />
        </header>
    );
}

export default Search;