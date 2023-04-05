import React from "react";

import { FeaturedMovie, Categories, MoviesSection } from "@/components";
import Movies from "../../../mocks/movies.json";
import Genres from "../../../mocks/genres.json";

function HomeContainer({ selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory?.movies?.length > 0 && (
        <MoviesSection
          movies={selectedCategory?.movies}
          title={
            Genres?.genres?.find(
              (genre) => `${genre?.id}` === selectedCategory?.id
            )?.name
          }
        />
      )}
      <MoviesSection
        movies={Movies.results.slice(1, 7)}
        title={"Popular Films"}
      />
      <MoviesSection
        movies={Movies.results.slice(7, 13)}
        title={"Your Favorites"}
      />
    </div>
  );
}

export default HomeContainer;
