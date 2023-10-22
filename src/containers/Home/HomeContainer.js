import React from "react";

import { FeaturedMovie, Categories, MoviesSection } from "@/components";

function HomeContainer({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory?.movies?.length > 0 && (
        <MoviesSection
          movies={selectedCategory?.movies}
          title={
            categories?.find((genre) => `${genre?.id}` === selectedCategory?.id)
              ?.name
          }
        />
      )}
      <MoviesSection
        movies={popularMovies.slice(1, 7)}
        title={"Popular Films"}
      />
      <MoviesSection
        movies={topRatedMovies.slice(1, 7)}
        title={"Your Favorites"}
      />
    </div>
  );
}

export default HomeContainer;
