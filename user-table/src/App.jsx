import UserTable from "./components/UserTable"

const usersList = [
  {
    id: 1,
    name: "Ana García",
    email: "ana@example.com",
    age: 28,
    country: "España",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    age: 35,
    country: "Estados Unidos",
  },
  {
    id: 3,
    name: "Maria Santos",
    email: "maria@example.com",
    age: 22,
    country: "Brasil",
  },
  {
    id: 4,
    name: "Li Wei",
    email: "li@example.com",
    age: 30,
    country: "China",
  },
  {
    id: 5,
    name: "Sven Andersen",
    email: "sven@example.com",
    age: 29,
    country: "Noruega",
  },
  {
    id: 6,
    name: "Elena Kovalenko",
    email: "elena@example.com",
    age: 27,
    country: "Rusia",
  },
  {
    id: 7,
    name: "Rafael Martinez",
    email: "rafael@example.com",
    age: 31,
    country: "México",
  },
  {
    id: 8,
    name: "Fatima Ahmed",
    email: "fatima@example.com",
    age: 24,
    country: "Egipto",
  },
  {
    id: 9,
    name: "Luis Fernández",
    email: "luis@example.com",
    age: 26,
    country: "Argentina",
  },
  {
    id: 10,
    name: "Emily Johnson",
    email: "emily@example.com",
    age: 28,
    country: "Canadá",
  },
  {
    id: 11,
    name: "Marta Rodriguez",
    email: "marta@example.com",
    age: 29,
    country: "España",
  },
  {
    id: 12,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    age: 33,
    country: "Egipto",
  },
  {
    id: 13,
    name: "Sophie Martin",
    email: "sophie@example.com",
    age: 31,
    country: "Francia",
  },
  {
    id: 14,
    name: "Takashi Tanaka",
    email: "takashi@example.com",
    age: 27,
    country: "Japón",
  },
  {
    id: 15,
    name: "Isabella Silva",
    email: "isabella@example.com",
    age: 26,
    country: "Brasil",
  },
  {
    id: 16,
    name: "Erik Johansson",
    email: "erik@example.com",
    age: 30,
    country: "Suecia",
  },
  {
    id: 17,
    name: "Olivia Baker",
    email: "olivia@example.com",
    age: 28,
    country: "Canadá",
  },
  {
    id: 18,
    name: "Alessio Ferrari",
    email: "alessio@example.com",
    age: 34,
    country: "Italia",
  },
  {
    id: 19,
    name: "Hiroshi Nakamura",
    email: "hiroshi@example.com",
    age: 32,
    country: "Japón",
  },
  {
    id: 20,
    name: "Sophia Gonzalez",
    email: "sophia@example.com",
    age: 25,
    country: "México",
  }
];

function App() {

  return (
    <UserTable usersList={usersList} />
  )
}

export default App