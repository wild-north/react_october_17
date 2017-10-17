import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const ProductButton = ({ history }) => (
    <button onClick={ () => history.push('/product') }>Products</button>
);

const ProductLink = withRouter(ProductButton);
const LinksSection = () => (
    <nav>
        <Link to="/">Home</Link>
        {' |||| '}
        <Link to={ {pathname: '/about'} }>About</Link>
        {' |||| '}
        <ProductLink />
    </nav>
);
const ProductList = (props) => {
    const products = [
        {id: 100, name: 'товар 1', desc: 'охренительная штука всего за $99.99'},
        {id: 101, name: 'товар 2', desc: 'еще болле охренительная штука всего за $999.99'},
        {id: 102, name: 'товар 3', desc: 'мегаохренительная штука всего за $1099.99'},
    ];
    return (
        <div>
            <h1>Product List:</h1>
            <ul>
                {
                    products.map(({ id, name, desc }) => (
                        <li key={ id }>
                            <a href="" onClick={ (e) => e.preventDefault() || props.history.push(`/product/${id}`) }><strong>{ name }</strong></a>
                            <div>{ desc }</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

const ProductDetails = ({ productId }) => <h1>Product #{ productId } Details</h1>;

const App = () => (
    <Router>
        <div>
            <LinksSection />
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route exact path="/product" render={ (props) => <ProductList { ...props }/> }/>
            <Route path="/product/:productId" render={ ({ match }) => <ProductDetails { ...match.params } /> }/>
            {/*<Route path="/about" children={ () => <About /> }/>*/}
        </div>
    </Router>
);

export default App;
