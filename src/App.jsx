import './App.css';
import Breadcrumbs from './components/Breadcrumbs';
import Create from './components/Create';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-full h-screen bg-white lg:px-24 px-12 mb-30">
      <nav>
        <Navbar />
      </nav>
      <div className="mt-12">
        <Breadcrumbs />
      </div>
      <main className="mt-12">
        <Hero />
      </main>
      <section className="mt-4">
        <Create />
      </section>
      <section>
        <Faq />
      </section>
    </div>
  );
}

export default App;
