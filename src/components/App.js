import React, { useState, useEffect} from 'react';


function App() {
  
  const [dogImage,setDogImage ] = useState([]);
  //const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dogImage) => console.log(dogImage));
 }, []);


  return (

    <div>
     setDogImage={setDogImage} 
      <p>"Loading..."</p>


    </div>





  );
}


export default App;




