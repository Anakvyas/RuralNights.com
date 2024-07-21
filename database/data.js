const sampleListings = [
  {
    title: "Riverside Cottage",
    description: "Relax by the river in this charming cottage, surrounded by lush greenery and serene waters.",
    image: "https://media.istockphoto.com/id/1678695182/photo/beautiful-natural-scenery-of-himalayan-glacier-river-valley-during-monsoon-passing-through.jpg?s=2048x2048&w=is&k=20&c=VHjU9klJoQt5t5TvnOx3WYcsd0407VdFpE1grpzkj8Y=",
    price: 1100,
    location: "Rishikesh",
    country: "India",
    category: "rivers",
    geometry:{
      "type": "Point",
      "coordinates": [78.0297, 30.0774]
    },
    username:"admin",
  },
  {
    title: "Scenic Mountain Retreat",
    description: "Experience the tranquility of the mountains in this cozy retreat. Perfect for hiking and nature lovers.",
    image: "https://images.unsplash.com/photo-1712388429936-2abc7144083f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 900,
    location: "Manali",
    country: "India",
    category: "mountains",
    geometry:{
        "type": "Point",
        "coordinates": [77.1884, 32.2396]
    },
    username:"admin",
  },
  {
    title: "Beachfront Bungalow",
    description: "A luxurious villa by the sea, perfect for a beach holiday with stunning ocean views.",
    image: "https://tse4.mm.bing.net/th?id=OIP.85TQhShNF2tM-fENOcLQoQHaE8&pid=Api&P=0&h=180",

    price: 1600,
    location: "Goa",
    country: "India",
    category: "beaches",
    geometry: {
      type: 'Point',
      coordinates: [ 74.0541108203647, 15.3255560468503 ]
    },
    username:"admin",
  },
  {
    title: "Modern City Loft",
    description: "Stay in the heart of the city in this modern and stylish loft apartment.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
    location: "Mumbai",
    country: "India",
    category: "rooms",
    geometry:{
      "type": "Point",
      "coordinates": [72.8777, 19.0760]
    },
    username:"admin",
    },
  {
    title: "Charming Farmhouse",
    description: "Stay in a beautiful farmhouse surrounded by nature. Perfect for a peaceful getaway.",
    price: 800,
    image: "https://thumbs.dreamstime.com/b/colorful-rajasthan-farmland-wheat-mustard-fields-straw-huts-buildings-countryside-near-tijara-under-blue-cloudy-90311812.jpg",
    price:1500,
    location: "Punjab",
    country: "India",
    category: "farms",

    geometry:
      {
        "type": "Point",
        "coordinates": [76.7794, 30.7333]
      },
      username:"admin",
    
  },
  {
    title: "Mountain View Cabin",
    description: "Enjoy breathtaking mountain views from this cozy cabin. Great for a relaxing escape.",
    image: "https://tse1.mm.bing.net/th?id=OIP.TlFjD8ecmYg18drK8GRsOgHaDN&pid=Api&P=0&h=180",
    price: 1000,
    location: "Shimla",
    country: "India",
    category: "mountains",
    geometry:{
      "type": "Point",
      "coordinates": [77.1734, 31.1048]
    },
    username:"admin",
    
  },
  {
    title: "Seaside Villa",
    description: "A luxurious villa by the sea, perfect for a beach holiday with stunning ocean views.",
    image: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price:2000,
    location: "Kerala",
    country: "India",
    category: "beaches",
    geometry:{
      "type": "Point",
      "coordinates": [76.9366, 8.5241]
    },
    username:"admin",
    
  },
  {
    title: "Rustic Mountain Hut",
    description: "Stay in a rustic hut in the mountains, surrounded by beautiful landscapes.",
    image: "https://plus.unsplash.com/premium_photo-1697730303782-6679b6bec202?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 850,
    location: "Kullu",
    country: "India",
    category: "mountains",
    geometry:{
      "type": "Point",
      "coordinates": [77.1374, 31.9440]
    },
    username:"admin",
    
  },
  {
    title: "Luxury Farm Stay",
    description: "Experience luxury in this beautiful farm stay, with modern amenities and a peaceful environment.",
    image: "https://assets.cntraveller.in/photos/60b9f3004f828f5ab44b7006/master/w_1600%2Cc_limit/Coorg-1.jpg",
    price: 1400,
    location: "Coorg",
    country: "India",
    category: "farms",
    geometry:{
      "type": "Point",
      "coordinates": [75.8060, 12.3356]
    },
    username:"admin",
    
  },
  {
    title: "Urban Studio Apartment",
    description: "A compact and stylish studio apartment in the city center, perfect for solo travelers.",
    image: "https://tse2.mm.bing.net/th?id=OIP.wHEL-QvUVNjUK6DvBbQ53AHaCd&pid=Api&P=0&h=180",
    price: 950,
    location: "Bangalore",
    country: "India",
    category: "rooms",
    geometry:{
      "type": "Point",
      "coordinates": [77.5946, 12.9716]
    },
    username:"admin",
    
  },
  {
    title: "Peaceful River Lodge",
    description: "A serene lodge by the river, ideal for a tranquil and relaxing stay.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=1200&h=1200&s=1",
    price: 1200,
    location: "Alleppey",
    country: "India",
    category: "rivers",
    geometry:{
      "type": "Point",
      "coordinates": [76.3384, 9.4981]
    },
    username:"admin",
  },
  {
    title: "Hillside Cottage",
    description: "A charming cottage on the hillside, with stunning views and a cozy atmosphere.",
    image: "https://tse3.mm.bing.net/th?id=OIP.8x_Ny8OrzP1ntzEFWW0S6gHaEc&pid=Api&P=0&h=180",
    price: 1100,
    location: "Darjeeling",
    country: "India",
    category: "mountains",
    geometry:{
      "type": "Point",
      "coordinates": [88.2636, 27.0330]
    },
    username:"admin",
    
  },
  {
    title: "Coastal Retreat",
    description: "Relax in this coastal retreat with stunning sea views and beach access.",
    image: "https://www.mediaferien.com/wp-content/uploads/2020/02/Chennai-Beach-Information-and-Travel-Guides.jpg",
    price: 1700,
    location: "Chennai",
    country: "India",
    category: "beaches",
    geometry:{
      "type": "Point",
      "coordinates": [80.2707, 13.0827]
    },
    username:"admin",
    
 },
  {
    title: "Mountain Cabin Getaway",
    description: "Escape to this cozy mountain cabin, surrounded by nature and perfect for a retreat.",
    image: "https://tse1.mm.bing.net/th?id=OIP.TlFjD8ecmYg18drK8GRsOgHaDN&pid=Api&P=0&h=180",
    price: 1300,
    location: "Ooty",
    country: "India",
    category: "mountains",
    geometry:{
      "type": "Point",
      "coordinates": [76.6933, 11.4080]
    },
    username:"admin",
    
  },

  {
    title: "Luxurious Beach House",
    description: "A luxurious beach house with direct beach access and stunning ocean views.",
    image: "https://tse4.mm.bing.net/th?id=OIP.85TQhShNF2tM-fENOcLQoQHaE8&pid=Api&P=0&h=180",
    price: 2500,
    location: "Goa",
    country: "India",
    category: "beaches",
    geometry: {
      type: 'Point',
      coordinates: [ 74.0541108203647, 15.3255560468503 ]
    },
    username:"admin",
  },
  {
    title: "Heritage Farmhouse",
    description: "Stay in a beautiful heritage farmhouse, offering a blend of tradition and modern comfort.",
    image: "https://thumbs.dreamstime.com/b/colorful-rajasthan-farmland-wheat-mustard-fields-straw-huts-buildings-countryside-near-tijara-under-blue-cloudy-90311812.jpg",
    price: 1600,
    location: "Rajasthan",
    country: "India",
    category: "farms",
    geometry:{
      "type": "Point",
      "coordinates": [75.7873, 26.9124]
    },
    username:"admin",
    
  },
  {
    title: "Lake View Room",
    description: "Enjoy stunning lake views from this comfortable and modern room.",
    image: "https://tse2.mm.bing.net/th?id=OIP.fwRyW4gfwDrO31QvpJ6njAHaDD&pid=Api&P=0&h=180",
    price: 1400,
    location: "Udaipur",
    country: "India",
    category: "rooms",
    geometry:{
      "type": "Point",
      "coordinates": [73.6915, 24.5710]
    },
    username:"admin",
    
  },
  {
    title: "Riverfront Villa",
    description: "Stay in a luxurious riverfront villa with stunning views and direct river access.",
    image: "https://i.pinimg.com/originals/35/ab/c7/35abc7d10942973ea5410f7e954c4ef6.jpg",
    price: 1800,
    location: "Haridwar",
    country: "India",
    category: "rivers",
    geometry:{
      "type": "Point",
      "coordinates": [78.1642, 29.9457]
    }
    ,
    username:"admin",
  },
  {
    title: "Hilltop Cabin",
    description: "A secluded hilltop cabin with panoramic views, perfect for a quiet retreat.",
    image: "https://tse4.mm.bing.net/th?id=OIP.Tbp4UnHUIs5UhxS5dhucpwHaE6&pid=Api&P=0&h=180",
    price: 1250,
    location: "Mussoorie",
    country: "India",
    category: "mountains",
    geometry:{
      "type": "Point",
      "coordinates": [78.3847, 30.4598]
    },
    username:"admin",
  },
  {
    title: "Beachside Cottage",
    description: "A charming cottage by the beach, perfect for a relaxing holiday.",
    image: "https://cdn.theculturetrip.com/wp-content/uploads/2017/12/paradise-beach.jpg",
    price: 1400,
    location: "Pondicherry",
    country: "India",
    category: "beaches",
    geometry:{
      "type": "Point",
      "coordinates": [79.8083, 11.9416]
    },
    username:"admin",
    
  },
  {
    title: "Eco-Friendly Farm Stay",
    description: "Stay in an eco-friendly farm with organic produce and a sustainable environment.",
    image: "https://tse1.mm.bing.net/th?id=OIP.wzbWk6KmpOYJugIIazE-ygHaE8&pid=Api&P=0&h=180",
    price: 1300,
    location: "Mysore",
    country: "India",
    category: "farms",
    geometry:{
      "type": "Point",
      "coordinates": [76.6394, 12.2958]
    },
    username:"admin",
    
  },
  {
    title: "City View Penthouse",
    description: "A luxurious penthouse with stunning city views, perfect for a high-end urban experience.",
    image: "https://tse1.mm.bing.net/th?id=OIP.aOAskw8cOG5qkOTSRQMfZAHaEK&pid=Api&P=0&h=180",
    price: 3000,
    location: "Delhi",
    country: "India",
    category: "rooms",
    geometry:{
      "type": "Point",
      "coordinates": [77.2090, 28.6139]
    },
    username:"admin",
    
  },
  {
    title: "Secluded River Cabin",
    description: "A cozy cabin by the river, perfect for a peaceful and private retreat.",
    image: "https://tse4.mm.bing.net/th?id=OIP.6UFFGRs3oGLBbV0VLNlDYgHaEK&pid=Api&P=0&h=180",
    price: 1000,
    location: "Guwahati",
    country: "India",
    category: "rivers",
    geometry:{
      "type": "Point",
      "coordinates": [91.7362, 26.1445]
    },
    
    username:"admin",
    
  },
  {
    title: "Forest Retreat",
    description: "A tranquil retreat in the forest, perfect for nature lovers and those seeking peace.",
    image: "https://tse1.mm.bing.net/th?id=OIP.8TvdzTiM96sheY02RSPmPQHaEu&pid=Api&P=0&h=180",
    price: 1150,
    location: "Sundarbans",
    country: "India",
    category: "mountains",
    geometry:{
      "type": "Point",
      "coordinates": [88.8499, 21.9497]
    },
    
    username:"admin",
    
  },
  {
    title: "Luxury Beachfront Villa",
    description: "A stunning beachfront villa with luxurious amenities and breathtaking ocean views.",
    image: "https://tse1.mm.bing.net/th?id=OIP.G_EkftD8OqvCljDuXCP-_wHaDo&pid=Api&P=0&h=180",
    price: 2800,
    location: "Goa",
    country: "India",
    category: "beaches",
    geometry: {
      type: 'Point',
      coordinates: [ 74.0541108203647, 15.3255560468503 ]
    },
    
    username:"admin",
  },
  {
    title: "Organic Farmhouse",
    description: "A charming farmhouse offering organic produce and a peaceful rural environment.",
    image: "https://i.pinimg.com/originals/29/af/5a/29af5a2a3634b5e4585044d35b9529ff.jpg",
    price: 900,
    location: "Himachal Pradesh",
    country: "India",
    category: "farms",
    geometry:{
      "type": "Point",
      "coordinates": [77.1734, 31.1048]
    },
    
    username:"admin",
    
  },
  {
    title: "Urban Suite",
    description: "A luxurious urban suite in the city center, perfect for a high-end stay.",
    image: "https://tse2.mm.bing.net/th?id=OIP.tyCU4Luo1_CE0jt50BvwzgHaFN&pid=Api&P=0&h=180",
    price: 2200,
    location: "Hyderabad",
    country: "India",
    category: "rooms",
    geometry:{
      "type": "Point",
      "coordinates": [78.4867, 17.3850]
    },
    
    username:"admin",
    
  },
  {
    title: "Tranquil River Retreat",
    description: "A serene retreat by the river, ideal for relaxation and nature lovers.",
    image: "https://blog.getsholidays.com/wp-content/uploads/2019/04/Varanasi-India-January-232019-Dashaswamedh-Ganges-river-ghat-Varanasi-at-twilight-with-tourists-enjoying-boating-rides.jpg",
    price: 1300,
    location: "Varanasi",
    country: "India",
    category: "rivers",
    geometry:{
      "type": "Point",
      "coordinates": [82.9739, 25.3176]
    },
    
    username:"admin",
    
  },
  {
    title: "Luxury Hilltop Villa",
    description: "A luxurious villa on a hilltop with stunning views and modern amenities.",
    image: "https://tse3.mm.bing.net/th?id=OIP.Hu5A9Cuz8CbQSQ3IdGYtbwHaEK&pid=Api&P=0&h=180",
    price: 2500,
    location: "Nainital",
    country: "India",
    category: "mountains",
    geometry:{
      "type": "Point",
      "coordinates": [79.4549, 29.3790]
    },
    
    username:"admin",
    
  },
  {
    title: "Beachside Penthouse",
    description: "A luxurious penthouse by the beach with stunning ocean views and high-end amenities.",
    image: "https://tse4.mm.bing.net/th?id=OIP.vPkKlTP5MIoNTEpl87X9vAHaEK&pid=Api&P=0&h=180",
    price: 3000,
    location: "Pondicherry",
    country: "India",
    category: "beaches",
    geometry:{
      "type": "Point",
      "coordinates": [79.8083, 11.9416]
    },
    
    username:"admin",
    
  }
  ];
  
module.exports = { data: sampleListings };