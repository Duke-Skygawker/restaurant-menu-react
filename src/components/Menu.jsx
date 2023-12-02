import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <section className="section-center">
      {menu.map((item) => {
        return <MenuItem item={item} key={item.id} />;
      })}
    </section>
  );
};
export default Menu;
