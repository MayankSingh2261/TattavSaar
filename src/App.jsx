import { Leaf, ShieldCheck, Sparkles, Heart, Droplets, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import heroProduct from "./assets/hero-product.png";
import cream from "./assets/cream.png";
import facePack from "./assets/face-pack.png";
import giftBox from "./assets/gift-box.png";
import "./index.css";

const products = [
  {
    name: "Shatdhauta Ghrita",
    desc: "100 times washed cow ghee cream for deep hydration, repair and glow.",
    image: cream,
  },
  {
    name: "Varnya Skin Amrit",
    desc: "Ayurvedic face pack crafted for radiant and healthy-looking skin.",
    image: facePack,
  },
  {
    name: "Ayurvedic Face Wash",
    desc: "Gentle herbal cleansing ritual for daily freshness.",
    image: cream,
  },
];

const benefits = [
  { icon: Leaf, title: "Pure Ayurveda", text: "Inspired by ancient skin rituals." },
  { icon: Droplets, title: "Cow Ghee Based", text: "Deep nourishment for skin barrier." },
  { icon: ShieldCheck, title: "No Harsh Chemicals", text: "No parabens, sulphates or toxins." },
  { icon: Heart, title: "Made with Care", text: "Small batch skincare for mindful beauty." },
];

const ingredients = [
  "Cow Ghee",
  "Turmeric",
  "Sandalwood",
  "Rose",
  "Nalpamara Bark",
  "Herbal Extracts",
];

function App() {
  return (
    <main className="overflow-hidden bg-[#F5EFE6] text-[#2F241D]">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Story />
      <Products />
      <WhyGhee />
      <Ingredients />
      <Ritual />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#f5efe6]/80 backdrop-blur-md border-b border-[#d8c3aa]/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img src={logo} alt="Tattva Saar" className="h-12 w-auto object-contain" />

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#story" className="hover:text-[#8B5E3C]">Our Story</a>
          <a href="#products" className="hover:text-[#8B5E3C]">Products</a>
          <a href="#ingredients" className="hover:text-[#8B5E3C]">Ingredients</a>
          <a href="#contact" className="hover:text-[#8B5E3C]">Contact</a>
        </div>

        <a
          href="#products"
          className="rounded-full bg-[#5B2E2E] px-5 py-2 text-sm text-white transition hover:bg-[#7a3b32]"
        >
          Explore
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#E6D7C6,transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 tracking-[0.35em] text-[#8B5E3C]">
            NATURE’S BLUEPRINT
          </p>

          <h1 className="serif text-5xl font-bold leading-tight text-[#4A3F18] md:text-7xl">
            Ancient Ayurveda. <br />
            Modern Skin Rituals.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f4b3b]">
            Pure cow ghee based Ayurvedic skincare crafted to nourish, repair and
            restore your natural glow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-full bg-[#5B2E2E] px-7 py-3 text-white shadow-lg transition hover:bg-[#7a3b32]"
            >
              Explore Collection
            </a>
            <a
              href="#story"
              className="rounded-full border border-[#8B5E3C] px-7 py-3 text-[#5B2E2E] transition hover:bg-[#eadcc9]"
            >
              Our Story
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="rounded-[3rem] bg-[#E6D7C6] p-6 shadow-2xl">
            <img
              src={heroProduct}
              alt="Tattva Saar Ayurvedic Product"
              className="mx-auto max-h-[620px] rounded-[2rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-[#EFE2D2] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {benefits.map((item) => (
          <div key={item.title} className="text-center">
            <item.icon className="mx-auto mb-4 h-8 w-8 text-[#8B5E3C]" />
            <h3 className="serif text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-[#6a5645]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <img
          src={giftBox}
          alt="Tattva Saar packaging"
          className="rounded-[2.5rem] shadow-xl"
        />

        <div>
          <p className="mb-3 tracking-[0.25em] text-[#8B5E3C]">OUR STORY</p>
          <h2 className="serif text-5xl font-bold text-[#5B2E2E]">
            Skincare that heals, not harms.
          </h2>
          <p className="mt-6 leading-8 text-[#5f4b3b]">
            TATTVASAAR was born from ancient Ayurvedic wisdom and the belief
            that beauty begins with purity. Our products are inspired by ghrita
            formulations, natural herbs and mindful rituals.
          </p>
          <p className="mt-4 leading-8 text-[#5f4b3b]">
            Every formulation is designed to feel gentle, luxurious and rooted in
            nature — made for people who want clean skincare with soul.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-[#EFE2D2] px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="tracking-[0.25em] text-[#8B5E3C]">OUR COLLECTION</p>
        <h2 className="serif mt-3 text-5xl font-bold text-[#5B2E2E]">
          Ayurvedic Skin Rituals
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-[2rem] bg-[#F8F0E6] p-5 text-left shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full rounded-[1.5rem] object-cover"
              />
              <h3 className="serif mt-6 text-3xl font-semibold text-[#5B2E2E]">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6a5645]">
                {product.desc}
              </p>
              <button className="mt-6 rounded-full bg-[#5B2E2E] px-6 py-3 text-sm text-white">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyGhee() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Flower2 className="mx-auto mb-5 h-10 w-10 text-[#8B5E3C]" />
        <h2 className="serif text-5xl font-bold text-[#4A3F18]">
          Why Ayurvedic Cow Ghee?
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5f4b3b]">
          Cow ghee has been valued in Ayurveda for its nourishing and cooling
          nature. In skincare, ghrita-based rituals help support moisture,
          comfort and a naturally radiant appearance.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Deep Nourishment", "Skin Barrier Support", "Natural Glow"].map(
            (item) => (
              <div key={item} className="rounded-3xl bg-[#EFE2D2] p-8">
                <Sparkles className="mx-auto mb-4 h-7 w-7 text-[#8B5E3C]" />
                <h3 className="serif text-2xl font-semibold">{item}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  return (
    <section id="ingredients" className="bg-[#F8F0E6] px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="tracking-[0.25em] text-[#8B5E3C]">PURE INGREDIENTS</p>
        <h2 className="serif mt-3 text-5xl font-bold text-[#5B2E2E]">
          Rooted in Nature
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {ingredients.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#d8c3aa] bg-[#F5EFE6] p-8"
            >
              <Leaf className="mx-auto mb-4 h-7 w-7 text-[#8B5E3C]" />
              <h3 className="serif text-2xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ritual() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[3rem] bg-[#5B2E2E] px-8 py-16 text-center text-white shadow-2xl">
        <h2 className="serif text-5xl font-bold">
          Begin Your Ayurvedic Skin Ritual
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#f1e4d5]">
          Pure. Potent. Purposeful. Inspired by Ayurveda and crafted for modern
          skincare lovers.
        </p>
        <a
          href="#products"
          className="mt-8 inline-block rounded-full bg-[#F5EFE6] px-8 py-3 font-medium text-[#5B2E2E]"
        >
          Explore Products
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#2F241D] px-6 py-12 text-center text-[#f1e4d5]">
      <h2 className="serif text-3xl">TATTVASAAR</h2>
      <p className="mt-2 text-sm">Nature’s Blueprint</p>
      <p className="mt-6 text-sm">
        Pure Ayurvedic skincare made with love in India.
      </p>
      <p className="mt-4 text-sm">Instagram | WhatsApp | Contact</p>
    </footer>
  );
}

export default App;