import { useState } from "react";

const Carousel = ({ items, itemWidth = 160, renderItem }) => {
  const [index, setIndex] = useState(0);
  const gap = 16;
  const visibleCount = 4;
  const maxIndex = Math.max(0, items.length - visibleCount);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const arrowStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "rgb(38, 172, 226)",
    flexShrink: 0,
    userSelect: "none",
    lineHeight: 1,
    padding: 0,
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      width: "100%",
    }}>
      {/* Prev Arrow */}
      <button
        onClick={prev}
        disabled={!canPrev}
        style={{
          ...arrowStyle,
          opacity: canPrev ? 1 : 0.3,
          cursor: canPrev ? "pointer" : "default",
        }}
      >
        ‹
      </button>

      {/* Sliding window */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div style={{
          display: "flex",
          gap: `${gap}px`,
          transition: "transform 0.4s ease",
          transform: `translateX(calc(-${index} * (${itemWidth}px + ${gap}px)))`,
        }}>
          {items.map((item, i) => (
            <div key={i} style={{ flexShrink: 0, width: `${itemWidth}px` }}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={next}
        disabled={!canNext}
        style={{
          ...arrowStyle,
          opacity: canNext ? 1 : 0.3,
          cursor: canNext ? "pointer" : "default",
        }}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
