import { AscendiaEvent } from '../types';

export const EVENTS_DATA: AscendiaEvent[] = [
  {
    id: 'hackathon',
    number: '01',
    title: 'HACKATHON',
    tagline: 'Build. Break. Solve.',
    category: 'Technology & Engineering',
    iconName: 'Code',
    accentColor: 'cyan',
    summary: 'A 24-hour virtual sprint where developer minds turn visionary concepts into working prototypes.',
    about: 'The Ascendia Hackathon is the flagship technical competition of Ascendia 2026. Teams will be presented with high-impact problem statements spanning FinTech, EdTech, Sustainable Development, and Next-Gen AI. Over an intensive online sprint, participants will design, architect, and deploy functioning solutions that push computational boundaries.',
    teamSize: '1 to 4 Members per team',
    eligibility: [
      'Open to all undergraduate and postgraduate students enrolled in recognized universities & institutes.',
      'Inter-departmental and inter-year teams are permitted.',
      'Students from online and regular degree formats are equally welcome.',
      'Student coordinators are eligible to participate.'
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Abstract & Architecture Submission',
        duration: 'Online Submission (Pre-Fest)',
        mode: 'Online asynchronous',
        description: 'Submission of project pitch, proposed tech stack, system architecture diagram, and wireframes.',
        deliverables: ['1-page problem brief', 'GitHub repository setup', 'Architecture diagram']
      },
      {
        roundNumber: 2,
        title: '24-Hour Build & Mentorship Sprint',
        duration: '16 October 2026, 10:00 AM – 17 October 2026, 10:00 AM',
        mode: 'Virtual live coding',
        description: 'Intensive building marathon with scheduled online checkpoints and check-ins with industry mentors.',
        deliverables: ['Live code commits', 'Working deploy URL or screen recording']
      },
      {
        roundNumber: 3,
        title: 'Final Live Pitch & Jury Evaluation',
        duration: '17 October 2026, 02:00 PM – 05:00 PM',
        mode: 'Live video presentation (Google Meet)',
        description: '5-minute live demo of the deployed prototype followed by a 3-minute technical Q&A with the jury.',
        deliverables: ['Live interactive demo', 'Slides deck (maximum 6 slides)']
      }
    ],
    rules: [
      'All code must be authored during the hackathon window. Pre-built templates or completed projects are strictly prohibited.',
      'Open-source libraries, APIs, and public frameworks are permitted provided they are declared in the README.',
      'All team members must adhere to the Ascendia Code of Conduct with respect to academic integrity and intellectual honesty.',
      'Plagiarism or undisclosed AI code-generation of an entire project will result in immediate disqualification.'
    ],
    judgingCriteria: [
      { criterion: 'Innovation & Originality', weight: '30%', description: 'Uniqueness of the approach and novel problem-solving.' },
      { criterion: 'Technical Execution', weight: '30%', description: 'Code quality, system stability, architecture, and deployment.' },
      { criterion: 'Impact & Feasibility', weight: '25%', description: 'Practical viability and societal or commercial potential.' },
      { criterion: 'Presentation & Q&A', weight: '15%', description: 'Clarity of explanation and responsiveness during jury defense.' }
    ],
    prizes: [
      { position: 'First Prize', amount: '₹2,000', description: 'Winner Trophy Certificate + Official Commendation' },
      { position: 'Second Prize', amount: '₹1,000', description: 'Runner-up Certificate + Commendation' },
      { position: 'Third Prize', amount: '₹500', description: 'Second Runner-up Certificate' }
    ],
    timeline: [
      { date: '10 Oct 2026', time: '11:59 PM', event: 'Registration & Abstract Submission Closes' },
      { date: '14 Oct 2026', time: '06:00 PM', event: 'Shortlisted Teams Notified & Problem Statements Released' },
      { date: '16 Oct 2026', time: '10:00 AM', event: 'Day One: 24-Hour Build Sprint Begins' },
      { date: '17 Oct 2026', time: '10:00 AM', event: 'Code Freeze & Final Repository Submission' },
      { date: '17 Oct 2026', time: '02:00 PM', event: 'Day Two: Live Jury Evaluations & Pitching' },
      { date: '31 Oct 2026', time: '11:00 AM', event: 'Winners Felicitated at Bengaluru Central Campus' }
    ],
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-ascendia2026-hackathon/viewform',
    coordinatorEmail: 'ascendia@online.christuniversity.in'
  },
  {
    id: 'poster-master',
    number: '02',
    title: 'POSTER MASTER',
    tagline: 'Ideas, distilled visually.',
    category: 'Design & Visual Communication',
    iconName: 'Triangle',
    accentColor: 'amber',
    summary: 'A visual storytelling competition challenging creators to distill complex human themes into striking graphic narratives.',
    about: 'Poster Master invites graphic designers, digital artists, and creative strategists to interpret contemporary societal, technological, and environmental challenges through the power of visual semiotics. Participants craft high-impact posters that capture gaze, evoke emotion, and provoke thought within seconds.',
    teamSize: 'Individual Participation (1 Member)',
    eligibility: [
      'Open to all enrolled university students.',
      'Submissions can be created using tools such as Photoshop, Illustrator, Figma, Canva, or digital painting suites.',
      'Participants must retain editable master design files (PSD, AI, FIG) for verification.'
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Theme Release & Digital Artwork Submission',
        duration: '16 October 2026, 09:00 AM – 11:59 PM',
        mode: 'Online digital upload',
        description: 'Release of 3 designated themes on fest morning. Participants design and upload their high-resolution poster along with a 150-word artist statement.',
        deliverables: ['High-res PDF/PNG (A3 size, 300 DPI)', '150-word concept rationale']
      },
      {
        roundNumber: 2,
        title: 'Curator Critique & Defense',
        duration: '17 October 2026, 11:00 AM – 01:00 PM',
        mode: 'Virtual jury session',
        description: 'Top 10 shortlisted entries present their design philosophy and typographic choices to a panel of creative directors.',
        deliverables: ['3-minute oral defense', 'Master source file verification']
      }
    ],
    rules: [
      'Artwork must be original. Direct use of copyrighted stock photography without transformation is barred.',
      'Generative AI assets, if used as supplementary textures, must be explicitly cited in the statement.',
      'Format: A3 size (portrait orientation preferred), minimum 300 DPI.',
      'Late submissions will incur a grading penalty.'
    ],
    judgingCriteria: [
      { criterion: 'Visual Impact & Aesthetics', weight: '35%', description: 'Composition, color harmony, typography, and contrast.' },
      { criterion: 'Conceptual Depth', weight: '30%', description: 'Originality of interpretation and thought-provoking relevance.' },
      { criterion: 'Message Clarity', weight: '20%', description: 'How effectively the visual communicates its core message.' },
      { criterion: 'Technical Craftsmanship', weight: '15%', description: 'Resolution, detailing, and typographic precision.' }
    ],
    prizes: [
      { position: 'First Prize', amount: '₹2,000', description: 'Winner Certificate & Feature on Official Channels' },
      { position: 'Second Prize', amount: '₹1,000', description: 'Runner-up Certificate' },
      { position: 'Third Prize', amount: '₹500', description: 'Second Runner-up Certificate' }
    ],
    timeline: [
      { date: '12 Oct 2026', time: '11:59 PM', event: 'Registrations Close' },
      { date: '16 Oct 2026', time: '09:00 AM', event: 'Theme Reveal & Canvas Sprint Opens' },
      { date: '16 Oct 2026', time: '11:59 PM', event: 'Artwork Submission Deadline' },
      { date: '17 Oct 2026', time: '11:00 AM', event: 'Live Jury Showcase & Defense' },
      { date: '31 Oct 2026', time: '11:00 AM', event: 'Grand Exhibition & Prize Giving at Bengaluru Campus' }
    ],
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-ascendia2026-poster/viewform',
    coordinatorEmail: 'ascendia@online.christuniversity.in'
  },
  {
    id: 'mastermind',
    number: '03',
    title: 'MASTERMIND',
    tagline: 'Think faster. Think deeper.',
    category: 'Quizzing & General Intellect',
    iconName: 'Brain',
    accentColor: 'emerald',
    summary: 'The ultimate intellectual showdown probing general awareness, technology, pop culture, logic, and global affairs.',
    about: 'Mastermind is not merely trivia; it is an analytical duel testing lateral thinking, deduction under cognitive pressure, and lightning-fast recall. Curated by seasoned quizmasters, Mastermind traverses the frontiers of computational history, geopolitics, cinema, science, and the digital universe.',
    teamSize: 'Individual or Duo (1–2 Members per team)',
    eligibility: [
      'Open to students from any academic discipline or semester.',
      'Participants require a reliable internet connection with a webcam-enabled system for the live buzzer rounds.'
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'The Digital Crucible (Online Prelims)',
        duration: '16 October 2026, 03:00 PM – 04:00 PM',
        mode: 'Timed online assessment portal',
        description: '35 rapid-fire questions covering logic, current affairs, tech trivia, and visual puzzles. Negative marking applies.',
        deliverables: ['Real-time quiz submission']
      },
      {
        roundNumber: 2,
        title: 'The Grand Brainstorm (Live Finals)',
        duration: '17 October 2026, 04:00 PM – 06:00 PM',
        mode: 'Live buzzer round with Quizmaster',
        description: 'Top 8 teams compete in a multi-round live showcase including Pounce, Bounce, Audio-Visual clues, and Sudden Death.',
        deliverables: ['Live buzzer participation on Google Meet']
      }
    ],
    rules: [
      'Any form of malpractice, secondary tab switching, or external collaboration in Round 1 will trigger automated flagging.',
      'In the finals, the Quizmaster’s decision is definitive and binding.',
      'Ties in the preliminary round will be resolved via predetermined starred tie-breaker questions.'
    ],
    judgingCriteria: [
      { criterion: 'Accuracy & Depth of Knowledge', weight: '50%', description: 'Correctness across diverse intellectual disciplines.' },
      { criterion: 'Speed & Reflexes', weight: '30%', description: 'Quick buzzer responses and timing efficiency.' },
      { criterion: 'Strategic Pouncing', weight: '20%', description: 'Risk assessment during negative-marking high-stakes rounds.' }
    ],
    prizes: [
      { position: 'First Prize', amount: '₹2,000', description: 'Mastermind Champion Title + Certificate' },
      { position: 'Second Prize', amount: '₹1,000', description: 'First Runner-up Certificate' },
      { position: 'Third Prize', amount: '₹500', description: 'Second Runner-up Certificate' }
    ],
    timeline: [
      { date: '14 Oct 2026', time: '08:00 PM', event: 'Registrations Close & Portal Credentials Dispatched' },
      { date: '16 Oct 2026', time: '03:00 PM', event: 'Round 1: Digital Prelims Live' },
      { date: '16 Oct 2026', time: '09:00 PM', event: 'Finalists Announcement' },
      { date: '17 Oct 2026', time: '04:00 PM', event: 'Round 2: Live Finals with Quizmaster' },
      { date: '31 Oct 2026', time: '11:00 AM', event: 'Felicitation at Central Campus Bengaluru' }
    ],
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-ascendia2026-mastermind/viewform',
    coordinatorEmail: 'ascendia@online.christuniversity.in'
  },
  {
    id: 'poetry',
    number: '04',
    title: 'POETRY',
    tagline: 'Words that stay with you.',
    category: 'Literature & Creative Expression',
    iconName: 'PenTool',
    accentColor: 'purple',
    summary: 'An evocative literary sanctuary honoring rhythm, metaphor, emotional vulnerability, and lyrical craft.',
    about: 'In a digital world driven by algorithms and pixels, Poetry in Ascendia 2026 creates an arena where language transcends the screen. Whether rhymed verse, spoken word, or freeform lyrical meditation, this event invites writers to articulate humanity, identity, and the modern experience.',
    teamSize: 'Individual Participation (1 Member)',
    eligibility: [
      'Open to all registered university students.',
      'Poems may be submitted in English or Hindi / bilingual expression.',
      'Only original compositions are accepted.'
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'Written Manuscript Submission',
        duration: 'Pre-Fest Submission by 15 October 2026',
        mode: 'Document upload',
        description: 'Submission of an original poem (up to 40 lines) adhering to the overarching fest motif: "Pixels, Passions, and Horizons".',
        deliverables: ['PDF manuscript submission']
      },
      {
        roundNumber: 2,
        title: 'Live Spoken Word Recitation',
        duration: '16 October 2026, 05:00 PM – 07:30 PM',
        mode: 'Virtual live stage',
        description: 'Shortlisted poets perform their poem live on video before the literary jury. Performance limit: 3 minutes 30 seconds.',
        deliverables: ['Live spoken performance']
      }
    ],
    rules: [
      'Plagiarism in any form will result in immediate disqualification.',
      'Content must be respectful and free of hate speech or derogatory slurs.',
      'Performance must be live; pre-recorded audio-visual recordings are not accepted for Round 2.'
    ],
    judgingCriteria: [
      { criterion: 'Imagery & Poetic Voice', weight: '35%', description: 'Originality of metaphors, linguistic dexterity, and thematic nuance.' },
      { criterion: 'Delivery & Cadence', weight: '35%', description: 'Pacing, vocal modulation, emotion, and stage presence.' },
      { criterion: 'Structural Form', weight: '15%', description: 'Stanza organization, meter, or deliberate stylistic cadence.' },
      { criterion: 'Audience Resonance', weight: '15%', description: 'Evocative impact and memorability of the piece.' }
    ],
    prizes: [
      { position: 'First Prize', amount: '₹2,000', description: 'Ascendia Laureate Title + Winner Certificate' },
      { position: 'Second Prize', amount: '₹1,000', description: 'First Runner-up Certificate' },
      { position: 'Third Prize', amount: '₹500', description: 'Second Runner-up Certificate' }
    ],
    timeline: [
      { date: '13 Oct 2026', time: '11:59 PM', event: 'Registration & Manuscript Submission Closes' },
      { date: '15 Oct 2026', time: '05:00 PM', event: 'Shortlisted Reciters Announced' },
      { date: '16 Oct 2026', time: '05:00 PM', event: 'Live Recitation & Spoken Word Stage' },
      { date: '31 Oct 2026', time: '11:00 AM', event: 'Poetry Anthology Release & Felicitation at Campus' }
    ],
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-ascendia2026-poetry/viewform',
    coordinatorEmail: 'ascendia@online.christuniversity.in'
  },
  {
    id: 'best-manager',
    number: '05',
    title: 'BEST MANAGER',
    tagline: 'Lead under pressure.',
    category: 'Business & Strategic Leadership',
    iconName: 'Briefcase',
    accentColor: 'gold',
    summary: 'A grueling corporate simulation probing strategic acumen, crisis resolution, negotiation, and executive presence.',
    about: 'Best Manager is Ascendia’s pinnacle leadership trial. Aspiring corporate titans are thrust into simulated boardrooms, PR catastrophes, fiscal dilemmas, and high-stakes negotiations. It evaluates not merely textbook business knowledge, but emotional quotient, poise under stress, and decisive command.',
    teamSize: 'Individual Participation (Solo Leadership)',
    eligibility: [
      'Open to students from all streams (Management, Commerce, Engineering, Humanities, Sciences).',
      'Participants must have formal business attire for Round 2 live video evaluations.'
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'The Aptitude & Situational Case Test',
        duration: '16 October 2026, 11:30 AM – 01:00 PM',
        mode: 'Online case analysis',
        description: 'Timed psychometric and strategic business dilemma analysis. Participants formulate a crisis mitigation memo.',
        deliverables: ['Executive memo writeup (max 500 words)']
      },
      {
        roundNumber: 2,
        title: 'Crisis Simulation & Stress Interview',
        duration: '17 October 2026, 10:00 AM – 01:30 PM',
        mode: 'Live virtual boardroom panel',
        description: 'Dynamic live scenario injects where market conditions shift in real time. Followed by a rigorous stress interview by senior corporate executives.',
        deliverables: ['Live verbal strategy defense under cross-examination']
      }
    ],
    rules: [
      'Strict adherence to professional decorum is mandatory throughout all virtual sessions.',
      'Case materials will be confidential until the exact moment of round commencement.',
      'Unethical collusion or external assistance during time-critical case memos is strictly prohibited.'
    ],
    judgingCriteria: [
      { criterion: 'Strategic Problem Solving', weight: '35%', description: 'Feasibility, commercial viability, and analytical rigor.' },
      { criterion: 'Composure Under Crisis', weight: '30%', description: 'Ability to remain calm, articulate, and decisive in stress rounds.' },
      { criterion: 'Communication & Presence', weight: '20%', description: 'Clarity of articulation, body language, and persuasion.' },
      { criterion: 'Ethical Leadership', weight: '15%', description: 'Balanced consideration of stakeholders and corporate governance.' }
    ],
    prizes: [
      { position: 'First Prize', amount: '₹2,000', description: 'Best Manager Trophy Certificate + Executive Endorsement' },
      { position: 'Second Prize', amount: '₹1,000', description: 'Runner-up Certificate' },
      { position: 'Third Prize', amount: '₹500', description: 'Second Runner-up Certificate' }
    ],
    timeline: [
      { date: '12 Oct 2026', time: '11:59 PM', event: 'Registrations Close' },
      { date: '16 Oct 2026', time: '11:30 AM', event: 'Round 1: Strategic Case Assessment' },
      { date: '16 Oct 2026', time: '08:00 PM', event: 'Top 6 Finalists Declared' },
      { date: '17 Oct 2026', time: '10:00 AM', event: 'Round 2: The Hot Seat & Stress Interview' },
      { date: '31 Oct 2026', time: '11:00 AM', event: 'Felicitation at Central Campus Bengaluru' }
    ],
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-ascendia2026-best-manager/viewform',
    coordinatorEmail: 'ascendia@online.christuniversity.in'
  },
  {
    id: 'just-a-minute',
    number: '06',
    title: 'JUST A MINUTE',
    tagline: '60 seconds. Your moment.',
    category: 'Elocution & Spontaneous Wit',
    iconName: 'Mic',
    accentColor: 'orange',
    summary: 'The classic battle of verbal fluency, quick-witted improvisation, grammatical purity, and unfiltered charisma.',
    about: 'Just A Minute (JAM) is the classic test of rapid eloquence. Contestants are given unexpected topics on the spot and must speak continuously for sixty seconds without hesitation, repetition, grammatical deviation, or unnatural pauses — all while competitors listen attentively to challenge and seize the floor.',
    teamSize: 'Individual Participation (1 Speaker)',
    eligibility: [
      'Open to all students across all branches and degree programmes.',
      'Participants must have clear audio and an active video connection.'
    ],
    rounds: [
      {
        roundNumber: 1,
        title: 'The Impromptu Prelims',
        duration: '16 October 2026, 02:00 PM – 04:00 PM',
        mode: 'Virtual breakout rooms',
        description: 'Participants are grouped into tables of six. Each participant attempts two impromptu 60-second topics.',
        deliverables: ['Live spontaneous speaking']
      },
      {
        roundNumber: 2,
        title: 'The Grand JAM Showdown',
        duration: '17 October 2026, 02:30 PM – 04:00 PM',
        mode: 'Live mainstage video session',
        description: 'The highest scoring speakers compete in the classic JAM format with full floor-challenging rules presided over by the JAM Master.',
        deliverables: ['Live speaking and tactical floor challenging']
      }
    ],
    rules: [
      'Standard JAM rules apply: No hesitation, no repetition, no deviation, no grammatical lapse.',
      'Competitors score points both for speaking time and for valid challenges.',
      'The JAM Master’s ruling on challenges is final, absolute, and non-debatable.'
    ],
    judgingCriteria: [
      { criterion: 'Fluency & Spontaneity', weight: '35%', description: 'Smooth speech flow without filler words or noticeable pauses.' },
      { criterion: 'Wit & Entertainment Value', weight: '30%', description: 'Humor, inventiveness, and clever turns of phrase.' },
      { criterion: 'Grammar & Vocabulary', weight: '20%', description: 'Correct syntactic command and linguistic richness.' },
      { criterion: 'Tactical Challenging', weight: '15%', description: 'Precision and timing of challenges raised against opponents.' }
    ],
    prizes: [
      { position: 'First Prize', amount: '₹2,000', description: 'JAM Champion Award + Certificate' },
      { position: 'Second Prize', amount: '₹1,000', description: 'Runner-up Certificate' },
      { position: 'Third Prize', amount: '₹500', description: 'Second Runner-up Certificate' }
    ],
    timeline: [
      { date: '14 Oct 2026', time: '12:00 PM', event: 'Registrations Close & Slot Allocation' },
      { date: '16 Oct 2026', time: '02:00 PM', event: 'Round 1: Preliminary JAM Tables' },
      { date: '17 Oct 2026', time: '02:30 PM', event: 'Round 2: The Mainstage Championship' },
      { date: '31 Oct 2026', time: '11:00 AM', event: 'Felicitation at Central Campus Bengaluru' }
    ],
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-ascendia2026-jam/viewform',
    coordinatorEmail: 'ascendia@online.christuniversity.in'
  }
];
