const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'src', 'data', 'projects.ts');
let code = fs.readFileSync(targetFile, 'utf8');

// Ensure Project interface has budget: string and architecture: string
if (!code.includes('budget: string;')) {
  code = code.replace('budgetDisplay: string;', 'budget: string;\n  budgetDisplay: string;');
}
if (!code.includes('architecture: string;')) {
  code = code.replace('architectureSteps: string[];', 'architecture: string;\n  architectureSteps: string[];');
}

const defaultPackageContents = [
  'Full Commented Source Code (Firmware, APIs & Frontend UI)',
  'Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring',
  'End-to-End System Architecture & Dataflow Sequence Diagrams',
  'Relational Database Schema & Data Migration Files',
  'Interactive REST & MQTT API Documentation',
  'Hardware Component Bill of Materials & Datasheet Pack',
  'Docker Container Configurations & AWS Cloud Deployment Guide',
  'University-Standard IEEE Format Project Report (DOCX & LaTeX)',
  '15-Minute Review Slide Deck Presentation (PPT)',
  'External Examiner Viva Defense Question Bank with Verified Answers',
  'Live Demonstration Walkthrough & Video Presentation Script'
];

const packageStr = JSON.stringify(defaultPackageContents, null, 4).replace(/\n/g, '\n    ');

// Replace in each project
code = code.replace(/(\{\s*id:\s*'proj-(\d+)'[\s\S]*?roadmap:\s*\[[\s\S]*?\]\s*)/g, (match) => {
  // Check if gallery is already in match
  if (match.includes('gallery: {')) return match;
  
  // Extract slug
  const slugMatch = match.match(/slug:\s*'([^']+)'/);
  const slug = slugMatch ? slugMatch[1] : '';
  
  // Extract budgetDisplay
  const budgetMatch = match.match(/budgetDisplay:\s*'([^']+)'/);
  const budget = budgetMatch ? budgetMatch[1] : '₹2,500–₹5,000';

  // Extract architectureSteps
  let archStr = 'Physical Sensors → Microcontroller / Gateway → Cloud API & Storage → Analytics Dashboard';
  const archMatch = match.match(/architectureSteps:\s*\[([\s\S]*?)\]/);
  if (archMatch) {
    const rawSteps = archMatch[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
    if (rawSteps.length > 0) {
      archStr = rawSteps.join(' → ');
    }
  }

  let updated = match;
  if (!updated.includes('budget:')) {
    updated = updated.replace(/budgetDisplay:\s*'/, `budget: '${budget}',\n    budgetDisplay: '`);
  }
  if (!updated.includes('architecture:')) {
    updated = updated.replace(/architectureSteps:\s*\[/, `architecture: '${archStr}',\n    architectureSteps: [`);
  }

  const galleryObj = `gallery: {
      overview: '/projects/${slug}/overview.webp',
      hardware: '/projects/${slug}/hardware.webp',
      architecture: '/projects/${slug}/architecture.webp',
      dashboard: '/projects/${slug}/dashboard.webp',
      deployment: '/projects/${slug}/deployment.webp',
      prototype: '/projects/${slug}/prototype.webp'
    },`;

  const packageObj = `packageContents: ${packageStr},`;

  // Inject gallery and packageContents right before vivaQuestions
  updated = updated.replace(/vivaQuestions:\s*\[/, `${galleryObj}\n    ${packageObj}\n    vivaQuestions: [`);
  return updated;
});

fs.writeFileSync(targetFile, code, 'utf8');
console.log('Successfully updated src/data/projects.ts!');
