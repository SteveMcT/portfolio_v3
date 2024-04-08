import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { CloseOutline } from "react-ionicons";

export default function MusicPlayer() {
  const [show, setShow] = useState<boolean>(false);

  const props = useSpring({
    opacity: show ? 1 : 0,
  });

  const setOpen = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={setOpen} className="fixed top-5 bg-white rounded px-4 py-2 justify-self-start left-5">
        🎵 Check out the song I made 🎵
      </button>
      {/* <div className={show ? "h-full w-full grid place-items-center fixed top-0" : "fixed top-0 pointer-events-none"}> */}
      <div className={`h-full w-full grid place-items-center fixed top-0 ${!show && "pointer-events-none"}`}>
        <animated.div className="bg-orange-500 p-20 z-10 h-[90vh] w-[90vw] rounded-lg text-white" style={props}>
          <button className=" text-white" onClick={setOpen}>
            <CloseOutline color="white" />
          </button>

          <div className="grid items-center w-full h-full">
            <div className="flex w-full gap-10 font-sans">
              <div className="w-full">
                <iframe
                  className="w-full h-[48rem]"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1792965196%3Fsecret_token%3Ds-EAvDsteNtTz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: 100,
                  }}
                >
                  <a href="https://soundcloud.com/mct-540331103" title="McT" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
                    McT
                  </a>{" "}
                  ·{" "}
                  <a href="https://soundcloud.com/mct-540331103/unleashed-dreams-1/s-EAvDsteNtTz" title="Unleashed Dreams" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
                    Unleashed Dreams
                  </a>
                </div>
              </div>

              <div className="w-full text-2xl grid items-center pl-10">
                <h1 className="text-5xl font-bold">Unleashed Dreams</h1>

                <section className="mt-5">
                  <p>Final act, I&apos;m gonna leave them all in awe</p>
                  <p>Words on paper, the culmination of my soul</p>
                  <p>Heart pounding, as emotions ignite within</p>
                  <p>My English portfolio, a masterpiece to behold</p>
                </section>

                <section className="mt-5">
                  <p>USA, I&apos;m coming for you, ready to explore</p>
                  <p>The land of dreams, where anything is possible</p>
                  <p>From the concrete jungles to the open plains</p>
                  <p>I&apos;ll dance to the rhythm, let the music guide my way</p>
                </section>

                <section className="mt-5">
                  <p>Unleash the dreams, let the bass take control (oh-oh-oh)</p>
                  <p>In this land of opportunity, watch my spirit unfold</p>
                  <p>Two English teachers, they nurtured my flame (yeahhhh)</p>
                  <p>Now I&apos;m soaring high, in the hardstyle game</p>
                </section>

                <section className="mt-5">
                  <p>Now I&apos;m soaring high, in the hardstyle -style game</p>
                </section>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
}
