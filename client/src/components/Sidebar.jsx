import "../styles/Sidebar.css";

const categories = [
  {name:"All"},
  { name: "Fruits", icon: "🍎",  },
  { name: "vegetables", icon: "🥦",},
  { name: "leafy vegetables", icon: "🌶️",  },
  { name: "Herbs & Greens", icon: "🌿",  },
  { name: "Organic", icon: "🌱", },
  { name: "Salad Leaves", icon: "🥗",},
  { name: "Exotic Fruits", icon: "🍋",},
  { name: "Cut & Ready", icon: "🧃",},
];

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">
        CATEGORIES
      </h3>

      {categories.map((item) => (
        <div
          key={item.name}
          className={`category-item ${
            selectedCategory === item.name
              ? "active"
              : ""
          }`}
          onClick={() =>
            setSelectedCategory(item.name)
          }
        >
          <div className="category-left">
            <span className="category-icon">
              {item.icon}
            </span>

            <span className="category-name">
              {item.name}
            </span>
          </div>

          <span className="category-count">
            {item.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;