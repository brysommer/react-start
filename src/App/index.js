import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Nav from '../components/Nav';

function App() {
  const cardData = [
    {
      id: 1,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      buttonText: 'View options',
      productDetails: {
        rating: 0,
        name: 'Special Item',
        price: '$18.00',
        dicountedPrice: '$20.00',
      },
      saleBadge: false,
    },
    {
      id: 2,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      buttonText: 'View options',
      productDetails: {
        rating: 0,
        name: 'Special Item',
        price: '$18.00',
        dicountedPrice: '$20.00',
      },
      saleBadge: false,
    },
    {
      id: 3,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      buttonText: 'View options',
      productDetails: {
        rating: 0,
        name: 'Expensive item Item',
        price: '$180.00',
        dicountedPrice: '$20.00',
      },
      saleBadge: false,
    },
    {
      id: 4,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      buttonText: 'View options',
      productDetails: {
        rating: 0,
        name: 'Super Item',
        price: '$26.00',
        dicountedPrice: '$20.00',
      },
      saleBadge: false,
    },
    {
      id: 4,
      img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      buttonText: 'Add to Cart',
      productDetails: {
        rating: 0,
        name: 'Another Item',
        price: '$20.00',
        dicountedPrice: '$20.00',
      },
      saleBadge: false,
    }
  ]
  
  return (
    <div className="App">
      <Nav />
      <Header  />
      <Body cardData={cardData} />
      <Footer />
    </div>
  );
}

export default App;
