import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';



function App(){

  const [images, setImage] = useState([]);

  const handelSubmit = async (term) => {
      const result =  await searchImages(term)
      // console.log("RESULT", result);   // if we did not write await it will print promise
      setImage(result);
      console.log(images);
    }


  return(
    <div>
        <SearchBar callSubmit = {handelSubmit}/>
        <ImageList images = {images}></ImageList>
    </div>
  )
}

export default App; 