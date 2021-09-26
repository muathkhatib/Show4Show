import { useState, useContext } from "react";

import { Watcher } from "../../context";

import "./CustomSection.css";

const handleEvent = (event) => event.preventDefault();

const CustomSection = () => {
  const { setPlaylistLink } = useContext(Watcher);

  const [inputLink, setInputLink] = useState("");

  return (
    <section className="custom-List">
      
      <h1 className="custom-List-title">Custom List</h1>

      <form className="custom-List-form" onSubmit={handleEvent}>
        <input
          className="custom-List-form-input"
          type="url"
          placeholder="Link of playlist"
          value="https://muath-khatib.github.io/IPTV-Hosting-Channels/Musics/playlist.m3u"
          onChange={(e) => setInputLink(e.target.value)}
        />

        <button
          className="custom-List-form-btn"
          type="submit"
          onClick={(_) => setPlaylistLink(inputLink)}
        >
          Set New List
        </button>
      </form>
    </section>
  );
};
export default CustomSection;
