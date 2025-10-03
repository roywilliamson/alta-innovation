/* empty css                                 */
import { c as createComponent, b as createAstro, e as addAttribute, r as renderHead, f as renderSlot, g as renderTemplate, m as maybeRenderHead, h as renderScript, i as renderComponent } from '../chunks/astro/server_DUhJSJtz.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { jsxs, jsx } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';
import { useRef, useEffect, useState } from 'react';
import { createNoise3D } from 'simplex-noise';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Strategic advisory for CEOs navigating the convergence of green technology, deep tech, and artificial intelligence." } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical" href="https://alta-innovation.com/"><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/layouts/Layout.astro", void 0);

function getContent(filename) {
  try {
    const fullPath = join(process.cwd(), "src", "content", `${filename}.md`);
    const fileContents = readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.warn(`Could not load content file: ${filename}.md`);
    return {};
  }
}
function isContentPublished(filename) {
  try {
    const content = getContent(filename);
    return content.draft !== true;
  } catch (error) {
    console.warn(`Could not check published status for: ${filename}.md`);
    return false;
  }
}
function getHeroContent() {
  return getContent("hero");
}
function getNavigationContent() {
  return getContent("navigation");
}
function getExpertiseContent() {
  return getContent("expertise");
}
function getClientsContent() {
  return getContent("clients");
}
function getInsightsContent() {
  return getContent("insights");
}
function getServicesContent() {
  return getContent("services");
}

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const navContent = getNavigationContent();
  const menuItems = navContent.menuItems || [];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <button data-scroll-to="top" class="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors cursor-pointer"> ${navContent.title || "ALTA INNOVATION"} </button> <!-- Desktop Navigation --> <div class="hidden md:flex space-x-8"> ${menuItems.map((item) => renderTemplate`<button${addAttribute(item.link.replace("#", ""), "data-scroll-to")} class="text-gray-700 hover:text-orange-600 transition-colors"> ${item.label} </button>`)} </div> <!-- Mobile menu button --> <div class="md:hidden"> <button id="mobile-menu-button" class="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="md:hidden py-4 space-y-2 hidden"> ${menuItems.map((item) => renderTemplate`<button${addAttribute(item.link.replace("#", ""), "data-scroll-to")} class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-md"> ${item.label} </button>`)} </div> </div> </nav> ${renderScript($$result, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Navigation.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  let w, h, nt, i, x, ctx, canvas;
  const canvasRef = useRef(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 1e-3;
      case "fast":
        return 2e-3;
      default:
        return 1e-3;
    }
  };
  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function() {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };
  const waveColors = colors ?? [
    "#ea580c",
    // orange-600
    "#f97316",
    // orange-500
    "#fb923c",
    // orange-400
    "#fdba74",
    // orange-300
    "#fed7aa"
    // orange-200
  ];
  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };
  let animationId;
  const render = () => {
    ctx.fillStyle = backgroundFill || "transparent";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
    );
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "h-full flex flex-col items-center justify-center",
        containerClassName
      ),
      children: [
        /* @__PURE__ */ jsx(
          "canvas",
          {
            className: "absolute inset-0 z-0",
            ref: canvasRef,
            id: "canvas",
            style: {
              ...isSafari ? { filter: `blur(${blur}px)` } : {}
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: cn("relative z-10", className), ...props, children })
      ]
    }
  );
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const heroContent = getHeroContent();
  return renderTemplate`${maybeRenderHead()}<section class="min-h-screen relative overflow-hidden pt-16"> ${renderComponent($$result, "WavyBackground", WavyBackground, { "client:load": true, "containerClassName": "absolute inset-0", "colors": ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#dbeafe"], "waveOpacity": 0.15, "speed": "fast", "blur": 8, "client:component-hydration": "load", "client:component-path": "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/WavyBackground.tsx", "client:component-export": "WavyBackground" }, { "default": ($$result2) => renderTemplate` <div></div> ` })} <div class="relative z-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 via-sky-50/60 to-slate-50/40"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <div class="space-y-8 animate-fade-in"> <div class="space-y-4"> <p class="text-orange-600 font-medium tracking-wide uppercase text-sm"> ${heroContent.subtitle || "Senior Innovation Consultant"} </p> <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"> ${heroContent.title || "Transforming Vision into Innovation"} </h1> <p class="text-xl text-gray-600 leading-relaxed max-w-2xl"> ${heroContent.description || "Strategic advisory for CEOs navigating the convergence of green technology, deep tech, and artificial intelligence. From market entry to investment strategy, I help leaders build sustainable competitive advantages."} </p> </div> <div class="flex flex-col sm:flex-row gap-4"> <button onclick="openContactModal()" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"> ${heroContent.primaryButtonText || "Schedule Consultation"} </button> <button class="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-3" onclick="window.open('https://linkedin.com/in/roy-williamson', '_blank')"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> <span>Connect</span> </button> </div> </div> <div class="relative animate-fade-in-delay flex items-center justify-center h-80 md:h-96 lg:h-[34rem]"> <img${addAttribute(heroContent.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", "src")}${addAttribute(heroContent.imageAlt || "Professional headshot", "alt")} class="w-64 h-64 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] object-contain drop-shadow-2xl"> </div> </div> <!-- Statistics section - three equal columns across full width --> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"> ${heroContent.statistics && heroContent.statistics.map((stat) => renderTemplate`<div class="text-center"> <div class="text-3xl font-bold text-gray-900">${stat.value}</div> <div class="text-sm text-gray-600">${stat.label}</div> </div>`)} </div> <div class="text-center mt-20 pt-8 border-t border-gray-200"> <button data-scroll-to="expertise" class="animate-bounce text-gray-600 hover:text-orange-600 p-2 rounded-full hover:bg-gray-50 transition-colors duration-200"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </button> </div> </div> </div> </section> ${renderScript($$result, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const servicesContent = getServicesContent();
  const services = servicesContent.services || [];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-slate-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header --> <div class="text-center mb-16"> <p class="text-orange-600 font-medium tracking-wide uppercase text-sm mb-4"> ${servicesContent.subtitle || "Specialized expertise across the innovation ecosystem"} </p> <h2 class="text-4xl font-bold text-gray-900 mb-6"> ${servicesContent.title || "Advisory Services"} </h2> <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"> ${servicesContent.description || "Bridging the gap between technology, investment, and policy to accelerate innovation and commercialization in emerging technology sectors."} </p> </div> <!-- Services Grid --> <div class="grid lg:grid-cols-3 gap-8 mb-20"> ${services.map((service, index) => renderTemplate`<div class="group"> <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 h-full border border-gray-100"> <!-- Service Icon & Title --> <div class="text-center mb-6"> <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"> ${service.icon} </div> <h3 class="text-2xl font-bold text-gray-900 mb-3"> ${service.title} </h3> </div> <!-- Service Details --> <div class="space-y-4 mb-6"> ${service.details && service.details.map((detail) => renderTemplate`<div class="flex items-start"> <div class="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></div> <p class="text-gray-700 text-sm leading-relaxed">${detail}</p> </div>`)} </div> <!-- Service Highlights --> ${service.highlights && renderTemplate`<div class="border-t border-gray-100 pt-6"> <h4 class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Areas</h4> <div class="flex flex-wrap gap-2"> ${service.highlights.map((highlight) => renderTemplate`<span class="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full"> ${highlight} </span>`)} </div> </div>`} </div> </div>`)} </div> </div> </section>`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Services.astro", void 0);

const $$Expertise = createComponent(($$result, $$props, $$slots) => {
  const expertiseContent = getExpertiseContent();
  const features = expertiseContent.features || [];
  const credentials = expertiseContent.credentials || [];
  const statistics = expertiseContent.statistics || [];
  return renderTemplate`${maybeRenderHead()}<section id="expertise" class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-gray-900 mb-4"> ${expertiseContent.title || "Strategic Expertise"} </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto"> ${expertiseContent.description || "Proven expertise in deeptech investment, business development, and innovation strategy."} </p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature) => renderTemplate`<div class="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg rounded-xl bg-white p-8"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-xl font-bold text-gray-900 mb-4">${feature.title}</h3> <p class="text-gray-600 mb-6 leading-relaxed">${feature.description}</p> <div class="space-y-2"> ${feature.highlights && feature.highlights.map((highlight) => renderTemplate`<div class="flex items-center text-sm text-orange-600"> <div class="w-2 h-2 bg-orange-600 rounded-full mr-3"></div> ${highlight} </div>`)} </div> </div>`)} </div> <div class="mt-20 bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-12"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div> <h3 class="text-3xl font-bold text-gray-900 mb-6"> ${expertiseContent.trackRecordTitle || "Proven Track Record"} </h3> <p class="text-lg text-gray-700 mb-8"> ${expertiseContent.trackRecordDescription || "Extensive experience in the deeptech sector with a focus on investment strategy, business development, and helping innovative startups overcome systemic market challenges."} </p> <div class="space-y-4"> ${credentials.map((credential) => renderTemplate`<div class="flex items-center"> <svg class="w-6 h-6 text-orange-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-gray-700">${credential.text}</span> </div>`)} </div> </div> <div class="grid grid-cols-2 gap-6"> ${statistics.map((stat) => renderTemplate`<div class="text-center p-6 bg-white rounded-xl shadow-sm"> <div class="text-3xl font-bold text-orange-600">${stat.value}</div> <div class="text-sm text-gray-600 mt-2">${stat.label}</div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Expertise.astro", void 0);

const $$ClientShowcase = createComponent(($$result, $$props, $$slots) => {
  const clientsContent = getClientsContent();
  const testimonials = clientsContent.testimonials || [];
  const clientLogos = clientsContent.clientLogos || [];
  return renderTemplate`${maybeRenderHead()}<section id="clients" class="py-20 bg-gray-50" data-astro-cid-wwip7kpu> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-wwip7kpu> <div class="text-center mb-16" data-astro-cid-wwip7kpu> <h2 class="text-4xl font-bold text-gray-900 mb-4" data-astro-cid-wwip7kpu> ${clientsContent.title || "Trusted by Industry Leaders"} </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-wwip7kpu> ${clientsContent.description || "Working with Fortune 500 companies, innovative startups, and leading investment firms to drive transformational growth in emerging technology sectors."} </p> </div> <!-- Client Logos Carousel --> <div class="mb-20" data-astro-cid-wwip7kpu> <p class="text-center text-gray-500 mb-8 uppercase tracking-wide text-sm" data-astro-cid-wwip7kpu>
Trusted by Leading Organizations
</p> <div class="relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 py-8" data-astro-cid-wwip7kpu> <div class="logo-carousel flex items-center space-x-12" data-astro-cid-wwip7kpu> <!-- First set of logos --> ${clientLogos.map((client) => renderTemplate`<div class="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-md transition-shadow" data-astro-cid-wwip7kpu> ${client.logo.endsWith(".png") || client.logo.endsWith(".jpg") || client.logo.endsWith(".svg") ? renderTemplate`<img${addAttribute(client.logo, "src")}${addAttribute(`${client.name} logo`, "alt")} class="h-16 w-auto object-contain transition-all duration-300 hover:scale-105" loading="lazy" data-astro-cid-wwip7kpu>` : renderTemplate`<div class="h-16 w-20 bg-gray-100 rounded flex items-center justify-center" data-astro-cid-wwip7kpu> <span class="text-gray-600 font-bold text-sm" data-astro-cid-wwip7kpu>${client.logo}</span> </div>`} </div>`)} <!-- Duplicate set for seamless loop --> ${clientLogos.map((client) => renderTemplate`<div class="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-md transition-shadow" data-astro-cid-wwip7kpu> ${client.logo.endsWith(".png") || client.logo.endsWith(".jpg") || client.logo.endsWith(".svg") ? renderTemplate`<img${addAttribute(client.logo, "src")}${addAttribute(`${client.name} logo`, "alt")} class="h-16 w-auto object-contain transition-all duration-300 hover:scale-105" loading="lazy" data-astro-cid-wwip7kpu>` : renderTemplate`<div class="h-16 w-20 bg-gray-100 rounded flex items-center justify-center" data-astro-cid-wwip7kpu> <span class="text-gray-600 font-bold text-sm" data-astro-cid-wwip7kpu>${client.logo}</span> </div>`} </div>`)} </div> </div> </div> <!-- Testimonials --> <div class="grid md:grid-cols-3 gap-8" data-astro-cid-wwip7kpu> ${testimonials.map((testimonial) => renderTemplate`<div class="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-8" data-astro-cid-wwip7kpu> <div class="mb-6" data-astro-cid-wwip7kpu> <div class="text-orange-600 text-4xl mb-4" data-astro-cid-wwip7kpu>"</div> <p class="text-gray-700 leading-relaxed" data-astro-cid-wwip7kpu> ${testimonial.quote} </p> </div> <div class="border-t pt-6" data-astro-cid-wwip7kpu> <div class="font-semibold text-gray-900" data-astro-cid-wwip7kpu>${testimonial.author}</div> <div class="text-sm text-gray-600" data-astro-cid-wwip7kpu>${testimonial.title}</div> <div class="text-sm text-orange-600 font-medium" data-astro-cid-wwip7kpu>${testimonial.company}</div> </div> </div>`)} </div> <!-- Background Section --> <div class="mt-20 bg-white rounded-2xl p-12 shadow-lg" data-astro-cid-wwip7kpu> <div class="max-w-4xl mx-auto" data-astro-cid-wwip7kpu> <h3 class="text-3xl font-bold text-gray-900 mb-8 text-center" data-astro-cid-wwip7kpu> ${clientsContent.backgroundTitle || "Professional Background"} </h3> <div class="grid md:grid-cols-2 gap-12" data-astro-cid-wwip7kpu> <div data-astro-cid-wwip7kpu> <h4 class="text-xl font-semibold text-gray-900 mb-4" data-astro-cid-wwip7kpu>Experience</h4> <div class="space-y-4" data-astro-cid-wwip7kpu> ${clientsContent.experience && clientsContent.experience.map((exp) => renderTemplate`<div class="flex" data-astro-cid-wwip7kpu> <div class="w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0" data-astro-cid-wwip7kpu></div> <div data-astro-cid-wwip7kpu> <div class="font-medium text-gray-900" data-astro-cid-wwip7kpu>${exp.role}</div> <div class="text-sm text-gray-600" data-astro-cid-wwip7kpu>${exp.period}</div> </div> </div>`)} </div> </div> <div data-astro-cid-wwip7kpu> <h4 class="text-xl font-semibold text-gray-900 mb-4" data-astro-cid-wwip7kpu>Education & Recognition</h4> <div class="space-y-4" data-astro-cid-wwip7kpu> ${clientsContent.education && clientsContent.education.map((edu) => renderTemplate`<div class="flex" data-astro-cid-wwip7kpu> <div class="w-3 h-3 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0" data-astro-cid-wwip7kpu></div> <div data-astro-cid-wwip7kpu> <div class="font-medium text-gray-900" data-astro-cid-wwip7kpu>${edu.degree}</div> <div class="text-sm text-gray-600" data-astro-cid-wwip7kpu>${edu.institution}</div> </div> </div>`)} </div> </div> </div> </div> </div> </div> </section> `;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/ClientShowcase.astro", void 0);

const $$Whitepapers = createComponent(($$result, $$props, $$slots) => {
  const insightsContent = getInsightsContent();
  const whitepapers = insightsContent.whitepapers || [];
  return renderTemplate`${maybeRenderHead()}<section id="insights" class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-gray-900 mb-4"> ${insightsContent.title || "Strategic Insights & Research"} </h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto"> ${insightsContent.description || "Download comprehensive reports and strategic frameworks developed from real-world consulting experience with industry leaders."} </p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${whitepapers.map((paper) => renderTemplate`<div${addAttribute(`bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl shadow-lg p-8 flex flex-col h-full ${paper.featured ? "ring-2 ring-orange-500 ring-opacity-50" : ""}`, "class")}> ${paper.featured && renderTemplate`<div class="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full mb-4">
Featured Report
</div>`} <div class="flex items-start mb-4"> <svg class="w-8 h-8 text-orange-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> <div> <div class="text-sm text-orange-600 font-medium mb-2">${paper.category}</div> <h3 class="text-lg font-bold text-gray-900 leading-tight mb-3"> ${paper.title} </h3> </div> </div> <p class="text-gray-600 mb-6 leading-relaxed flex-grow"> ${paper.description} </p> <div class="mt-auto"> <div class="flex justify-between items-center mb-6 text-sm text-gray-500"> <span>${paper.pages}</span> <span>${paper.downloads} downloads</span> </div> <button class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 download-btn"${addAttribute(paper.title, "data-title")}>
Download PDF
</button> </div> </div>`)} </div> <div class="mt-16 text-center"> <div class="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-12"> <h3 class="text-2xl font-bold text-gray-900 mb-4"> ${insightsContent.customResearchTitle || "Want Custom Research?"} </h3> <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"> ${insightsContent.customResearchDescription || "Need industry-specific analysis or custom strategic frameworks? I develop tailored research reports for executive teams and investment committees."} </p> <button data-scroll-to="contact" class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"> ${insightsContent.customResearchButtonText || "Request Custom Research"} </button> </div> </div> </div> </section> ${renderScript($$result, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Whitepapers.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Whitepapers.astro", void 0);

const $$ContactModal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Modal Backdrop -->${maybeRenderHead()}<div id="contact-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4"> <!-- Modal Content --> <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"> <!-- Modal Header --> <div class="flex items-center justify-between p-6 border-b border-gray-200"> <h2 class="text-2xl font-bold text-gray-900">Get In Touch</h2> <button id="close-modal" class="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full" aria-label="Close modal"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Modal Body --> <div class="p-6"> <p class="text-gray-600 mb-6">
Ready to discuss your innovation strategy? Send us a message and we'll get back to you within 24 hours.
</p> <form id="modal-contact-form" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="modal-name" class="block text-sm font-medium text-gray-700 mb-2">
Full Name *
</label> <input type="text" id="modal-name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Your full name"> </div> <div> <label for="modal-email" class="block text-sm font-medium text-gray-700 mb-2">
Email Address *
</label> <input type="email" id="modal-email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="your.email@company.com"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="modal-company" class="block text-sm font-medium text-gray-700 mb-2">
Company/Organization
</label> <input type="text" id="modal-company" name="company" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Your company name"> </div> <div> <label for="modal-consultationType" class="block text-sm font-medium text-gray-700 mb-2">
Consultation Type
</label> <select id="modal-consultationType" name="consultationType" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"> <option value="">Select consultation type</option> <option value="Executive Advisory">Executive Advisory</option> <option value="Investment Due Diligence">Investment Due Diligence</option> <option value="Market Entry Strategy">Market Entry Strategy</option> <option value="Board Advisory">Board Advisory</option> <option value="Startup Advisory">Startup Advisory</option> <option value="Innovation Strategy">Innovation Strategy</option> <option value="Other">Other</option> </select> </div> </div> <div> <label for="modal-subject" class="block text-sm font-medium text-gray-700 mb-2">
Subject
</label> <input type="text" id="modal-subject" name="subject" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Brief subject of your inquiry"> </div> <div> <label for="modal-message" class="block text-sm font-medium text-gray-700 mb-2">
Message *
</label> <textarea id="modal-message" name="message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-vertical" placeholder="Please describe your project, timeline, and how we can help you achieve your innovation goals..."></textarea> </div> <div class="flex items-start space-x-3"> <input type="checkbox" id="modal-privacy" name="privacy" required class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"> <label for="modal-privacy" class="text-sm text-gray-600">
I agree to the privacy policy and consent to ALTA Innovation storing my information for the purpose of responding to my inquiry. *
</label> </div> <!-- Form Actions --> <div class="flex flex-col sm:flex-row gap-3 pt-4"> <button type="submit" id="modal-submit-btn" class="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"> <span id="modal-submit-text">Send Message</span> <svg id="modal-submit-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg> <svg id="modal-loading-icon" class="w-5 h-5 animate-spin hidden" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> </button> <button type="button" id="modal-cancel-btn" class="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors">
Cancel
</button> </div> </form> <!-- Success/Error Messages --> <div id="modal-form-message" class="mt-6 hidden"> <div id="modal-success-message" class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg hidden"> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span id="modal-success-text"></span> </div> </div> <div id="modal-error-message" class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg hidden"> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path> </svg> <span id="modal-error-text"></span> </div> </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/ContactModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/ContactModal.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-gray-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-gray-900 mb-4">
Let's Discuss Your Innovation Strategy
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Ready to accelerate your organization's innovation journey? 
        Schedule a strategic consultation to explore opportunities in green tech, deep tech, and AI.
</p> </div> <div class="grid lg:grid-cols-2 gap-12 items-start"> <div class="space-y-8"> <div class="bg-white border-0 shadow-lg rounded-xl p-8"> <h3 class="text-2xl font-bold text-gray-900 mb-6">
Strategic Consultation
</h3> <div class="space-y-4"> <div class="flex items-center"> <div class="w-2 h-2 bg-orange-600 rounded-full mr-4"></div> <span class="text-gray-700">Innovation strategy assessment</span> </div> <div class="flex items-center"> <div class="w-2 h-2 bg-orange-600 rounded-full mr-4"></div> <span class="text-gray-700">Market opportunity analysis</span> </div> <div class="flex items-center"> <div class="w-2 h-2 bg-orange-600 rounded-full mr-4"></div> <span class="text-gray-700">Investment strategy framework</span> </div> <div class="flex items-center"> <div class="w-2 h-2 bg-orange-600 rounded-full mr-4"></div> <span class="text-gray-700">Technology roadmap development</span> </div> <div class="flex items-center"> <div class="w-2 h-2 bg-orange-600 rounded-full mr-4"></div> <span class="text-gray-700">Initial consultation complimentary for qualified executives</span> </div> </div> </div> <div class="grid grid-cols-2 gap-6"> <div class="bg-white border border-gray-300 shadow-lg rounded-xl p-6 text-center"> <button class="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-3 mx-auto" onclick="openContactModal()"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>Send Email</span> </button> </div> <div class="bg-white border border-gray-300 shadow-lg rounded-xl p-6 text-center"> <button class="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-3 mx-auto" onclick="window.open('https://linkedin.com/in/roy-williamson', '_blank')"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> <span>Connect</span> </button> </div> </div> </div> <div class="space-y-8"> <div class="bg-white rounded-2xl p-8 shadow-lg"> <h3 class="text-2xl font-bold text-gray-900 mb-6">
Engagement Areas
</h3> <div class="space-y-4"> <div> <h4 class="font-semibold text-gray-900 mb-1">Executive Advisory</h4> <p class="text-gray-600 text-sm">
Strategic guidance for C-suite executives on innovation portfolio management.
</p> </div> <div> <h4 class="font-semibold text-gray-900 mb-1">Investment Due Diligence</h4> <p class="text-gray-600 text-sm">
Technical and market assessment for venture capital and private equity.
</p> </div> <div> <h4 class="font-semibold text-gray-900 mb-1">Market Entry Strategy</h4> <p class="text-gray-600 text-sm">
Go-to-market strategy for emerging technology sectors.
</p> </div> <div> <h4 class="font-semibold text-gray-900 mb-1">Board Advisory</h4> <p class="text-gray-600 text-sm">
Independent board positions for technology companies and funds.
</p> </div> </div> </div> </div> </div> </div> </section> <!-- Contact Modal --> ${renderComponent($$result, "ContactModal", $$ContactModal, {})}`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const isNavigationPublished = isContentPublished("navigation");
  const isHeroPublished = isContentPublished("hero");
  const isServicesPublished = isContentPublished("services");
  const isExpertisePublished = isContentPublished("expertise");
  const isClientsPublished = isContentPublished("clients");
  const isInsightsPublished = isContentPublished("insights");
  const isContactPublished = isContentPublished("contact");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ALTA INNOVATION | Roy Williamson - Innovation Strategy Consultant" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-white"> ${isNavigationPublished && renderTemplate`${renderComponent($$result2, "Navigation", $$Navigation, {})}`} ${isHeroPublished && renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}`} ${isServicesPublished && renderTemplate`${renderComponent($$result2, "Services", $$Services, {})}`} ${isExpertisePublished && renderTemplate`${renderComponent($$result2, "Expertise", $$Expertise, {})}`} ${isClientsPublished && renderTemplate`${renderComponent($$result2, "ClientShowcase", $$ClientShowcase, {})}`} ${isInsightsPublished && renderTemplate`${renderComponent($$result2, "Whitepapers", $$Whitepapers, {})}`} ${isContactPublished && renderTemplate`${renderComponent($$result2, "Contact", $$Contact, {})}`} </div> ` })}`;
}, "/Users/willjackson/Documents/Work/roywilliamson/astro/src/pages/index.astro", void 0);

const $$file = "/Users/willjackson/Documents/Work/roywilliamson/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
