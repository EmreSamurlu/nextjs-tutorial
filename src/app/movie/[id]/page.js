import React from "react";
import { MovieContainer } from "@/containers";
import Movies from "../../../../mocks/movies.json";
import { notFound } from "next/navigation";

function MoviePage({ params, searchParams }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  console.log(searchParams);
  if (!movieDetail) return notFound();
  if (searchParams.error === "true") {
    throw new Error("Error Happened");
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
