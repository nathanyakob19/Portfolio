import "./GlitchText.css";

const GlitchText = ({
  text,
  speed = 1,
  enableShadows = true,
  enableOnHover = true,
  className = "",
}) => {
  const inlineStyles = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-5px 0 red" : "none",
    "--before-shadow": enableShadows ? "5px 0 cyan" : "none"
  };

  const hoverClass = enableOnHover ? "enable-on-hover" : "";

  return (
    <div className={`glitch-wrapper ${className}`} style={inlineStyles}>
      <h1 className={`glitch ${hoverClass}`} data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default GlitchText;
