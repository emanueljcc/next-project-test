export default function Banner() {
  return (
    <div style={{ height: 550 }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stopColor="#5713C7" />
            <stop offset="95%" stopColor="#9E397C" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0.00,39.95 C1.70,379.44 762.97,-279.77 781.59,235.36 L595.37,-206.73 L-85.21,-73.52 Z"
        ></path>
      </svg>
    </div>
  );
}
