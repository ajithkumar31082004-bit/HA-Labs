export interface VivaQuestion {
  question: string;
  answer: string;
}

export interface BOMItem {
  component: string;
  specs: string;
  qty: number;
  estCost: number;
}

export interface VisualSpec {
  title: string;
  subtitle: string;
  type: 'hardware' | 'architecture' | 'dashboard' | 'deployment';
  accentColor: string;
}

export interface ProjectGallery {
  overview: string;
  hardware: string;
  architecture: string;
  dashboard: string;
  deployment: string;
  prototype: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  howItWorks: string;
  branch: ('ECE' | 'EEE' | 'CSE' | 'IT' | 'AI & DS' | 'Mechanical' | 'Robotics' | 'Cybersecurity' | 'Other')[];
  category: 'IoT' | 'Embedded' | 'AI/ML' | 'Cloud' | 'DevOps' | 'Web' | 'Mobile' | 'Cybersecurity' | 'Robotics' | 'Mini Projects' | 'Major Projects';
  projectType: 'Mini Project' | 'Major Project' | 'Final Year Project' | 'Research Project' | 'Software Project';
  technologies: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  budget: string;
  budgetDisplay: string;
  budgetMin: number;
  budgetMax: number;
  duration: string;
  teamSize: string;
  hardware: string[];
  software: string[];
  features: string[];
  architecture: string;
  architectureSteps: string[];
  requirements: string[];
  learningOutcomes: string[];
  tags: string[];
  defaultMatch: number;
  isFlagship?: boolean;
  visualSummary: string;
  gallery: ProjectGallery;
  galleryVisuals: VisualSpec[];
  packageContents: string[];
  vivaQuestions: VivaQuestion[];
  bom: BOMItem[];
  roadmap: { step: string; title: string; desc: string }[];
}

export const ECE_SKILL_PROGRESSION = {
  department: 'ECE',
  title: 'Electronics & Communication Engineering Skill Progression',
  stages: [
    {
      level: 'Beginner',
      tagline: 'Arduino / ESP32 → Sensors → Embedded C',
      skills: ['Arduino', 'ESP32 Basics', 'Analog/Digital Sensors', 'Embedded C', 'GPIO & PWM', 'Breadboard Circuitry'],
      color: 'bg-emerald-50 text-[#087443] border-emerald-200'
    },
    {
      level: 'Intermediate',
      tagline: 'IoT → MQTT → Dashboards → Wireless Communication',
      skills: ['IoT Protocols', 'MQTT Pub/Sub', 'Wi-Fi / BLE', 'Web Dashboards', 'Power Management', 'PCB Design'],
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      level: 'Advanced',
      tagline: 'Raspberry Pi → OpenCV → Edge AI → Signal Processing → System Integration',
      skills: ['Raspberry Pi', 'Computer Vision (OpenCV)', 'Edge AI / TinyML', 'Digital Signal Processing (FFT)', 'LoRa Long Range', 'Full System Integration'],
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ]
};

export const EEE_SKILL_PROGRESSION = {
  department: 'EEE',
  title: 'Electrical & Electronics Engineering Skill Progression',
  stages: [
    {
      level: 'Core',
      tagline: 'Electrical Measurements → Machines → Power Electronics',
      skills: ['Multimeter & CT/PT', 'DC/AC Machines', 'Transformers', 'Power Electronics', 'Thyristors/MOSFETs', 'Capacitor Banks'],
      color: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      level: 'Advanced',
      tagline: 'Solar → EV → Battery → Smart Grid → Motor Control',
      skills: ['Solar PV & MPPT', 'Electric Vehicles (EV)', 'BMS & Battery Analytics', 'Smart Grid / Microgrid', 'BLDC & Inverters', 'Energy Harvesting'],
      color: 'bg-orange-50 text-orange-800 border-orange-200'
    },
    {
      level: 'Industry',
      tagline: 'Automation → Protection → Monitoring → Predictive Maintenance',
      skills: ['Industrial Automation', 'Relay Protection & Switchgear', 'VFD Motor Drivers', 'Transformer Telemetry', 'Thermal & Vibration Analysis', 'SCADA / IoT Integration'],
      color: 'bg-red-50 text-red-800 border-red-200'
    }
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    "id": "proj-ece-1",
    "title": "Smart Parking Occupancy & Guidance System",
    "slug": "smart-parking-occupancy-guidance-system",
    "tagline": "Ultrasonic sensor arrays with ESP32 and live cloud vacancy guidance heatmap",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Ultrasonic sensor arrays with ESP32 and live cloud vacancy guidance heatmap. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, ESP32, IoT, Sensors, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "ESP32",
      "IoT",
      "Sensors",
      "MQTT",
      "Web Dashboard"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,500–₹5,000",
    "budgetDisplay": "₹3,500–₹5,000",
    "budgetMin": 3500,
    "budgetMax": 5000,
    "duration": "3–6 weeks",
    "teamSize": "3–4",
    "hardware": [
      "ESP32 DevKit v1",
      "HC-SR04 Sonar Sensors (x4)",
      "RC522 RFID Scanner",
      "SG90 Servo",
      "I2C 16x2 LCD",
      "5V Power Supply"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with ESP32",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → ESP32 Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "ESP32 Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "ESP32 firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Intermediate",
      "ESP32",
      "IoT",
      "Sensors",
      "MQTT",
      "Web Dashboard"
    ],
    "defaultMatch": 94,
    "isFlagship": true,
    "visualSummary": "Smart Parking Occupancy & Guidance System + ESP32 + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit v1 with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Smart Parking Occupancy & Guidance System?",
        "answer": "Ultrasonic sensor arrays with ESP32 and live cloud vacancy guidance heatmap. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit v1",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "HC-SR04 Sonar Sensors (x4)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "RC522 RFID Scanner",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "SG90 Servo",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "I2C 16x2 LCD",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "5V Power Supply",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-2",
    "title": "Precision IoT Smart Agriculture Node",
    "slug": "precision-iot-smart-agriculture-node",
    "tagline": "Capacitive soil moisture and DHT22 atmospheric telemetry with automated solenoid valve pump",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Capacitive soil moisture and DHT22 atmospheric telemetry with automated solenoid valve pump. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, ESP32, Sensors, MQTT, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "ESP32",
      "Sensors",
      "MQTT",
      "Low Power",
      "Soil Telemetry"
    ],
    "difficulty": "Beginner",
    "budget": "₹2,500–₹4,000",
    "budgetDisplay": "₹2,500–₹4,000",
    "budgetMin": 2500,
    "budgetMax": 4000,
    "duration": "2–4 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "Capacitive Soil Moisture Sensor",
      "DHT22 Temp/Humidity",
      "12V Submersible Water Pump",
      "5V Relay Module",
      "Solar Panel 10W"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with ESP32",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → ESP32 Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "ESP32 Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "ESP32 firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Beginner",
      "ESP32",
      "Sensors",
      "MQTT",
      "Low Power",
      "Soil Telemetry"
    ],
    "defaultMatch": 93,
    "isFlagship": true,
    "visualSummary": "Precision IoT Smart Agriculture Node + ESP32 + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Precision IoT Smart Agriculture Node?",
        "answer": "Capacitive soil moisture and DHT22 atmospheric telemetry with automated solenoid valve pump. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Capacitive Soil Moisture Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "DHT22 Temp/Humidity",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "12V Submersible Water Pump",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "5V Relay Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "Solar Panel 10W",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-3",
    "title": "Industrial Motor Vibration Monitoring",
    "slug": "industrial-motor-vibration-monitoring",
    "tagline": "High-speed ADXL345 accelerometer telemetry with FFT harmonic spectrum analysis for predictive maintenance",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features High-speed ADXL345 accelerometer telemetry with FFT harmonic spectrum analysis for predictive maintenance. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, ESP32, IMU, Signal Processing, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "ESP32",
      "IMU",
      "Signal Processing",
      "FFT",
      "Predictive Maintenance"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,000–₹6,500",
    "budgetDisplay": "₹4,000–₹6,500",
    "budgetMin": 4000,
    "budgetMax": 6500,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 Dual-Core",
      "ADXL345 3-Axis Accelerometer",
      "DS18B20 Temp Probe",
      "OLED 0.96 inch I2C",
      "Industrial Enclosure"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with ESP32",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → ESP32 Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "ESP32 Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "ESP32 firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "ESP32",
      "IMU",
      "Signal Processing",
      "FFT",
      "Predictive Maintenance"
    ],
    "defaultMatch": 92,
    "isFlagship": false,
    "visualSummary": "Industrial Motor Vibration Monitoring + ESP32 + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 Dual-Core with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Industrial Motor Vibration Monitoring?",
        "answer": "High-speed ADXL345 accelerometer telemetry with FFT harmonic spectrum analysis for predictive maintenance. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 Dual-Core",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "ADXL345 3-Axis Accelerometer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "DS18B20 Temp Probe",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "OLED 0.96 inch I2C",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Industrial Enclosure",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-4",
    "title": "IoT Energy Monitoring Device",
    "slug": "iot-energy-monitoring-device",
    "tagline": "Non-invasive split-core CT sensor energy meter streaming RMS voltage, current, and kWh to cloud dashboard",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Non-invasive split-core CT sensor energy meter streaming RMS voltage, current, and kWh to cloud dashboard. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Current Sensor, ESP32, Cloud, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "Current Sensor",
      "ESP32",
      "Cloud",
      "AC Telemetry",
      "Power Factor"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,000–₹4,500",
    "budgetDisplay": "₹3,000–₹4,500",
    "budgetMin": 3000,
    "budgetMax": 4500,
    "duration": "3–5 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "SCT-013-000 Non-Invasive CT Sensor",
      "ZMPT101B AC Voltage Sensor",
      "I2C LCD",
      "Flash Storage"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Current Sensor",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Current Sensor Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Current Sensor Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Current Sensor firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Intermediate",
      "Current Sensor",
      "ESP32",
      "Cloud",
      "AC Telemetry",
      "Power Factor"
    ],
    "defaultMatch": 91,
    "isFlagship": false,
    "visualSummary": "IoT Energy Monitoring Device + Current Sensor + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of IoT Energy Monitoring Device?",
        "answer": "Non-invasive split-core CT sensor energy meter streaming RMS voltage, current, and kWh to cloud dashboard. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "SCT-013-000 Non-Invasive CT Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "ZMPT101B AC Voltage Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "I2C LCD",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Flash Storage",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-5",
    "title": "Wearable Health Monitoring Band",
    "slug": "wearable-health-monitoring-band",
    "tagline": "MAX30102 SpO2 and optical pulse rate band streaming telemetry over Bluetooth Low Energy to smartphone",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features MAX30102 SpO2 and optical pulse rate band streaming telemetry over Bluetooth Low Energy to smartphone. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, ESP32, BLE, Sensors, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "ESP32",
      "BLE",
      "Sensors",
      "PPG Signal",
      "Mobile Telemetry"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,200–₹4,800",
    "budgetDisplay": "₹3,200–₹4,800",
    "budgetMin": 3200,
    "budgetMax": 4800,
    "duration": "3–5 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32-PICO-D4 / ESP32-C3",
      "MAX30102 PPG Sensor",
      "MPU6050 Fall Detector",
      "0.49 inch OLED",
      "3.7V LiPo Battery & TP4056"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with ESP32",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → ESP32 Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "ESP32 Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "ESP32 firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Intermediate",
      "ESP32",
      "BLE",
      "Sensors",
      "PPG Signal",
      "Mobile Telemetry"
    ],
    "defaultMatch": 90,
    "isFlagship": false,
    "visualSummary": "Wearable Health Monitoring Band + ESP32 + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32-PICO-D4 / ESP32-C3 with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Wearable Health Monitoring Band?",
        "answer": "MAX30102 SpO2 and optical pulse rate band streaming telemetry over Bluetooth Low Energy to smartphone. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32-PICO-D4 / ESP32-C3",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "MAX30102 PPG Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "MPU6050 Fall Detector",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "0.49 inch OLED",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "3.7V LiPo Battery & TP4056",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-6",
    "title": "RFID Smart Attendance Terminal",
    "slug": "rfid-smart-attendance-terminal",
    "tagline": "Contactless 13.56MHz RC522 attendance scanner with local RTC clock and automated spreadsheet sync",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Contactless 13.56MHz RC522 attendance scanner with local RTC clock and automated spreadsheet sync. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, RFID, Embedded C, Database, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "RFID",
      "Embedded C",
      "Database",
      "SPI Protocol",
      "MySQL"
    ],
    "difficulty": "Beginner",
    "budget": "₹1,800–₹3,000",
    "budgetDisplay": "₹1,800–₹3,000",
    "budgetMin": 1800,
    "budgetMax": 3000,
    "duration": "2–3 weeks",
    "teamSize": "2–3",
    "hardware": [
      "Arduino Uno / ESP32",
      "RC522 RFID Reader",
      "DS3231 RTC Module",
      "16x2 LCD",
      "Buzzer",
      "MicroSD Card Module"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with RFID",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → RFID Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "RFID Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "RFID firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Beginner",
      "RFID",
      "Embedded C",
      "Database",
      "SPI Protocol",
      "MySQL"
    ],
    "defaultMatch": 95,
    "isFlagship": false,
    "visualSummary": "RFID Smart Attendance Terminal + RFID + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Arduino Uno / ESP32 with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of RFID Smart Attendance Terminal?",
        "answer": "Contactless 13.56MHz RC522 attendance scanner with local RTC clock and automated spreadsheet sync. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Arduino Uno / ESP32",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "RC522 RFID Reader",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "DS3231 RTC Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "16x2 LCD",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Buzzer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "MicroSD Card Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-7",
    "title": "Wireless Patient Alert System",
    "slug": "wireless-patient-alert-system",
    "tagline": "Multi-node bedside telemetry network broadcasting critical vitals with sub-second alert latency to nurse station",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Multi-node bedside telemetry network broadcasting critical vitals with sub-second alert latency to nurse station. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, BLE, ESP32, Sensors, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "BLE",
      "ESP32",
      "Sensors",
      "Mesh Network",
      "Nurse Station UI"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,500–₹7,000",
    "budgetDisplay": "₹4,500–₹7,000",
    "budgetMin": 4500,
    "budgetMax": 7000,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 Nodes (x3)",
      "ECG AD8232 Sensor",
      "MAX30102",
      "Buzzer Siren",
      "Nurse Station Tablet / PC Gateway"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with BLE",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → BLE Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "BLE Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "BLE firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "BLE",
      "ESP32",
      "Sensors",
      "Mesh Network",
      "Nurse Station UI"
    ],
    "defaultMatch": 94,
    "isFlagship": false,
    "visualSummary": "Wireless Patient Alert System + BLE + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 Nodes (x3) with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Wireless Patient Alert System?",
        "answer": "Multi-node bedside telemetry network broadcasting critical vitals with sub-second alert latency to nurse station. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 Nodes (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "ECG AD8232 Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "MAX30102",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Buzzer Siren",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Nurse Station Tablet / PC Gateway",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-8",
    "title": "Solar Adaptive Street Light",
    "slug": "solar-adaptive-street-light",
    "tagline": "Autonomous PWM LED dimming with passive infrared vehicle detection and battery charge regulation",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Autonomous PWM LED dimming with passive infrared vehicle detection and battery charge regulation. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Solar, PWM, LDR, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "Solar",
      "PWM",
      "LDR",
      "ESP32",
      "Power Optimization"
    ],
    "difficulty": "Intermediate",
    "budget": "₹2,800–₹4,200",
    "budgetDisplay": "₹2,800–₹4,200",
    "budgetMin": 2800,
    "budgetMax": 4200,
    "duration": "3–4 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 / Arduino Nano",
      "PIR Motion Sensor (x2)",
      "LDR Sensor",
      "High-Power 12V LED COB",
      "IRF540N MOSFET",
      "12V Solar Panel & Battery"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Solar",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Solar Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Solar Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Solar firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Intermediate",
      "Solar",
      "PWM",
      "LDR",
      "ESP32",
      "Power Optimization"
    ],
    "defaultMatch": 93,
    "isFlagship": false,
    "visualSummary": "Solar Adaptive Street Light + Solar + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 / Arduino Nano with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Solar Adaptive Street Light?",
        "answer": "Autonomous PWM LED dimming with passive infrared vehicle detection and battery charge regulation. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 / Arduino Nano",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "PIR Motion Sensor (x2)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "LDR Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "High-Power 12V LED COB",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "IRF540N MOSFET",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "12V Solar Panel & Battery",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-9",
    "title": "Fire & Smoke Early Warning System",
    "slug": "fire-smoke-early-warning-system",
    "tagline": "Dual optical flame detector and MQ-2 electrochemical gas sensor with emergency Twilio siren dispatch",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Dual optical flame detector and MQ-2 electrochemical gas sensor with emergency Twilio siren dispatch. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Sensors, IoT, Alerts, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "Sensors",
      "IoT",
      "Alerts",
      "MQ-2",
      "Twilio SMS"
    ],
    "difficulty": "Intermediate",
    "budget": "₹2,600–₹4,000",
    "budgetDisplay": "₹2,600–₹4,000",
    "budgetMin": 2600,
    "budgetMax": 4000,
    "duration": "2–4 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "MQ-2 Gas Sensor",
      "Flame IR Sensor",
      "Loud Piezo Buzzer",
      "SIM800L GSM / Wi-Fi",
      "Status LEDs"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Sensors",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Sensors Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Sensors Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Sensors firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Intermediate",
      "Sensors",
      "IoT",
      "Alerts",
      "MQ-2",
      "Twilio SMS"
    ],
    "defaultMatch": 92,
    "isFlagship": false,
    "visualSummary": "Fire & Smoke Early Warning System + Sensors + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Fire & Smoke Early Warning System?",
        "answer": "Dual optical flame detector and MQ-2 electrochemical gas sensor with emergency Twilio siren dispatch. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "MQ-2 Gas Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Flame IR Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Loud Piezo Buzzer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "SIM800L GSM / Wi-Fi",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "Status LEDs",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-10",
    "title": "Portable Water Quality Monitoring Device",
    "slug": "portable-water-quality-monitoring-device",
    "tagline": "Multi-probe handheld telemetry device calculating overall Water Quality Index (WQI) on color TFT display",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Multi-probe handheld telemetry device calculating overall Water Quality Index (WQI) on color TFT display. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, pH, TDS, ESP32, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "pH",
      "TDS",
      "ESP32",
      "Turbidity",
      "Environmental Analytics"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,200–₹6,500",
    "budgetDisplay": "₹4,200–₹6,500",
    "budgetMin": 4200,
    "budgetMax": 6500,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 NodeMCU",
      "Analog pH Meter Kit",
      "TDS Conductivity Probe",
      "Turbidity Sensor",
      "DS18B20 Temp",
      "ST7789 TFT Display"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with pH",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → pH Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "pH Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "pH firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "pH",
      "TDS",
      "ESP32",
      "Turbidity",
      "Environmental Analytics"
    ],
    "defaultMatch": 91,
    "isFlagship": false,
    "visualSummary": "Portable Water Quality Monitoring Device + pH + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 NodeMCU with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Portable Water Quality Monitoring Device?",
        "answer": "Multi-probe handheld telemetry device calculating overall Water Quality Index (WQI) on color TFT display. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 NodeMCU",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Analog pH Meter Kit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "TDS Conductivity Probe",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Turbidity Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "DS18B20 Temp",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "ST7789 TFT Display",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-11",
    "title": "LoRa Environmental Sensor Network",
    "slug": "lora-environmental-sensor-network",
    "tagline": "Sub-GHz 868MHz long-range wireless telemetry network transmitting sensor packets over 5km with solar nodes",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Sub-GHz 868MHz long-range wireless telemetry network transmitting sensor packets over 5km with solar nodes. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, LoRa, Wireless Communication, Long Range RF, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "LoRa",
      "Wireless Communication",
      "Long Range RF",
      "Mesh Protocol",
      "Gateway"
    ],
    "difficulty": "Advanced",
    "budget": "₹5,500–₹8,500",
    "budgetDisplay": "₹5,500–₹8,500",
    "budgetMin": 5500,
    "budgetMax": 8500,
    "duration": "5–7 weeks",
    "teamSize": "4–5",
    "hardware": [
      "SX1278 LoRa Transceivers (x3)",
      "ESP32 Nodes (x2)",
      "Raspberry Pi LoRa Gateway",
      "BME280 Atmospheric Sensor",
      "Omni Antenna 5dBi"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with LoRa",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → LoRa Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "LoRa Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "LoRa firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "LoRa",
      "Wireless Communication",
      "Long Range RF",
      "Mesh Protocol",
      "Gateway"
    ],
    "defaultMatch": 90,
    "isFlagship": false,
    "visualSummary": "LoRa Environmental Sensor Network + LoRa + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "SX1278 LoRa Transceivers (x3) with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of LoRa Environmental Sensor Network?",
        "answer": "Sub-GHz 868MHz long-range wireless telemetry network transmitting sensor packets over 5km with solar nodes. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "SX1278 LoRa Transceivers (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "ESP32 Nodes (x2)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Raspberry Pi LoRa Gateway",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "BME280 Atmospheric Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Omni Antenna 5dBi",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-12",
    "title": "Vehicle Accident Detection & Alert System",
    "slug": "vehicle-accident-detection-alert-system",
    "tagline": "Crash impact detection with NEO-6M GPS coordinates and instant GSM SOS distress messaging",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Crash impact detection with NEO-6M GPS coordinates and instant GSM SOS distress messaging. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, GPS, IMU, GSM, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "GPS",
      "IMU",
      "GSM",
      "Impact Algorithm",
      "Emergency Dispatch"
    ],
    "difficulty": "Advanced",
    "budget": "₹3,800–₹5,800",
    "budgetDisplay": "₹3,800–₹5,800",
    "budgetMin": 3800,
    "budgetMax": 5800,
    "duration": "3–5 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 / Arduino Mega",
      "NEO-6M GPS Module",
      "ADXL345 / MPU6050 Accelerometer",
      "SIM800L GSM Module",
      "Piezo Buzzer",
      "18650 Battery Pack"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with GPS",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → GPS Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "GPS Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "GPS firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "GPS",
      "IMU",
      "GSM",
      "Impact Algorithm",
      "Emergency Dispatch"
    ],
    "defaultMatch": 95,
    "isFlagship": false,
    "visualSummary": "Vehicle Accident Detection & Alert System + GPS + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 / Arduino Mega with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Vehicle Accident Detection & Alert System?",
        "answer": "Crash impact detection with NEO-6M GPS coordinates and instant GSM SOS distress messaging. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 / Arduino Mega",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "NEO-6M GPS Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "ADXL345 / MPU6050 Accelerometer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "SIM800L GSM Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Piezo Buzzer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "18650 Battery Pack",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-13",
    "title": "Smart Waste Bin Monitoring Network",
    "slug": "smart-waste-bin-monitoring-network",
    "tagline": "Sonar depth fill-level monitoring with GPS bin mapping and dynamic waste collection vehicle route dispatch",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Sonar depth fill-level monitoring with GPS bin mapping and dynamic waste collection vehicle route dispatch. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Ultrasonic, IoT, Route Optimization, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "Ultrasonic",
      "IoT",
      "Route Optimization",
      "Fleet Dashboard"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,200–₹4,800",
    "budgetDisplay": "₹3,200–₹4,800",
    "budgetMin": 3200,
    "budgetMax": 4800,
    "duration": "3–4 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit (x3)",
      "JSN-SR04T Waterproof Ultrasonic Sensor",
      "Solar Li-Ion Charger",
      "Cloud Dashboard"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Ultrasonic",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Ultrasonic Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Ultrasonic Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Ultrasonic firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Intermediate",
      "Ultrasonic",
      "IoT",
      "Route Optimization",
      "Fleet Dashboard"
    ],
    "defaultMatch": 94,
    "isFlagship": false,
    "visualSummary": "Smart Waste Bin Monitoring Network + Ultrasonic + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit (x3) with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Smart Waste Bin Monitoring Network?",
        "answer": "Sonar depth fill-level monitoring with GPS bin mapping and dynamic waste collection vehicle route dispatch. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "JSN-SR04T Waterproof Ultrasonic Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Solar Li-Ion Charger",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Cloud Dashboard",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-14",
    "title": "Secure Home Automation Gateway",
    "slug": "secure-home-automation-gateway",
    "tagline": "End-to-end encrypted local hub running Home Assistant with mutual TLS certificates and offline fallback",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features End-to-end encrypted local hub running Home Assistant with mutual TLS certificates and offline fallback. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Raspberry Pi, MQTT, Security, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "Raspberry Pi",
      "MQTT",
      "Security",
      "TLS/SSL",
      "Home Assistant"
    ],
    "difficulty": "Advanced",
    "budget": "₹6,000–₹9,500",
    "budgetDisplay": "₹6,000–₹9,500",
    "budgetMin": 6000,
    "budgetMax": 9500,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "Raspberry Pi 4 (2GB/4GB)",
      "ESP32 Smart Relays (x4)",
      "Zigbee USB Dongle",
      "MicroSD 32GB High Endurance"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Raspberry Pi",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Raspberry Pi Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Raspberry Pi Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Raspberry Pi firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "Raspberry Pi",
      "MQTT",
      "Security",
      "TLS/SSL",
      "Home Assistant"
    ],
    "defaultMatch": 93,
    "isFlagship": false,
    "visualSummary": "Secure Home Automation Gateway + Raspberry Pi + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Raspberry Pi 4 (2GB/4GB) with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Secure Home Automation Gateway?",
        "answer": "End-to-end encrypted local hub running Home Assistant with mutual TLS certificates and offline fallback. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Raspberry Pi 4 (2GB/4GB)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "ESP32 Smart Relays (x4)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Zigbee USB Dongle",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "MicroSD 32GB High Endurance",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-15",
    "title": "Offline Voice-Controlled Appliance System",
    "slug": "offline-voice-controlled-appliance-system",
    "tagline": "Edge voice keyword spotting model on ESP32-S3 controlling relays with zero internet dependency and 80ms latency",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Edge voice keyword spotting model on ESP32-S3 controlling relays with zero internet dependency and 80ms latency. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Speech, ESP32, Embedded, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "Speech",
      "ESP32",
      "Embedded",
      "DSP",
      "Zero Cloud Latency"
    ],
    "difficulty": "Advanced",
    "budget": "₹3,500–₹5,200",
    "budgetDisplay": "₹3,500–₹5,200",
    "budgetMin": 3500,
    "budgetMax": 5200,
    "duration": "4–5 weeks",
    "teamSize": "3–4",
    "hardware": [
      "ESP32-S3 8MB PSRAM",
      "INMP441 I2S Digital Microphone",
      "4-Channel Optocoupler Relay Module",
      "MAX98357A I2S DAC Audio Amp",
      "Mini Speaker"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Speech",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Speech Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Speech Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Speech firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "Speech",
      "ESP32",
      "Embedded",
      "DSP",
      "Zero Cloud Latency"
    ],
    "defaultMatch": 92,
    "isFlagship": false,
    "visualSummary": "Offline Voice-Controlled Appliance System + Speech + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32-S3 8MB PSRAM with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Offline Voice-Controlled Appliance System?",
        "answer": "Edge voice keyword spotting model on ESP32-S3 controlling relays with zero internet dependency and 80ms latency. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32-S3 8MB PSRAM",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "INMP441 I2S Digital Microphone",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "4-Channel Optocoupler Relay Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "MAX98357A I2S DAC Audio Amp",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Mini Speaker",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-16",
    "title": "Edge-AI Object Detection Camera",
    "slug": "edge-ai-object-detection-camera",
    "tagline": "Real-time MobileNet SSD neural inference at 15 FPS on edge camera with bounding box overlay and telemetry",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Real-time MobileNet SSD neural inference at 15 FPS on edge camera with bounding box overlay and telemetry. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Raspberry Pi, OpenCV, AI, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "AI/ML",
    "projectType": "Final Year Project",
    "technologies": [
      "Raspberry Pi",
      "OpenCV",
      "AI",
      "TensorFlow Lite",
      "Camera Pipeline"
    ],
    "difficulty": "Advanced",
    "budget": "₹6,500–₹10,500",
    "budgetDisplay": "₹6,500–₹10,500",
    "budgetMin": 6500,
    "budgetMax": 10500,
    "duration": "5–7 weeks",
    "teamSize": "4",
    "hardware": [
      "Raspberry Pi 4 / Pi Zero 2W",
      "Sony IMX219 Pi Camera Module v2",
      "Cooling Heatsink Fan",
      "Mini HDMI Display"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Raspberry Pi",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Raspberry Pi Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Raspberry Pi Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Raspberry Pi firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "Raspberry Pi",
      "OpenCV",
      "AI",
      "TensorFlow Lite",
      "Camera Pipeline"
    ],
    "defaultMatch": 91,
    "isFlagship": false,
    "visualSummary": "Edge-AI Object Detection Camera + Raspberry Pi + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Raspberry Pi 4 / Pi Zero 2W with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Edge-AI Object Detection Camera?",
        "answer": "Real-time MobileNet SSD neural inference at 15 FPS on edge camera with bounding box overlay and telemetry. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Raspberry Pi 4 / Pi Zero 2W",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Sony IMX219 Pi Camera Module v2",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Cooling Heatsink Fan",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Mini HDMI Display",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-17",
    "title": "Navigation Assistance Device",
    "slug": "navigation-assistance-device",
    "tagline": "Dual VL53L0X laser Time-of-Flight depth sensors and ERM haptic motor vibration band for visually impaired assistance",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Dual VL53L0X laser Time-of-Flight depth sensors and ERM haptic motor vibration band for visually impaired assistance. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, ToF, IMU, BLE, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "ToF",
      "IMU",
      "BLE",
      "Embedded",
      "Haptic Guidance"
    ],
    "difficulty": "Advanced",
    "budget": "₹3,600–₹5,400",
    "budgetDisplay": "₹3,600–₹5,400",
    "budgetMin": 3600,
    "budgetMax": 5400,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 DevKit",
      "VL53L0X Laser ToF Sensor (x2)",
      "MPU6050 Gyro/Accel",
      "Haptic Motor Drivers (x2)",
      "LiPo 3.7V Battery"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with ToF",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → ToF Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "ToF Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "ToF firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "ToF",
      "IMU",
      "BLE",
      "Embedded",
      "Haptic Guidance"
    ],
    "defaultMatch": 90,
    "isFlagship": false,
    "visualSummary": "Navigation Assistance Device + ToF + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Navigation Assistance Device?",
        "answer": "Dual VL53L0X laser Time-of-Flight depth sensors and ERM haptic motor vibration band for visually impaired assistance. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "VL53L0X Laser ToF Sensor (x2)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "MPU6050 Gyro/Accel",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Haptic Motor Drivers (x2)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "LiPo 3.7V Battery",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-18",
    "title": "Industrial Wireless Sensor Network",
    "slug": "industrial-wireless-sensor-network",
    "tagline": "Multi-hop RS485 Modbus and LoRa industrial node network streaming temperature, pressure, and flow to SCADA dashboard",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Multi-hop RS485 Modbus and LoRa industrial node network streaming temperature, pressure, and flow to SCADA dashboard. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, LoRa, MQTT, Networking, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "LoRa",
      "MQTT",
      "Networking",
      "Modbus",
      "SCADA Integration"
    ],
    "difficulty": "Advanced",
    "budget": "₹6,200–₹9,800",
    "budgetDisplay": "₹6,200–₹9,800",
    "budgetMin": 6200,
    "budgetMax": 9800,
    "duration": "5–8 weeks",
    "teamSize": "5",
    "hardware": [
      "ESP32 Industrial Din Rail Nodes (x3)",
      "MAX485 Modbus Transceivers",
      "SX1276 LoRa Modules",
      "Industrial 24V SMPS"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with LoRa",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → LoRa Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "LoRa Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "LoRa firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "LoRa",
      "MQTT",
      "Networking",
      "Modbus",
      "SCADA Integration"
    ],
    "defaultMatch": 95,
    "isFlagship": false,
    "visualSummary": "Industrial Wireless Sensor Network + LoRa + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 Industrial Din Rail Nodes (x3) with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Industrial Wireless Sensor Network?",
        "answer": "Multi-hop RS485 Modbus and LoRa industrial node network streaming temperature, pressure, and flow to SCADA dashboard. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 Industrial Din Rail Nodes (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "MAX485 Modbus Transceivers",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "SX1276 LoRa Modules",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Industrial 24V SMPS",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-19",
    "title": "AI-Based Traffic Flow Counter",
    "slug": "ai-based-traffic-flow-counter",
    "tagline": "Computer vision vehicle detection, speed estimation, and vehicle classification (Car/Bus/Truck/Bike) with CSV exports",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Computer vision vehicle detection, speed estimation, and vehicle classification (Car/Bus/Truck/Bike) with CSV exports. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Raspberry Pi, OpenCV, DeepSORT, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "AI/ML",
    "projectType": "Final Year Project",
    "technologies": [
      "Raspberry Pi",
      "OpenCV",
      "DeepSORT",
      "Vehicle Tracking",
      "Analytics"
    ],
    "difficulty": "Advanced",
    "budget": "₹7,000–₹11,000",
    "budgetDisplay": "₹7,000–₹11,000",
    "budgetMin": 7000,
    "budgetMax": 11000,
    "duration": "5–7 weeks",
    "teamSize": "4",
    "hardware": [
      "Raspberry Pi 4 4GB",
      "C920 HD Webcam / IP Camera",
      "Aluminum Enclosure",
      "MicroSD 64GB Class 10"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Raspberry Pi",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Raspberry Pi Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Raspberry Pi Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Raspberry Pi firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Advanced",
      "Raspberry Pi",
      "OpenCV",
      "DeepSORT",
      "Vehicle Tracking",
      "Analytics"
    ],
    "defaultMatch": 94,
    "isFlagship": false,
    "visualSummary": "AI-Based Traffic Flow Counter + Raspberry Pi + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Raspberry Pi 4 4GB with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of AI-Based Traffic Flow Counter?",
        "answer": "Computer vision vehicle detection, speed estimation, and vehicle classification (Car/Bus/Truck/Bike) with CSV exports. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Raspberry Pi 4 4GB",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "C920 HD Webcam / IP Camera",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Aluminum Enclosure",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "MicroSD 64GB Class 10",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-ece-20",
    "title": "Mobile Air Quality Mapping System",
    "slug": "mobile-air-quality-mapping-system",
    "tagline": "Vehicle-mounted laser particulate matter sensor (PM2.5/PM10) logging geocoded pollution heatmaps to OpenStreetMap",
    "description": "A production-ready, university-vetted engineering project for ECE students. Features Vehicle-mounted laser particulate matter sensor (PM2.5/PM10) logging geocoded pollution heatmaps to OpenStreetMap. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, ESP32, GPS, PM Sensor, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "ECE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "ESP32",
      "GPS",
      "PM Sensor",
      "GIS Mapping",
      "Heatmap Visualizer"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,800–₹5,800",
    "budgetDisplay": "₹3,800–₹5,800",
    "budgetMin": 3800,
    "budgetMax": 5800,
    "duration": "3–5 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "PMS5003 Laser Dust Sensor",
      "MQ-135 Air Quality Sensor",
      "NEO-6M GPS Module",
      "OLED 0.96 inch",
      "MicroSD Datalogger"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with ESP32",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → ESP32 Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "ESP32 Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "ESP32 firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "ECE",
      "Intermediate",
      "ESP32",
      "GPS",
      "PM Sensor",
      "GIS Mapping",
      "Heatmap Visualizer"
    ],
    "defaultMatch": 93,
    "isFlagship": false,
    "visualSummary": "Mobile Air Quality Mapping System + ESP32 + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#087443"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Mobile Air Quality Mapping System?",
        "answer": "Vehicle-mounted laser particulate matter sensor (PM2.5/PM10) logging geocoded pollution heatmaps to OpenStreetMap. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this ECE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "PMS5003 Laser Dust Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "MQ-135 Air Quality Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "NEO-6M GPS Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "OLED 0.96 inch",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "MicroSD Datalogger",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-1",
    "title": "Solar PV Performance Monitoring System",
    "slug": "solar-pv-performance-monitoring-system",
    "tagline": "Real-time solar irradiance pyranometer, panel temperature, DC voltage, and current analytics to measure PV degradation",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Real-time solar irradiance pyranometer, panel temperature, DC voltage, and current analytics to measure PV degradation. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Solar, ESP32, Sensors, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "Solar",
      "ESP32",
      "Sensors",
      "Irradiance",
      "Efficiency Calculation"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,500–₹5,200",
    "budgetDisplay": "₹3,500–₹5,200",
    "budgetMin": 3500,
    "budgetMax": 5200,
    "duration": "3–5 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 NodeMCU",
      "INA219 High-Side DC Sensor",
      "Silicon Pyranometer / LDR",
      "DS18B20 Panel Temp",
      "12V 20W Solar Panel",
      "16x2 I2C LCD"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Solar",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Solar Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Solar Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Solar firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Solar",
      "ESP32",
      "Sensors",
      "Irradiance",
      "Efficiency Calculation"
    ],
    "defaultMatch": 94,
    "isFlagship": true,
    "visualSummary": "Solar PV Performance Monitoring System + Solar + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 NodeMCU with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Solar PV Performance Monitoring System?",
        "answer": "Real-time solar irradiance pyranometer, panel temperature, DC voltage, and current analytics to measure PV degradation. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 NodeMCU",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "INA219 High-Side DC Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Silicon Pyranometer / LDR",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "DS18B20 Panel Temp",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "12V 20W Solar Panel",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "16x2 I2C LCD",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-2",
    "title": "Smart EV Charging Scheduler",
    "slug": "smart-ev-charging-scheduler",
    "tagline": "Dynamic EV charging load balancing with off-peak electricity pricing optimization and peak grid transformer safety cutout",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Dynamic EV charging load balancing with off-peak electricity pricing optimization and peak grid transformer safety cutout. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, EV, IoT, Load Management, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "EV",
      "IoT",
      "Load Management",
      "Time-of-Use Tariffs",
      "Grid Protection"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,800–₹7,200",
    "budgetDisplay": "₹4,800–₹7,200",
    "budgetMin": 4800,
    "budgetMax": 7200,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 Dual-Core",
      "ACS712 30A Current Sensor",
      "40A Contactor / Solid State Relay",
      "DS3231 RTC",
      "Nextion HMI Touchscreen Display"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with EV",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → EV Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "EV Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "EV firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "EV",
      "IoT",
      "Load Management",
      "Time-of-Use Tariffs",
      "Grid Protection"
    ],
    "defaultMatch": 93,
    "isFlagship": true,
    "visualSummary": "Smart EV Charging Scheduler + EV + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 Dual-Core with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Smart EV Charging Scheduler?",
        "answer": "Dynamic EV charging load balancing with off-peak electricity pricing optimization and peak grid transformer safety cutout. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 Dual-Core",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "ACS712 30A Current Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "40A Contactor / Solid State Relay",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "DS3231 RTC",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Nextion HMI Touchscreen Display",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-3",
    "title": "Lithium Battery Health Monitor",
    "slug": "lithium-battery-health-monitor",
    "tagline": "3S/4S lithium battery management with individual cell voltage telemetry, internal resistance estimation, and State-of-Health (SoH)",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features 3S/4S lithium battery management with individual cell voltage telemetry, internal resistance estimation, and State-of-Health (SoH). Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, BMS, ESP32, Battery Analytics, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "BMS",
      "ESP32",
      "Battery Analytics",
      "Coulomb Counting",
      "Cell Balancing"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,200–₹6,500",
    "budgetDisplay": "₹4,200–₹6,500",
    "budgetMin": 4200,
    "budgetMax": 6500,
    "duration": "4–6 weeks",
    "teamSize": "3–4",
    "hardware": [
      "ESP32 DevKit",
      "ADS1115 16-Bit ADC",
      "Active Inductive Cell Balancer",
      "NTC 10K Thermistors (x3)",
      "OLED Display",
      "3S 18650 Battery Pack"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with BMS",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → BMS Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "BMS Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "BMS firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "BMS",
      "ESP32",
      "Battery Analytics",
      "Coulomb Counting",
      "Cell Balancing"
    ],
    "defaultMatch": 92,
    "isFlagship": false,
    "visualSummary": "Lithium Battery Health Monitor + BMS + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Lithium Battery Health Monitor?",
        "answer": "3S/4S lithium battery management with individual cell voltage telemetry, internal resistance estimation, and State-of-Health (SoH). It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "ADS1115 16-Bit ADC",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Active Inductive Cell Balancer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "NTC 10K Thermistors (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "OLED Display",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "3S 18650 Battery Pack",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-4",
    "title": "Automatic Power Factor Correction Trainer",
    "slug": "automatic-power-factor-correction-trainer",
    "tagline": "Zero-crossing detector measuring voltage-current phase displacement with automated relay-switched capacitor bank correction",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Zero-crossing detector measuring voltage-current phase displacement with automated relay-switched capacitor bank correction. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Power Electronics, Control, Phase Angle, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "Power Electronics",
      "Control",
      "Phase Angle",
      "Capacitor Bank",
      "AC Power"
    ],
    "difficulty": "Advanced",
    "budget": "₹5,000–₹7,800",
    "budgetDisplay": "₹5,000–₹7,800",
    "budgetMin": 5000,
    "budgetMax": 7800,
    "duration": "5–7 weeks",
    "teamSize": "4",
    "hardware": [
      "Arduino Mega / ESP32",
      "Zero-Crossing Detector Circuit",
      "Capacitor Banks (x3)",
      "High-Voltage Relays (x3)",
      "Inductive Load (Choke Coil)",
      "Current Transformer"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Power Electronics",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Power Electronics Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Power Electronics Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Power Electronics firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "Power Electronics",
      "Control",
      "Phase Angle",
      "Capacitor Bank",
      "AC Power"
    ],
    "defaultMatch": 91,
    "isFlagship": false,
    "visualSummary": "Automatic Power Factor Correction Trainer + Power Electronics + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Arduino Mega / ESP32 with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Automatic Power Factor Correction Trainer?",
        "answer": "Zero-crossing detector measuring voltage-current phase displacement with automated relay-switched capacitor bank correction. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Arduino Mega / ESP32",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Zero-Crossing Detector Circuit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Capacitor Banks (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "High-Voltage Relays (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Inductive Load (Choke Coil)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "Current Transformer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-5",
    "title": "Smart Prepaid Energy Meter",
    "slug": "smart-prepaid-energy-meter",
    "tagline": "Digital prepaid kWh meter with automated remote cutoff relay, tamper detection switch, and instant recharge wallet sync",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Digital prepaid kWh meter with automated remote cutoff relay, tamper detection switch, and instant recharge wallet sync. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Metering, ESP32, IoT, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "Metering",
      "ESP32",
      "IoT",
      "Relay Disconnect",
      "Payment Gateway API"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,400–₹5,000",
    "budgetDisplay": "₹3,400–₹5,000",
    "budgetMin": 3400,
    "budgetMax": 5000,
    "duration": "3–5 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "ADE7758 / PZEM-004T Energy Meter",
      "40A Latching Relay",
      "Tamper Microswitch",
      "Buzzer",
      "Status LEDs"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Metering",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Metering Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Metering Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Metering firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Metering",
      "ESP32",
      "IoT",
      "Relay Disconnect",
      "Payment Gateway API"
    ],
    "defaultMatch": 90,
    "isFlagship": false,
    "visualSummary": "Smart Prepaid Energy Meter + Metering + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Smart Prepaid Energy Meter?",
        "answer": "Digital prepaid kWh meter with automated remote cutoff relay, tamper detection switch, and instant recharge wallet sync. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "ADE7758 / PZEM-004T Energy Meter",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "40A Latching Relay",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Tamper Microswitch",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Buzzer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "Status LEDs",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-6",
    "title": "BLDC Motor Speed Controller",
    "slug": "bldc-motor-speed-controller",
    "tagline": "Microcontroller 3-phase inverter driver executing six-step trapezoidal commutation with digital Hall effect feedback",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Microcontroller 3-phase inverter driver executing six-step trapezoidal commutation with digital Hall effect feedback. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, BLDC, PWM, Control, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "BLDC",
      "PWM",
      "Control",
      "Six-Step Commutation",
      "Hall Sensors"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,500–₹6,800",
    "budgetDisplay": "₹4,500–₹6,800",
    "budgetMin": 4500,
    "budgetMax": 6800,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "STM32 / ESP32",
      "IR2104 Gate Drivers (x3)",
      "IRF3205 N-Channel MOSFETs (x6)",
      "BLDC Outrunner Motor 1000KV",
      "Digital Hall Sensors",
      "12V Power Source"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with BLDC",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → BLDC Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "BLDC Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "BLDC firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "BLDC",
      "PWM",
      "Control",
      "Six-Step Commutation",
      "Hall Sensors"
    ],
    "defaultMatch": 95,
    "isFlagship": false,
    "visualSummary": "BLDC Motor Speed Controller + BLDC + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "STM32 / ESP32 with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of BLDC Motor Speed Controller?",
        "answer": "Microcontroller 3-phase inverter driver executing six-step trapezoidal commutation with digital Hall effect feedback. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "STM32 / ESP32",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "IR2104 Gate Drivers (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "IRF3205 N-Channel MOSFETs (x6)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "BLDC Outrunner Motor 1000KV",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Digital Hall Sensors",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "12V Power Source",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-7",
    "title": "Three-Phase Fault Detection Trainer",
    "slug": "three-phase-fault-detection-trainer",
    "tagline": "Detection and classification of Line-to-Ground (L-G), Line-to-Line (L-L), and 3-phase symmetrical short circuit faults",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Detection and classification of Line-to-Ground (L-G), Line-to-Line (L-L), and 3-phase symmetrical short circuit faults. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Power Systems, Sensors, Relay Protection, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "Power Systems",
      "Sensors",
      "Relay Protection",
      "Symmetrical Components"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,800–₹7,500",
    "budgetDisplay": "₹4,800–₹7,500",
    "budgetMin": 4800,
    "budgetMax": 7500,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 / Arduino Mega",
      "Step-down 230V-12V Transformers (x3)",
      "Current Transformers (x3)",
      "Fault Simulation Pushbuttons",
      "Tripping Relays",
      "LCD Screen"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Power Systems",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Power Systems Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Power Systems Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Power Systems firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "Power Systems",
      "Sensors",
      "Relay Protection",
      "Symmetrical Components"
    ],
    "defaultMatch": 94,
    "isFlagship": false,
    "visualSummary": "Three-Phase Fault Detection Trainer + Power Systems + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 / Arduino Mega with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Three-Phase Fault Detection Trainer?",
        "answer": "Detection and classification of Line-to-Ground (L-G), Line-to-Line (L-L), and 3-phase symmetrical short circuit faults. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 / Arduino Mega",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Step-down 230V-12V Transformers (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Current Transformers (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Fault Simulation Pushbuttons",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Tripping Relays",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "LCD Screen",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-8",
    "title": "Microgrid Load Sharing Demonstrator",
    "slug": "microgrid-load-sharing-demonstrator",
    "tagline": "Dual distributed renewable energy sources (Solar + Wind emulator) with droop control logic for seamless load sharing without blackout",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Dual distributed renewable energy sources (Solar + Wind emulator) with droop control logic for seamless load sharing without blackout. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Microgrid, Control, Droop Control, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "Microgrid",
      "Control",
      "Droop Control",
      "Islanded Mode",
      "Renewables"
    ],
    "difficulty": "Advanced",
    "budget": "₹5,500–₹8,800",
    "budgetDisplay": "₹5,500–₹8,800",
    "budgetMin": 5500,
    "budgetMax": 8800,
    "duration": "5–7 weeks",
    "teamSize": "5",
    "hardware": [
      "ESP32 Controller",
      "DC-DC Buck Converters (x2)",
      "Current/Voltage Telemetry Nodes",
      "Dynamic Load Resistors",
      "Digital Switching Relays"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Microgrid",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Microgrid Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Microgrid Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Microgrid firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "Microgrid",
      "Control",
      "Droop Control",
      "Islanded Mode",
      "Renewables"
    ],
    "defaultMatch": 93,
    "isFlagship": false,
    "visualSummary": "Microgrid Load Sharing Demonstrator + Microgrid + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 Controller with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Microgrid Load Sharing Demonstrator?",
        "answer": "Dual distributed renewable energy sources (Solar + Wind emulator) with droop control logic for seamless load sharing without blackout. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 Controller",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "DC-DC Buck Converters (x2)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Current/Voltage Telemetry Nodes",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Dynamic Load Resistors",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Digital Switching Relays",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-9",
    "title": "Solar MPPT Controller",
    "slug": "solar-mppt-controller",
    "tagline": "Synchronous buck converter running Perturb & Observe (P&O) maximum power point tracking extracting 98% panel efficiency",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Synchronous buck converter running Perturb & Observe (P&O) maximum power point tracking extracting 98% panel efficiency. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Solar, Power Electronics, Perturb & Observe, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "Solar",
      "Power Electronics",
      "Perturb & Observe",
      "Synchronous Buck"
    ],
    "difficulty": "Advanced",
    "budget": "₹3,800–₹5,800",
    "budgetDisplay": "₹3,800–₹5,800",
    "budgetMin": 3800,
    "budgetMax": 5800,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 / Arduino Nano",
      "IR2104 Synchronous Gate Driver",
      "High-Frequency Inductor 33uH",
      "Low RDS(on) MOSFETs",
      "ACS712 Current Sensor",
      "OLED Display"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Solar",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Solar Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Solar Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Solar firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "Solar",
      "Power Electronics",
      "Perturb & Observe",
      "Synchronous Buck"
    ],
    "defaultMatch": 92,
    "isFlagship": false,
    "visualSummary": "Solar MPPT Controller + Solar + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 / Arduino Nano with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Solar MPPT Controller?",
        "answer": "Synchronous buck converter running Perturb & Observe (P&O) maximum power point tracking extracting 98% panel efficiency. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 / Arduino Nano",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "IR2104 Synchronous Gate Driver",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "High-Frequency Inductor 33uH",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Low RDS(on) MOSFETs",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "ACS712 Current Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "OLED Display",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-10",
    "title": "Regenerative Braking Energy Logger",
    "slug": "regenerative-braking-energy-logger",
    "tagline": "Bi-directional DC-DC converter capturing kinetic back-EMF energy into a supercapacitor bank during EV motor deceleration",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Bi-directional DC-DC converter capturing kinetic back-EMF energy into a supercapacitor bank during EV motor deceleration. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, EV, Motor Control, Energy Recovery, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Final Year Project",
    "technologies": [
      "EV",
      "Motor Control",
      "Energy Recovery",
      "Supercapacitor",
      "Bi-directional DC"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,600–₹7,000",
    "budgetDisplay": "₹4,600–₹7,000",
    "budgetMin": 4600,
    "budgetMax": 7000,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 DevKit",
      "PMDC Motor with Flywheel",
      "Supercapacitor 10F 16V Bank",
      "Bi-directional Current Sensor INA226",
      "Electronic Brake Relay"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with EV",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → EV Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "EV Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "EV firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "EV",
      "Motor Control",
      "Energy Recovery",
      "Supercapacitor",
      "Bi-directional DC"
    ],
    "defaultMatch": 91,
    "isFlagship": false,
    "visualSummary": "Regenerative Braking Energy Logger + EV + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Regenerative Braking Energy Logger?",
        "answer": "Bi-directional DC-DC converter capturing kinetic back-EMF energy into a supercapacitor bank during EV motor deceleration. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "PMDC Motor with Flywheel",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Supercapacitor 10F 16V Bank",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Bi-directional Current Sensor INA226",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Electronic Brake Relay",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-11",
    "title": "Transformer Health Monitoring System",
    "slug": "transformer-health-monitoring-system",
    "tagline": "Continuous distribution transformer telemetry measuring oil temperature, dielectric oil level, vibration, and phase load imbalance",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Continuous distribution transformer telemetry measuring oil temperature, dielectric oil level, vibration, and phase load imbalance. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Temperature, Current, IoT, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "Temperature",
      "Current",
      "IoT",
      "Oil Level",
      "Thermal Imaging"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,600–₹5,400",
    "budgetDisplay": "₹3,600–₹5,400",
    "budgetMin": 3600,
    "budgetMax": 5400,
    "duration": "3–5 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "DS18B20 Waterproof Probe",
      "Float Level Sensor",
      "SCT-013 CT Sensors (x3)",
      "MQ-7 Dissolved Gas Detector",
      "Cloud Dashboard"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Temperature",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Temperature Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Temperature Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Temperature firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Temperature",
      "Current",
      "IoT",
      "Oil Level",
      "Thermal Imaging"
    ],
    "defaultMatch": 90,
    "isFlagship": false,
    "visualSummary": "Transformer Health Monitoring System + Temperature + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Transformer Health Monitoring System?",
        "answer": "Continuous distribution transformer telemetry measuring oil temperature, dielectric oil level, vibration, and phase load imbalance. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "DS18B20 Waterproof Probe",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Float Level Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "SCT-013 CT Sensors (x3)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "MQ-7 Dissolved Gas Detector",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      },
      {
        "component": "Cloud Dashboard",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 350
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-12",
    "title": "Industrial Motor Overload Protector",
    "slug": "industrial-motor-overload-protector",
    "tagline": "Microprocessor-based inverse-time thermal overload relay curve tripping motor contactor before stator winding burnout",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Microprocessor-based inverse-time thermal overload relay curve tripping motor contactor before stator winding burnout. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Protection, Embedded, Thermal Inverse-Time, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "Protection",
      "Embedded",
      "Thermal Inverse-Time",
      "Microcontroller Relay"
    ],
    "difficulty": "Intermediate",
    "budget": "₹2,800–₹4,200",
    "budgetDisplay": "₹2,800–₹4,200",
    "budgetMin": 2800,
    "budgetMax": 4200,
    "duration": "3–4 weeks",
    "teamSize": "3",
    "hardware": [
      "Arduino Uno / ESP32",
      "Current Transformer 20A",
      "Thermal Relay Emulation Circuit",
      "Industrial Solid State Relay 25A",
      "Warning Buzzer"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Protection",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Protection Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Protection Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Protection firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Protection",
      "Embedded",
      "Thermal Inverse-Time",
      "Microcontroller Relay"
    ],
    "defaultMatch": 95,
    "isFlagship": false,
    "visualSummary": "Industrial Motor Overload Protector + Protection + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Arduino Uno / ESP32 with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Industrial Motor Overload Protector?",
        "answer": "Microprocessor-based inverse-time thermal overload relay curve tripping motor contactor before stator winding burnout. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Arduino Uno / ESP32",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Current Transformer 20A",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Thermal Relay Emulation Circuit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Industrial Solid State Relay 25A",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Warning Buzzer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-13",
    "title": "Smart Water Pump Protection System",
    "slug": "smart-water-pump-protection-system",
    "tagline": "Monitors pump dry-run condition via power factor drop, under-voltage, and single-phasing with automated recovery timer",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Monitors pump dry-run condition via power factor drop, under-voltage, and single-phasing with automated recovery timer. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Motor Control, Sensors, Dry-Run Detection, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "Motor Control",
      "Sensors",
      "Dry-Run Detection",
      "Phase Failure",
      "Auto Restart"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,000–₹4,500",
    "budgetDisplay": "₹3,000–₹4,500",
    "budgetMin": 3000,
    "budgetMax": 4500,
    "duration": "3–4 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 / Arduino Nano",
      "PZEM-004T Power Module",
      "Water Flow Sensor",
      "Heavy Duty 30A Relay",
      "Status Indicator LEDs"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Motor Control",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Motor Control Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Motor Control Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Motor Control firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Motor Control",
      "Sensors",
      "Dry-Run Detection",
      "Phase Failure",
      "Auto Restart"
    ],
    "defaultMatch": 94,
    "isFlagship": false,
    "visualSummary": "Smart Water Pump Protection System + Motor Control + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 / Arduino Nano with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Smart Water Pump Protection System?",
        "answer": "Monitors pump dry-run condition via power factor drop, under-voltage, and single-phasing with automated recovery timer. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 / Arduino Nano",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "PZEM-004T Power Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Water Flow Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Heavy Duty 30A Relay",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Status Indicator LEDs",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-14",
    "title": "Wind Turbine Condition Monitoring",
    "slug": "wind-turbine-condition-monitoring",
    "tagline": "Anemometer wind speed, generator RPM optical tachometer, and tower vibration telemetry streaming to remote wind park portal",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Anemometer wind speed, generator RPM optical tachometer, and tower vibration telemetry streaming to remote wind park portal. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Renewable Energy, Vibration, RPM Anemometer, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "Renewable Energy",
      "Vibration",
      "RPM Anemometer",
      "Gearbox Health"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,200–₹6,800",
    "budgetDisplay": "₹4,200–₹6,800",
    "budgetMin": 4200,
    "budgetMax": 6800,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 Dual-Core",
      "Optical Interrupter Tachometer",
      "ADXL345 Vibration Sensor",
      "Cup Anemometer",
      "Mini Wind Generator Model"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Renewable Energy",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Renewable Energy Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Renewable Energy Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Renewable Energy firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "Renewable Energy",
      "Vibration",
      "RPM Anemometer",
      "Gearbox Health"
    ],
    "defaultMatch": 93,
    "isFlagship": false,
    "visualSummary": "Wind Turbine Condition Monitoring + Renewable Energy + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 Dual-Core with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Wind Turbine Condition Monitoring?",
        "answer": "Anemometer wind speed, generator RPM optical tachometer, and tower vibration telemetry streaming to remote wind park portal. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 Dual-Core",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Optical Interrupter Tachometer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "ADXL345 Vibration Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Cup Anemometer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Mini Wind Generator Model",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-15",
    "title": "EV Battery Swapping Station Monitor",
    "slug": "ev-battery-swapping-station-monitor",
    "tagline": "Multi-slot battery swapping cabinet checking authenticated RFID driver tokens, thermal runaway, and ready-to-dispatch pack SoH",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Multi-slot battery swapping cabinet checking authenticated RFID driver tokens, thermal runaway, and ready-to-dispatch pack SoH. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, EV, RFID, Battery, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "EV",
      "RFID",
      "Battery",
      "Multi-Bay Charging",
      "Cloud Billing"
    ],
    "difficulty": "Advanced",
    "budget": "₹5,200–₹8,200",
    "budgetDisplay": "₹5,200–₹8,200",
    "budgetMin": 5200,
    "budgetMax": 8200,
    "duration": "5–7 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 Master Gateway",
      "RC522 RFID Reader",
      "INA219 Bay Voltage/Current Sensors (x4)",
      "Electronic Solenoid Cabinet Locks",
      "Touch Display"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with EV",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → EV Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "EV Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "EV firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "EV",
      "RFID",
      "Battery",
      "Multi-Bay Charging",
      "Cloud Billing"
    ],
    "defaultMatch": 92,
    "isFlagship": false,
    "visualSummary": "EV Battery Swapping Station Monitor + EV + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 Master Gateway with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of EV Battery Swapping Station Monitor?",
        "answer": "Multi-slot battery swapping cabinet checking authenticated RFID driver tokens, thermal runaway, and ready-to-dispatch pack SoH. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 Master Gateway",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "RC522 RFID Reader",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "INA219 Bay Voltage/Current Sensors (x4)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Electronic Solenoid Cabinet Locks",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Touch Display",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-16",
    "title": "Smart Electrical Safety Panel",
    "slug": "smart-electrical-safety-panel",
    "tagline": "Integrated miniature smart DB panel with residual current sensing (GFCI), arc signature detection, and instant push alerts",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Integrated miniature smart DB panel with residual current sensing (GFCI), arc signature detection, and instant push alerts. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Current Monitoring, Protection, Arc Fault Detection, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "Current Monitoring",
      "Protection",
      "Arc Fault Detection",
      "Earth Leakage"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,400–₹5,000",
    "budgetDisplay": "₹3,400–₹5,000",
    "budgetMin": 3400,
    "budgetMax": 5000,
    "duration": "3–5 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "Differential Current Toroid Transformer",
      "Optical Arc Sensor",
      "High-Speed Triac Cutout",
      "Buzzer & OLED"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Current Monitoring",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Current Monitoring Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Current Monitoring Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Current Monitoring firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Current Monitoring",
      "Protection",
      "Arc Fault Detection",
      "Earth Leakage"
    ],
    "defaultMatch": 91,
    "isFlagship": false,
    "visualSummary": "Smart Electrical Safety Panel + Current Monitoring + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Smart Electrical Safety Panel?",
        "answer": "Integrated miniature smart DB panel with residual current sensing (GFCI), arc signature detection, and instant push alerts. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Differential Current Toroid Transformer",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Optical Arc Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "High-Speed Triac Cutout",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Buzzer & OLED",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-17",
    "title": "Demand Response Load Controller",
    "slug": "demand-response-load-controller",
    "tagline": "Monitors grid AC frequency drop during peak grid congestion and automatically sheds non-essential domestic loads (HVAC/Water heater)",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Monitors grid AC frequency drop during peak grid congestion and automatically sheds non-essential domestic loads (HVAC/Water heater). Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Smart Grid, IoT, Peak Shedding, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "IoT",
    "projectType": "Final Year Project",
    "technologies": [
      "Smart Grid",
      "IoT",
      "Peak Shedding",
      "Grid Frequency Monitoring"
    ],
    "difficulty": "Advanced",
    "budget": "₹4,000–₹6,200",
    "budgetDisplay": "₹4,000–₹6,200",
    "budgetMin": 4000,
    "budgetMax": 6200,
    "duration": "4–6 weeks",
    "teamSize": "4",
    "hardware": [
      "ESP32 DevKit",
      "Precision Frequency Counter Circuit",
      "Smart Relay Array (4-Channel)",
      "Energy Metering IC",
      "Web Control Interface"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Smart Grid",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Smart Grid Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Smart Grid Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Smart Grid firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Advanced",
      "Smart Grid",
      "IoT",
      "Peak Shedding",
      "Grid Frequency Monitoring"
    ],
    "defaultMatch": 90,
    "isFlagship": false,
    "visualSummary": "Demand Response Load Controller + Smart Grid + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Demand Response Load Controller?",
        "answer": "Monitors grid AC frequency drop during peak grid congestion and automatically sheds non-essential domestic loads (HVAC/Water heater). It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Precision Frequency Counter Circuit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "Smart Relay Array (4-Channel)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Energy Metering IC",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Web Control Interface",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-18",
    "title": "Piezoelectric Energy Harvesting Floor",
    "slug": "piezoelectric-energy-harvesting-floor",
    "tagline": "Array of PZT piezoelectric discs converting footstep mechanical kinetic pressure into regulated DC electricity stored in supercapacitors",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Array of PZT piezoelectric discs converting footstep mechanical kinetic pressure into regulated DC electricity stored in supercapacitors. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Energy Harvesting, Piezo Disc, Supercapacitor, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "Energy Harvesting",
      "Piezo Disc",
      "Supercapacitor",
      "LTC3588 Rectification"
    ],
    "difficulty": "Intermediate",
    "budget": "₹2,600–₹4,200",
    "budgetDisplay": "₹2,600–₹4,200",
    "budgetMin": 2600,
    "budgetMax": 4200,
    "duration": "3–4 weeks",
    "teamSize": "3",
    "hardware": [
      "Piezoelectric Ceramic Discs (x12)",
      "Full Bridge Schottky Rectifiers",
      "LTC3588 Piezo Harvester Energy Board",
      "Supercapacitor 5.5V 1F",
      "Ultra-low power LED node"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Energy Harvesting",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Energy Harvesting Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Energy Harvesting Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Energy Harvesting firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Energy Harvesting",
      "Piezo Disc",
      "Supercapacitor",
      "LTC3588 Rectification"
    ],
    "defaultMatch": 95,
    "isFlagship": false,
    "visualSummary": "Piezoelectric Energy Harvesting Floor + Energy Harvesting + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Piezoelectric Ceramic Discs (x12) with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Piezoelectric Energy Harvesting Floor?",
        "answer": "Array of PZT piezoelectric discs converting footstep mechanical kinetic pressure into regulated DC electricity stored in supercapacitors. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Piezoelectric Ceramic Discs (x12)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "Full Bridge Schottky Rectifiers",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "LTC3588 Piezo Harvester Energy Board",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Supercapacitor 5.5V 1F",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Ultra-low power LED node",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-19",
    "title": "Solar Streetlight Fault Detection",
    "slug": "solar-streetlight-fault-detection",
    "tagline": "Automated diagnostic node identifying dirt/dust accumulation, blown LED drivers, and degraded battery cells with GPS mapping",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Automated diagnostic node identifying dirt/dust accumulation, blown LED drivers, and degraded battery cells with GPS mapping. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Solar, IoT, Panel Cleaning Alert, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "IoT",
    "projectType": "Major Project",
    "technologies": [
      "Solar",
      "IoT",
      "Panel Cleaning Alert",
      "Battery Dead Cell"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,200–₹4,800",
    "budgetDisplay": "₹3,200–₹4,800",
    "budgetMin": 3200,
    "budgetMax": 4800,
    "duration": "3–4 weeks",
    "teamSize": "3",
    "hardware": [
      "ESP32 DevKit",
      "INA219 Current/Voltage Sensors (x2)",
      "LDR Photodiode Reference",
      "LoRa / Wi-Fi Module",
      "Status OLED"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Solar",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Solar Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Solar Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Solar firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Solar",
      "IoT",
      "Panel Cleaning Alert",
      "Battery Dead Cell"
    ],
    "defaultMatch": 94,
    "isFlagship": false,
    "visualSummary": "Solar Streetlight Fault Detection + Solar + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "ESP32 DevKit with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Solar Streetlight Fault Detection?",
        "answer": "Automated diagnostic node identifying dirt/dust accumulation, blown LED drivers, and degraded battery cells with GPS mapping. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "ESP32 DevKit",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "INA219 Current/Voltage Sensors (x2)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "LDR Photodiode Reference",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "LoRa / Wi-Fi Module",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "Status OLED",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  },
  {
    "id": "proj-eee-20",
    "title": "Automated Conveyor Motor Controller",
    "slug": "automated-conveyor-motor-controller",
    "tagline": "Conveyor belt automation with optical item sorting, inductive proximity sensors, and variable PWM speed acceleration/deceleration control",
    "description": "A production-ready, university-vetted engineering project for EEE students. Features Conveyor belt automation with optical item sorting, inductive proximity sensors, and variable PWM speed acceleration/deceleration control. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.",
    "problem": "Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.",
    "solution": "An automated, sensor-driven architecture integrating precision signal conditioning, Automation, Motor Control, VFD Simulator, and cloud/edge analytics for real-time protection and monitoring.",
    "howItWorks": "Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.",
    "branch": [
      "EEE"
    ],
    "category": "Embedded",
    "projectType": "Major Project",
    "technologies": [
      "Automation",
      "Motor Control",
      "VFD Simulator",
      "Optocoupler",
      "Proximity Sensor"
    ],
    "difficulty": "Intermediate",
    "budget": "₹3,800–₹5,800",
    "budgetDisplay": "₹3,800–₹5,800",
    "budgetMin": 3800,
    "budgetMax": 5800,
    "duration": "3–5 weeks",
    "teamSize": "4",
    "hardware": [
      "Arduino Mega / ESP32",
      "L298N / BTS7960 43A Motor Driver",
      "12V High-Torque Geared DC Motor",
      "Inductive Proximity Sensor",
      "IR Beam Break Sensor (x2)"
    ],
    "software": [
      "Arduino C++ / PlatformIO",
      "Python / Node.js",
      "Tailwind CSS Dashboard",
      "MySQL / InfluxDB",
      "Docker"
    ],
    "features": [
      "Continuous real-time telemetry sampling with Automation",
      "Instant fault trip and threshold safety cutoff within 100ms",
      "Local display diagnostics and remote cloud dashboard monitoring",
      "Non-volatile parameter storage and brownout auto-recovery",
      "Comprehensive external viva defense documentation bank"
    ],
    "architecture": "Sensors & Transducers → Signal Conditioning → Automation Controller → Communication Gateway → Cloud Dashboard / Relational Storage",
    "architectureSteps": [
      "Sensors & Transducers",
      "Signal Conditioning",
      "Automation Controller",
      "Communication Gateway",
      "Cloud Dashboard"
    ],
    "requirements": [
      "Basic circuit breadboarding experience",
      "C/C++ firmware toolchain familiarity",
      "Regulated 5V/12V DC lab power supply"
    ],
    "learningOutcomes": [
      "Automation firmware architecture and pin multiplexing",
      "Hardware sensor interfacing and analog signal noise filtering",
      "Real-time communication protocol implementation (MQTT / BLE / LoRa)",
      "Academic project documentation to IEEE capstone standards"
    ],
    "tags": [
      "EEE",
      "Intermediate",
      "Automation",
      "Motor Control",
      "VFD Simulator",
      "Optocoupler",
      "Proximity Sensor"
    ],
    "defaultMatch": 93,
    "isFlagship": false,
    "visualSummary": "Automated Conveyor Motor Controller + Automation + telemetry dashboard",
    "gallery": {
      "overview": "/projects/smart-parking-system/overview.webp",
      "hardware": "/projects/smart-parking-system/hardware.webp",
      "architecture": "/projects/smart-parking-system/architecture.webp",
      "dashboard": "/projects/smart-parking-system/dashboard.webp",
      "deployment": "/projects/smart-parking-system/deployment.webp",
      "prototype": "/projects/smart-parking-system/prototype.webp"
    },
    "galleryVisuals": [
      {
        "title": "Edge Hardware Node",
        "subtitle": "Arduino Mega / ESP32 with sensor matrix",
        "type": "hardware",
        "accentColor": "#ea580c"
      },
      {
        "title": "System Dataflow",
        "subtitle": "Sensors → MCU → Cloud Gateway",
        "type": "architecture",
        "accentColor": "#16a34a"
      },
      {
        "title": "Live Telemetry UI",
        "subtitle": "Responsive real-time dashboard",
        "type": "dashboard",
        "accentColor": "#84cc16"
      },
      {
        "title": "Prototype Deployment",
        "subtitle": "Bench assembly and field enclosure",
        "type": "deployment",
        "accentColor": "#087443"
      }
    ],
    "packageContents": [
      "Full Commented Source Code (Firmware, APIs & Frontend UI)",
      "Pin-to-Pin Circuit Schematics & Fritzing Breadboard Wiring",
      "End-to-End System Architecture & Dataflow Sequence Diagrams",
      "Relational Database Schema & Data Migration Files",
      "Interactive REST & MQTT API Documentation",
      "Hardware Component Bill of Materials & Datasheet Pack",
      "Docker Container Configurations & AWS Cloud Deployment Guide",
      "University-Standard IEEE Format Project Report (DOCX & LaTeX)",
      "15-Minute Review Slide Deck Presentation (PPT)",
      "External Examiner Viva Defense Question Bank with Verified Answers",
      "Live Demonstration Walkthrough & Video Presentation Script"
    ],
    "vivaQuestions": [
      {
        "question": "What is the core working principle of Automated Conveyor Motor Controller?",
        "answer": "Conveyor belt automation with optical item sorting, inductive proximity sensors, and variable PWM speed acceleration/deceleration control. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits."
      },
      {
        "question": "Why was this hardware architecture selected for this EEE project?",
        "answer": "The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability."
      },
      {
        "question": "How does the system handle sensor faults or power fluctuations?",
        "answer": "The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips."
      }
    ],
    "bom": [
      {
        "component": "Arduino Mega / ESP32",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 150
      },
      {
        "component": "L298N / BTS7960 43A Motor Driver",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 320
      },
      {
        "component": "12V High-Torque Geared DC Motor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 490
      },
      {
        "component": "Inductive Proximity Sensor",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 660
      },
      {
        "component": "IR Beam Break Sensor (x2)",
        "specs": "Standard University Engineering Lab Grade",
        "qty": 1,
        "estCost": 180
      }
    ],
    "roadmap": [
      {
        "step": "01",
        "title": "Component Sourcing & Bench Verification",
        "desc": "Inspect pinouts, verify datasheets, and calibrate sensors on breadboard."
      },
      {
        "step": "02",
        "title": "Circuit Assembly & Power Rail Testing",
        "desc": "Solder circuit modules, wire regulated power buses, and test voltage levels."
      },
      {
        "step": "03",
        "title": "Microcontroller Firmware Development",
        "desc": "Code sensor sampling algorithms, state machines, and control logic."
      },
      {
        "step": "04",
        "title": "Telemetry & Connectivity Integration",
        "desc": "Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization."
      },
      {
        "step": "05",
        "title": "Dashboard & Interface Prototyping",
        "desc": "Build responsive monitoring portal with live indicators and historical graphs."
      },
      {
        "step": "06",
        "title": "Stress Testing & Fault Emulation",
        "desc": "Validate boundary conditions, load stress, and fail-safe safety triggers."
      },
      {
        "step": "07",
        "title": "IEEE Project Report Compilation",
        "desc": "Draft abstract, block diagrams, circuit equations, and experimental results."
      },
      {
        "step": "08",
        "title": "Viva Defense Presentation Preparation",
        "desc": "Rehearse slide deck and internal/external examiner technical question bank."
      }
    ]
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
  { id: 'flagship', label: '⭐ Flagship', count: PROJECTS_DATA.filter(p => p.isFlagship).length },
  { id: 'IoT', label: 'IoT', count: PROJECTS_DATA.filter(p => p.category === 'IoT' || p.technologies.includes('IoT')).length },
  { id: 'Embedded', label: 'Embedded', count: PROJECTS_DATA.filter(p => p.category === 'Embedded' || p.technologies.some(t => t.includes('Arduino') || t.includes('ESP32'))).length },
  { id: 'AI/ML', label: 'AI/ML & Vision', count: PROJECTS_DATA.filter(p => p.category === 'AI/ML' || p.technologies.some(t => t.includes('OpenCV') || t.includes('AI'))).length },
];

export const BRANCHES_LIST = ['All Branches', 'ECE', 'EEE', 'CSE', 'IT', 'AI & DS', 'Mechanical'];

export const BUDGET_RANGES = [
  { id: 'all', label: 'All Budgets' },
  { id: 'under-2k', label: 'Under ₹2,000', min: 0, max: 2000 },
  { id: '2k-4k', label: '₹2,000–₹4,000', min: 2000, max: 4000 },
  { id: '4k-6k', label: '₹4,000–₹6,000', min: 4000, max: 6000 },
  { id: '6k-plus', label: '₹6,000+', min: 6000, max: 100000 },
];

export const DIFFICULTY_LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
