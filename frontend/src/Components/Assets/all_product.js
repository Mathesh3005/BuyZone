import p1_img from "./product_1.jpeg";
import p2_img from "./product_2.jpeg";
import p3_img from "./product_3.jpeg";
import p4_img from "./product_4.jpeg";
import p5_img from "./product_5.jpeg";
import p6_img from "./product_6.jpeg";
import p7_img from "./product_7.jpeg";
import p8_img from "./product_8.jpeg";
import p9_img from "./product_9.jpeg";
import p10_img from "./product_10.jpeg";
import p11_img from "./product_11.jpeg";
import p12_img from "./product_12.jpeg";
import p13_img from "./product_13.jpeg";
import p14_img from "./product_14.jpeg";
import p15_img from "./product_15.jpeg";
import p16_img from "./product_16.jpeg";
import p17_img from "./product_17.jpeg";
import p18_img from "./product_18.jpeg";
import p19_img from "./product_19.jpeg";
import p20_img from "./product_20.jpeg";
import p21_img from "./product_21.jpeg";
import p22_img from "./product_22.jpeg";
import p23_img from "./product_23.jpeg";
import p24_img from "./product_24.jpeg";
import p25_img from "./product_25.jpeg";
import p26_img from "./product_26.jpeg";
import p27_img from "./product_27.jpeg";
import p28_img from "./product_28.jpeg";
import p29_img from "./product_29.jpeg";
import p30_img from "./product_30.jpeg";
import p31_img from "./product_31.jpeg";
import p32_img from "./product_32.jpeg";
import p33_img from "./product_33.jpeg";
import p34_img from "./product_34.jpeg";
import p35_img from "./product_35.jpeg";
import p36_img from "./product_36.jpeg";

let all_product = [
  // ---------- WOMEN ----------
  {
    id: 1,
    name: "Pink Cable Knit Sweater",
    description: "Soft woolen sweater with cozy texture and ribbed cuffs — perfect for winter.",
    category: "women",
    image: p1_img,
    new_price: 1200,
    old_price: 1500
  },
  {
    id: 2,
    name: "Classic White Crop T-Shirt",
    description: "Minimalist short-sleeve cotton tee ideal for casual outfits.",
    category: "women",
    image: p2_img,
    new_price: 650,
    old_price: 900
  },
  {
    id: 3,
    name: "Black Basic Tee",
    description: "Everyday essential black t-shirt with soft stretchable fabric.",
    category: "women",
    image: p3_img,
    new_price: 700,
    old_price: 950
  },
  {
    id: 4,
    name: "Red Checked Casual Shirt",
    description: "Trendy red check shirt with button-down design and long sleeves.",
    category: "women",
    image: p4_img,
    new_price: 900,
    old_price: 1150
  },
  {
    id: 5,
    name: "White Round Neck T-Shirt",
    description: "Comfortable and breathable cotton t-shirt ideal for all-day wear.",
    category: "men",
    image: p5_img,
    new_price: 750,
    old_price: 950
  },
  {
    id: 6,
    name: "Black Crew Neck T-Shirt",
    description: "Slim-fit black t-shirt made of premium cotton fabric.",
    category: "men",
    image: p6_img,
    new_price: 780,
    old_price: 950
  },
  {
    id: 7,
    name: "Blue Striped Formal Shirt",
    description: "Lightweight striped shirt perfect for office and formal occasions.",
    category: "men",
    image: p7_img,
    new_price: 1100,
    old_price: 1350
  },
  {
    id: 8,
    name: "Beige Cotton Shirt",
    description: "Soft breathable cotton fabric — versatile for casual or formal use.",
    category: "men",
    image: p8_img,
    new_price: 950,
    old_price: 1200
  },
  {
    id: 9,
    name: "White & Navy Printed Shirt",
    description: "Trendy half-sleeve printed shirt for relaxed summer style.",
    category: "men",
    image: p9_img,
    new_price: 850,
    old_price: 1000
  },
  {
    id: 10,
    name: "Blue Denim Casual Shirt",
    description: "Classic denim shirt with button closure and two front pockets.",
    category: "men",
    image: p10_img,
    new_price: 1300,
    old_price: 1600
  },
  {
    id: 11,
    name: "Black Floral Printed Shirt",
    description: "Vacation-ready floral shirt made from soft rayon blend.",
    category: "men",
    image: p11_img,
    new_price: 1000,
    old_price: 1250
  },
  {
    id: 12,
    name: "White Linen Formal Shirt",
    description: "Elegant full sleeve linen shirt perfect for business meetings.",
    category: "men",
    image: p12_img,
    new_price: 1200,
    old_price: 1500
  },
  {
    id: 13,
    name: "Cream Solid Cotton Shirt",
    description: "Premium light beige shirt crafted with soft cotton for comfort.",
    category: "men",
    image: p13_img,
    new_price: 950,
    old_price: 1250
  },
  {
    id: 14,
    name: "Black Leather Jacket",
    description: "Stylish biker leather jacket with front zip and pockets.",
    category: "men",
    image: p14_img,
    new_price: 2800,
    old_price: 3200
  },
  {
    id: 15,
    name: "Peach Casual Shirt",
    description: "Trendy peach solid shirt with full sleeves and comfortable fit.",
    category: "men",
    image: p15_img,
    new_price: 950,
    old_price: 1200
  },
  {
    id: 16,
    name: "Yellow Linen Casual Shirt",
    description: "Bright summer wear shirt made with light breathable linen fabric.",
    category: "men",
    image: p16_img,
    new_price: 1050,
    old_price: 1300
  },
  {
    id: 17,
    name: "White Slim Fit T-Shirt",
    description: "Soft cotton slim-fit t-shirt perfect for layering or solo wear.",
    category: "women",
    image: p17_img,
    new_price: 600,
    old_price: 800
  },
  {
    id: 18,
    name: "Navy Blue Casual Shirt",
    description: "Half sleeve navy shirt made from stretchable cotton blend.",
    category: "men",
    image: p18_img,
    new_price: 900,
    old_price: 1150
  },
  {
    id: 19,
    name: "White Printed Summer Shirt",
    description: "Lightweight shirt with playful blue prints — perfect for travel.",
    category: "men",
    image: p19_img,
    new_price: 950,
    old_price: 1200
  },
  {
    id: 20,
    name: "Floral Printed Vacation Shirt",
    description: "Colorful printed shirt with soft breathable fabric for beachwear.",
    category: "men",
    image: p20_img,
    new_price: 980,
    old_price: 1200
  },
  {
    id: 21,
    name: "Lilac Graphic Tee",
    description: "Trendy pastel tee with stylish graphic print on front.",
    category: "men",
    image: p21_img,
    new_price: 750,
    old_price: 950
  },
  {
    id: 22,
    name: "Sky Blue Formal Shirt",
    description: "Elegant office wear shirt with full sleeves and button cuffs.",
    category: "men",
    image: p22_img,
    new_price: 1100,
    old_price: 1350
  },
  {
    id: 23,
    name: "Maroon Textured Shirt",
    description: "Textured full sleeve shirt suitable for parties and formal events.",
    category: "men",
    image: p23_img,
    new_price: 1200,
    old_price: 1450
  },
  {
    id: 24,
    name: "Purple Kids Party Dress",
    description: "Beautiful velvet gown with ribbon waist and flared bottom.",
    category: "kids",
    image: p24_img,
    new_price: 1600,
    old_price: 1900
  },
  {
    id: 25,
    name: "Cute Baby Girl Floral Dress",
    description: "Soft cotton dress with floral design and sleeveless comfort fit.",
    category: "kids",
    image: p25_img,
    new_price: 950,
    old_price: 1150
  },
  {
    id: 26,
    name: "Baby Boy Casual Outfit",
    description: "Adorable navy-blue combo set with shirt and shorts.",
    category: "kids",
    image: p26_img,
    new_price: 900,
    old_price: 1100
  },
  {
    id: 27,
    name: "Toddler Boy Check Shirt Set",
    description: "Comfortable check shirt and shorts combo for playful style.",
    category: "kids",
    image: p27_img,
    new_price: 850,
    old_price: 1000
  },
  {
    id: 28,
    name: "Kids Red Party Frock",
    description: "Elegant red gown with layered net and satin belt.",
    category: "kids",
    image: p28_img,
    new_price: 1300,
    old_price: 1600
  },
  {
    id: 29,
    name: "Boys White Printed Shirt",
    description: "Trendy printed shirt for casual wear and school events.",
    category: "kids",
    image: p29_img,
    new_price: 750,
    old_price: 950
  },
  {
    id: 30,
    name: "Girls Pink Cotton Dress",
    description: "Light and breathable pink frock for everyday comfort.",
    category: "kids",
    image: p30_img,
    new_price: 900,
    old_price: 1100
  },
  {
    id: 31,
    name: "Boys Blue Denim Outfit",
    description: "Cool denim set perfect for casual and outdoor fun.",
    category: "kids",
    image: p31_img,
    new_price: 1100,
    old_price: 1350
  },
  {
    id: 32,
    name: "Girls Floral Party Dress",
    description: "Gorgeous floral printed sleeveless gown for festive occasions.",
    category: "kids",
    image: p32_img,
    new_price: 1400,
    old_price: 1700
  },
  {
    id: 33,
    name: "Boys Half Sleeve Shirt",
    description: "Soft cotton half sleeve shirt ideal for summer comfort.",
    category: "kids",
    image: p33_img,
    new_price: 700,
    old_price: 900
  },
  {
    id: 34,
    name: "Girls Pink Top & Skirt Set",
    description: "Trendy matching set with floral print and cute design.",
    category: "kids",
    image: p34_img,
    new_price: 1000,
    old_price: 1200
  },
  {
    id: 35,
    name: "Boys Hoodie & Jogger Set",
    description: "Stylish full-sleeve hoodie with matching joggers — comfy fit.",
    category: "kids",
    image: p35_img,
    new_price: 1200,
    old_price: 1450
  },
  {
    id: 36,
    name: "Girls Sleeveless Party Gown",
    description: "Elegant sleeveless gown with floral detailing — ideal for parties.",
    category: "kids",
    image: p36_img,
    new_price: 1500,
    old_price: 1800
  }
];

export default all_product;
