import React from "react";
import GitHubButton from "react-github-btn";

import InfoSectionFooter from "../InfoSectionFooter";
import ScaleSlider from "../sliders/ScaleSlider";

import "./footer.css";

export default function Footer(props) {
  return (
    <div className="footer-wrapper">
      <div className="left-panel">
        <InfoSectionFooter />
      </div>
      <div className="center-panel">
        {!props.showCropCanvas && <ScaleSlider />}
      </div>
    </div>
  );
}
