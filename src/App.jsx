import './App.css';
import { Portfolio } from "./components/Portfolio.jsx";
import { Toolbar } from "./components/Toolbar.jsx";
import { ProjectList } from "./components/ProjectList.jsx";

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
    src: "https://github.com/netology-code/ra16-homeworks/blob/ra-51/components/store-class/i/item-black.jpg?raw=true",
  };

  return (
    <div>
        <Portfolio />
    </div>
  )
}

export default App;
