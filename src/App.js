// * CSS
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// * Components
import ImageView from './components/ImageView';
import {useState} from 'react';

function App() {
  
  // Total image data
  const imgData = [
    {
      "title": "Futurama",
      "id": 1,
      "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
      "title": "The Interview",
      "id": 2,
      "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
      "title": "Gilmore Girls",
      "id": 3,
      "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    },
    {
      "title": "Family Guy",
      "id": 4,
      "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
      "title": "The Croods",
      "id": 5,
      "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
      "title": "Friends",
      "id": 6,
      "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  
  ];
  
  const [initialData, setInitialData] = useState(imgData);
  const [addedItems, setAddedItems] = useState([]);

  // Function to add image on Recommend List and remove image on Mylist List
  const addItem = (data) => {
    setAddedItems([...addedItems, data]);
    const values = initialData.filter(initialData => initialData.id !== data.id);
    setInitialData(values);
  }
  
  // Function to remove image on Recomend List and add image on Mylist list
  const removeItem = (data) => {
    setInitialData([...initialData, data]);
    const values = addedItems.filter(addeditems => addeditems.id !== data.id);
    setAddedItems(values);
  }
 
  return (
    <div className="App">
      <h1>Mylist</h1>
      <div className='images-view'>
        {initialData.map((data, index) =>{ 
          return (
            <div className="image-view" key={index}>
              <ImageView data={data} clickFunction={addItem} btnState="Add"/>
            </div>
          )
        })}
      </div>
      <h1>Recommended</h1>
      <div className='images-view'>
        {addedItems.map((data, index) =>{ 
          return (
            <div className="image-view" key={index}>
              <ImageView data={data} clickFunction={removeItem} btnState="Remove" />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
