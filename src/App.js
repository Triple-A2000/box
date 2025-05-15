import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  let title = 'BOX';
  let heroText = 'Dive into the Ultimate Gaming Experience';
  let heroSubText = '“A hero can be anyone“';
  let isLoggedIn = true;

  const navLinks = [
    { index: 0, name: 'Play', url: 'https://components.com/play' },
    { index: 1, name: 'About', url: 'https://components.com/about' },
    { index: 2, name: 'Contacts', url: 'https://components.com/contact' }
  ];

  const movies = [
    {
      id: 1001,
      title: 'Jurassic Park',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg'
    },
    {
      id: 1003,
      title: 'Avengers: Infinity War',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg'
    },
    {
      id: 1005,
      title: 'The Batman',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-batman.jpg'
    },
    {
      id: 1007,
      title: 'Spider-Man: No Way Home',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/spider-man-no-way-home.jpg'
    },
  ];


  return (
    <>
      <Banner heroText={heroText} heroSubtext={heroSubText} isLoggedIn={isLoggedIn}/>
      <div className='container'>
        <Header title={title} navLinks={navLinks} />
        <Gallery list={movies} />
      </div>
      <Footer />
    </>
  );
}

export default App;
