import React from "react";
import { MovieContainer } from "@/containers";
import { notFound } from "next/navigation";
import { getMovie } from "@/services/movie";

async function MoviePage({ params }) {
  const movieDetail = await getMovie(params.id);
  if (!movieDetail) return notFound();

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
