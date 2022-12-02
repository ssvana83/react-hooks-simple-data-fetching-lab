import React, { useState, useEffect} from 'react';

function App() {
  const [error,setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dogImageUrl,setDogImageUrl] = useState('');
  

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((response) => {
        setDogImageUrl(response.message);
        setIsLoading(true);
      },
      (error) => {
        setIsLoading(true);
        setError(error);
      }
      )
 }, [])

 if (error) {
  return <div>Error: {error.message}</div>;
 } else if (!isLoading) {
  return <div>Loading...</div>;
 } else {
  return (
    <img src={dogImageUrl} alt={"A Random Dog"}></img>
  );
}
}


export default App;

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [dogImage,setDogImage ] = useState([]);
//   //const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//       .then((response) => response.json())
//       .then((dogImage) => setDogImage(dogImage));
//  }, []);
//   return (
//     <div>
//       <p>"Loading..."</p>
//     </div>
//   );
// }




