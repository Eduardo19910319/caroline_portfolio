import { Project, Skill } from './types';

export const USER_INFO = {
  name: 'Caroline Costa',
  title: 'Videomaker & Motion Designer',
  summary: 'Sou uma designer apaixonada por criar identidades visuais marcantes e experiências digitais envolventes. Especializada em design, branding e animação, adoro transformar ideias em realidade visual.',
  email: 'carolinec.costa@hotmail.com',
  whatsappNumber: '+5515988055393', // Número com código do país
  whatsappMessage: 'Olá! Vi seu portfólio e gostaria de conversar.',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/seu-usuario',
  behance: 'https://www.behance.net/seu-usuario'
};

export const HERO_VIDEO_URL = 'https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-a-dark-wavy-grid-690-large.mp4';

export const SKILLS: Skill[] = [
  { name: 'Photoshop', level: 95 },
  { name: 'Captação', level: 83 },
  { name: 'Storytelling', level: 85 },
  { name: 'Premiere', level: 89 },
  { name: 'Branding', level: 80 },
  { name: 'Motion Design', level: 92 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Rebranding de Marca',
    description: 'Direção de arte e criação de identidade visual completa para a marca de lifestyle "Aura". O projeto abrangeu logo, paleta de cores, tipografia e guia de estilo.',
    tags: ['Branding', 'Direção de Arte', 'Illustrator'],
    imageUrl: 'https://picsum.photos/seed/branding/800/600',
    liveUrl: '#',
  },
  {
    title: 'Animação de Logo',
    description: 'Desenvolvimento de uma animação de logotipo para a startup de tecnologia "Innovate", focada em transmitir inovação e fluidez. Produzida em After Effects e otimizada para web.',
    tags: ['Motion Design', 'After Effects', 'Lottie'],
    imageUrl: 'https://picsum.photos/seed/motion/800/600',
    liveUrl: '#',
  },
  {
    title: 'Experiência Web Interativa',
    description: 'Design e prototipação de um site imersivo e interativo para o lançamento de um festival de música. O projeto focou em micro-interações e uma experiência de usuário envolvente.',
    tags: ['UI/UX', 'Figma', 'Animação Web'],
    imageUrl: 'https://picsum.photos/seed/interactive/800/600',
    liveUrl: '#',
  },
  {
    title: 'Campanha de Mídia Social',
    description: 'Criação de uma série de artes estáticas e vídeos curtos para uma campanha de lançamento de produto no Instagram e TikTok, resultando em alto engajamento.',
    tags: ['Design Gráfico', 'Premiere Pro', 'Social Media'],
    imageUrl: 'https://picsum.photos/seed/social/800/600',
    repoUrl: '#',
  },
  {
    title: 'Curta-Metragem Animado "Luz"',
    description: 'Produção completa de um curta-metragem de animação 2D, desde o roteiro e storyboard até a animação final e pós-produção.',
    tags: ['Animação 2D', 'Storyboarding', 'Toon Boom'],
    imageUrl: 'https://picsum.photos/seed/animation/800/600',
    liveUrl: '#',
  },
  {
    title: 'Design System "Orion"',
    description: 'Desenvolvimento de um design system coeso e escalável para unificar a interface e a experiência do usuário em todos os produtos digitais da empresa.',
    tags: ['UI Design', 'Figma', 'Componentes'],
    imageUrl: 'https://picsum.photos/seed/designsystem/800/600',
    repoUrl: '#',
  },
];

export const SECTIONS = [
    { id: 'home', title: 'Início' },
    { id: 'projects', title: 'Projetos' },
    { id: 'about', title: 'Sobre' },
    { id: 'skills', title: 'Habilidades' },
    { id: 'contact', title: 'Contato' },
];