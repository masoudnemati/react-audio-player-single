import Head from "next/head";
import { useState, useEffect } from "react";
import Player from "../components/Player";

export default function App() {
  const [songs] = useState([
    {
      title: "Oghlum",
      artist: "Emin Rasen",
      img_src: "/songs-images/oghlum.webp",
      src: "/songs/Emin-oghlum.mp3",
    },
    {
      title: "Alma",
      artist: "Emin Rasen, Alma",
      img_src: "/songs-images/alma.webp",
      src: "/songs/Alma - Emin.mp3",
    },
    {
      title: "Over Flow",
      artist: "Emin Rasen",
      img_src: "/songs-images/over-flow.webp",
      src: "/songs/Emin - Over flow.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </>
  );
}
