import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import MovieList from './components/MovieList/MovieList';

function App() {
  const MovieData = [
    {
        Title: "Moonlight",
        Description:
            "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles .",
        PosterUrl:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3ba32041615387.57acc4bf0b15f.jpg",
        Rating: 4,
    },
    {
        Title: "Gone Girl",
        Description:
            "On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing. ",
        PosterUrl:
            "https://movieposters2.com/images/1260157-b.jpg",
        Rating: 4,
    },
    {
        Title: "A Star Is Born",
        Description:
            "A young woman comes to Hollywood with dreams of stardom, and achieves them only with the help of an alcoholic leading man whose best days are behind him",
        PosterUrl:
            "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        Rating: 5,
    },
    

    {
        Title: "Venom",
        Description:
            "When Eddie Brock gains the powers of a symbiote, he will have to free his alter ego Venom to save his life.",
        PosterUrl:
            "https://i.smalljoys.me/2019/06/venom2.jpg?resize=533%2C768&ssl=1&strip=all",
        Rating: 4,
    },
    
    {
        Title: "Her",
        Description:
            "In the near future, a lonely writer will develop an unlikely relationship with an operating system designed to meet all of their needs.",
        PosterUrl:
            "https://truth.bahamut.com.tw/s01/201402/4518fa57708bac0fa0f09662f73dcad4.JPG",
        Rating: 3,
    },
    {
        Title: "Wild",
        Description:
            "Although inexperienced, a woman decides to walk 1,700 km on foot and alone, in order to rebuild herself.",
        PosterUrl:
            "https://img-4.linternaute.com/PorDrZVn1eZGtrDP7ma59y7vC9w=/1500x/smart/6ff78a527733490691bb9ab41c3fcf3c/ccmcms-linternaute/11187456.jpg",
        Rating: 4,
    }, {
        Title: "Soul",
        Description:
            "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of a child soul who gets to know himself.",
        PosterUrl:
            "https://m.media-amazon.com/images/I/81y09CotweL._SY445_.jpg",
        Rating: 5,
    },
    
    {
        Title: "Lion King",
        Description:
            "Kion, Simba's son, leads his friends known as the Lion Guard to protect the Pride Lands.",
        PosterUrl:
            "https://i.pinimg.com/474x/55/f1/9e/55f19e119da43d9398f315b45032538d.jpg",
        Rating: 5,
    },
   
];

const [titleSearch, setTitleSearch] = useState("");
const [ratingSearch, setRatingSearch] = useState(0);


  return (
    <div className="App">
      <NavBar setTitleSearch={setTitleSearch}
                setRatingSearch={setRatingSearch}/>
        
      <MovieList
                titleSearch={titleSearch}
                ratingSearch={ratingSearch}
                MovieData={MovieData}
            />
            <div className="Footer">copyright chayma bouasker </div>
      
    </div>
  );
}

export default App;
