import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "BOILED EGG",
      price: 10,
      text: "Soft-boiled free-range eggs sprinkled with sea salt and cracked pepper.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Slow-simmered shoyu broth with springy noodles, jammy yolk, and nori.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Char-grilled chicken thighs glazed with rosemary garlic butter.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "STRAWBERRY CAKE",
      price: 18,
      text: "Vanilla sponge layered with fresh strawberries and whipped mascarpone.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "CLASSIC BURGER",
      price: 23,
      text: "Smoky grilled patty topped with caramelized onions and cheddar.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "MAPLE PANCAKE",
      price: 25,
      text: "Buttermilk pancakes soaked in maple syrup and toasted pecans.",
      image: "/images/pancake.png",
      type: "dinner",
    },
    {
      name: "SUNRISE SCRAMBLE",
      price: 16,
      text: "Creamy eggs folded with chives, blistered tomatoes, and feta.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "MISO BUTTER RAMEN",
      price: 27,
      text: "Toasted miso butter coats every noodle with deep umami richness.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "HERB ROAST CHICKEN",
      price: 42,
      text: "Roasted chicken finished with lemon zest, thyme, and pan jus.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "DOUBLE CHOC CAKE",
      price: 20,
      text: "Dark chocolate sponge with silky ganache and cocoa nib crunch.",
      image: "/images/cake.png",
      type: "dessert",
    },
    {
      name: "FIERY BURGER",
      price: 26,
      text: "Angus beef, chipotle aioli, and pickled jalapeños for a spicy kick.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "BERRY STACK",
      price: 22,
      text: "Fluffy pancakes layered with macerated berries and citrus zest.",
      image: "/images/pancake.png",
      type: "breakfast",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
