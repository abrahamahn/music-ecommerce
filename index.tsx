import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Header, Footer } from './Layouts';
import { Catalog, MiniPlayer } from './Components';

import * as types from '@/types/global';
import styles from '@/styles/pages/app/App.module.css';

const App: React.FC<types.HomeProps> = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === "loading"
  console.log(session);
  const [tracks, setTracks] = useState<types.Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<types.Track>(tracks[0]);
  const audioRef = React.useRef<HTMLAudioElement>(null) as React.MutableRefObject<HTMLAudioElement>;
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track: types.Track) => {
    if (currentTrack === track && isPlaying === true) {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else if (currentTrack === track && isPlaying === false) {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
  } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
    console.log(currentTrack);
  };

  useEffect(() => {
  fetch('/data/tracks.json')
    .then(response => response.json())
    .then((data: types.Track[]) => setTracks(data))
    .catch(error => console.log(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (!session) {
    router.push('/')
    return null;
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <div className={styles.catalogContainer}>
            <Catalog 
              tracks={tracks} 
              playTrack={playTrack}
              currentTrack={currentTrack}
              isPlaying={isPlaying}
            />
          </div>
            <MiniPlayer 
              currentTrack={currentTrack}
              playTrack={playTrack}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
            />
        </div>
        <Footer />
      </main>
    </div>
  )
};

export default App;