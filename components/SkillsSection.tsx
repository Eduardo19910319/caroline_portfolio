
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Section from './Section';
import { SKILLS } from '../constants';

interface SkillsSectionProps {
  id: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => {
  return (
    <Section id={id} title="Minhas Habilidades" className="bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-12 text-lg text-gray-400">
          Tenho experiência com uma variedade de tecnologias modernas de desenvolvimento web. Aqui está um resumo visual das minhas competências.
        </p>
        <div className="w-full h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
              <defs>
                <radialGradient id="colorHighlight">
                  <stop offset="5%" stopColor="#f85649" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f85649" stopOpacity={0.1}/>
                </radialGradient>
              </defs>
              <PolarGrid stroke="#4b5563" />
              <PolarAngleAxis dataKey="name" tick={{ fill: '#d1d5db', fontSize: 14 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="Nível" dataKey="level" stroke="#fa7e73" fill="url(#colorHighlight)" fillOpacity={0.6} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'rgba(31, 41, 55, 0.8)', 
                  borderColor: '#f85649',
                  borderRadius: '0.5rem',
                }}
                labelStyle={{ color: '#ffffff' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;