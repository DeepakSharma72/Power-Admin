export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];


export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "price",
    headerName: "Price (Rs)",
    width: 120
  },
  {
    field: "stock",
    headerName: "Stocks",
    width: 120
  },
];


export const productRows = [
  {
    id: 1,
    title: 'Smartwatch',
    description: ' A stylish smartwatch with fitness tracking features.',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaRcVfxqhdDVE7l8rhTp_en29HM-GezlbyYdfNyAYPHicwEAwGghqSAbTxyJGHBBDY1ziN9VSRQCySAgPAAuHspJ3W3nmD-0-9cR6yLnqqve7KLkTILx5J4Q&usqp=CAc',
    category: 'Electronics',
    price: 5000,
    stock: 50    
  },
  {
    id: 2,
    title: 'Bluetooth Speaker',
    description: 'A portable speaker with wireless Bluetooth connectivity.',
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRv-KZOFmBXsk39_ood-9ff0gWN47zWx6BWmopK7G8BCNXZ7xf5mHIWgC4yYv7x7hSIbSl4TTguDqV3LJ5pOHFemgu_wUOMt-o-MVKQACMr',
    category: 'Electronics',
    price: 2000,
    stock: 15    
  },
  {
    id: 3,
    title: 'Laptop',
    description: 'A powerful laptop with high-performance specifications.',
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqGELIxQFixoV3OY0Z-KbsBIAHtf_Yr8_3yz2c180N9vHVdQdXTL_HbHyz8OvdY_Mogvh9Il7rOA_eVvs73FC3RD6tr0Kr7yce3f3LHDe11i6yVZt8_kjIog',
    category: 'Electronics',
    price: 60000,
    stock: 5    
  },
  {
    id: 4,
    title: 'Running Shoes',
    description: 'Lightweight and comfortable shoes for running.',
    img: 'https://assets.ajio.com/medias/sys_master/root/20220301/RZ8H/621d2476aeb26921afbc6381/-473Wx593H-469134725-darkgrey-MODEL2.jpg',
    category: 'Sports',
    price: 1999,
    stock: 25    
  },
  {
    id: 5,
    title: 'Coffee Maker',
    description: 'An automatic coffee maker for brewing your favorite beverages.',
    img: '',
    category: 'Home & Kitchen',
    price: 5499,
    stock: 2    
  },
  {
    id: 6,
    title: 'Backpack',
    description: 'A durable backpack with multiple compartments for storage.',
    img: '',
    category: 'Fashion',
    price: 1499,
    stock: 10    
  },
  {
    id: 7,
    title: 'Earphones',
    description: 'Bluetooth earphones with excellent sound quality.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT1FB5UeS41qDrwzYerGaL1fYVC-I6wSIIA&usqp=CAU',
    category: 'Electronics',
    price: 799,
    stock: 18    
  },
  {
    id: 8,
    title: 'Yoga Mat',
    description: 'A comfortable mat for yoga and exercise routines.',
    img: 'https://m.media-amazon.com/images/I/617z+pYWddL._SY355_.jpg',
    category: 'Sports',
    price: 500,
    stock: 30    
  },
  {
    id: 9,
    title: 'Digital Camera',
    description: 'A high-resolution camera for capturing stunning photographs.',
    img: 'https://media-assets.hyperinvento.com/companies/a3c7bcff-3901-47a9-a4e5-b1d2b32d7abb/products/6e19b80d-b63d-4ec0-be5e-da7db239b31e/featureds/images/1a789e6bfdc04dbfaa8586ce3b07221d-product-featured-original.webp',
    category: 'Electronics',
    price: 35000,
    stock: 7    
  },
  {
    id: 10,
    title: 'T-shirt',
    description: 'A casual and comfortable t-shirt for everyday wear.',
    img: 'https://static.zara.net/photos///2023/V/0/1/p/5644/332/400/2/w/824/5644332400_2_1_1.jpg?ts=1677233943338',
    category: 'Fashion',
    price: 350,
    stock: 47    
  }
]


