import React from "react";
import { CategoriesLoading } from "@/components/Categories/CategoriesLoading";
import { FeatureMovieLoading } from "@/components/FeaturedMovie/FeaturedMovieLoading";
import { MoviesSectionLoading } from "@/components/MoviesSection/MoviesSectionLoading";

function loading() {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
    </div>
  );
}

export default loading;
