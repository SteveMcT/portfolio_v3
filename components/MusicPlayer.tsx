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
        🎵 Check out the songs I made 🐶🎵
      </button>
      {/* <div className={show ? "h-full w-full grid place-items-center fixed top-0" : "fixed top-0 pointer-events-none"}> */}
      <div className={`h-full w-full grid place-items-center fixed top-0 ${!show && "pointer-events-none"}`}>
        <animated.div className="bg-orange-500 p-20 z-10 h-[90vh] w-[90vw] overflow-hidden rounded-lg text-white" style={props}>
          <button className=" text-white" onClick={setOpen}>
            <CloseOutline color="white" />
          </button>

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

            <div className="w-full">
              <iframe
                className="w-full h-[48rem]"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1795093285%3Fsecret_token%3Ds-AploZBChp0f&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
                <a href="https://soundcloud.com/mct-540331103/balus-track/s-AploZBChp0f" title="Balu&#x27;s Track" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
                  Balu&#x27;s Track
                </a>
              </div>
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

            <div className="w-full">
              <iframe
                className="w-full h-[48rem]"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1831096653%3Fsecret_token%3Ds-fiRzgtiLZTc&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
                {" "}
                <a href="https://soundcloud.com/mct-540331103" title="McT" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
                  McT
                </a>{" "}
                ·{" "}
                <a href="https://soundcloud.com/mct-540331103/danza-tra-le-stelle/s-fiRzgtiLZTc" title="Danza Tra Le Stelle" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
                  Danza Tra Le Stelle
                </a>
              </div>
            </div>
          </div>

          <div></div>
        </animated.div>
      </div>
    </>
  );
}
