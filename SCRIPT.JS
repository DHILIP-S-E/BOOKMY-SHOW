// script.js

async function fetchMovies() {
    try {
        const response = await fetch("https://bookmy-show-backend-316r.onrender.com/movie/get-movie");
        const movies = await response.json();
        const movieCardsContainer = document.getElementById("movieCards");
        movieCardsContainer.innerHTML = "";

        if (response.ok) {
            movies.forEach((movie) => {
                const card = document.createElement("div");
                card.className = "col-lg-3 col-md-4 col-sm-6 mb-4 movie-card"; // Added movie-card class for styling
                card.innerHTML = `
                    <div class="card" style="cursor: pointer" onclick="location.href='details.html?id=${movie._id}'">
                        <img src="${movie.image}" alt="${movie.title}" />
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.genre}</p>
                            <button class="btn btn-booking">Book Now</button> <!-- Booking button -->
                        </div>
                    </div>`;
                movieCardsContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error(error);
    }
}

fetchMovies();
