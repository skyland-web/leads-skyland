export default function Navbar() {
  return (
    <header className="w-full bg-white/60 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-baseline gap-3">
          <span className="text-lg font-extrabold tracking-tight">Skyland</span>
          <span
            className="text-lg font-extrabold"
            style={{ color: "var(--accent)" }}
          >
            Leads
          </span>
        </a>

        {/* Desktop: minimal (only Contact CTA) */}
        <nav className="md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm shadow-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
