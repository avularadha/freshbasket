const products = [
  {
    id: 1,
    name: "Apple",
    category:"Fruits",
    weight:"2 units",
    price: 120,
    image: "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106360_fjxsge",
    
  },
  {
    id: 2,
    name: "Mango",
    category:"Fruits",
    weight:"2 units",
    price: 45,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106369_g8gezb",
    
  },
  {
    id: 3,
    name: "Banana",
    category:"Fruits",
    weight:"3 units",
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
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106375_h3e2y8",
      
    
  },
  {
    id: 5,
    name: "Pineapple",
    category:"Fruits",
    weight:"1 units",
    price: 58,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106376_y7rlvl",
      
    
  },
   {
    id: 6,
    name: "Coriander",
    category:"leafy vegetables",
    weight:"100g",
    price: 19,
    image:
    "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106531_jcfenw",
       
  },
  {
    id:7 ,
    name: "Mint Leaves",
    category:"leafy vegetables",
    weight:"90-100g",
    price: 9,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106532_q5yqtg",
      
    
  },
   {
    id:8 ,
    name: "Curry Leaves",
    category:"leafy vegetables",
    weight:"50g",
    price:9,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106534_vqace1",
      
    
  },
   {
    id:9 ,
    name: "Spinach",
    category:"leafy vegetables",
    weight:"450-550g",
    price:9,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106537_mxcajo",
      
    
  },
   {
    id: 10,
    name: "Basale Leaf",
    category:"leafy vegetables",
    weight:"250g",
    price: 19,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106538_wflux2",
      
      
    
  },
   {
    id:11 ,
    name: "Amaranthus Red leafy",
    category:"leafy vegetables",
    weight:"240-260g",
    price: 19,
    image: 
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106539_jvl609",
    
  },
  {
    id:12 ,
    name: "Cabbage",
    category:"leafy vegetables",
    weight:"400-600g",
    price: 26,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106540_ravvca",
    
  },
  {
    id:13,
    name: "Carrot",
    category:"vegetables",
    weight:"240-260g",
    price: 10,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106564_ygm3u3",
    
  },
  {
    id:14,
    name: "Cucumber",
    category:"vegetables",
    weight:"2 units",
    price: 18,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106565_yutdyy",
    
  },
  
  {
    id:15,
    name: "Tomato",
    category:"vegetables",
    weight:"450-550g",
    price: 47,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106566_vyw6cs",
    
  },
  
  {
    id:16,
    name: "Chilli Green",
    category:"vegetables",
    weight:"190-210g",
    price: 19,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106567_fjhpkj",
    
  },
  
  {
    id:17,
    name: "Onion",
    category:"vegetables",
    weight:"500g",
    price: 24,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106568_qetjvt",
    
  },
  {
    id:18,
    name: "Bottle Gourd",
    category:"vegetables",
    weight:"400-600g",
    price: 29,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106569_vrpahc",
    
  },
  {
    id:19,
    name: "Potato",
    category:"vegetables",
    weight:"500g",
    price: 25,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106570_in3izt",
    
  },
  {
    id:20,
    name: "Beans Cluster",
    category:"vegetables",
    weight:"250g",
    price: 18,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106571_x7njpi",
    
  },
  {
    id:21,
    name: "Brinjal",
    category:"vegetables",
    weight:"450-550g",
    price: 36,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106572_fl7l4n",
    
  },
  {
    id:22,
    name: "Lady's Finger",
    category:"vegetables",
    weight:"240g-260g",
    price: 9,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106573_kct3rc",
    
  },
  {
    id:23,
    name: "Cauliflower",
    category:"vegetables",
    weight:"400-600g",
    price: 70,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106574_fw9kxh",
    
  },
  {
    id:24,
    name: "Ridge Gourd",
    category:"vegetables",
    weight:"450-550g",
    price: 19,
    image:
      "https://res.cloudinary.com/dqgnbdlkz/image/upload/f_auto,q_auto/1000106575_tyozwp",
    
  },
  
];

export default products;