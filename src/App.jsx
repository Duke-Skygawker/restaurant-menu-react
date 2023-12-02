import { useState } from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import data from "./data";

const App = () => {
  const [menu, setMenu] = useState(data);
  const categories = ["All", "Breakfast", "Lunch", "Shakes"];

  const filterMenu = (category) => {
    if (category === "all") {
      setMenu(data);
    } else {
      const filteredMenu = data.filter((item) => item.category === category);
      setMenu(filteredMenu);
    }
  };

  return (
    <main>
      <div className="menu">
        <Title />
        <Categories categories={categories} filter={filterMenu} />
        <Menu menu={menu} />
      </div>
    </main>
  );
};
export default App;
