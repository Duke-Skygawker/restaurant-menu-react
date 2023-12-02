const MenuItem = ({ item }) => {
  const { title, category, price, img, desc } = item;
  return (
    <article className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">${price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
