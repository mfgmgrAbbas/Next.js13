/*"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })*/
import Movie from "./Movie";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )

  const res = await data.json()
  // console.log(res);
  return (
    <main>
      {/* <h1 className = "text-3xl font-bold underline" >Hello Next.js 13!.</h1> */}
      {/* <div>
        <h1>{movie.title}</h1>
      </div> */}
      <div className="grid gap-16 grid-cols-fluid">
      {res.results.map(movie => (
        <Movie
        key={movie.id}
        id = {movie.id}
        title = {movie.title}
        poster_path = {movie.poster_path}
        release_date = {movie.release_date}
        />
      ))}
      </div>
    </main>
  )
}
