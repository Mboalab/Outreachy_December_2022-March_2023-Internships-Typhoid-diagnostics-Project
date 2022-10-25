
import Blog from './Blog';
import ColumnNav from './Column';
import Nav from './Nav';


function LandingPage() {
  return (
    <div className="App">
      <Nav />
      <ColumnNav />
      <Blog />

    </div>
  );
}

export default LandingPage;
