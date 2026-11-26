import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import { Categories, Products, About, Contact } from "./components/Sections";
import ProductViewer from "./components/ProductViewer";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import { SEED } from "./data/products";
import { initializeLegacy } from "./legacy";

export default function App() {
 useEffect(() => { initializeLegacy(SEED); }, []);
 return <><canvas id="c"/><Navigation/><main><Hero/><Categories/><Products/><About/><Contact/></main><Footer/><AdminPanel/><ProductViewer/></>;
}
