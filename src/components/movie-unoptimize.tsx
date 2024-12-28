

import { useState } from "react";

const calculateMovieScore = (rating: number, reviews: number) => {
    console.log("🔃Calculating moview score");

    for (let i = 0; i<1000000000; i++ ) {}
    return (rating * reviews) / 10;
};

const Movie = ({
    title, 
    rating, 
    onLike,
    } : {
        title: string; 
        rating: number; 
        onLike: ()=> void;
    }) => {
    console.log("🎬Rendering Movie: ", title); // Shows when component rerenders

    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin:"10px"}}>
            <h3>{title}</h3>
            <p>Rating: {rating}⭐</p>
            <button onClick={onLike}>Like 👍</button>
        </div>
    );
};

// Main App Component
export function UnoptimizedMovieApp() {
    const [count, setCount] = useState(0);
    const [movies] = useState([
        {id: 1, title: "The Matrix", rating: 4.8, reviews: 100},
        {id: 2, title: "Inception", rating: 4.5, reviews: 80},
    ]);

    // This function is recreated every render
    const handleLike = (movieId: number) => {
        console.log("👍 Liked movie:", movieId);
    };

    // expensive calculation runs on every render 
    const movieScore = calculateMovieScore(movies[0].rating, movies[0].reviews);

    return(
    <div>
        <h1>Unoptimized Movie App</h1>

        {/* This button will cause everything to re-render */}
        <button onClick = {()=> setCount(count + 1)}>Clicked {count} times</button>

        <p>Movie Score: {movieScore}</p>

        {/* Moviews re-render unnecessarily */}
        {movies.map((movie) => (
            <Movie
                key={movie.id}
                title={movie.title}
                rating={movie.rating}
                onLike={()=> handleLike(movie.id)}
            />
        ))}
    </div>
    );
}