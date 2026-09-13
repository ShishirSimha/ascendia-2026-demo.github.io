export interface EventPrize {
  position: string;
  amount: string;
  description: string;
}

export interface EventRound {
  roundNumber: number;
  title: string;
  duration: string;
  mode: string;
  description: string;
  deliverables?: string[];
}

export interface AscendiaEvent {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  iconName: 'Code' | 'Triangle' | 'Brain' | 'PenTool' | 'Briefcase' | 'Mic';
  accentColor: 'cyan' | 'amber' | 'emerald' | 'purple' | 'gold' | 'orange';
  summary: string;
  about: string;
  teamSize: string;
  eligibility: string[];
  rounds: EventRound[];
  rules: string[];
  judgingCriteria: { criterion: string; weight: string; description: string }[];
  prizes: EventPrize[];
  timeline: { date: string; time: string; event: string }[];
  googleFormUrl: string;
  coordinatorEmail: string;
}
