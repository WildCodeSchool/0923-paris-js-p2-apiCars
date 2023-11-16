import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ListCarModel from "../../components/ListCarModel";
import NavBar from "../../components/NavBar";

function ListModelSearch() {
  return (
    <>
      <NavBar />
      <Banner />
      <h1>Ceci est la page ou s'affiche des modeles bien spécifiques</h1>
      <ListCarModel />
      <Footer />
    </>
  );
}

export default ListModelSearch;
