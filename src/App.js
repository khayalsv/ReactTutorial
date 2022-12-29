import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App() {
    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <>
            <BookCreate />
            <BookList />
        </>
    )
}

export default App;


/* 
// ProfileCard
  
//  <h2>Personal Digital Assistants</h2>
// <Grid container spacing={1} display="flex" justifyContent="center">
//     <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
//         <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
//     </Grid>
//     <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
//         <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
//     </Grid>
//     <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
//         <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
//     </Grid>

// </Grid> 

//////////////////////////////////////

// Animal

// function App() {
//     function getRandomAnimal() {
//         const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

//         return animals[Math.floor(Math.random() * animals.length)]
//     }

//     // console.log(getRandomAnimal());

//     const [animals, setanimals] = useState([])

//     const handleClick = () => {
//         setanimals([...animals, getRandomAnimal()])
//     };

//     const renderedAnimals = animals.map((animal, index) => {
//         return <AnimalShow type={animal} key={index} />
//     })


//     return (
//         <div>
//             <button onClick={handleClick}>Add Animal</button>
//             <div>{renderedAnimals}</div>
//         </div>
//     )
// }


//////////////////////////////////////


// function App() {
//     const [images, setImages] = useState([])

//     const handleSubmit= async (term)=>{
//        // console.log('Do a search with', term);
//        const result = await searchImages(term);
       
//        setImages(result);
//     };

//     return (
//         <div>
//             <SearchBar onSubmit={handleSubmit}/>
//             <ImageList images={images}/>
//         </div>
//     )
// }
*/