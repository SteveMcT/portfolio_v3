import MusicPlayer from "@/components/MusicPlayer";
import { PressE } from "@/components/PressE";
import Scene from "@/components/Scene";
import { ScrollWrapper } from "@/components/ScrollWrapper";

export default function Home() {
  return (
    <main>
      <Scene />
      <PressE />
      <MusicPlayer />
      <ScrollWrapper />
    </main>
  );
}
