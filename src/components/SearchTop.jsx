import { useState, useRef, useEffect } from "react";

const INITIAL = [
  { id: 1, name: "Danial Carabal", initials: "DC", color: { bg: "#e3f2fd", text: "#1976d2" } },
  { id: 2, name: "Maria K", initials: "MK", color: { bg: "#fce4ec", text: "#c2185b" } },
  { id: 3, name: "Fawad Khan", initials: "FK", color: { bg: "#e0f7f4", text: "#00897b" } },
  { id: 4, name: "Danial Sandos", initials: "DS", color: { bg: "#ede7f6", text: "#7b1fa2" } },
  { id: 5, name: "Jack Carter", initials: "JC", color: { bg: "#fff8e1", text: "#f57f17" } },
];

/* ── inject keyframes once ── */
if (typeof document !== "undefined" && !document.getElementById("rs-anim")) {
  const s = document.createElement("style");
  s.id = "rs-anim";
  s.textContent = `
    @keyframes rsDropIn {
      from { opacity: 0; transform: translateY(-8px) scaleY(0.96); }
      to   { opacity: 1; transform: translateY(0)   scaleY(1);     }
    }
    @keyframes rsItemIn {
      from { opacity: 0; transform: translateX(-6px); }
      to   { opacity: 1; transform: translateX(0);    }
    }
  `;
  document.head.appendChild(s);
}

/* ── SVG icons ── */
const SearchIcon = ({ color = "#b0b3c6" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const XIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const XCircleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const RecentSearch = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(INITIAL);
  const [hovered, setHov] = useState(null);
  const [rmHov, setRmHov] = useState(null);
  const [inputFoc, setInputFoc] = useState(false);

  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  /* close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* focus input when dropdown opens */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const filtered = items.filter(i =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));

  const clear = (e) => {
    e.stopPropagation();
    setQuery("");
    setItems(INITIAL);
  };

  const handleSelect = (item) => {
    setQuery(item.name);
    setOpen(false);
  };

  return (
    <div
      ref={wrapRef}
      style={{
        position: "relative",
        width: "380px",
        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* ── Trigger / Search input ── */}
      <div
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "0px 14px",
          background: "#fff",
          borderRadius: open ? "25px 25px 0 0" : "25px",
          border: `1.5px solid ${inputFoc || open ? "#00a5ec" : "#e0e0eb"}`,
          cursor: "text",
          transition: "border-color 0.2s, border-radius 0.15s",
          boxShadow: "none !important",
        }}
      >
        <SearchIcon color={open || inputFoc ? "#00a5ec" : "#b0b3c6"} />

        <input
          ref={inputRef}
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => { setInputFoc(true); setOpen(true); }}
          onBlur={() => setInputFoc(false)}
          placeholder="Search..."
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontFamily: "inherit",
            fontSize: "14px",
            color: "#1a1a2e",
            background: "transparent",
            caretColor: "#00a5ec",
            cursor: "text",
          }}
        />

        {(query || open) && (
          <button
            onMouseDown={clear}
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              border: "1.5px solid #e0e0eb",
              background: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#6b6f8a",
              flexShrink: 0,
            }}
            title="Clear"
          >
            <XIcon />
          </button>
        )}
      </div>

      {/* ── Dropdown panel ── */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "#fff",
            borderRadius: "0px",
            border: "1.5px solid #00a5ec",
            borderTop: "1px solid #f0f0f4",
            boxShadow: "none !important",
            zIndex: 999,
            overflow: "hidden",
            transformOrigin: "top center",
            animation: "rsDropIn 0.2s ease both",
            boxSizing: "border-box",
          }}
        >
          {/* Section label */}
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#b0b3c6",
              padding: "12px 16px 4px",
              margin: 0,
            }}
          >
            Your's Recent Search
          </p>

          {/* List */}
          <div style={{ padding: "2px 0 8px" }}>
            {filtered.length === 0 && (
              <div style={{ padding: "16px", textAlign: "center", fontSize: "13px", color: "#b0b3c6" }}>
                No results found
              </div>
            )}

            {filtered.map((item, i) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setHov(item.id)}
                onMouseLeave={() => setHov(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  background: hovered === item.id ? "#f4faff" : "transparent",
                  transition: "background 0.12s",
                  animation: `rsItemIn 0.2s ease ${i * 35}ms both`,
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: item.color.bg,
                    color: item.color.text,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    flexShrink: 0,
                  }}
                >
                  {item.initials}
                </div>

                {/* Name */}
                <span
                  style={{
                    flex: 1,
                    fontSize: "14px",
                    fontWeight: 500,
                    color: hovered === item.id ? "#00a5ec" : "#1a1a2e",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    transition: "color 0.12s",
                  }}
                >
                  {item.name}
                </span>

                {/* Remove button */}
                <button
                  onClick={e => { e.stopPropagation(); remove(item.id); }}
                  onMouseEnter={() => setRmHov(item.id)}
                  onMouseLeave={() => setRmHov(null)}
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "none",
                    background: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: rmHov === item.id ? "#e05c5c" : "#c8cad8",
                    transform: rmHov === item.id ? "scale(1.2)" : "scale(1)",
                    borderRadius: "50%",
                    padding: 0,
                    flexShrink: 0,
                    transition: "color 0.15s, transform 0.15s",
                  }}
                  title="Remove"
                >
                  <XCircleIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
