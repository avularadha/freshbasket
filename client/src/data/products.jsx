const products = [
  {
    id: 1,
    name: "Apple",
    category:"Fruits",
    weight:"2 units",
    price: 120,
    rating:4.5,
    reviews:120,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106360_fjxsge",
    
  },
  {
    id: 2,
    name: "Mango",
    category:"Fruits",
    weight:"2 units",
    price: 45,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106369_g8gezb",
    
  },
  {
    id: 3,
    name: "Banana",
    category:"Fruits",
    weight:"3 units",
    rating:4.5,
    reviews:120,
    price: 24,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106371_ui9uvd",
      
    
  },
  {
    id: 4,
    name: "Pomegranate",
    category:"Fruits",
    weight:"4 units",
    price: 164,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106375_h3e2y8",
      
    
  },
  {
    id: 5,
    name: "Pineapple",
    category:"Fruits",
    weight:"1 units",
    price: 58,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106376_y7rlvl",
      
    
  },
   {
    id: 6,
    name: "Coriander",
    category:"leafy vegetables",
    weight:"100g",
    price: 19,
    rating:4.5,
    reviews:120,
    image:
    "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106531_jcfenw",
       
  },
  {
    id:7 ,
    name: "Mint Leaves",
    category:"leafy vegetables",
    weight:"90-100g",
    price: 9,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106532_q5yqtg",
      
    
  },
   {
    id:8 ,
    name: "Curry Leaves",
    category:"leafy vegetables",
    weight:"50g",
    price:9,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106534_vqace1",
      
    
  },
   {
    id:9 ,
    name: "Spinach",
    category:"leafy vegetables",
    weight:"450-550g",
    price:9,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106537_mxcajo",
      
    
  },
   {
    id: 10,
    name: "Basale Leaf",
    category:"leafy vegetables",
    weight:"250g",
    price: 19,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106538_wflux2",
      
      
    
  },
   {
    id:11 ,
    name: "Amaranthus Red leafy",
    category:"leafy vegetables",
    weight:"240-260g",
    price: 19,
    rating:4.5,
    reviews:120,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106539_jvl609",
    
  },
  {
    id:12 ,
    name: "Cabbage",
    category:"leafy vegetables",
    weight:"400-600g",
    price: 26,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106540_ravvca",
    
  },
  {
    id:13,
    name: "Carrot",
    category:"vegetables",
    weight:"240-260g",
    price: 10,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106564_ygm3u3",
    
  },
  {
    id:14,
    name: "Cucumber",
    category:"vegetables",
    weight:"2 units",
    price: 18,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106565_yutdyy",
    
  },
  
  {
    id:15,
    name: "Tomato",
    category:"vegetables",
    weight:"450-550g",
    price: 47,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106566_vyw6cs",
    
  },
  
  {
    id:16,
    name: "Chilli Green",
    category:"vegetables",
    weight:"190-210g",
    price: 19,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106567_fjhpkj",
    
  },
  
  {
    id:17,
    name: "Onion",
    category:"vegetables",
    weight:"500g",
    price: 24,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106568_qetjvt",
    
  },
  {
    id:18,
    name: "Bottle Gourd",
    category:"vegetables",
    weight:"400-600g",
    price: 29,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106569_vrpahc",
    
  },
  {
    id:19,
    name: "Potato",
    category:"vegetables",
    weight:"500g",
    price: 25,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106570_in3izt",
    
  },
  {
    id:20,
    name: "Beans Cluster",
    category:"vegetables",
    weight:"250g",
    price: 18,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106571_x7njpi",
    
  },
  {
    id:21,
    name: "Brinjal",
    category:"vegetables",
    weight:"450-550g",
    price: 36,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106572_fl7l4n",
    
  },
  {
    id:22,
    name: "Lady's Finger",
    category:"vegetables",
    weight:"240g-260g",
    price: 9,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106573_kct3rc",
    
  },
  {
    id:23,
    name: "Cauliflower",
    category:"vegetables",
    weight:"400-600g",
    price: 70,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106574_fw9kxh",
    
  },
  {
    id:24,
    name: "Ridge Gourd",
    category:"vegetables",
    weight:"450-550g",
    price: 19,
    rating:4.5,
    reviews:120,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106575_tyozwp",
    
  },
  {
    id: 25,
    name: "Guava",
    category:"Fruits",
    weight:"1 units",
    price: 49,
    rating:4.5,
    reviews:120,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107304_ldxsie", 
  },
  {
    id: 26,
    name: "Watermelon",
    category:"Fruits",
    weight:"1 units",
    price:79 ,
    rating:4.5,
    reviews:120,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107305_jt8ibp", 
  },
  {
    id: 27,
    name: "Sapota Chikoo",
    category:"Fruits",
    weight:"500g",
    price: 59 ,
    rating:4.5,
    reviews:120,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107310_icz21s", 
  },
   {
    id: 28,
    name: "Papaya Semi Ripe",
    category:"Fruits",
    weight:"1 units",
    rating:4.5,
    reviews:120,
    price: 71 ,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107313_mypgdm", 
  },
   {
    id: 29,
    name: "Kiwi",
    category:"Exotic Fruits",
    weight:"3 units",
    price: 167,
    rating:4.5,
    reviews:120,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107314_klck70", 
  },
   {
    id: 30,
    name: "Striped Muskmelon",
    category:"Fruits",
    weight:"450-500g",
    price: 83 ,
    rating:4.5,
    reviews:120,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107317_fwcwhi", 
  },
 
   {
    id:31,
    name:"Toned Milk",
    category:"Dairy & Eggs",
    weight:"500g",
    price:31,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107656_dnsh71",
  },
   {
    id:32,
    name:"Milk",
    category:"Dairy & Eggs",
    weight:"1L",
    price:74,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107657_xfs1li",
  },
   {
    id:33,
    name:"Curd",
    category:"Dairy & Eggs",
    weight:"500g",
    price:49,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107658_zlyqu2",
  },
   {
    id:34,
    name:"Curd",
    category:"Dairy & Eggs",
    weight:"1L",
    price:108,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107661_llypj9",
  },
   {
    id:35,
    name:"Paneer",
    category:"Dairy & Eggs",
    weight:"200g",
    price:79,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107662_j7gsi3",
  },
   {
    id:36,
    name:"Paneer",
    category:"Dairy & Eggs",
    weight:"240g",
    price:115,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107663_v33qml",
  },
   {
    id:37,
    name:"Butter",
    category:"Dairy & Eggs",
    weight:"100g",
    price:58,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107664_kvkws2",
  },
   {
    id:38,
    name:"Butter",
    category:"Dairy & Eggs",
    weight:"500g",
    price:280,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107665_intupu",
  }
  ,
   {
    id:39,
    name:"Cheese Slices",
    category:"Dairy & Eggs",
    weight:"100g",
    price:81,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107670_yxigk2",
  },
   {
    id:40,
    name:"Cheese",
    category:"Dairy & Eggs",
    weight:"200g",
    price:123,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107671_znatjl",
  },
   {
    id:41,
    name:"Hen white Eggs",
    category:"Dairy & Eggs",
    weight:"6 Units",
    price:45,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107672_izuj3h",
  },
   {
    id:42,
    name:"Hen White Eggs",
    category:"Dairy & Eggs",
    weight:"30 pcs",
    price:211,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107677_tltsmd",
  },
   {
    id:43,
    name:"Hen Brown Eggs",
    category:"Dairy & Eggs",
    weight:"6 Units",
    price:101,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107678_nvv3if"
  },
  {
    id:44,
    name:"Hen Brown Eggs",
    category:"Dairy & Eggs",
    weight:"10 Units",
    price:123,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107685_ywenbm",
  },
  {
    id:45,
    name:"Dragon Fruit",
    category:"Exotic Fruits",
    weight:"1 Units",
    price:67,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107686_v26efn"
  },
   {
    id:46,
    name:"Avocado",
    category:"Exotic Fruits",
    weight:"150g",
    price:89,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107687_sw69tj"
  },
   {
    id:47,
    name:"Blueberries",
    category:"Exotic Fruits",
    weight:"120g",
    price:200,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107690_rrzems"
  },
   {
    id:48,
    name:"Strawberries",
    category:"Exotic Fruits",
    weight:"105g",
    price:187,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107691_alhk7b"
  },
   {
    id:49,
    name:"Imported Pear",
    category:"Exotic Fruits",
    weight:"2 Units",
    price:200,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107693_kceme4"
  },
   {
    id:50,
    name:"Litchi",
    category:"Fruits",
    weight:"100g",
    price:46,
    rating:4.5,
    reviews:120,
    image:"https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000107694_htwqml"
  },
];

export default products;