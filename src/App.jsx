import { useState } from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import data from "./data";

const App = () => {
  const [menu, setMenu] = useState(data);
  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  return (
    <main>
      <div className="menu">
        <Title />
        <Categories categories={categories} />
        <Menu menu={menu} />
      </div>
    </main>
  );
};
export default App;
