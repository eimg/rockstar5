const MyContext = React.createContext("Default Value");

const App = props => (
    <div>
        <Header />
        <ul>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
            <li>Item Four</li>
            <li>Item Five</li>
            <li>Item Six</li>
        </ul>
    </div>
);

const Header = props => (
    <div><Title /></div>
);

const Title = props => {
    const value = React.useContext(MyContext);
    return <h1>{value}</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));
