"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { hero, nav, site, whatsapp } from "@/content";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./social-icons";

const iconLink =
  "rounded-full border border-white/20 bg-white/5 p-2 text-white/85 transition-all duration-300 hover:border-[#d4af37] hover:text-[#d4af37]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const orderLink = whatsapp(hero.orderMessage);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative z-50 mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#2a1d1a]/75 px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-6 md:rounded-full">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#d4af37]/50 bg-[#f5efe7] font-serif font-bold text-[#1a120f] shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.logo}
                alt={`${site.shortName} Logo`}
                className="h-full w-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-lg font-semibold tracking-[0.12em] text-[#f5efe7]">{site.name}</p>
              <p className="text-[8px] uppercase tracking-[0.28em] text-[#d4af37]">{site.tagline}</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 hover:text-[#d4af37]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative md:hidden">
              <button
                type="button"
                aria-label="Toggle mobile menu"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className="flex items-center justify-center rounded-full border border-[#d4af37]/55 bg-[linear-gradient(135deg,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.05)_100%)] p-2 text-[#f6ede3] shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#e7c76d] hover:text-[#e7c76d]"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
              <div
                className={`absolute right-0 mt-3 w-52 origin-top-right rounded-2xl border border-white/15 bg-[#221713]/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 ease-out ${
                  open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-95 opacity-0"
                }`}
              >
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/85 transition-colors duration-300 hover:bg-white/5 hover:text-[#d4af37]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a href={orderLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${iconLink} sm:hidden`}>
              <WhatsAppIcon />
            </a>
            <div className="hidden items-center gap-3 sm:flex">
              <a href={orderLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={iconLink}>
                <WhatsAppIcon />
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={iconLink}>
                <InstagramIcon />
              </a>
              <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={iconLink}>
                <FacebookIcon />
              </a>
              <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={iconLink}>
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        aria-label="Close mobile menu overlay"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </nav>
  );
}
