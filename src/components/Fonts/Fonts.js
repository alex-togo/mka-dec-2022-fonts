import "./style.css";
import { useState, useRef } from "react";

const Fonts = () => {
  const [sliderVal, setSliderVal] = useState(100);
  const sliderRef = useRef();

  const handleSlider = (e) => {
    setSliderVal(sliderRef.current.value);
  };
  return (
    <div className="container">
      <h1>Hello MKA! This is an example of how to switch between fonts.</h1>
      <p class="subtitle">Static Fonts:</p>
      <p class="heading">Regular Ubuntu font, no changes:</p>
      <p className="p1">
        Hello MKA! This is an example of how to switch between fonts.
      </p>
      <p class="heading">Regular Ubuntu font, Italic font-style:</p>
      <p className="p2">
        Hello MKA! This is an example of how to switch between fonts.
      </p>
      <p class="heading">Medium Ubuntu font, 600 font-weight:</p>
      <p className="p3">
        Hello MKA! This is an example of how to switch between fonts.
      </p>
      <p class="heading">Bold Ubuntu font, 700 font-weight:</p>
      <p className="p4">
        Hello MKA! This is an example of how to switch between fonts.
      </p>
      <br />
      <p class="subtitle">Variable Fonts:</p>
      <p className="p5 variable">
        Hello MKA! This is an example of a variable font.
      </p>
      <p className="p6 variable">
        Hello MKA! This is an example of a variable font.
      </p>
      <p className="p7 variable" style={{ fontWeight: sliderVal }}>
        Hello MKA! This is an example of a variable font.
      </p>
      <input
        ref={sliderRef}
        type="range"
        min="100"
        max="1000"
        value={sliderVal}
        step="1"
        name="Variable Font Weight"
        onChange={handleSlider}
        className="slider"
      />
      <label htmlFor="Variable Font Weight">Variable Font Weight</label>
    </div>
  );
};

export default Fonts;
