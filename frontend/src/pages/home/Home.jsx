import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";

function Home() {
  // Penser a ne pas fetch une API pour la banner mais seulement passer en props de la page concerné, ici Home, un Url de voiture établi à l'avance, exemple lambo pour Home, Fefe pour reservation etc....
  return (
    <>
      <NavBar />
      <Banner />
      <Footer />;
    </>
  );
}

export default Home;
