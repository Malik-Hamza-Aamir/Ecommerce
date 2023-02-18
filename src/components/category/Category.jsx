import "./category.scss";
import CategoryItem from "../category-item/CategoryItem";

const Category = ({categories}) => {
  return (
    <>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />

        ))}
      </div>
    </>
  );
};

export default Category;
