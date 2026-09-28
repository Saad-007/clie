import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Play, 
  Pause,
  Video,
  MonitorPlay as YoutubeIcon,
  Camera,
  Image as InstagramIcon,
  Music2,
  Sparkles,
  DollarSign,
  Mic,
  Headphones,
  Film,
  Leaf,
  Zap,
  Megaphone,
  Home
} from 'lucide-react';

export default function VideoEditorPortfolio() {
  return (
    <div className="min-h-screen font-sans text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2074')" }}>
      {/* Heavy black overlay for readability and cinematic feel */}
      <div className="min-h-screen bg-black/80">
        
        {/* Custom Styles for Film Strip and specific UI elements */}
        <style dangerouslySetInnerHTML={{__html: `
          .text-glow {
            text-shadow: 0 0 15px rgba(234, 179, 8, 0.6);
          }
          .film-strip-border {
            position: relative;
            padding: 20px;
            background: #111;
          }
          .film-strip-border::before, .film-strip-border::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 15px;
            background-image: radial-gradient(circle at center, #000 3px, transparent 4px);
            background-size: 100% 20px;
            background-color: #ddd;
          }
          .film-strip-border::before { left: 0; }
          .film-strip-border::after { right: 0; }
          
          .tv-monitor {
            box-shadow: 
              inset 0 0 20px rgba(0,0,0,1),
              0 25px 50px -12px rgba(0,0,0,0.8);
            border-top: 16px solid #222;
            border-left: 16px solid #1a1a1a;
            border-right: 16px solid #1a1a1a;
            border-bottom: 24px solid #111;
          }

          .thank-you-glow {
            text-shadow: 0 0 30px rgba(255,255,255,0.35), 0 0 60px rgba(234,255,200,0.25);
          }
        `}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <HeroSection />
          <ResumeSection />
          <PortfolioSection />
        </div>

        <ThankYouSection />
        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  const [heroMuted, setHeroMuted] = useState(true);

  return (
    <div className="relative pt-12 pb-24 text-center flex flex-col items-center">
      {/* Giant Background Text - Sized up with letter spacing */}
      <div className="relative z-0 w-full overflow-hidden">
        <h1 className="text-[14vw] leading-none font-black tracking-[0.08em] text-white/95 uppercase mix-blend-overlay opacity-80"
            style={{ fontFamily: "'Impact', sans-serif" }}>
          PORTFOLIO
        </h1>
      </div>

      {/* Centerpiece Flex Container: HAYA - TV - EDITOR */}
      {/* Positioned highly overlapping the text above with mt-[-10vw] */}
      <div className="relative z-20 mt-[-4vw] md:mt-[-10vw] lg:mt-[-5vw] mx-auto w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 px-4">
        
        {/* Left Box: HAYA */}
        <div className="hidden md:flex bg-black/80 border border-white/20 rounded-xl px-10 py-5 shadow-2xl backdrop-blur-md">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-200 text-glow uppercase tracking-wider" style={{ fontFamily: "'Impact', sans-serif" }}>
            HAYA
          </h2>
        </div>

        {/* Retro TV / Monitor Centerpiece */}
        <div className="w-full max-w-[380px] lg:max-w-[420px] transform hover:scale-[1.02] transition-transform duration-500">
          <div className="tv-monitor rounded-xl relative bg-black p-2">
            {/* Unmute / Mute toggle — actually functional now */}
            <button
              onClick={() => setHeroMuted((m) => !m)}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-3 py-1 rounded font-bold uppercase tracking-wider z-30 flex items-center gap-1 border border-white/20 hover:bg-white/10 transition"
            >
              {heroMuted ? 'Unmute' : 'Mute'}
            </button>
            
            {/* Inner screen wrapper */}
            <div className="rounded-lg overflow-hidden relative shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]">
              <video 
                className="w-full aspect-video object-cover"
                src="/videos/documentary-1.mp4"
                autoPlay 
                loop 
                muted={heroMuted}
                playsInline
              />
              
              {/* Screen Glare/Reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay"></div>
            </div>

            {/* TV Details */}
            <div className="absolute bottom-[-16px] right-6 flex gap-2 items-center">
               <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse box-shadow-glow"></div>
               <div className="w-1 h-3 bg-gray-600 rounded-sm"></div>
               <div className="w-1 h-3 bg-gray-600 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Right Box: MEDIA EDITOR */}
        <div className="hidden md:flex bg-black/80 border border-white/20 rounded-xl px-10 py-5 shadow-2xl backdrop-blur-md">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-200 text-glow uppercase tracking-wider" style={{ fontFamily: "'Impact', sans-serif" }}>
            Editor
          </h2>
        </div>

        {/* Mobile Title Fallback (for smaller screens) */}
        <div className="md:hidden flex gap-4 mt-6 w-full justify-between">
          <div className="bg-black/80 border border-white/20 rounded-xl px-6 py-3 shadow-2xl flex-1 text-center">
            <h2 className="text-3xl font-bold text-yellow-200 text-glow uppercase tracking-wider" style={{ fontFamily: "'Impact', sans-serif" }}>HAYA</h2>
          </div>
          <div className="bg-black/80 border border-white/20 rounded-xl px-6 py-3 shadow-2xl flex-1 text-center">
            <h2 className="text-2xl font-bold text-yellow-200 text-glow uppercase tracking-wider" style={{ fontFamily: "'Impact', sans-serif" }}>Editor</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

function ResumeSection() {
  const [ready, setReady] = useState(false);

  // Skill bars page load hone ke baad animate hongi
  React.useEffect(() => {
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  // level = skill percentage (apne hisaab se change kar lo)
  const softwareGroups = [
    {
      group: 'Video Editing',
      items: [
        { code: 'Pr', label: 'Premiere Pro', level: 95, primary: true, bg: '#00005B', fg: '#9999FF' },
        { code: 'Cc', label: 'CapCut', level: 90, primary: true, bg: '#000000', fg: '#FFFFFF' },
      ],
    },
    {
      group: 'Motion, Design & 3D',
      items: [
        { code: 'Ae', label: 'After Effects', level: 85, primary: true, bg: '#1E0A3C', fg: '#B4A7FF' },
        { code: 'Ps', label: 'Photoshop', level: 80, primary: true, bg: '#001E36', fg: '#31A8FF' },
        { code: 'Ai', label: 'Illustrator', level: 65, bg: '#330000', fg: '#FF9A00' },
        { code: 'Bl', label: 'Blender', level: 60, bg: '#F5792A', fg: '#FFFFFF' },
      ],
    },
    {
      group: 'Audio',
      items: [{ code: 'Au', label: 'Audition', level: 75, bg: '#4B0002', fg: '#FF6A6A' }],
    },
  ];

  const experience = [
    {
      years: '2022–2023',
      title: 'Freelancing',
      role: 'Video Editor',
    },
    {
      years: '2023–2024',
      title: 'Agency',
      role: 'Video Editor',
    },
    {
      years: '2025–Today',
      title: 'Freelancing',
      role: 'Created videos for YouTubers, content creators & personal brands',
      current: true,
    },
  ];

  return (
    <div className="relative z-20 mb-20 mt-8 space-y-8">
      {/* Card 1: About + Contact */}
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">About Me</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              My name is Haya. I'm a passionate and creative video editor with a strong desire to tell compelling stories through visuals. My goal is to become a leading content creator and collaborate on impactful digital projects. I believe in creating content that resonates with audiences and stands out on every platform.
            </p>
            <div className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase text-xs tracking-wider">Name</span>
                <span className="font-medium text-white">Haya</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase text-xs tracking-wider">Date of Birth</span>
                <span className="font-medium text-white">17-02-2003</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase text-xs tracking-wider">Location</span>
                <span className="font-medium text-white">Karachi</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">Contact</h3>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MapPin size={16} className="text-yellow-500" />
              <span>Karachi</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Mail size={16} className="text-yellow-500" />
              <span className="bg-white/10 px-2 py-1 rounded">theeditorial@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Tools + Experience (combined) */}
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Tools & Software */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-8">
              <h3 className="text-2xl font-bold uppercase tracking-wider">Tools & Software</h3>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Proficiency</span>
            </div>

            <div className="space-y-8">
              {softwareGroups.map((g) => (
                <div key={g.group}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-500 mb-4">
                    {g.group}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {g.items.map((tool) => (
                      <div
                        key={tool.code}
                        className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/60 rounded-2xl p-3 transition-all duration-300"
                      >
                        <div
                          style={{ backgroundColor: tool.bg, color: tool.fg }}
                          className="w-12 h-12 shrink-0 rounded-xl font-bold flex items-center justify-center text-lg shadow-lg group-hover:scale-105 transition-transform"
                        >
                          {tool.code}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-white truncate">
                              {tool.label}
                            </span>
                            <span className="text-xs font-bold text-gray-400">{tool.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-yellow-600 to-yellow-300 transition-all duration-1000 ease-out"
                              style={{ width: ready ? `${tool.level}%` : '0%' }}
                            />
                          </div>
                          {tool.primary && (
                            <span className="inline-block mt-2 text-[9px] font-bold uppercase tracking-wider text-black bg-yellow-500 px-1.5 py-0.5 rounded">
                              Primary
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-8">Experience</h3>
            <div className="border-l-2 border-gray-700 ml-2 space-y-8 relative pb-2">
              {experience.map((exp) => (
                <div key={exp.years} className="relative pl-6">
                  <div
                    className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? 'bg-yellow-500 border-yellow-300 animate-pulse'
                        : 'bg-black border-gray-400'
                    }`}
                  ></div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      exp.current ? 'text-yellow-500' : 'text-gray-500'
                    }`}
                  >
                    {exp.years}
                  </span>
                  <h4 className="font-bold text-lg mt-1">{exp.title}</h4>
                  <p className="text-sm text-gray-400 border-t border-gray-700 pt-1 mt-1">
                    {exp.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
function PortfolioSection() {
 const [activeTab, setActiveTab] = useState('Talking Head');

const tabs = [
  { name: 'Talking Head', icon: <Mic size={16}/> },
    { name: 'Podcast', icon: <Headphones size={16}/> },
    { name: 'Shorts', icon: <Leaf size={16}/> },
    { name: 'Motion Graphics', icon: <Zap size={16}/> },
    { name: 'UGC Ads', icon: <Megaphone size={16}/> },
    { name: 'Real Estate', icon: <Home size={16}/> },
    { name: 'Cash Cow', icon: <DollarSign size={16}/> },
    { name: 'Documentary', icon: <Film size={16}/> },
  ];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Creator Strip — replaces the company-client bar, since Haya edits
          for individual creators/personal brands rather than companies */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <Sparkles size={18} className="text-yellow-500" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-white">Made for Creators</p>
            <p className="text-xs text-gray-400">Reels, shorts & stories edited to grow real audiences</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition cursor-default">
            <YoutubeIcon size={20} />
            <span className="text-sm font-medium hidden sm:inline">YouTube</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition cursor-default">
            <InstagramIcon size={20} />
            <span className="text-sm font-medium hidden sm:inline">Instagram</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition cursor-default">
            <Music2 size={20} />
            <span className="text-sm font-medium hidden sm:inline">TikTok</span>
          </div>
        </div>
      </div>

      {/* Category Toggles */}
      <div className="flex flex-wrap justify-center gap-2 bg-black/40 backdrop-blur-md p-3 rounded-3xl border border-white/10 max-w-4xl mx-auto">
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.name 
              ? 'bg-yellow-500 text-black shadow-lg' 
              : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center md:text-left border-t border-white/10 pt-8">
        <div>
          <h4 className="text-lg font-bold mb-2 text-yellow-500">Primary Tools</h4>
          <p className="text-sm text-gray-300 leading-relaxed">Premiere Pro · After Effects<br/>CapCut · Photoshop</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2 text-yellow-500">Content Types</h4>
          <p className="text-sm text-gray-300 leading-relaxed">Talking Heads, Podcasts & Shorts<br/>UGC Ads, Real Estate & Documentaries</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2 text-yellow-500">On-Time Delivery</h4>
          <p className="text-3xl font-light text-white">99%</p>
        </div>
      </div>

      {/* Grid Gallery — shows everything when "All" is active, otherwise
          filtered to just the selected category */}
      {(() => {
        const visibleProjects = (PROJECTS[activeTab] || []).map((item) => ({
  ...item,
  category: activeTab,
}));

        return (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8 px-1">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">{activeTab}</h3>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {visibleProjects.length} projects
              </span>
            </div>
            {visibleProjects.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {visibleProjects.map((project, i) => (
                  <ProjectCard
                    key={`${project.category}-${project.title}-${i}`}
                    title={project.title}
                    category={project.category}
                    video={project.video}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-500 text-sm border border-dashed border-white/10 rounded-2xl">
                No videos added to this category yet.
              </div>
            )}
          </div>
        );
      })()}
    </div>
  );
}

// Project data, organized by category. There's no fixed count per category —
// add exactly as many entries as you have videos for that category (1, 3,
// 10, whatever), and that many boxes will render. An empty array just shows
// nothing for that tab until you add entries.
//
// HOW TO ADD A VIDEO:
// 1. Put the file in public/videos, e.g. public/videos/re-1.mp4
// 2. Add one line here: { title: 'Your Title', video: '/videos/re-1.mp4' }
// No thumbnail needed — it plays (muted, looping) as soon as you hover it.
const PROJECTS = {
  'Talking Head': [
    { title: 'Raw & Real: One-on-One', video: '/videos/talking-head-1.mp4' },
    { title: 'Behind the Mic', video: '/videos/talking-head-2.mp4' },
  ],
  'Podcast': [
    { title: 'Unfiltered Conversations', video: '/videos/podcast-1.mp4' },
    { title: 'The Growth Mindset — Ep. 12', video: '/videos/podcast-2.mp4' },
  ],
  'Shorts': [
    { title: '60 Seconds of Chaos', video: '/videos/short-1.mp4' },
    { title: 'Hook, Line & Scroll', video: '/videos/short-2.mp4' },
  ],
  'Motion Graphics': [
    { title: 'Your Title Here', video: '/videos/motion-graphics-1.mp4' },
    { title: 'Your Title Here', video: '/videos/motion-graphics-2.mp4' },

  ],
  'UGC Ads': [
    { title: 'Unbox & Believe', video: '/videos/ugc-ads-1.mp4' },
    { title: 'Real Talk, Real Product', video: '/videos/ugc-ads-2.mp4' },
  ],
  'Real Estate': [
    { title: 'Dream Home Walkthrough', video: '/videos/re-1.mp4' },
    { title: 'Luxury Listing Reveal', video: '/videos/re-2.mp4' },
  ],
  'Cash Cow': [
    { title: 'Faceless Channel Breakdown', video: '/videos/cash-cow-1.mp4' },
  ],
  'Documentary': [
    { title: 'Voices Untold', video: '/videos/documentary-1.mp4' },
    { title: 'A Story Worth Telling', video: '/videos/documentary-2.mp4' },
  ],
};

// Categories whose source footage is landscape (16:9) instead of the
// default portrait (9:16) reels format. Add/remove category names here as
// needed — everything else stays portrait.
const LANDSCAPE_CATEGORIES = ['Cash Cow', 'Documentary'];

function ProjectCard({ title, category, video }) {
  const isLandscape = LANDSCAPE_CATEGORIES.includes(category);
  const videoRef = React.useRef(null);
  const [muted, setMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Only the hovered card plays — this is what fixes the lag from every
  // video autoplaying at once, especially on the "All" tab.
  const handleEnter = () => {
    setIsHovering(true);
    if (video && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setIsHovering(false);
    if (video && videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Grabs a real frame from the video as a "thumbnail" the moment it loads,
  // instead of showing a blank black box before the user hovers.
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((m) => !m);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg border border-white/10 bg-gradient-to-br from-white/10 via-black/50 to-black/80 ${
        isLandscape ? 'aspect-video sm:col-span-2' : 'aspect-[9/16]'
      }`}
    >
      {video ? (
        <video
          ref={videoRef}
          src={video}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition">
          <Video className="w-9 h-9 text-yellow-500" />
        </div>
      )}

      {/* Gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>

      {/* Play icon — only for thumbnail-only cards; video cards show the real preview on hover instead */}
      {!video && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
            <Play className="text-white ml-1" size={18} fill="currentColor" />
          </div>
        </div>
      )}

      {/* Unmute / Mute toggle — only shown while playing */}
      {video && isHovering && (
        <button
          onClick={toggleMute}
          className="absolute top-2 right-2 z-20 bg-black/80 text-white text-[10px] font-medium px-2.5 py-1 rounded-md border border-white/20 hover:bg-black"
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-black bg-yellow-500 px-2 py-0.5 rounded mb-2">
          {category}
        </span>
        <h5 className="font-semibold text-white text-sm leading-snug">{title}</h5>
      </div>
    </div>
  );
}

function ThankYouSection() {
  return (
    <div className="relative py-28 px-6 text-center overflow-hidden border-t border-white/5">
      {/* Ambient light-ray backdrop, matching the forest/light-shaft mood */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 50% 0%, rgba(234,255,200,0.20), transparent 65%), linear-gradient(180deg, #0a0f0b 0%, #050705 70%, #000000 100%)',
        }}
      />
      {/* Light-shaft texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'repeating-conic-gradient(from 250deg at 50% -20%, rgba(255,255,255,0.08) 0deg 1.5deg, transparent 1.5deg 6deg)',
        }}
      />
      {/* Soft vignette so the edges fall away into black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 40%, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />
      {/* Simple layered CSS "tree line" silhouette along the bottom for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-90 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: '#050705',
            clipPath:
              'polygon(0% 100%, 0% 40%, 4% 60%, 9% 30%, 14% 55%, 20% 20%, 26% 50%, 33% 25%, 40% 58%, 47% 30%, 54% 60%, 61% 28%, 68% 55%, 75% 22%, 82% 52%, 89% 28%, 95% 58%, 100% 35%, 100% 100%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <h2 className="thank-you-glow text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white">
          Thank You
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-400 max-w-md mx-auto">
          Let's create something worth watching. Reach out and let's talk about your next project.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
          <a
            href="mailto:theeditorial@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <Mail size={16} className="text-yellow-500" />
            <span className="text-sm">theeditorial@gmail.com</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
              <InstagramIcon size={16} />
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
              <YoutubeIcon size={16} />
            </div>
            <span className="text-sm text-gray-300">/theeditorial</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 px-6 text-center">
      <p className="text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} Haya — Video Editor. All rights reserved.
      </p>
    </footer>
  );
}