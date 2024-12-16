// import { useState } from "react";
//  import  axios from  'axios'
// import { useState } from 'react';
// const App = () => {
//   const [username, setUsername] = useState("");
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("sdfguasdgf");
//     setUsername("");
//   };
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           type="text "
//           placeholder="Enter your name"
//           className="px-4  rounded py-3 text-xl m-5 "
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//         />
//         <button className="px-4 text-white py-3 m-5 text-xl bg-green-300">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

import { useContext } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { DataContext } from "./context/Usercontext";

// import { Route, Routes } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";

// export default App;

// const App = () => {
//   const users = [
//     {
//       name: "John Doe",
//       city: "New York",
//       age: 30,
//       profession: "Software Engineer",
//       profilePhoto: "https://example.com/profile1.jpg",
//     },
//     {
//       name: "Jane Smith",
//       city: "Los Angeles",
//       age: 25,
//       profession: "Designer",
//       profilePhoto: "https://example.com/profile2.jpg",
//     },
//     {
//       name: "David Johnson",
//       city: "Chicago",
//       age: 35,
//       profession: "Teacher",
//       profilePhoto: "https://example.com/profile3.jpg",
//     },
//     {
//       name: "Emily Williams",
//       city: "Houston",
//       age: 28,
//       profession: "Doctor",
//       profilePhoto: "https://example.com/profile4.jpg",
//     },
//     {
//       name: "Michael Brown",
//       city: "Phoenix",
//       age: 40,
//       profession: "Lawyer",
//       profilePhoto: "https://example.com/profile5.jpg",
//     },
//   ];

//   return (
//     <>
//       {users.map(function (elem) {
//         return (
//           <Card
//             username={elem.name}
//             age={elem.age}
//             city={elem.city}
//             photo={elem.profilePhoto}
//             profession ={elem.profession}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default App;

// const App = () => {
// const [data, setData] = useState([])

//   const getData = async() => {
//     const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');

//     setData(response.data)
//     console.log(data)
//   };

//   return (
//     <div>
//       <button onClick={getData} className="bg-red-400 text-white font-semibold text-2xl  rounded  active:scale-90 ">
//         Get Data
//       </button>
//       <div className="p-5 mt-5 bg-gray-950 "> {data.map(function () {
//         return <h1>Hello</h1>
//       }) }</div>
//     </div>
//   );
// };
// export default App;

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product" element={<Product />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <div>
      <h1>This is App.js {data}</h1>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
