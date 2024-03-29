import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Kavya',
      email: 'kavya@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Rohan',
      email: 'rohan@gmail.com',
      password: bcrypt.hashSync('1111'),
      isAdmin: true,
    },
    {
      name: 'Hemanth',
      email: 'hemanth@gmail.com',
      password: bcrypt.hashSync('54321'),
      isAdmin: true,
    },
    {
      name: 'Mukesh',
      email: 'mukesh@gmail.com',
      password: bcrypt.hashSync('11223344'),
      isAdmin: true,
    },
    
  ],
  movies: [
    {
      name: "Animal",
      slug: "Animal",
      year: 2023,
      image: "/images/animal.jpg",
      Genre: "Action,Drama",
      description: "The film stars Ranbir Kapoor, Anil Kapoor, Bobby Deol, Rashmika Mandanna, and Tripti Dimri. In the film, Ranvijay Vijay Singh learns about an assassination attempt on his father and sets out to exact revenge. The film was officially announced in January 2021, along with the title of the film.",
      price: 500,
      TicketsAvailable: 50,
      rating: 4.5,
      numReviews: 15,
      reviews: [],
    },
    {
      name: "Salaar",
      slug: "Salaar",
      year: 2023,
      image: "/images/salaar.jpg",
      Genre: "Action",
      description: "It is the tale of two best friends from childhood, who grow old to become the worst enemies. The story was so big that the writer-director chose to elaborate it in two parts. Deva aka Salaar and Varadaraj Mannar's story of friendship, trust, sacrifice, and vengeance is all about Salaar.",
      price: 550,
      TicketsAvailable: 150,
      rating: 4.7,
      numReviews: 10,
      reviews: [],
    },
    {
      name: "Dunki",
      slug: "Dunki",
      year: 2023,
      image: "/images/dunki.webp",
      Genre: "Drama",
      description: "A group of friends use a backdoor process to move to another country, then struggle to return home.",
      price: 575,
      TicketsAvailable: 500,
      rating: 4.2,
      numReviews: 115,
      reviews: [],
    },
    {
      name: "Dune 2",
      slug: "Dune 2",
      year:2024,
      image: "/images/dune2.jpg",
      Genre: "Sci-fi",
      description: " Paul Atreides continues his journey, united with Chani and the Fremen, as he seeks revenge against the conspirators who destroyed his family, and endeavors to prevent a terrible future that only he can predict.",
      price: 450,
      TicketsAvailable: 225,
      rating: 4.0,
      numReviews: 125,
      reviews: [],
    },
    {
      name: "Fighter",
      slug: "Fighter",
      year: 2024,
      image: "/images/fighter.jpg",
      Genre: "Action",
      description: "Fighter is an upcoming Indian Hindi-language action film directed by Siddharth Anand and produced by Viacom18 Studios and Marflix Pictures. The film stars Deepika Padukone, Hrithik Roshan and Anil Kapoor, and serves as the first film in a planned aerial action franchise.",
      price: 400,
      TicketsAvailable: 170,
      rating: 4.0,
      numReviews: 58,
      reviews: [],
    },
    
  ],
};
export default data;
