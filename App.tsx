import React, { useState } from 'react';
import { 
  BackArrowIcon, RobotIcon, BoltIcon, DiamondIcon, XRayIcon, HandshakeIcon, 
  MicIcon, ChartIcon, SparklesIcon, LightbulbIcon, TargetIcon, RedXIcon 
} from './components/Icons';
import InfoCard from './components/InfoCard';
import FeatureCard from './components/FeatureCard';
import CoreFeatureCard from './components/CoreFeatureCard';

const HomePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <header className="mb-16 md:mb-24 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
          The Recruiter Operating System
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          AI handles the 80%. You dominate the 20% that matters.
        </p>
      </header>

      <main className="flex flex-col gap-16 md:gap-24">
        <section className="animate-fade-in-delay-1">
          <InfoCard 
            title="The Big Idea" 
            description="A complete platform that eliminates admin work while amplifying every human superpower recruiters have. The result? Great recruiters place 10x more people, build deeper relationships, and become irreplaceable strategic advisors."
          />
        </section>

        <section className="animate-fade-in-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<RobotIcon className="w-12 h-12 text-cyan-400" />}
              title="AI Handles"
              items={["Interview scheduling", "Email follow-ups", "Data entry & tracking", "Status updates", "Calendar coordination", "Resume parsing"]}
            />
            <FeatureCard 
              icon={<BoltIcon className="w-12 h-12 text-yellow-400" />}
              title="AI Amplifies"
              items={["Pattern recognition", "Market intelligence", "Conversation prep", "Objection handling", "Comp benchmarking", "Talent mapping"]}
            />
            <FeatureCard 
              icon={<DiamondIcon className="w-12 h-12 text-blue-400" />}
              title="You Focus On"
              items={["Reading potential", "Building trust", "Strategic advising", "Persuading candidates", "Matching humans", "Changing lives"]}
            />
          </div>
        </section>

        <section className="animate-fade-in-delay-3">
          <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">CORE FEATURES</h2>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <CoreFeatureCard
              icon={<XRayIcon className="w-10 h-10 text-rose-400" />}
              title="Talent X-Ray Vision"
              description="AI analyzes resumes, GitHub, LinkedIn, Twitter. You see hidden signals: leadership potential, growth trajectory, culture fit indicators that basic screening misses."
              buttonColor="white"
              onClick={() => onNavigate('talent-xray')}
            />
            <CoreFeatureCard
              icon={<HandshakeIcon className="w-10 h-10 text-amber-400" />}
              title="Relationship Autopilot"
              description="Never ghost a candidate again. AI handles check-ins, updates, and scheduling. You get alerts only when human touch matters. Candidates feel valued, not processed."
              buttonColor="white"
            />
            <CoreFeatureCard
              icon={<MicIcon className="w-10 h-10 text-purple-400" />}
              title="Live Persuasion Coach"
              description="Real-time call coaching. AI whispers objection responses, reads tone signals, suggests pivots. Like having a sales coach on every candidate call."
              buttonColor="coral"
            />
            <CoreFeatureCard
              icon={<ChartIcon className="w-10 h-10 text-sky-400" />}
              title="Market Intelligence Oracle"
              description="Instant comp data, team movements, funding news, hiring trends. Walk into every hiring manager meeting as the smartest person about the market."
              buttonColor="purple"
            />
            <CoreFeatureCard
              icon={<SparklesIcon className="w-10 h-10 text-yellow-300" />}
              title="White-Glove Candidate Journey"
              description="AI orchestrates perfect timing, personalized content, proactive communication. Candidates get startup-founder treatment at enterprise scale."
              buttonColor="green"
            />
          </div>
        </section>

        <section className="animate-fade-in-delay-4">
          <InfoCard 
            icon={<LightbulbIcon className="w-10 h-10 text-yellow-400" />}
            title="The Outcome" 
            description="Recruiters using this place 10x more candidates. Not because they work harder. Because AI removed friction from 80% of their day, and amplified their judgment on the 20% that changes lives."
          />
        </section>
      </main>
    </div>
  );
};

const TalentXRayPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <button onClick={() => onNavigate('home')} className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors z-10" aria-label="Go back to homepage">
        <BackArrowIcon className="w-6 h-6" />
      </button>

      <header className="mb-16 md:mb-24 text-center animate-fade-in flex flex-col items-center">
        <TargetIcon className="w-20 h-20 mb-4" />
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
          Talent X-Ray Vision
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          See what AI and others miss
        </p>
      </header>
      
      <main className="flex flex-col gap-16 md:gap-24">
        <section>
           <InfoCard 
              title="The Problem" 
              description="Resumes hide more than they reveal. A quiet engineer might be a future leader. Someone with gaps could be your best hire. Traditional screening misses the signals that matter."
            />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#222222] border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-gray-700">
            <RedXIcon className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">What Basic Screening Sees</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center"><span className="text-red-500 mr-2 text-xl">&bull;</span>Years of experience</li>
              <li className="flex items-center"><span className="text-red-500 mr-2 text-xl">&bull;</span>Job titles</li>
              <li className="flex items-center"><span className="text-red-500 mr-2 text-xl">&bull;</span>Keywords match</li>
              <li className="flex items-center"><span className="text-red-500 mr-2 text-xl">&bull;</span>Education credentials</li>
              <li className="flex items-center"><span className="text-red-500 mr-2 text-xl">&bull;</span>Company brands</li>
            </ul>
          </div>
          <div className="bg-[#2a2a2a] border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/10">
            <SparklesIcon className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">What X-Ray Vision Reveals</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center"><span className="text-yellow-400 mr-2 text-xl">&bull;</span>Hidden leadership moments</li>
              <li className="flex items-center"><span className="text-yellow-400 mr-2 text-xl">&bull;</span>Growth trajectory patterns</li>
              <li className="flex items-center"><span className="text-yellow-400 mr-2 text-xl">&bull;</span>Learning velocity signals</li>
              <li className="flex items-center"><span className="text-yellow-400 mr-2 text-xl">&bull;</span>Culture fit indicators</li>
              <li className="flex items-center"><span className="text-yellow-400 mr-2 text-xl">&bull;</span>Future potential markers</li>
            </ul>
          </div>
        </section>
        
        <section>
          <div className="text-center mb-12">
            <hr className="border-t border-gray-700 w-24 mx-auto mb-4" />
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">HOW IT WORKS</h2>
            <hr className="border-t border-gray-700 w-24 mx-auto mt-4" />
          </div>
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-transparent hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Multi-Source Analysis</h3>
                <p className="text-gray-400">AI crawls resume, LinkedIn, GitHub, Twitter, articles, side projects. Builds complete picture beyond the CV.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-transparent hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Pattern Recognition</h3>
                <p className="text-gray-400">AI identifies signals your best hires had early in their careers. Finds similar patterns in new candidates.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-transparent hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Insight Surfacing</h3>
                <p className="text-gray-400">You get: 'This person mentored 3 juniors who became senior engineers' or 'Career gap matches pattern of high performers who took calculated risks'</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-transparent hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Red Flags & Green Flags</h3>
                <p className="text-gray-400">AI highlights contradictions, inconsistencies, but also hidden strengths that warrant deeper conversation.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <hr className="border-t border-gray-700 w-24 mx-auto mb-4" />
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">EXAMPLE USE CASES</h2>
            <hr className="border-t border-gray-700 w-24 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">The Quiet Leader</h3>
              <p className="text-gray-400">Resume shows IC role. X-Ray reveals: ran internal book club, mentored 5 interns, organized team retros. Hidden leadership.</p>
            </div>
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">The Fast Learner</h3>
              <p className="text-gray-400">Only 2 years experience. X-Ray reveals: went from bootcamp to shipping features in 3 months, already contributing to architecture decisions.</p>
            </div>
             <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">The Job Hopper</h3>
              <p className="text-gray-400">5 jobs in 4 years looks bad. X-Ray reveals: 3 were startups that failed, stayed loyal until shutdown. Not flighty.</p>
            </div>
             <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
              <h3 className="font-bold text-lg mb-2">The Culture Builder</h3>
              <p className="text-gray-400">Resume shows skills. X-Ray reveals: started company D&I initiative, runs community meetup, values alignment strong.</p>
            </div>
          </div>
        </section>

        <section>
           <InfoCard 
              icon={<DiamondIcon className="w-10 h-10 text-cyan-400" />}
              title="Your Superpower" 
              description="While other recruiters screen based on keywords, you screen based on potential. You find diamonds in the rough. You place people others rejected. That's the 10x difference."
            />
        </section>
      </main>
    </div>
  );
}

const App: React.FC = () => {
  const [page, setPage] = useState('home');

  const navigateTo = (pageName: string) => {
    setPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(page) {
      case 'talent-xray':
        return <TalentXRayPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  }

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white antialiased overflow-x-hidden">
        {renderPage()}
    </div>
  );
};

export default App;
