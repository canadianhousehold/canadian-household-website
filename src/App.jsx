import { useState, useEffect } from "react";

/* ── Logo palette ── */
const C = {
  red: "#E11B0F",
  redDark: "#B81610",
  blue: "#006DCD",
  blueDark: "#0055A0",
  blueLight: "#E8F2FC",
  green: "#4AB61D",
  greenDark: "#3A9416",
  greenLight: "#EEF8E8",
  yellow: "#FDAA0E",
  yellowDark: "#D48E0A",
  yellowLight: "#FFF6E3",
  white: "#FFFFFF",
  offWhite: "#F8F9FA",
  gray100: "#F1F3F5",
  gray300: "#DEE2E6",
  gray500: "#868E96",
  gray700: "#495057",
  gray900: "#212529",
};

const LOCATIONS = [
  { city: "Wood Buffalo", prov: "AB" },
  { city: "Ottawa-Gatineau", prov: "ON/QC" },
  { city: "Calgary", prov: "AB" },
  { city: "Edmonton", prov: "AB" },
  { city: "Vancouver", prov: "BC" },
  { city: "Toronto", prov: "ON" },
  { city: "Oakville", prov: "ON" },
  { city: "Halifax", prov: "NS" },
  { city: "Winnipeg", prov: "MB" },
  { city: "Montreal", prov: "QC" },
];

const SERVICES = [
  { icon: "🔧", title: "Plumbing", color: C.blue, bg: C.blueLight, items: ["Repairs & installation", "Drain cleaning", "Pipe replacement"] },
  { icon: "⚡", title: "Electrical", color: C.yellow, bg: C.yellowLight, items: ["Wiring & lighting", "Panel upgrades", "Safety inspections"] },
  { icon: "✨", title: "Cleaning", color: C.green, bg: C.greenLight, items: ["Regular cleaning", "Deep clean", "Move-in/move-out"] },
  { icon: "🎨", title: "Painting", color: C.red, bg: "#FDECEB", items: ["Interior & exterior", "Cabinet refinishing", "Deck staining"] },
  { icon: "❄️", title: "HVAC", color: C.blue, bg: C.blueLight, items: ["Heating & cooling", "Furnace maintenance", "Duct cleaning"] },
  { icon: "🛠️", title: "Handyman", color: C.yellow, bg: C.yellowLight, items: ["General repairs", "Drywall patching", "Fixture installation"] },
  { icon: "🌨️", title: "Seasonal", color: C.green, bg: C.greenLight, items: ["Snow removal", "Gutter cleaning", "Weatherproofing"] },
  { icon: "🌿", title: "Outdoor", color: C.red, bg: "#FDECEB", items: ["Lawn care", "Landscaping", "Pressure washing"] },
];

function LogoSVG({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 429 429" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M0 0L429 0L429 429L0 429L0 0Z"/>
      <path fill="#E11B0F" d="M285.034 104.984C312.735 104.594 340.739 105.219 368.506 104.858L368.531 284.625L368.489 368.021L60.5708 367.99C60.3242 347.749 60.5262 327.064 60.5157 306.787L60.5106 173.638L60.4932 124.555C60.49 122.076 60.3271 106.397 60.6832 104.862C62.31 105.055 66.1154 104.98 67.8295 104.977L81.054 104.951L121.474 104.958C128.737 104.946 139.131 104.644 146.156 105.204C149.431 110.926 173.472 129.096 179.833 131.801C178.496 134.361 175.602 142.012 176.358 144.698C176.73 146.018 177.626 146.999 178.829 147.631C184.035 150.369 201.092 145.035 206.703 143.348C206.268 147.828 206.693 154.197 206.025 158.35C204.417 168.341 215.52 173.794 222.095 166.953C223.247 165.744 224.036 164.236 224.373 162.601C224.781 160.539 224.29 147.31 224.251 144.129C229.729 145.464 235.213 146.916 240.752 147.97C246.437 149.051 251.825 149.67 255.056 143.832C254.618 140.991 252.337 134.12 250.955 131.672C263.976 123.354 274.113 115.956 285.034 104.984Z"/>
      <path fill="white" d="M74.5021 187.507L271.33 187.526C298.569 187.532 326.785 187.166 353.974 187.617L354.007 302.851C353.988 319.342 354.352 336.893 353.989 353.307C344.469 353.824 331.507 353.485 321.747 353.476L263.749 353.475L74.4875 353.454L74.5021 187.507Z"/>
      <path fill="#006DCD" d="M85.5141 198.235L132.453 198.243C143.486 198.169 154.518 198.181 165.55 198.279L165.514 311.762C165.521 320.246 165.542 332.992 165.491 341.759C165.385 341.899 165.279 342.039 165.173 342.179C149.653 342.581 132.879 342.28 117.302 342.276L98.2868 342.294C94.1616 342.321 89.6756 342.475 85.5847 342.285C85.4501 325.344 85.4125 308.402 85.472 291.46L85.5141 198.235Z"/>
      <path fill="white" d="M126.909 228.657C128.039 229.419 132.666 239.364 134.163 241.551C142.241 253.351 153.92 264.541 154.895 279.591C155.951 295.88 142.759 307.844 126.894 308.861C115.453 308.495 104.368 302.227 100.317 291.212C91.588 267.473 118.181 249.027 126.783 228.954L126.909 228.657Z"/>
      <defs><linearGradient id="gradient_0" gradientUnits="userSpaceOnUse" x1="119.95161" y1="304.19952" x2="124.33502" y2="287.60681"><stop offset="0" stopColor="#006AC6"/><stop offset="1" stopColor="#0682E3"/></linearGradient></defs>
      <path fill="url(#gradient_0)" d="M102.977 282.579C103.502 282.683 103.531 282.736 104.006 283.002C109.703 298.078 126.891 305.018 140.701 295.771C141.987 294.909 144.542 292.357 145.835 292.121L146.043 292.53C145.808 293.754 145.385 294.308 144.76 295.379C132.077 313.454 101.821 305.684 102.977 282.579Z"/>
      <path fill="#4AB61D" d="M263.702 198.282L342.777 198.305L342.977 299.442L342.96 327.57C342.946 331.698 342.708 338.287 342.922 342.223C336.878 342.278 327.213 342.607 321.355 342.225C319.498 342.308 317.536 342.293 315.675 342.277C306.41 342.201 297.071 342.431 287.813 342.201C279.838 342.358 271.803 342.203 263.821 342.21L263.702 198.282Z"/>
      <path fill="white" d="M315.232 231.384C323.511 235.02 329.958 240.496 331.457 249.811C332.815 258.258 330.859 267.065 324.776 273.315C321.966 276.202 319.188 278.09 316.836 281.441C316.479 286.071 316.645 292.094 316.663 296.846L316.729 325.339C316.744 330.073 316.959 336.724 316.692 341.297L316.929 341.851C318.555 342.258 319.761 341.86 321.355 342.225C319.498 342.308 317.536 342.293 315.675 342.277C306.41 342.201 297.071 342.431 287.813 342.201C288.559 341.627 290.014 342.292 291.544 341.843L291.738 341.242C291.262 339.639 291.748 327.962 291.756 325.328L291.709 281.084C287.146 275.484 281.384 272.258 278.795 265.118C273.438 250.34 278.991 237.438 293.342 231.682C293.436 234.328 293.166 255.281 294.388 255.762C297.359 256.929 311.648 256.826 314.959 256.153C315.28 248.295 315.213 239.237 315.232 231.384Z"/>
      <path fill="#61C64C" d="M316.692 341.297L316.929 341.851C318.555 342.258 319.761 341.86 321.355 342.225C319.498 342.308 317.536 342.293 315.675 342.277C306.41 342.201 297.071 342.431 287.813 342.201C288.559 341.627 290.014 342.292 291.544 341.843L291.738 341.242C298.335 341.283 304.954 341.155 311.552 341.129C313.048 341.123 315.297 340.955 316.692 341.297Z"/>
      <path fill="#FDAA0E" d="M175.143 198.318C185.017 198.167 195.202 198.282 205.093 198.273L253.962 198.322L253.918 342.03C250.747 342.322 246.543 342.226 243.295 342.226L227.064 342.219L175.112 342.191C174.944 335.407 175.074 328.092 175.075 321.275L175.046 284.811C175.036 256.124 174.816 226.961 175.143 198.318Z"/>
      <path fill="white" d="M209.556 236.148C213.876 236.447 218.217 236.6 222.548 236.845C226.891 237.091 232.039 237.787 236.311 237.532C233.772 241.629 230.856 245.779 228.244 249.887C225.517 254.173 222.325 259.737 219.085 263.502C226.519 264.6 234.979 267.317 242.747 268.531C240.487 270.211 237.74 272.963 235.434 274.861C227.946 281.026 220.843 287.861 213.42 294.043C208.659 298.023 200.388 305.951 195.441 308.234C196.722 305.447 198.777 302.154 200.201 299.197C203.197 292.977 206.23 286.554 209.623 280.551C203.249 279.555 197.504 277.872 190.718 277.066C192.621 274.085 194.937 268.124 196.546 264.76C201.063 255.318 205.01 245.575 209.556 236.148Z"/>
      <path fill="#E11B0F" d="M214.801 35.607C215.953 36.3631 226.225 55.7719 228.288 58.8966C231.72 58.0991 236.797 56.4603 240.361 55.4967C239.833 56.9286 238.628 60.9895 238.325 62.4289C237.453 66.5641 231.322 85.0806 233.579 87.9043C237.825 88.4705 248.596 69.2764 250.849 68.4497C251.865 68.9174 255.513 77.0077 256.438 78.8121C262.878 77.8608 269.309 76.8583 275.732 75.8048C275.329 76.8921 275.016 77.9653 274.752 79.0929C273.278 85.3853 271.361 91.6097 269.885 97.8935C272.09 100.497 275.991 102.813 279.178 103.928C277.083 104.96 274.726 106.47 272.714 107.716C263.253 113.573 254.222 119.949 244.68 125.697C245.914 130.653 247.664 136.517 249.802 141.157C239.364 139.738 228.083 137.195 217.668 135.09C217.414 143.892 217.786 154.206 217.746 163.204C216.453 163.326 215.159 163.43 213.863 163.518C213.07 163.482 213.063 163.519 212.312 163.168C211.518 161.571 212.424 138.64 212.484 135.183C204.125 136.564 195.949 138.643 187.61 140.131C184.984 140.6 182.316 141.038 179.752 141.772C181.851 138.675 184.14 130.407 185.861 126.253C179.786 122.5 173.746 118.689 167.744 114.822C161.852 110.974 156.382 106.486 149.777 104.184C154.008 102.161 156.371 101.105 159.704 97.6614C157.846 91.2382 156.112 82.0983 154.565 75.3559C159.797 76.4914 169.133 78.1372 174.365 78.8427C176.248 75.7107 177.815 72.0945 179.339 68.7467C182.501 71.8885 192.927 89.8305 196.78 87.8636C197.828 84.5463 190.974 60.3867 189.757 56.01C193.304 57.2788 197.921 58.602 201.583 59.7803C206.231 52.7728 210.513 42.7523 214.801 35.607Z"/>
    </svg>
  );
}

/* ── Color bar matching logo's three-panel design ── */
function ColorBar() {
  return (
    <div style={{ display: "flex", height: 4 }}>
      <div style={{ flex: 1, background: C.blue }} />
      <div style={{ flex: 1, background: C.yellow }} />
      <div style={{ flex: 1, background: C.green }} />
    </div>
  );
}

/* ── Navigation ── */
function NavBar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : C.white,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}>
        <ColorBar />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setPage("home")}>
            <LogoSVG size={42} />
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: C.gray900, lineHeight: 1.1 }}>CANADIAN HOUSEHOLD</div>
              <div style={{ fontSize: 10, color: C.red, letterSpacing: 3, fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>HOME SERVICES</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {["home", "services", "locations", "contact"].map((p) => (
              <button key={p} onClick={() => setPage(p)} style={{
                background: "none", border: "none",
                color: page === p ? C.red : C.gray700,
                fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer",
                padding: "4px 0",
                borderBottom: page === p ? `2px solid ${C.red}` : "2px solid transparent",
                transition: "all 0.3s", fontFamily: "'Poppins', sans-serif",
              }}>{p}</button>
            ))}
          </div>
        </div>
      </nav>
      <div style={{ height: 72 }} />
    </>
  );
}

/* ── Hero ── */
function Hero({ setPage }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section style={{
      minHeight: "92vh", display: "flex", alignItems: "center",
      background: C.white, position: "relative", overflow: "hidden",
    }}>
      {/* Decorative background shapes using logo colors */}
      <div style={{ position: "absolute", top: -120, right: -80, width: 500, height: 500, borderRadius: "50%", background: C.blueLight, opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: -60, left: -40, width: 350, height: 350, borderRadius: "50%", background: C.greenLight, opacity: 0.5 }} />
      <div style={{ position: "absolute", top: "40%", right: "15%", width: 200, height: 200, borderRadius: "50%", background: C.yellowLight, opacity: 0.4 }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "40px 24px", width: "100%",
        display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: 60, position: "relative",
      }}>
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, background: C.blueLight,
            padding: "6px 14px", borderRadius: 20, marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.blue }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.blue, fontFamily: "'Poppins', sans-serif" }}>Serving 10 cities across Canada</span>
          </div>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            color: C.gray900, lineHeight: 1.15, margin: "0 0 20px",
          }}>
            Your home,{" "}
            <span style={{ color: C.red }}>our</span>{" "}
            priority.
          </h1>
          <p style={{
            fontSize: 17, color: C.gray500, lineHeight: 1.8, margin: "0 0 36px",
            fontFamily: "'Poppins', sans-serif", maxWidth: 480,
          }}>
            Professional plumbing, electrical, cleaning, painting, HVAC, and seasonal maintenance. Licensed, insured, and proudly Canadian.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => setPage("services")} style={{
              background: C.red, color: "#fff", border: "none",
              padding: "15px 32px", fontSize: 14, fontWeight: 600, borderRadius: 6,
              cursor: "pointer", fontFamily: "'Poppins', sans-serif", transition: "all 0.3s",
            }}>VIEW SERVICES</button>
            <button onClick={() => setPage("contact")} style={{
              background: "transparent", color: C.gray900, border: `2px solid ${C.gray300}`,
              padding: "15px 32px", fontSize: 14, fontWeight: 600, borderRadius: 6,
              cursor: "pointer", fontFamily: "'Poppins', sans-serif", transition: "all 0.3s",
            }}>CONTACT US</button>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: 32, marginTop: 48 }}>
            {[
              { num: "10", label: "Cities served" },
              { num: "24/7", label: "Emergency line" },
              { num: "100%", label: "Licensed & insured" },
            ].map((b, i) => (
              <div key={i}>
                <div style={{ fontSize: 22, fontWeight: 800, color: [C.blue, C.green, C.yellow][i], fontFamily: "'Poppins', sans-serif" }}>{b.num}</div>
                <div style={{ fontSize: 12, color: C.gray500, fontFamily: "'Poppins', sans-serif" }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: big logo */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.9)",
          transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
        }}>
          <div style={{
            background: C.white, borderRadius: 24, padding: 32,
            boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
            border: `1px solid ${C.gray100}`,
          }}>
            <LogoSVG size={320} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Services ── */
function ServicesPage({ setPage }) {
  return (
    <section style={{ minHeight: "100vh", background: C.white, paddingTop: 20 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.blueLight, padding: "6px 14px", borderRadius: 20, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.blue }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.blue, fontFamily: "'Poppins', sans-serif" }}>WHAT WE DO</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", color: C.gray900, margin: 0, fontWeight: 800 }}>Our Services</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{
              background: C.white, borderRadius: 12, padding: 28,
              border: `1px solid ${C.gray100}`,
              transition: "all 0.3s", cursor: "default",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10, background: s.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 16,
              }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: C.gray900, margin: "0 0 10px", fontWeight: 700 }}>{s.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ fontSize: 14, color: C.gray500, padding: "3px 0", fontFamily: "'Poppins', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 56, background: C.red, borderRadius: 12, padding: "44px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, color: "#fff", margin: "0 0 6px", fontWeight: 700 }}>Need something not listed?</h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", margin: 0, fontFamily: "'Poppins', sans-serif" }}>We handle custom requests. Tell us what your home needs.</p>
          </div>
          <div onClick={() => setPage("contact")} style={{
            background: "#fff", color: C.red, padding: "13px 28px", borderRadius: 6,
            fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Poppins', sans-serif",
          }}>CONTACT US</div>
        </div>
      </div>
    </section>
  );
}

/* ── Locations ── */
function LocationsPage() {
  const provColors = { AB: C.blue, "ON/QC": C.red, BC: C.green, ON: C.yellow, NS: C.blue, MB: C.green, QC: C.red };
  return (
    <section style={{ minHeight: "100vh", background: C.offWhite, paddingTop: 20 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.greenLight, padding: "6px 14px", borderRadius: 20, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.greenDark, fontFamily: "'Poppins', sans-serif" }}>COAST TO COAST</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", color: C.gray900, margin: 0, fontWeight: 800 }}>Where We Serve</h2>
          <p style={{ fontSize: 16, color: C.gray500, maxWidth: 480, margin: "16px auto 0", lineHeight: 1.7, fontFamily: "'Poppins', sans-serif" }}>
            Proudly serving homeowners in 10 communities across Canada.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {LOCATIONS.map((loc, i) => {
            const accent = provColors[loc.prov] || C.blue;
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 14, padding: "18px 22px",
                borderRadius: 10, background: C.white, transition: "all 0.3s",
                border: `1px solid ${C.gray100}`, borderLeft: `4px solid ${accent}`,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8, background: accent + "14",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  fontSize: 12, fontWeight: 700, color: accent, fontFamily: "'Poppins', sans-serif",
                }}>{loc.prov}</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: C.gray900, margin: 0, fontWeight: 600 }}>{loc.city}</h3>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <p style={{ fontSize: 14, color: C.gray500, fontFamily: "'Poppins', sans-serif", lineHeight: 1.7 }}>
            Don't see your city? We're expanding. Contact us to check availability in your area.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ── */
function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", location: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in your name, email, and job description.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: `New Virtual Quote Request from ${formData.name}`,
          from_name: "Canadian Household Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          location: formData.location || "Not selected",
          service: formData.service || "Not selected",
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      setError("Could not send. Please check your connection or call us directly.");
    }
    setSending(false);
  };

  if (submitted) {
    return (
      <section style={{ minHeight: "100vh", background: C.white, paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: 40 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <span style={{ fontSize: 32, color: C.green }}>✓</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 28, color: C.gray900, margin: "0 0 10px", fontWeight: 700 }}>Thank you!</h2>
          <p style={{ fontSize: 16, color: C.gray500, fontFamily: "'Poppins', sans-serif" }}>We'll get back to you within 24 hours with your free virtual quote.</p>
        </div>
      </section>
    );
  }

  const inputStyle = {
    width: "100%", padding: "13px 16px", fontSize: 14, border: `1px solid ${C.gray300}`,
    borderRadius: 8, background: C.white, fontFamily: "'Poppins', sans-serif", color: C.gray900,
    outline: "none", transition: "border-color 0.3s", boxSizing: "border-box",
  };
  const labelStyle = { fontSize: 12, fontWeight: 600, color: C.gray700, marginBottom: 6, display: "block", fontFamily: "'Poppins', sans-serif" };

  return (
    <section style={{ minHeight: "100vh", background: C.offWhite, paddingTop: 20 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.yellowLight, padding: "6px 14px", borderRadius: 20, marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.yellow }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.yellowDark, fontFamily: "'Poppins', sans-serif" }}>GET IN TOUCH</span>
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", color: C.gray900, margin: 0, fontWeight: 800 }}>Contact Us</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, color: C.gray900, margin: "0 0 16px", fontWeight: 700 }}>Let's talk about your home</h3>
            <p style={{ fontSize: 15, color: C.gray500, lineHeight: 1.8, margin: "0 0 32px", fontFamily: "'Poppins', sans-serif" }}>
              Whether you need a quick repair or a full home maintenance plan, our team is ready to help. Request a free virtual quote or reach us directly.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "📞", label: "Phone", value: "1-800-CDN-HOME", sub: "Mon-Sat, 7AM - 8PM", color: C.blue },
                { icon: "✉️", label: "Email", value: "info@canadianhousehold.ca", sub: "We respond within 24 hours", color: C.green },
                { icon: "📍", label: "Head Office", value: "Ottawa-Gatineau, ON/QC", sub: "Serving 10 locations across Canada", color: C.yellow },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10, background: item.color + "14",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    fontSize: 18,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: item.color, letterSpacing: 1.5, fontWeight: 700, marginBottom: 2, fontFamily: "'Poppins', sans-serif" }}>{item.label.toUpperCase()}</div>
                    <div style={{ fontSize: 15, color: C.gray900, fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: C.gray500, fontFamily: "'Poppins', sans-serif" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 32, padding: 24, background: C.red, borderRadius: 12,
              display: "flex", alignItems: "center", gap: 20,
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🚨</div>
              <div>
                <div style={{ fontSize: 16, color: "#fff", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>24/7 Emergency Line</div>
                <div style={{ fontSize: 20, color: "#fff", fontWeight: 800, fontFamily: "'Poppins', sans-serif" }}>1-800-CDN-ASAP</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontFamily: "'Poppins', sans-serif" }}>Burst pipes, electrical faults, heating failures</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: C.white, borderRadius: 16, padding: 36,
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            border: `1px solid ${C.gray100}`,
          }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: C.gray900, margin: "0 0 24px", fontWeight: 700 }}>Request a free virtual quote</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div><label style={labelStyle}>Full name</label><input style={inputStyle} placeholder="John Smith" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} /></div>
                <div><label style={labelStyle}>Phone</label><input style={inputStyle} placeholder="(555) 123-4567" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} /></div>
              </div>
              <div><label style={labelStyle}>Email address</label><input style={inputStyle} type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} /></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div><label style={labelStyle}>Your location</label>
                  <select style={{ ...inputStyle, appearance: "auto" }} value={formData.location} onChange={(e) => handleChange("location", e.target.value)}>
                    <option value="">Select city</option>
                    {LOCATIONS.map((l) => (<option key={l.city} value={l.city}>{l.city}, {l.prov}</option>))}
                  </select>
                </div>
                <div><label style={labelStyle}>Service needed</label>
                  <select style={{ ...inputStyle, appearance: "auto" }} value={formData.service} onChange={(e) => handleChange("service", e.target.value)}>
                    <option value="">Select service</option>
                    {SERVICES.map((s) => (<option key={s.title} value={s.title}>{s.title}</option>))}
                  </select>
                </div>
              </div>
              <div><label style={labelStyle}>Tell us about the job</label><textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} placeholder="Describe what you need help with..." value={formData.message} onChange={(e) => handleChange("message", e.target.value)} /></div>
              <button onClick={handleSubmit} disabled={sending} style={{
                width: "100%", padding: "14px", background: sending ? C.gray500 : C.red, color: "#fff",
                border: "none", borderRadius: 8, fontSize: 14, fontWeight: 700,
                cursor: sending ? "not-allowed" : "pointer", fontFamily: "'Poppins', sans-serif", transition: "all 0.3s",
              }}>{sending ? "SENDING..." : "REQUEST VIRTUAL QUOTE"}</button>
              {error && <p style={{ fontSize: 13, color: C.red, textAlign: "center", margin: 0, fontFamily: "'Poppins', sans-serif" }}>{error}</p>}
              <p style={{ fontSize: 11, color: C.gray500, textAlign: "center", margin: 0, fontFamily: "'Poppins', sans-serif" }}>We'll respond within 24 hours. No spam, ever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer({ setPage }) {
  return (
    <footer style={{ background: C.gray900, padding: "56px 24px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 44 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <LogoSVG size={34} />
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff" }}>CANADIAN HOUSEHOLD</div>
                <div style={{ fontSize: 9, color: C.red, letterSpacing: 2, fontWeight: 600 }}>HOME SERVICES</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 260, fontFamily: "'Poppins', sans-serif" }}>
              Professional home services across Canada. Licensed, insured, and committed to excellence.
            </p>
            {/* Color dots */}
            <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
              {[C.red, C.blue, C.yellow, C.green].map((c, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 11, color: C.red, letterSpacing: 2, fontWeight: 700, margin: "0 0 14px", fontFamily: "'Poppins', sans-serif" }}>NAVIGATE</h4>
            {["home", "services", "locations", "contact"].map((p) => (
              <div key={p} onClick={() => setPage(p)} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", padding: "3px 0", cursor: "pointer", textTransform: "capitalize", fontFamily: "'Poppins', sans-serif" }}>{p}</div>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 11, color: C.blue, letterSpacing: 2, fontWeight: 700, margin: "0 0 14px", fontFamily: "'Poppins', sans-serif" }}>SERVICES</h4>
            {["Plumbing", "Electrical", "Cleaning", "HVAC"].map((s) => (
              <div key={s} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", padding: "3px 0", fontFamily: "'Poppins', sans-serif" }}>{s}</div>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 11, color: C.green, letterSpacing: 2, fontWeight: 700, margin: "0 0 14px", fontFamily: "'Poppins', sans-serif" }}>CONTACT</h4>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", padding: "3px 0", fontFamily: "'Poppins', sans-serif" }}>1-800-CDN-HOME</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", padding: "3px 0", fontFamily: "'Poppins', sans-serif" }}>info@canadianhousehold.ca</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", padding: "3px 0", fontFamily: "'Poppins', sans-serif" }}>Ottawa-Gatineau, ON/QC</div>
          </div>
        </div>
        <ColorBar />
        <div style={{ paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'Poppins', sans-serif" }}>© 2026 Canadian Household: Home Services. All rights reserved.</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "'Poppins', sans-serif" }}>Proudly Canadian 🇨🇦</div>
        </div>
      </div>
    </footer>
  );
}

/* ── App ── */
export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", margin: 0, padding: 0, background: C.white }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        * { box-sizing: border-box; }
        input:focus, textarea:focus, select:focus { border-color: ${C.blue} !important; box-shadow: 0 0 0 3px ${C.blue}18; }
        button:hover { opacity: 0.92; }
        ::placeholder { color: #ADB5BD; }
      `}</style>
      <NavBar page={page} setPage={setPage} />
      {page === "home" && <Hero setPage={setPage} />}
      {page === "services" && <ServicesPage setPage={setPage} />}
      {page === "locations" && <LocationsPage />}
      {page === "contact" && <ContactPage />}
      <Footer setPage={setPage} />
    </div>
  );
}
