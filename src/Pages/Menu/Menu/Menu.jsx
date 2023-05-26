import { Helmet } from "react-helmet-async";
// import components
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

// import cover Images
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import drinksImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={menuImg} title={"Our Menu"}></Cover>

      {/* Offered Menu Section */}
      <section className="mb-12 mt-28">
        <SectionTitle
          subHeading="Don't miss"
          heading="Today's Offer"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </section>

      {/* Pizza Menu Section */}
      <section className="mb-12 mt-28">
        <MenuCategory
          items={pizza}
          title="Pizza"
          coverImg={pizzaImg}
        ></MenuCategory>
      </section>

      {/* Salad Menu Section */}
      <section className="mb-12 mt-28">
        <MenuCategory
          items={salad}
          title="Salad"
          coverImg={saladImg}
        ></MenuCategory>
      </section>

      {/* Soup Menu Section */}
      <section className="mb-12 mt-28">
        <MenuCategory
          items={soup}
          title="Soup"
          coverImg={soupImg}
        ></MenuCategory>
      </section>

      {/* Dessert Menu Section */}
      <section className="mb-12 mt-28">
        <MenuCategory
          items={desserts}
          title="Dessert"
          coverImg={dessertImg}
        ></MenuCategory>
      </section>

      {/* Dessert Menu Section */}
      <section className="mb-12 mt-28">
        <MenuCategory
          items={drinks}
          title="Drinks"
          coverImg={drinksImg}
        ></MenuCategory>
      </section>
    </div>
  );
};

export default Menu;
