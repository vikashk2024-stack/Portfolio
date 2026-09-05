import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Terminal, 
  CornerDownLeft, 
  Layers, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

const KNOWLEDGE_BASE = [
  {
    triggers: ['hello', 'hi', 'hey', 'who are you', 'what is this', 'about bot', 'assist'],
    answer: "Hello! I am **Vikash-AI**, an autonomous agent trained on VIKASH K's engineering dossier. I can answer questions about his **Agentic AI systems**, **SDE full-stack projects**, **IIIT Kottayam research**, **academics at VIT Chennai**, and **how to hire or contact him**. What would you like to explore?",
  },
  {
    triggers: ['skill', 'stack', 'technologies', 'tech', 'languages', 'tool', 'framework', 'python', 'react', 'aws'],
    answer: "VIKASH K's primary engineering stack spans three core pillars:\n\n1. **Agentic AI & ML**: Autonomous multi-agent orchestration, LangChain/LangGraph, tool-dispatch loops, RAG vector retrieval, OpenCV, Error Level Analysis (ELA), neural model quantization.\n2. **Full-Stack SDE**: React.js, Node.js, Express, PostgreSQL relational schemas, Supabase (Realtime websockets & Row Level Security), Tailwind CSS.\n3. **AWS Cloud Infrastructure**: AWS Lambda serverless compute, Amazon S3 object storage, EC2, CloudFront edge CDN, and IAM least-privilege security policies.\n4. **Languages**: Python, JavaScript (ES6+), C++, SQL, Java.",
  },
  {
    triggers: ['agentic', 'agent', 'autonomous', 'llm', 'reasoning', 'langchain', 'multi-agent'],
    answer: "Vikash specializes in **Agentic AI & Autonomous Systems**. His architecture design philosophy bridges stochastic LLMs with deterministic software safety:\n• **Reasoning Loops**: Autonomous multi-agent coordination with dynamic tool binding.\n• **Deterministic Guardrails**: Strict schema validation and atomic rollback triggers preventing runaway API execution.\n• **Cloud Tool Execution**: Ephemeral tool execution via AWS Lambda and S3.\n• **Applied Research**: Developing digital twins for climate risk and edge AI vision for automated aquatic organism classification.",
  },
  {
    triggers: ['project', 'projects', 'build', 'portfolio', 'case study', 'work'],
    answer: "Here are Vikash's primary engineering builds:\n\n1. **Grievance Portal (Featured #1 SDE)**: Full-stack civic issue tracking platform built with React, Supabase & PostgreSQL. Features sub-second websocket updates and Row Level Security.\n2. **Agentic AI + AWS Systems**: Autonomous multi-agent pipeline orchestrating AWS microservices with rollback error safety.\n3. **Digital Twin for Climate Risk**: Spatial GIS and predictive ML forecasting micro-climate shocks on renewable energy arrays.\n4. **Edge AI Microscopy**: Sub-50ms edge vision model classifying and counting aquatic organisms on low-cost embedded hardware.",
  },
  {
    triggers: ['grievance', 'portal', 'supabase', 'civic'],
    answer: "The **Grievance Portal** is a production-grade government grievance management platform:\n• **Problem Solved**: Replaced fragmented offline complaints with an auditable, real-time ticket tracking engine.\n• **Tech Stack**: React.js, Supabase, PostgreSQL, Tailwind CSS.\n• **Key Innovations**: Multi-tier Role-Based Access Control (Citizens vs Officers), optimistic real-time websocket updates, and Row Level Security isolating sensitive complaints.\n• **Codebase**: Available on GitHub at `https://github.com/vikashk2024-stack/Grievance---Portal`.",
  },
  {
    triggers: ['iiit', 'kottayam', 'intern', 'internship', 'research', 'forensics', 'ela', 'image processing'],
    answer: "Vikash completed an **AI & Image Processing Research Internship at IIIT Kottayam** (May–Aug 2025):\n• **Core Focus**: Automated digital image forgery and tampering detection pipelines using Python, OpenCV, and NumPy.\n• **Algorithms Implemented**: Error Level Analysis (ELA) to identify JPEG compression disparity and forensic artifact anomalies.\n• **Splicing Detection**: Constructed spatial localization modules to isolate copy-moved image patches.\n• **Evaluation**: Collaborated with faculty researchers to measure precision and benchmark False Acceptance Rates (FAR).",
  },
  {
    triggers: ['education', 'college', 'vit', 'chennai', 'degree', 'academics', 'gpa', 'university', 'btech'],
    answer: "Vikash is pursuing a **B.Tech in Computer Science & Engineering at VIT Chennai** (Class of 2024–2028):\n• **Core Coursework**: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Machine Learning.\n• **Location**: Chennai, Tamil Nadu, India.\n• **Target Roles**: SDE & Agentic AI Engineer (2028 full-time & upcoming summer internships).",
  },
  {
    triggers: ['cert', 'credential', 'license', 'l&t', 'cisco'],
    answer: "Vikash holds accredited technical credentials:\n1. **Certificate in AI & Edge Computing for Industry Applications** from L&T EduTech (Awarded *First Class with Distinction*), covering edge model quantization, OpenCV vision pipelines, and embedded deployment.\n2. **Cisco Networking Academy Certification**, verifying foundational mastery in TCP/IP, network topology, routing protocols, and perimeter security.",
  },
  {
    triggers: ['leadership', 'club', 'community', 'codechef', 'vibrance'],
    answer: "Vikash's campus leadership appointments at VIT Chennai include:\n• **AI Club, VIT Chennai**: Research & Operations team, organizing machine learning bootcamps and building developer tooling.\n• **CodeChef VITC Chapter**: Technical Advisor curating competitive programming problem sets.\n• **Event Management Club**: Coordinator overseeing logistics for *Vibrance*, VIT Chennai’s annual flagship festival.\n• **CSED.VITC**: Outreach Member facilitating technical seminars.",
  },
  {
    triggers: ['contact', 'email', 'phone', 'reach', 'hire', 'call', 'location', 'connect', 'linkedin', 'github'],
    answer: "You can reach VIKASH K directly:\n• **Email**: vikashkamaleshkannan@gmail.com\n• **Phone**: +91 82484 98872\n• **LinkedIn**: linkedin.com/in/vikashkamalesh\n• **GitHub**: github.com/vikashk2024-stack\n• **Location**: Chennai, Tamil Nadu, India (Open to relocation & remote roles).",
  },
  {
    triggers: ['resume', 'cv', 'download'],
    answer: "You can download Vikash's official Resume PDF directly by clicking the **'Resume'** button in the top navigation bar or using the **'Download Resume'** button in the Hero section!",
  },
  {
    triggers: ['nexstudio', 'tailgrids', 'template', 'theme', 'design', 'look', 'style'],
    answer: "This portfolio is built on the **TailGrids NexStudio** digital agency template architecture from 21st.dev:\n• **Header**: Sticky glass header with dual-mode toggle and 'Let's Talk' action CTA.\n• **Hero**: TailGrids NexStudio pill badge, bold split typography, dual CTAs, interactive terminal system card, and the signature 4-column live metrics ribbon.\n• **Disciplines**: Bento service cards for Agentic AI, Full-Stack SDE, and AWS Cloud.\n• **Typography**: Polished Times New Roman editorial styling for timeless elegance.\n• **Contrast**: Dual dark/light mode with guaranteed high-contrast readability across all displays.",
  },
  {
    triggers: ['why hire', 'hire him', 'why vikash', 'strengths'],
    answer: "Why hire VIKASH K?\n1. **Rare Dual Competency**: Bridges deterministic full-stack engineering (React, Supabase, PostgreSQL, AWS) with cutting-edge autonomous Agentic AI loops.\n2. **Proven Research Rigor**: Completed an institutional AI research internship at IIIT Kottayam delivering forensic image analysis pipelines.\n3. **Production-Ready Mindset**: Builds scalable systems with strict Row Level Security, auto-scaling AWS infrastructure, and sub-50ms response times.\n4. **High-Velocity Learner**: Active campus leadership, verified distinctions, and relentless commitment to software excellence.",
  },
];

const PRESET_PROMPTS = [
  "What are his core skills?",
  "Tell me about his Agentic AI work",
  "Summarize Grievance Portal",
  "IIIT Kottayam Research",
  "NexStudio Architecture",
  "Why hire Vikash?",
  "How can I contact Vikash?",
];

export default function AiAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I'm **Vikash-AI**, an autonomous agent assistant trained on Vikash's engineering dossier. Ask me anything about his Agentic AI systems, full-stack builds, IIIT Kottayam research, or contact details!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Intelligent intent matching
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matchedEntry = KNOWLEDGE_BASE.find((entry) =>
        entry.triggers.some((trig) => lower.includes(trig))
      );

      let botReply = matchedEntry 
        ? matchedEntry.answer 
        : "Vikash K is a B.Tech CSE student at VIT Chennai (Class of 2028) specializing in Agentic AI Engineering, SDE Full-Stack platforms (React, Supabase, PostgreSQL), and AWS Cloud Infrastructure. Feel free to ask about his skills, projects, IIIT Kottayam research, or how to contact him!";

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: botReply },
      ]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#161616] text-[#f4f4f5] font-heading font-bold text-sm shadow-xl border border-[#2a2a2a] hover:border-[#38bdf8] cursor-pointer overflow-hidden transition-colors"
          aria-label="Toggle AI Assistant"
        >
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
            </span>
            <Bot size={16} className="text-[#38bdf8]" />
            <span className="tracking-wide">Ask Vikash-AI</span>
          </div>
        </motion.button>
      </div>

      {/* Interactive AI Dock Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] max-h-[580px] h-[82vh] rounded-2xl overflow-hidden studio-card dark:!bg-[#121212] !bg-white dark:border-[#262626] border-slate-200 shadow-2xl flex flex-col backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b dark:border-[#222222] border-slate-200 dark:bg-[#0c0c0c] bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg dark:bg-[#181818] bg-white border dark:border-[#2a2a2a] border-slate-200 flex items-center justify-center dark:text-[#38bdf8] text-[#0284c7] font-bold">
                  <Bot size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-heading font-bold dark:text-[#f4f4f5] text-slate-900">Vikash-AI Terminal</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <p className="text-xs font-heading dark:text-[#a1a1aa] text-slate-500">Autonomous Studio Agent</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg dark:text-slate-400 text-slate-500 dark:hover:text-white hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Conversation Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-sm font-body">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-[#0284c7] dark:bg-[#38bdf8] text-white dark:text-[#0a0a0a] rounded-br-none font-medium'
                        : 'dark:bg-[#181818] bg-slate-100 dark:text-[#f4f4f5] text-slate-800 border dark:border-[#262626] border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="dark:bg-[#181818] bg-slate-100 dark:text-[#38bdf8] text-[#0284c7] border dark:border-[#262626] border-slate-200 p-3 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#38bdf8] animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#38bdf8] animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#38bdf8] animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Prompt Quick Chips */}
            <div className="px-3 py-2 border-t dark:border-[#222222] border-slate-200 dark:bg-[#0c0c0c] bg-slate-50 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {PRESET_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-lg text-xs font-heading whitespace-nowrap dark:bg-[#181818] bg-slate-100 hover:bg-slate-200 dark:hover:bg-[#262626] dark:text-[#38bdf8] text-[#0284c7] dark:border-[#262626] border-slate-300 transition-colors shrink-0 cursor-pointer font-medium"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t dark:border-[#222222] border-slate-200 dark:bg-[#0c0c0c] bg-slate-50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question about Vikash..."
                  className="flex-1 dark:bg-[#141414] bg-white border dark:border-[#262626] border-slate-300 rounded-xl px-3.5 py-2 text-sm font-heading dark:text-[#f4f4f5] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#38bdf8]"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-xl bg-[#0284c7] dark:bg-[#38bdf8] text-white dark:text-[#0a0a0a] disabled:opacity-40 transition-opacity cursor-pointer font-bold"
                  aria-label="Send query"
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
