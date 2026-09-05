import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Check, ChevronRight, Facebook, Instagram, Layers3, Moon, Sun,
  Mail, Menu, Megaphone, MoveRight, Play, Share2, Sparkles, Twitter, Users, X,
} from 'lucide-react'

const creators = [
  { name: 'Maya Chen', handle: '@mayamakes', platform: 'Instagram', followers: '125K', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80' },
  { name: 'Andre Wilson', handle: '@andre.w', platform: 'Facebook', followers: '280K', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80' },
  { name: 'Noah Ellis', handle: '@noah.ellis', platform: 'X', followers: '75K', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80' },
]

const services = [
  { icon: Users, title: 'Influencer Marketing', text: 'Connect your brand with creators whose audience aligns with your target market.' },
  { icon: Megaphone, title: 'Product Promotions', text: 'Put your products in front of engaged audiences through authentic creator content.' },
  { icon: Layers3, title: 'Campaign Management', text: 'We coordinate creators, content, timelines, approvals, and campaign execution.' },
  { icon: Share2, title: 'Social Amplification', text: 'Extend your campaign across Instagram, Facebook, and X to maximize visibility.' },
]

function PlatformIcon({ platform, size = 15 }) {
  if (platform === 'Instagram') return <Instagram size={size} />
  if (platform === 'Facebook') return <Facebook size={size} />
  return <Twitter size={size} />
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('influence-theme') !== 'light')
  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', !dark)
    localStorage.setItem('influence-theme', dark ? 'dark' : 'light')
  }, [dark])
  const links = [['Services', '#services'], ['Creators', '#creators'], ['Process', '#process'], ['Contact', '#contact']]
  return <nav className="nav"><a href="#" className="logo">INFLUENCE<span>.</span></a><div className={`nav-links ${open ? 'open' : ''}`}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? <Sun size={15} /> : <Moon size={15} />}</button><a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Start a Campaign <ArrowUpRight size={16} /></a></div><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></nav>
}

function CreatorCard({ creator, className = '' }) {
  return <motion.div className={`creator-card ${className}`} animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><img src={creator.image} alt="" /><div><strong>{creator.name}</strong><small>{creator.handle}</small></div><span className="platform"><PlatformIcon platform={creator.platform} /></span><div className="card-meta"><span>{creator.followers}<small> followers</small></span><span className="engagement">4.8% <small>eng.</small></span></div></motion.div>
}

function Hero() {
  return <section className="hero"><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> Influencer marketing agency</div><h1>Turn influence<br /><em>into brand growth.</em></h1><p>Connect your brand with creators who get people talking, engaging, and taking action.</p><div className="hero-actions"><a className="button primary" href="#contact">Start a Campaign <ArrowUpRight size={17} /></a><a className="button ghost" href="#creators"><Play size={14} fill="currentColor" /> Explore our network</a></div><div className="hero-note"><div className="avatar-stack">{creators.map(c => <img key={c.name} src={c.image} alt="" />)}</div><span><strong>500+ creators</strong><br />ready to move culture</span></div></div><div className="hero-visual"><div className="visual-glow" /><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="hero-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&q=85" alt="Creator in a colorful studio" /><div className="image-label"><Sparkles size={14} /> Creative that converts</div></div><CreatorCard creator={creators[0]} className="card-one" /><CreatorCard creator={creators[1]} className="card-two" /><CreatorCard creator={creators[2]} className="card-three" /></div></section>
}

function SocialProof() {
  return <section className="proof"><p className="section-kicker">THE NUMBERS <span>—</span> PLACEHOLDER BENCHMARKS</p><div className="stats"><div><strong>500<span>+</span></strong><small>Creators</small></div><div><strong>10<span>M+</span></strong><small>Combined audience</small></div><div><strong>20<span>+</span></strong><small>Content niches</small></div><div><strong>3</strong><small>Major platforms</small></div></div><div className="platform-row"><span>Across the platforms that matter</span><div><span><Instagram size={17} /> Instagram</span><span><Facebook size={17} /> Facebook</span><span><Twitter size={17} /> X / Twitter</span></div></div></section>
}

function Services() {
  return <section className="section services" id="services"><div className="section-heading"><div><p className="section-kicker">OUR CAPABILITIES</p><h2>Everything your<br /><em>next campaign</em> needs.</h2></div><p>From creator selection to campaign execution, we help brands turn attention into measurable growth.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }, i) => <motion.a href="#contact" className="service-card" key={title} whileHover={{ y: -8 }}><div className="service-icon"><Icon size={22} /></div><span className="service-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p><ChevronRight className="service-arrow" /></motion.a>)}</div></section>
}

function Network() {
  return <section className="section network" id="creators"><div className="network-copy"><p className="section-kicker">THE NETWORK</p><h2>People trust<br /><em>people.</em></h2><p>Our network is built around creators with real communities, distinct points of view, and the cultural fluency to make your brand matter.</p><a className="text-link" href="#contact">Meet the network <MoveRight size={18} /></a></div><div className="network-mosaic"><div className="mosaic-main"><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80" alt="Creator portrait" /><span className="mosaic-tag">Lifestyle / Beauty</span></div><div className="mosaic-side"><img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80" alt="Creator portrait" /><img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80" alt="Creator portrait" /></div><div className="network-badge">Built for<br /><strong>relevance</strong> <Sparkles size={18} /></div></div></section>
}

function Process() {
  const steps = [['01', 'Discover', 'We learn your ambition, audience, and what makes your brand impossible to ignore.'], ['02', 'Match', 'We handpick creators based on culture fit, community quality, and campaign goals.'], ['03', 'Activate', 'From brief to post, our team manages every detail and keeps momentum moving.'], ['04', 'Amplify', 'We measure what matters, learn fast, and build a playbook for your next win.']]
  return <section className="section process" id="process"><div className="section-heading"><div><p className="section-kicker">HOW IT WORKS</p><h2>A smarter way to<br /><em>make an impact.</em></h2></div><p>Clear thinking, creative energy, and a process that keeps your brand moving forward.</p></div><div className="steps">{steps.map(([num, title, text]) => <div className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  async function submit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('https://formsubmit.co/ajax/tarrasuri1999@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      })
      if (!response.ok) throw new Error('Form submission failed')
      setSent(true)
    } catch {
      setError('We could not send your message. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }
  return <section className="contact section" id="contact"><div className="contact-inner"><div><p className="section-kicker">LET'S TALK</p><h2>Have a brand<br /><em>worth talking about?</em></h2><p className="contact-lead">Tell us a little about your goals. We’ll bring the right people to the table.</p><div className="contact-detail"><Mail size={18} /> tarrasuri1999@gmail.com</div></div>{sent ? <div className="success"><div className="success-icon"><Check /></div><h3>Message received.</h3><p>Thanks for reaching out. We’ll be in touch within two business days.</p></div> : <form onSubmit={submit}><input type="hidden" name="_subject" value="New campaign inquiry from INFLUENCE." /><input type="hidden" name="_captcha" value="false" /><label>Name<input name="name" required placeholder="Your name" /></label><label>Work email<input name="email" required type="email" placeholder="you@company.com" /></label><label>Tell us about your project<textarea name="project" required rows="3" placeholder="What are you looking to make happen?" /></label>{error && <p className="form-error">{error}</p>}<button className="button primary" type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send inquiry'} {!submitting && <ArrowUpRight size={17} />}</button></form>}</div></section>
}

function Footer() { return <footer><a href="#" className="logo">INFLUENCE<span>.</span></a><p>Ideas travel further together.</p><div className="footer-right"><a href="#services">Services</a><a href="#creators">Creators</a><a href="#contact">Contact</a><span>© 2024 Influence Agency</span></div></footer> }

export default function App() { return <><Navbar /><main><Hero /><SocialProof /><Services /><Network /><Process /><Contact /></main><Footer /></> }
