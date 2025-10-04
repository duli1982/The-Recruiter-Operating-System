import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  BackArrowIcon, RobotIcon, BoltIcon, DiamondIcon, XRayIcon, HandshakeIcon, 
  MicIcon, ChartIcon, SparklesIcon, LightbulbIcon, TargetIcon, RedXIcon, ArrowRightIcon,
  DocumentIcon, WarningTriangleIcon, ChatBubbleIcon, SadEmojiIcon, AlertIcon, UpArrowIcon, CloseIcon
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
              onClick={() => onNavigate('relationship-autopilot')}
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
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('talent-xray-demo-upload')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md bg-rose-500 text-white hover:bg-rose-400 shadow-rose-500/30"
            >
              <span>See It In Action</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
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
};

interface AppNavProps {
  onNavigate: (page: string, context?: any) => void;
}

const TalentXRayDemoUploadPage: React.FC<AppNavProps> = ({ onNavigate }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      // Simulate processing and navigate
      onNavigate('talent-xray-demo-results', { name: file.name.split('.')[0] });
    }
  };
  
  const handleAnalyzeSample = (name: string) => {
    onNavigate('talent-xray-demo-results', { name });
  };

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <button onClick={() => onNavigate('talent-xray')} className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors z-10" aria-label="Go back to feature page">
        <BackArrowIcon className="w-6 h-6" />
      </button>

      <header className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
          Talent X-Ray Demo
        </h1>
        <p className="text-lg text-gray-400">
          Upload a resume to see the magic
        </p>
      </header>

      <main className="flex flex-col items-center gap-12 md:gap-16">
        <section className="w-full max-w-3xl p-8 border-2 border-dashed border-gray-600 rounded-2xl flex flex-col items-center text-center bg-[#222222]/50">
          <DocumentIcon className="w-16 h-16 text-purple-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Upload Resume</h2>
          <p className="text-gray-500 mb-6">PDF, DOCX, or TXT format</p>
          <div className="flex items-center gap-4 mb-6">
            <button onClick={() => fileInputRef.current?.click()} className="px-5 py-2 font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">Choose File</button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.docx,.txt" />
            <span className="text-gray-400">{fileName || "No file chosen"}</span>
          </div>
          <div className="flex items-center w-full max-w-xs my-4">
            <hr className="w-full border-gray-600" />
            <span className="px-4 text-xs font-bold text-gray-500 uppercase">OR TRY SAMPLE</span>
            <hr className="w-full border-gray-600" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button onClick={() => handleAnalyzeSample('Junior Developer')} className="px-4 py-2 text-sm font-semibold border border-gray-600 rounded-full hover:bg-gray-700 hover:border-gray-500 transition-colors">Junior Developer</button>
            <button onClick={() => handleAnalyzeSample('Career Gap Candidate')} className="px-4 py-2 text-sm font-semibold border border-gray-600 rounded-full hover:bg-gray-700 hover:border-gray-500 transition-colors">Career Gap</button>
            <button onClick={() => handleAnalyzeSample('Job Hopper Candidate')} className="px-4 py-2 text-sm font-semibold border border-gray-600 rounded-full hover:bg-gray-700 hover:border-gray-500 transition-colors">Job Hopper</button>
          </div>
        </section>

        <section className="w-full max-w-4xl">
          <InfoCard icon={<LightbulbIcon className="w-10 h-10 text-yellow-400" />} title="What You'll See">
            <ul className="text-gray-400 space-y-3 mt-4 list-disc list-inside">
              <li>Hidden leadership signals and mentorship moments</li>
              <li>Learning velocity and growth trajectory analysis</li>
              <li>Pattern matching with your best performers</li>
              <li>Red flags and green flags with context</li>
              <li>Suggested conversation topics for interview</li>
            </ul>
          </InfoCard>
        </section>
      </main>
    </div>
  );
};

const TalentXRayDemoResultsPage: React.FC<AppNavProps & { context: any }> = ({ onNavigate, context }) => {
  const candidateName = context?.name || 'Sarah Chen';
  const candidateRole = 'Junior Developer';

  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
       <button onClick={() => onNavigate('talent-xray-demo-upload')} className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors z-10" aria-label="Go back to upload page">
        <BackArrowIcon className="w-6 h-6" />
      </button>
      
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-1">X-Ray Analysis</h1>
          <p className="text-lg text-gray-400">{candidateName} &bull; {candidateRole}</p>
        </div>
        <div className="bg-green-500 text-white text-sm font-bold px-4 py-1 rounded-full">
          Analysis Complete
        </div>
      </header>
      
      <main className="flex flex-col gap-8">
        {/* Top Metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400 uppercase font-semibold mb-2">Overall Potential</p>
            <p className="text-4xl font-bold text-green-400">High</p>
            <p className="text-gray-500">Top 15% match</p>
          </div>
          <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400 uppercase font-semibold mb-2">Learning Velocity</p>
            <p className="text-4xl font-bold">Fast</p>
            <p className="text-gray-500">Rapid skill growth</p>
          </div>
          <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400 uppercase font-semibold mb-2">Risk Level</p>
            <p className="text-4xl font-bold text-purple-400">Low</p>
            <p className="text-gray-500">Strong signals</p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Hidden Strengths */}
            <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <SparklesIcon className="w-7 h-7 text-yellow-400" />
                <h2 className="text-xl font-bold">Hidden Strengths (What Others Miss)</h2>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <span className="flex-shrink-0 text-xs font-bold bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Leadership</span>
                  <p className="text-gray-300">Started and runs weekly 'Learning Lunch' at current company. 12 engineers attend regularly. Shows initiative and influence beyond title.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <span className="flex-shrink-0 text-xs font-bold bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Fast Learner</span>
                  <p className="text-gray-300">Went from bootcamp grad to shipping production features in 8 weeks. Now contributing to architecture discussions after only 14 months.</p>
                </div>
                 <div className="flex flex-col sm:flex-row items-start gap-3">
                  <span className="flex-shrink-0 text-xs font-bold bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Community</span>
                  <p className="text-gray-300">Maintains popular open-source tool (2.3K GitHub stars). Responds to issues within 24hrs. Shows commitment and technical communication skills.</p>
                </div>
                 <div className="flex flex-col sm:flex-row items-start gap-3">
                  <span className="flex-shrink-0 text-xs font-bold bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Mentorship</span>
                  <p className="text-gray-300">Volunteered as mentor for 3 bootcamp students. All three landed jobs. Pattern matches your top performers who mentor early.</p>
                </div>
              </div>
            </div>
            {/* Recruiter Insight */}
             <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <DiamondIcon className="w-8 h-8 text-cyan-300 mt-1 flex-shrink-0" />
                    <div>
                        <h2 className="text-xl font-bold mb-2">Recruiter Insight</h2>
                        <p className="text-gray-200 text-lg leading-relaxed">This is a diamond in the rough. Most recruiters will pass because of limited YOE. You see the trajectory. This person will be a senior engineer in 2 years and will remember who believed in them first.</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Pattern Match */}
             <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TargetIcon className="w-6 h-6" />
                <h2 className="text-xl font-bold">Pattern Match</h2>
              </div>
              <p className="text-lg font-semibold mb-2">87% match with Emma (Senior Eng)</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                <div className="bg-white h-2.5 rounded-full" style={{width: '87%'}}></div>
              </div>
              <p className="text-sm text-gray-400"><span className="font-semibold text-gray-300">Similar traits:</span> Early mentorship, fast skill acquisition, community involvement, proactive learning</p>
            </div>
             {/* Things to Explore */}
            <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <WarningTriangleIcon className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-bold">Things to Explore</h2>
              </div>
               <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <span className="flex-shrink-0 text-xs font-bold bg-red-500/20 text-red-300 px-3 py-1 rounded-full">Context Needed</span>
                  <p className="text-gray-300">Only 1.5 years professional experience. Ask about depth of contributions vs. surface-level tasks.</p>
                </div>
                 <div className="flex flex-col sm:flex-row items-start gap-3">
                  <span className="flex-shrink-0 text-xs font-bold bg-red-500/20 text-red-300 px-3 py-1 rounded-full">Verify</span>
                  <p className="text-gray-300">Claims 'contributed to architecture' - validate scope and impact during technical interview.</p>
                </div>
              </div>
            </div>
             {/* Interview Topics */}
            <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <ChatBubbleIcon className="w-6 h-6" />
                <h2 className="text-xl font-bold">Suggested Interview Topics</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700">Learning Lunch origin</span>
                <span className="text-sm font-medium bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700">Mentorship approach</span>
                <span className="text-sm font-medium bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700">Open source motivation</span>
                <span className="text-sm font-medium bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700">Architecture contributions</span>
                 <span className="text-sm font-medium bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700">Career growth goals</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <section className="flex justify-center gap-4 mt-8">
            <button onClick={() => onNavigate('talent-xray-demo-upload')} className="px-6 py-3 font-semibold border-2 border-gray-600 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors">Try Another Sample</button>
            <button className="px-6 py-3 font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">Schedule Screening Call</button>
        </section>
      </main>
    </div>
  );
};

const RelationshipAutopilotPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-12">
      <button onClick={() => onNavigate('home')} className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors z-10" aria-label="Go back to homepage">
        <BackArrowIcon className="w-6 h-6" />
      </button>

      <header className="mb-16 md:mb-24 text-center animate-fade-in flex flex-col items-center">
        <div className="p-4 bg-yellow-400/10 rounded-full mb-4">
          <HandshakeIcon className="w-16 h-16 text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
          Relationship Autopilot
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Never ghost a candidate again
        </p>
      </header>
      
      <main className="flex flex-col gap-16 md:gap-24">
        <section>
           <InfoCard 
              title="The Problem" 
              description="Candidate experience is broken. People apply and hear nothing. They interview and get ghosted. They feel like commodities, not humans. You care, but you're drowning in follow-ups."
            />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#222222] border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-gray-700">
            <SadEmojiIcon className="w-8 h-8 text-gray-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Current Reality</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start"><span className="text-gray-600 mr-2 mt-1">&#8226;</span>200+ candidates to update weekly</li>
              <li className="flex items-start"><span className="text-gray-600 mr-2 mt-1">&#8226;</span>Generic "thanks but no thanks" emails</li>
              <li className="flex items-start"><span className="text-gray-600 mr-2 mt-1">&#8226;</span>Candidates ghost you back</li>
              <li className="flex items-start"><span className="text-gray-600 mr-2 mt-1">&#8226;</span>No time for meaningful check-ins</li>
              <li className="flex items-start"><span className="text-gray-600 mr-2 mt-1">&#8226;</span>Reputation damage from poor experience</li>
            </ul>
          </div>
          <div className="bg-[#2a2a2a] border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/10">
            <SparklesIcon className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">With Autopilot</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start"><span className="text-yellow-400 mr-2 mt-1">&#8226;</span>AI handles all routine updates</li>
              <li className="flex items-start"><span className="text-yellow-400 mr-2 mt-1">&#8226;</span>Personalized, context-aware messages</li>
              <li className="flex items-start"><span className="text-yellow-400 mr-2 mt-1">&#8226;</span>Candidates feel valued at scale</li>
              <li className="flex items-start"><span className="text-yellow-400 mr-2 mt-1">&#8226;</span>You focus on high-touch moments</li>
              <li className="flex items-start"><span className="text-yellow-400 mr-2 mt-1">&#8226;</span>Referrals from rejected candidates</li>
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
                <h3 className="font-bold text-lg mb-1">Intelligent Orchestration</h3>
                <p className="text-gray-400">AI tracks every candidate across every stage. Automatically sends updates at optimal times with context-aware messaging.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-transparent hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center">2</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Personalization at Scale</h3>
                <p className="text-gray-400">Not generic templates. AI crafts messages referencing their background, role they applied for, and why they weren't a fit (or when they'll hear next).</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-transparent hover:border-gray-700 transition-colors">
               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Smart Escalation</h3>
                <p className="text-gray-400">AI identifies when human touch is needed: candidate asked a question, showed frustration, or is a high-value prospect. You get alerted.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 bg-[#2a2a2a] p-6 rounded-xl border border-transparent hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center">4</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Relationship Nurturing</h3>
                <p className="text-gray-400">For promising candidates who aren't ready now: AI maintains relationship with relevant content, check-ins, new opportunities. They stay warm for months.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('relationship-autopilot-dashboard')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md bg-yellow-400 text-black hover:bg-yellow-300 shadow-yellow-400/30"
            >
              <span>See It In Action</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <hr className="border-t border-gray-700 w-24 mx-auto mb-4" />
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">EXAMPLE SCENARIOS</h2>
            <hr className="border-t border-gray-700 w-24 mx-auto mt-4" />
          </div>
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800">
              <h3 className="font-bold text-lg mb-3">Rejection with Dignity</h3>
              <blockquote className="border-l-4 border-gray-600 pl-4 mb-3">
                <p className="text-gray-300 italic">"Hi Marcus, Thanks for taking the time to interview for the Senior Engineer role. While your backend skills are strong, we're looking for someone with more React experience for this specific position. However, I noticed your work on distributed systems—we have another role opening in Q2 that might be perfect. Can I keep you in mind?"</p>
              </blockquote>
              <p className="text-sm text-gray-500">AI drafted this based on interview notes and upcoming roles. You review and send in one click.</p>
            </div>
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800">
              <h3 className="font-bold text-lg mb-3">Proactive Check-In</h3>
               <blockquote className="border-l-4 border-gray-600 pl-4 mb-3">
                <p className="text-gray-300 italic">"Hey Sarah, Quick update: Your interviews went well! The team is meeting Thursday to discuss all candidates. I'll have feedback for you by Friday afternoon. Any questions in the meantime?"</p>
              </blockquote>
              <p className="text-sm text-gray-500">Sent automatically when interview stage completes. Keeps candidates warm and informed.</p>
            </div>
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800">
              <h3 className="font-bold text-lg mb-3">Smart Escalation Alert</h3>
              <div className="bg-rose-900/50 border border-rose-500/50 rounded-lg p-4 flex items-start gap-4 mb-3">
                <AlertIcon className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
                <p className="text-rose-200"><strong>Human Touch Needed:</strong> Alex Chen replied to rejection email with thoughtful question about skill gaps. High engagement signal. Worth a call?</p>
              </div>
              <p className="text-sm text-gray-500">AI detects this isn't a routine interaction. Alerts you to opportunity for relationship building.</p>
            </div>
          </div>
        </section>

        <section>
           <InfoCard 
              icon={<DiamondIcon className="w-10 h-10 text-cyan-400" />}
              title="Your Superpower" 
              description="While competitors ghost candidates, you provide white-glove experience at scale. Rejected candidates send you referrals. Placed candidates become advocates. That's how you build an unfair talent network."
            />
        </section>
      </main>
    </div>
  );
};

const DRAFT_RESPONSE_TEXT = `Hey Alex,

I really appreciate you asking—it shows the exact growth mindset we look for. Based on your interview and our current needs, here's what would make you incredibly competitive:

1. Kubernetes & container orchestration - You have strong backend fundamentals, but most of our roles now require K8s experience. Even a personal project deploying a simple app would demonstrate this.

2. System design at scale - Your experience is solid, but we're looking for someone who's architected systems handling 100M+ requests/day. Consider diving deeper into distributed systems patterns.

3. Mentorship/leadership signals - For senior roles, we want to see how you've helped level up your teammates.

Let me know if this helps, and I'll definitely keep you in mind for future roles where your distributed systems skills are a primary match.

Best,
The Team`;

const DraftResponseModal = ({ candidate, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-[#2a2a2a] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col border border-gray-700 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-6 border-b border-gray-700 sticky top-0 bg-[#2a2a2a]/80 backdrop-blur-sm z-10">
          <h2 className="text-2xl font-bold">Draft Response to {candidate.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        
        <div className="p-8 flex-grow space-y-8">
          {/* Candidate Context */}
          <section className="bg-[#222] p-6 rounded-xl border border-gray-800">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xl">{candidate.initials}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-lg">{candidate.name}</h3>
                <p className="text-sm text-gray-400">{candidate.title} &bull; Applied 2 weeks ago</p>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-300 mb-1">His Question:</p>
                  <blockquote className="border-l-4 border-rose-500 pl-3">
                    <p className="text-gray-300 italic">{candidate.insight.match(/'([^']*)'/)?.[1]}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* AI-Generated Response */}
          <section>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <SparklesIcon className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-bold">AI-Generated Response</h3>
                </div>
                <span className="text-xs font-semibold bg-gray-700 text-gray-300 px-3 py-1 rounded-full">Personalized</span>
            </div>
            <textarea
              className="w-full h-64 p-4 bg-[#222] border border-gray-700 rounded-lg resize-y text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              defaultValue={DRAFT_RESPONSE_TEXT}
            ></textarea>
          </section>

           {/* Action Buttons */}
          <section className="flex flex-wrap items-center justify-start gap-4">
            <button className="px-5 py-2.5 font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">Send This Response</button>
            <button className="px-5 py-2.5 font-semibold border-2 border-gray-600 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-colors">Edit Draft</button>
            <button className="px-5 py-2.5 font-semibold text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">See Alternative Tones</button>
          </section>

          {/* Why This Works */}
          <section className="bg-[#222] p-6 rounded-xl border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <TargetIcon className="w-6 h-6" />
              <h3 className="text-xl font-bold">Why This Works</h3>
            </div>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li>Acknowledges his growth mindset (builds relationship)</li>
              <li>Gives specific, actionable feedback (actually helpful)</li>
              <li>References his actual work (shows you paid attention)</li>
              <li>Offers value-add invitation (keeps relationship warm)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

const AIPrepBriefModal = ({ candidate, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-[#2a2a2a] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col border border-gray-700 shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-start justify-between p-6 border-b border-gray-700 bg-[#222]/80 backdrop-blur-sm">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center font-bold text-2xl">{candidate.initials}</div>
            <div className="flex-grow">
              <h2 className="text-3xl font-bold">{candidate.name}</h2>
              <p className="text-md text-gray-400">{candidate.title}</p>
              <p className="text-sm text-gray-500 mt-1">&bull; Interview Tomorrow at 2:00 PM</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs font-bold bg-green-500 text-white px-3 py-1 rounded-full">High Value Candidate</span>
                <span className="text-xs font-bold bg-purple-500 text-white px-3 py-1 rounded-full">Culture Fit: 92%</span>
                <span className="text-xs font-bold bg-gray-200 text-black px-3 py-1 rounded-full">Skills Match: 88%</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>

        <div className="p-8 flex-grow space-y-8">
          {/* Two-Column Analysis */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#222] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <SparklesIcon className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-bold">Why She's Special</h3>
              </div>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Led design system overhaul at Series B startup</li>
                <li>Strong user research background (rare combo)</li>
                <li>Active design community contributor</li>
                <li>Mentors junior designers regularly</li>
              </ul>
            </div>
            <div className="bg-[#222] p-6 rounded-xl border border-gray-800">
               <div className="flex items-center gap-2 mb-3">
                <WarningTriangleIcon className="w-6 h-6 text-yellow-500" />
                <h3 className="text-lg font-bold">Potential Concerns</h3>
              </div>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Interviewing at 2 other companies (Figma, Airbnb)</li>
                <li>May have comp expectations above range</li>
                <li>Values remote flexibility highly</li>
                <li>Looking for impact-driven work</li>
              </ul>
            </div>
          </section>

          {/* Suggested Topics */}
          <section>
             <div className="flex items-center gap-3 mb-4">
                <ChatBubbleIcon className="w-6 h-6" />
                <h3 className="text-xl font-bold">Suggested Pre-Interview Call Topics</h3>
              </div>
              <div className="space-y-6">
                <div>
                    <p className="font-bold text-lg mb-1"><span className="mr-2">1.</span>Build Excitement About Impact</p>
                    <p className="text-gray-400 ml-6">She left her last role because she felt like 'just making buttons prettier.' Emphasize how our design team drives product strategy and user research directly influences roadmap.</p>
                </div>
                <div>
                    <p className="font-bold text-lg mb-1"><span className="mr-2">2.</span>Address Remote Flexibility</p>
                    <p className="text-gray-400 ml-6">Proactively mention our hybrid policy (3 days remote). Don't wait for her to ask. Show we understand modern work expectations.</p>
                </div>
                <div>
                    <p className="font-bold text-lg mb-1"><span className="mr-2">3.</span>Name-Drop Team Culture</p>
                    <p className="text-gray-400 ml-6">Mention Sarah (senior designer) also came from a startup background. Offer to connect them for coffee chat. Shows investment in her success.</p>
                </div>
                 <div>
                    <p className="font-bold text-lg mb-1"><span className="mr-2">4.</span>Set Expectations for Interview</p>
                    <p className="text-gray-400 ml-6">Walk through format, who she'll meet, what to prepare. Reduces anxiety and shows you care about her experience.</p>
                </div>
              </div>
          </section>
        </div>
        <footer className="flex items-center justify-end gap-4 p-6 border-t border-gray-700 bg-[#222]/80">
            <button className="px-5 py-2.5 font-semibold text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">Email This Brief</button>
            <button onClick={onClose} className="px-5 py-2.5 font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">Got It</button>
        </footer>
      </div>
    </div>
  );
};


const RelationshipAutopilotDashboardPage: React.FC<AppNavProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('needs-attention');
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [isPrepBriefModalOpen, setIsPrepBriefModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidateCards = [
    {
      id: 1,
      initials: 'AC',
      name: 'Alex Chen',
      title: 'Senior Backend Engineer',
      insight: "Replied to rejection: 'Thanks for the feedback. What specific skills should I focus on to be competitive for similar roles?'",
      buttons: ['Draft Response', 'View Full Thread'],
      status: 'Response Detected',
      statusColor: 'bg-red-500',
    },
    {
      id: 2,
      initials: 'MR',
      name: 'Maya Rodriguez',
      title: 'Product Designer',
      insight: 'Interview scheduled for tomorrow. AI suggests personal call to prep her on team culture and answer questions.',
      buttons: ['Schedule Call', 'AI Prep Brief'],
      status: 'High Value',
      statusColor: 'bg-purple-500',
    },
    {
      id: 3,
      initials: 'JK',
      name: 'James Kim',
      title: 'DevOps Engineer',
      insight: "Rejected 3 months ago for lack of Kubernetes exp. LinkedIn shows he just completed K8s certification. New role opening matches perfectly.",
      buttons: ['Reach Out', 'View New Role'],
      status: 'Ready to Re-engage',
      statusColor: 'bg-green-500',
    },
    {
      id: 4,
      initials: 'SP',
      name: 'Sarah Patel',
      title: 'Engineering Manager',
      insight: 'Offer sent yesterday. AI detected her checking LinkedIn jobs page this morning. May be comparing offers. Suggest proactive check-in.',
      buttons: ['Quick Check-In', 'Competitor Analysis'],
      status: 'Offer Stage',
      statusColor: 'bg-gray-200 text-black',
    },
  ];

  const openDraftModal = (candidate) => {
    setSelectedCandidate(candidate);
    setIsDraftModalOpen(true);
  };

  const closeDraftModal = () => {
    setIsDraftModalOpen(false);
    setSelectedCandidate(null);
  };
  
  const openPrepBriefModal = (candidate) => {
    setSelectedCandidate(candidate);
    setIsPrepBriefModalOpen(true);
  };

  const closePrepBriefModal = () => {
    setIsPrepBriefModalOpen(false);
    setSelectedCandidate(null);
  };
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (isDraftModalOpen) closeDraftModal();
        if (isPrepBriefModalOpen) closePrepBriefModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isDraftModalOpen, isPrepBriefModalOpen]);

  const handlePrimaryAction = (candidate) => {
    const action = candidate.buttons[0];
    if (action === 'Draft Response') {
      openDraftModal(candidate);
    } else if (action === 'Schedule Call' || action === 'Quick Check-In' || action === 'Reach Out') {
      openPrepBriefModal(candidate);
    }
  };


  const getTabClass = (tabName: string) => {
    return activeTab === tabName
      ? 'text-white font-bold border-b-2 border-white'
      : 'text-gray-400 hover:text-white transition-colors';
  };

  return (
    <>
      <div className="container mx-auto px-6 md:px-12 py-12">
        <button onClick={() => onNavigate('relationship-autopilot')} className="absolute top-8 left-8 text-gray-400 hover:text-white transition-colors z-10" aria-label="Go back to feature page">
          <BackArrowIcon className="w-6 h-6" />
        </button>

        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-1">Relationship Autopilot Dashboard</h1>
            <p className="text-md text-gray-400">AI managing 247 candidate relationships</p>
          </div>
          <button className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-green-400 transition-colors">
            Live Demo
          </button>
        </header>

        <main className="flex flex-col gap-10">
          {/* Metrics Dashboard */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <p className="text-sm text-gray-400 uppercase font-semibold mb-2">Active Candidates</p>
              <p className="text-5xl font-extrabold">247</p>
              <p className="text-gray-500">AI managing</p>
            </div>
            <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <p className="text-sm text-gray-400 uppercase font-semibold mb-2">Auto-Updates Sent</p>
              <p className="text-5xl font-extrabold">89</p>
              <p className="text-gray-500">This week</p>
            </div>
            <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <p className="text-sm text-gray-400 uppercase font-semibold mb-2">Needs Your Attention</p>
              <p className="text-5xl font-extrabold">4</p>
              <p className="text-gray-500">Human touch</p>
            </div>
            <div className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6">
              <p className="text-sm text-gray-400 uppercase font-semibold mb-2">Response Rate</p>
              <p className="text-5xl font-extrabold text-green-400">94%</p>
              <p className="text-gray-500 flex items-center gap-1"><UpArrowIcon className="w-4 h-4 text-green-400" /> 28% vs manual</p>
            </div>
          </section>

          {/* Tabs */}
          <section>
            <div className="border-b border-gray-700">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button onClick={() => setActiveTab('needs-attention')} className={`px-1 py-4 text-sm font-medium ${getTabClass('needs-attention')}`}>Needs Attention (4)</button>
                <button onClick={() => setActiveTab('on-autopilot')} className={`px-1 py-4 text-sm font-medium ${getTabClass('on-autopilot')}`}>On Autopilot (243)</button>
                <button onClick={() => setActiveTab('scheduled')} className={`px-1 py-4 text-sm font-medium ${getTabClass('scheduled')}`}>Scheduled (18)</button>
              </nav>
            </div>
          </section>

          {/* Candidate Cards */}
          {activeTab === 'needs-attention' && (
            <section className="flex flex-col gap-6">
              {candidateCards.map((card) => (
                <div key={card.id} className="bg-[#2a2a2a] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-gray-600 hover:shadow-lg relative">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xl">
                      {card.initials}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold">{card.name}</h3>
                      <p className="text-sm text-gray-400 mb-3">{card.title}</p>
                      <p className="text-gray-300">{card.insight}</p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <button 
                          onClick={() => handlePrimaryAction(card)}
                          className="px-4 py-1.5 text-sm font-semibold bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                        >
                          {card.buttons[0]}
                        </button>
                        <button className="px-4 py-1.5 text-sm font-semibold border border-gray-600 rounded-md hover:bg-gray-700 transition-colors">{card.buttons[1]}</button>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${card.statusColor}`}>{card.status}</div>
                </div>
              ))}
            </section>
          )}

          {/* What AI Is Doing Section */}
          <section>
            <div className="bg-[#2a2a2a] border border-gray-700 rounded-2xl p-8">
               <div className="flex items-center gap-4 mb-6">
                  <TargetIcon className="w-8 h-8 flex-shrink-0" />
                  <h3 className="text-2xl font-bold">What AI Is Doing Right Now</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6 text-gray-400">
                  <p>• Sending 12 interview reminder emails</p>
                  <p>• Updating 23 candidates on pipeline status</p>
                  <p>• Nurturing 47 'not now' relationships</p>
                  <p>• Monitoring 8 candidates for re-engagement signals</p>
               </div>
               <p className="text-center text-gray-500 mt-8">You spend 5 minutes on these 4 alerts. AI handles the other 243 relationships perfectly.</p>
            </div>
          </section>
        </main>
      </div>
      {isDraftModalOpen && selectedCandidate && <DraftResponseModal candidate={selectedCandidate} onClose={closeDraftModal} />}
      {isPrepBriefModalOpen && selectedCandidate && <AIPrepBriefModal candidate={selectedCandidate} onClose={closePrepBriefModal} />}
    </>
  );
};


const App: React.FC = () => {
  const [page, setPage] = useState('home');
  const [pageContext, setPageContext] = useState<any>(null);

  const navigateTo = (pageName: string, context?: any) => {
    setPage(pageName);
    setPageContext(context);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(page) {
      case 'talent-xray':
        return <TalentXRayPage onNavigate={navigateTo} />;
      case 'talent-xray-demo-upload':
        return <TalentXRayDemoUploadPage onNavigate={navigateTo} />;
      case 'talent-xray-demo-results':
        return <TalentXRayDemoResultsPage onNavigate={navigateTo} context={pageContext} />;
      case 'relationship-autopilot':
        return <RelationshipAutopilotPage onNavigate={navigateTo} />;
      case 'relationship-autopilot-dashboard':
        return <RelationshipAutopilotDashboardPage onNavigate={navigateTo} />;
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