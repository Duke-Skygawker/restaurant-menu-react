const Categories = ({ categories, filter }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={(e) => {
              e.preventDefault();
              filter(category.toLowerCase());
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
