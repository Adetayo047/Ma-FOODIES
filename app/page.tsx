import {
  Briefcase,
  CalendarDays,
  Clock,
  ClipboardList,
  Mail,
  Maximize2,
  PartyPopper,
  Phone,
  Sparkles,
  Trees,
  UtensilsCrossed,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/social-icons";
import { contact, cookbook, dishes, hero, services, site, story, whatsapp } from "@/content";

const serviceIcons = {
  utensils: UtensilsCrossed,
  trees: Trees,
  briefcase: Briefcase,
  party: PartyPopper,
  menu: ClipboardList,
  calendar: CalendarDays,
} as const;

// Background-image photo with a warm gradient fallback while the real image is missing.
function Photo({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div
      role="img"
      className={`bg-[linear-gradient(135deg,#3a2a20_0%,#1a120f_100%)] bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src}), linear-gradient(135deg,#3a2a20 0%,#1a120f 100%)` }}
    />
  );
}

function SectionHeading({ title, intro, gradient = false }: { title: string; intro: string; gradient?: boolean }) {
  return (
    <div className="mb-20 text-center animate-slide-up">
      <h2 className={`mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
      <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
    </div>
  );
}

function IconCard({
  icon: Icon,
  title,
  delay,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="group flex flex-col rounded-xl bg-card/80 p-8 text-center shadow-soft backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-elegant animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="px-6 pt-6">
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl transition-all duration-300 group-hover:bg-primary/20" />
          <Icon className="relative z-10 mx-auto h-12 w-12 text-primary" />
        </div>
        <h3 className="mb-4 font-serif text-2xl font-semibold transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <div className="leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative min-h-screen scroll-mt-28 overflow-hidden">
        <Photo src={site.heroPoster} className="absolute inset-0" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={site.heroPoster}
          style={{ filter: "saturate(0.9) contrast(1.05)" }}
        >
          <source src={site.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,22,17,0.8)_0%,rgba(36,22,17,0.5)_35%,rgba(36,22,17,0.7)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-12 pt-36 sm:px-6 sm:pt-28 lg:px-8">
          <div className="max-w-4xl animate-fade-in">
            <div className="mb-6 flex items-center gap-2 text-[#d4af37]">
              <span className="text-lg">★★★★★</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/90">{hero.eyebrow}</span>
            </div>
            <h1 className="font-serif text-[clamp(3rem,10vw,13rem)] font-bold leading-[0.82] tracking-[-0.06em] text-[#f5efe7]">
              {hero.titleLine1}
              <span className="mt-2 block text-[#d4af37]">{hero.titleLine2}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{hero.body}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp(hero.primaryCta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#d4af37] bg-[#d4af37] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1a120f] transition-all duration-300 hover:bg-[#e7c76d]"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center border border-white/30 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-28 bg-gradient-to-b from-muted/20 to-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={services.title} intro={services.intro} gradient />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.items.map((s, i) => (
              <IconCard key={s.title} icon={serviceIcons[s.icon as keyof typeof serviceIcons]} title={s.title} delay={i * 100}>
                <p>{s.body}</p>
              </IconCard>
            ))}
          </div>
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-6 py-3">
              <Sparkles className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-lg font-medium text-foreground">
                <strong>{services.note.strong}</strong> {services.note.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section id="menu" className="scroll-mt-28 border-y border-[#d4af37]/15 bg-[#160f0b] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center animate-slide-up">
            <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.38em] text-[#d4af37]">{dishes.eyebrow}</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#f6ede3] sm:text-6xl">{dishes.title}</h2>
            <div className="mx-auto mt-8 h-px w-20 bg-[#d4af37]/70" />
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#cdb8a2] sm:text-xl">{dishes.intro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dishes.items.map((d, i) => (
              <div
                key={d.name}
                className="group relative overflow-hidden border border-[#d4af37]/20 bg-[#1a120f] shadow-[0_18px_35px_rgba(0,0,0,0.35)] animate-scale-in"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <Photo
                  src={d.image}
                  className="h-[360px] w-full transition-transform duration-700 group-hover:scale-105 sm:h-[420px] xl:h-[440px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090705]/95 via-[#090705]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-serif text-[1.8rem] leading-[1.05] text-[#f7efe6] sm:text-[2rem]">{d.name}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#d1b58e]">{d.detail}</p>
                </div>
                <div className="pointer-events-none absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full border border-white/30 bg-black/40 p-2 backdrop-blur-sm">
                    <Maximize2 className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookbook */}
      <section id="cookbook" className="scroll-mt-28 border-y border-[#d4af37]/15 bg-[#160f0b] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-slide-up">
              <p className="mb-7 text-[12px] font-medium uppercase tracking-[0.35em] text-[#d4af37]">{cookbook.eyebrow}</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-[#f6ede3] sm:text-6xl">{cookbook.title}</h2>
              <div className="mt-7 h-px w-20 bg-[#d4af37]/70" />
              {cookbook.paragraphs.map((p) => (
                <p key={p} className="mt-6 text-lg leading-relaxed text-[#d7c7b5] first-of-type:mt-8">
                  {p}
                </p>
              ))}
              <div className="mt-8 flex gap-10">
                {cookbook.prices.map((p) => (
                  <div key={p.label}>
                    <div className="font-serif text-5xl font-semibold text-[#e7c76d]">{p.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[#bfa06a]">{p.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 mb-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={cookbook.buyOnline.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-lg"
                >
                  {cookbook.buyOnline.label}
                </a>
                <a
                  href={whatsapp(cookbook.hardcopy.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-[#d4af37]/60 px-6 text-sm font-medium text-[#f6ede3] transition-all duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  {cookbook.hardcopy.label}
                </a>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl" />
              <Photo
                src={cookbook.image}
                className={`relative z-10 ${cookbook.imageAspect} rounded-2xl shadow-elegant transition-transform duration-500 hover:scale-105`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-[#d4af37]/20 bg-[#120d0a] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <div className="overflow-hidden border border-[#d4af37]/40 bg-[#1a120f] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <Photo src={story.image} className="aspect-[1170/1391] w-full" />
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-4">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-[#d4af37]">{story.eyebrow}</p>
              <h2 className="font-serif text-4xl font-bold leading-[1.1] text-[#f5efe7] sm:text-5xl lg:text-6xl">{story.title}</h2>
              <div className="my-7 h-px w-24 bg-[#d4af37]/70" />
              {story.paragraphs.map((p) => (
                <p key={p} className="mb-6 text-lg leading-relaxed text-[#d7c7b5] last-of-type:mb-0">
                  {p}
                </p>
              ))}
              <div className="mt-10 border-t border-[#d4af37]/25 pt-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {story.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#b4976a]">{s.label}</p>
                      <p className="mt-2 font-serif text-4xl font-semibold leading-none text-[#e7c76d]">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28 bg-gradient-to-b from-muted/20 to-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={contact.title} intro={contact.intro} />
          <div className="grid gap-8 md:grid-cols-3">
            <IconCard icon={Phone} title="Call Us" delay={0}>
              <a href={`tel:${site.phone.tel}`} className="block transition-colors duration-300 hover:text-primary">
                {site.phone.display}
              </a>
              <a
                href={whatsapp(contact.inquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors duration-300 hover:text-primary"
              >
                WhatsApp: {site.phone.display}
              </a>
            </IconCard>
            <IconCard icon={Mail} title="Email" delay={100}>
              <a href={`mailto:${site.email}`} className="block transition-colors duration-300 hover:text-primary">
                {site.email}
              </a>
              <p>For all inquiries and bookings</p>
            </IconCard>
            <IconCard icon={Clock} title="Service Hours" delay={200}>
              {site.hours.map((h) => (
                <p key={h}>{h}</p>
              ))}
            </IconCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-b from-card to-card/80 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.logo}
                alt={`${site.shortName} Logo`}
                className="mb-6 h-12 w-auto rounded-full shadow-soft transition-transform duration-300 hover:scale-105"
              />
              <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">{site.description}</p>
              <div className="flex space-x-4">
                {[
                  { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
                  { href: site.socials.facebook, label: "Facebook", Icon: FacebookIcon },
                  { href: site.socials.tiktok, label: "TikTok", Icon: TikTokIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-6 font-serif text-lg font-semibold">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                {services.items.map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="transition-colors duration-300 hover:text-primary">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-serif text-lg font-semibold">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>{site.email}</li>
                <li>WhatsApp: {site.phone.display}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {site.shortName}. All rights reserved.
            <span className="gradient-text ml-2 font-medium">{site.tagline}.</span>
          </p>
          <p className="mt-3 text-sm text-[#cdb8a2]">
            Need a website?{" "}
            <a
              href={site.developer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#e7c76d] underline decoration-[#e7c76d]/60 underline-offset-4 transition-colors duration-300 hover:text-[#f5efe7]"
            >
              {site.developer.label}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
