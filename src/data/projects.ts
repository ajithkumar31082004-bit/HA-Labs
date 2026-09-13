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

export const PROJECTS_DATA: Project[] = [
  // 1. FLAGSHIP 1: Smart Parking System
  {
    id: 'proj-1',
    title: 'Smart Parking System',
    slug: 'smart-parking-system',
    tagline: 'AI + IoT enabled parking management and slot detection platform',
    description: 'An automated smart parking platform combining ESP32 ultrasonic telemetry, real-time cloud data pipeline, and a full-stack booking & analytics dashboard. Solves urban parking congestion and optimizes slot allocations.',
    problem: 'Urban drivers spend an average of 15 to 20 minutes cruising for parking, causing 30% of downtown traffic congestion and substantial carbon emissions.',
    solution: 'An automated IoT sensor grid with ESP32 that continuously transmits slot status to a cloud dashboard, letting drivers view live vacancy heatmaps and reserve parking in advance.',
    howItWorks: 'Ultrasonic sensors positioned over slots measure vehicle clearance. The ESP32 processes distance readings, filters sensor noise, and pushes state changes via MQTT/HTTP to a Node.js backend. Updates appear in real-time on a web portal.',
    branch: ['ECE', 'CSE', 'IT', 'AI & DS'],
    category: 'IoT',
    projectType: 'Major Project',
    technologies: ['ESP32', 'Sensors', 'Node.js', 'Express', 'MySQL', 'AWS', 'Docker', 'Nginx'],
    difficulty: 'Intermediate',
    budget: '₹3,500–₹5,000',
    budgetDisplay: '₹3,500–₹5,000',
    budgetMin: 3500,
    budgetMax: 5000,
    duration: '3–6 weeks',
    teamSize: '2–4',
    hardware: ['ESP32 NodeMCU DevKit v1', 'HC-SR04 Ultrasonic Sensors (x4)', 'RC522 RFID Card Reader', 'SG90 / MG996R Servo Motor', 'I2C 16x2 LCD Display', 'Buzzer & LEDs', '5V 2A Regulated Power Supply'],
    software: ['Arduino IDE / PlatformIO C++', 'Node.js & Express REST API', 'MySQL 8.0 Relational DB', 'Docker & Docker Compose', 'Tailwind CSS Dashboard UI'],
    features: [
      'Sub-second parking slot occupancy detection via ultrasonic sonar arrays',
      'RFID card badge scanner for authorized vehicle barrier gate actuation',
      'Real-time web dashboard displaying live availability heatmap',
      'Driver reservation interface with dynamic slot allocation and QR confirmation',
      'Historical occupancy analytics for municipal parking operators'
    ],
    architecture: 'Sensors (Sonar/RFID) → ESP32 Controller → API / MQTT Gateway → Node.js Backend → MySQL Database → AWS Cloud (Docker) → Web Dashboard',
    architectureSteps: ['Sensors (Sonar/RFID)', 'ESP32 Controller', 'API / MQTT Gateway', 'Node.js Backend', 'MySQL Database', 'AWS Cloud (Docker)', 'Web Dashboard'],
    requirements: ['Basic C/C++ familiarity for ESP32', 'Node.js runtime environment', 'MySQL database', 'Breadboard prototype wiring'],
    learningOutcomes: ['Microcontroller sensor interfacing & debounce algorithms', 'Asynchronous Wi-Fi networking & JSON payload serialization', 'RESTful API design and database transaction management', 'Containerization and cloud deployment on AWS'],
    tags: ['IoT', 'AWS', 'ESP32', 'Node.js', 'Sensors'],
    defaultMatch: 95,
    isFlagship: true,
    visualSummary: 'ESP32 + parking slots + dashboard',
    galleryVisuals: [
      { title: 'Slot Sensor Matrix', subtitle: '4x HC-SR04 Ultrasonic Sonar Array with I2C Display', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'System Architecture', subtitle: 'ESP32 → MQTT Broker → Node.js → MySQL → AWS EC2', type: 'architecture', accentColor: '#38bdf8' },
      { title: 'Live Driver Heatmap', subtitle: 'Responsive Tailwind CSS Dashboard with Slot Occupancy Grid', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Cloud Container Deployment', subtitle: 'Dockerized Microservices on AWS EC2 with Nginx Reverse Proxy', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/smart-parking-system/overview.webp',
      hardware: '/projects/smart-parking-system/hardware.webp',
      architecture: '/projects/smart-parking-system/architecture.webp',
      dashboard: '/projects/smart-parking-system/dashboard.webp',
      deployment: '/projects/smart-parking-system/deployment.webp',
      prototype: '/projects/smart-parking-system/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why choose ESP32 over Arduino Uno for this project?', answer: 'ESP32 has built-in 2.4GHz Wi-Fi and Bluetooth LE, dual-core 240MHz Tensilica LX6 processing, and ample RAM (520KB SRAM) enabling direct TLS/HTTPS telemetry transmission without external Wi-Fi shields like ESP8266 or ENC28J60.' },
      { question: 'How do you prevent false occupancy triggers caused by sensor noise?', answer: 'We implemented a multi-sample median filter in firmware. The ESP32 takes 5 consecutive distance measurements 50ms apart, sorts them, and discards anomalous outliers before asserting a state transition.' },
      { question: 'What is the end-to-end latency of slot detection?', answer: 'Average end-to-end latency is between 280ms and 450ms, consisting of sensor sampling (100ms), Wi-Fi transmission (80ms), backend processing (40ms), and WebSocket push to the client (60ms).' }
    ],
    bom: [
      { component: 'ESP32 NodeMCU-32S', specs: 'Dual-core 240MHz, Wi-Fi+BLE', qty: 1, estCost: 450 },
      { component: 'HC-SR04 Ultrasonic Sensor', specs: '2cm - 400cm precision range', qty: 4, estCost: 400 },
      { component: 'RC522 RFID Module + Cards', specs: '13.56MHz SPI Interface', qty: 1, estCost: 240 },
      { component: 'MG996R Metal Gear Servo', specs: 'High torque barrier gate arm', qty: 1, estCost: 350 },
      { component: '1602 LCD with I2C Module', specs: 'HD44780, PCF8574T driver', qty: 1, estCost: 220 },
      { component: 'Power Supply & Wiring kit', specs: '5V 2A regulated + Breadboard', qty: 1, estCost: 350 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define slot dimensions, sensor detection range, and throughput targets.' },
      { step: '02', title: 'Circuit Design', desc: 'Breadboard wiring schematic connecting sonar pins and I2C LCD bus.' },
      { step: '03', title: 'Firmware', desc: 'Write non-blocking distance sampling and Wi-Fi reconnection routines.' },
      { step: '04', title: 'Backend', desc: 'Build Node.js Express REST API endpoints with authentication.' },
      { step: '05', title: 'Database', desc: 'Design MySQL schema with tables for slots, reservations, and logs.' },
      { step: '06', title: 'Frontend', desc: 'Create real-time interactive parking slot grid with live status indicators.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Containerize application with Docker and host on AWS EC2.' },
      { step: '08', title: 'Testing', desc: 'Verify sensor debounce, Wi-Fi dropouts, and multi-user reservations.' },
      { step: '09', title: 'Documentation', desc: 'Compile IEEE-standard project report, PPT slides, and user guide.' },
      { step: '10', title: 'Viva', desc: 'Rehearse technical answers with external examiner question defense bank.' }
    ]
  },

  // 2. FLAGSHIP 2: Smart Agriculture & Irrigation
  {
    id: 'proj-2',
    title: 'Smart Agriculture & Irrigation',
    slug: 'smart-agriculture-irrigation',
    tagline: 'IoT + automation for precision soil moisture telemetry and cloud automated drip irrigation',
    description: 'An automated agro-telemetry system that senses soil moisture, humidity, and temperature to trigger precision drip irrigation while streaming environmental analytics to AWS Cloud.',
    problem: 'Traditional flood irrigation wastes over 50% of pumped agricultural water and causes root rotting, while manual farm inspection is labor-intensive and inaccurate.',
    solution: 'An automated closed-loop irrigation system using capacitive soil sensors and optoisolated relays that dispenses water only when root zones dip below calibrated thresholds.',
    howItWorks: 'Capacitive probes gauge soil dielectric permittivity without galvanic corrosion. The ESP32 evaluates moisture against soil profiles, controls water pumps via relay, and sends telemetry to AWS IoT Core over MQTT.',
    branch: ['ECE', 'EEE', 'CSE', 'AI & DS'],
    category: 'IoT',
    projectType: 'Major Project',
    technologies: ['ESP32', 'Soil Sensor', 'MQTT', 'AWS', 'Node.js', 'DynamoDB', 'Relay'],
    difficulty: 'Intermediate',
    budget: '₹2,000–₹4,000',
    budgetDisplay: '₹2,000–₹4,000',
    budgetMin: 2000,
    budgetMax: 4000,
    duration: '3–5 weeks',
    teamSize: '2–4',
    hardware: ['ESP32 Wi-Fi Module', 'Capacitive Soil Moisture Sensor v1.2', 'DHT22 Temp & Humidity Sensor', '5V Dual Relay Module', '12V Submersible Micro Pump', 'Drip Tubing & Power Adapter'],
    software: ['PlatformIO C++', 'Eclipse Mosquitto MQTT Broker', 'Express.js Backend', 'AWS DynamoDB / RDS', 'Mobile-Responsive Farm Web UI'],
    features: [
      'Corrosion-free capacitive soil moisture measurement with ADC calibration',
      'Automated relay pump trigger with hysteresis to avoid pump cycling',
      'Real-time MQTT telemetry streaming to AWS Cloud',
      'SMS and push alert notifications when moisture drops below threshold',
      'Historical soil moisture and ambient temperature trend charts'
    ],
    architecture: 'Capacitive Sensors → ESP32 Field Node → MQTT Broker → AWS IoT Core → Relational/DynamoDB → Drip Pump Actuator → Farmer Dashboard',
    architectureSteps: ['Capacitive Sensors', 'ESP32 Field Node', 'MQTT Broker', 'AWS IoT Core', 'Relational/DynamoDB', 'Drip Pump Actuator', 'Farmer Dashboard'],
    requirements: ['Analog ADC calibration understanding', 'Relay safe wiring', 'AWS account setup'],
    learningOutcomes: ['Low-power IoT sensor node configuration', 'MQTT Pub/Sub telemetry architecture', 'Automated irrigation control theory'],
    tags: ['IoT', 'Agriculture', 'ESP32', 'MQTT', 'AWS'],
    defaultMatch: 92,
    isFlagship: true,
    visualSummary: 'ESP32 + soil sensors + farm',
    galleryVisuals: [
      { title: 'Field Sensor Node', subtitle: 'Capacitive Probe & DHT22 Environmental Monitor', type: 'hardware', accentColor: '#10b981' },
      { title: 'MQTT Telemetry Flow', subtitle: 'ESP32 → AWS IoT Core → Lambda Trigger', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Crop Analytics UI', subtitle: '30-Day Soil Moisture & Weather Correlation Charts', type: 'dashboard', accentColor: '#f59e0b' },
      { title: 'Automated Drip Relay', subtitle: 'Optoisolated Valve Control with Flyback Protection', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/smart-agriculture-irrigation/overview.webp',
      hardware: '/projects/smart-agriculture-irrigation/hardware.webp',
      architecture: '/projects/smart-agriculture-irrigation/architecture.webp',
      dashboard: '/projects/smart-agriculture-irrigation/dashboard.webp',
      deployment: '/projects/smart-agriculture-irrigation/deployment.webp',
      prototype: '/projects/smart-agriculture-irrigation/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why use capacitive soil moisture sensors instead of resistive prong probes?', answer: 'Resistive probes pass electric current directly through wet soil, causing rapid electrochemical corrosion and electrode oxidation within weeks. Capacitive sensors are coated with protective solder mask and measure changes in capacitance, ensuring years of stable operation.' },
      { question: 'How do you prevent relay switching electrical noise from rebooting the ESP32?', answer: 'We use an optoisolated relay module with separate power traces and include a 1N4007 flyback diode across the DC inductive motor to absorb back-EMF voltage transients.' }
    ],
    bom: [
      { component: 'ESP32 Controller', specs: 'Espressif 30-pin dev board', qty: 1, estCost: 450 },
      { component: 'Capacitive Soil Sensor v1.2', specs: 'Analog voltage 0-3.0V', qty: 2, estCost: 280 },
      { component: 'DHT22 Sensor', specs: '-40 to 80°C, 0-100% RH', qty: 1, estCost: 260 },
      { component: '12V Submersible Pump + Tubing', specs: 'Flow rate 240L/H', qty: 1, estCost: 350 },
      { component: 'Optoisolated Relay Module', specs: '10A 250VAC 5V trigger', qty: 1, estCost: 120 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Determine crop moisture setpoints and pump duty cycle needs.' },
      { step: '02', title: 'Circuit Design', desc: 'Connect capacitive sensor to ADC pin and relay to GPIO.' },
      { step: '03', title: 'Firmware', desc: 'Calibrate analog values against bone-dry and saturated soils.' },
      { step: '04', title: 'Backend', desc: 'Configure MQTT broker and create telemetry receiver service.' },
      { step: '05', title: 'Database', desc: 'Store time-series soil readings and pump actuation events.' },
      { step: '06', title: 'Frontend', desc: 'Build live status dashboard showing soil moisture gauge and controls.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Host MQTT subscriber and dashboard on AWS cloud server.' },
      { step: '08', title: 'Testing', desc: 'Simulate drying soil and verify automated pump switching.' },
      { step: '09', title: 'Documentation', desc: 'Complete IEEE project report and circuit wiring schematics.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva responses explaining capacitive sensing and MQTT.' }
    ]
  },

  // 3. FLAGSHIP 3: Smart Energy Monitoring System
  {
    id: 'proj-3',
    title: 'Smart Energy Monitoring System',
    slug: 'smart-energy-monitoring',
    tagline: 'IoT + Cloud non-invasive AC power telemetry with real-time kWh and Grafana analytics',
    description: 'An industrial-grade energy auditing apparatus using non-invasive current sensors and ESP32 to measure true RMS voltage, current, power factor, and cumulative kWh streamed to AWS Cloud.',
    problem: 'Industrial and residential facilities face massive electricity wastage and unexpected peak tariff penalties due to lack of real-time appliance-level power observability.',
    solution: 'A non-invasive clip-on current monitor that measures real-time electrical parameters without cutting live mains conductors, streaming time-series metrics to cloud dashboards.',
    howItWorks: 'Split-core current transformer clamps detect electromagnetic flux. An ADS1115 16-bit ADC samples AC waveforms, ESP32 calculates RMS power, and metrics stream to an InfluxDB time-series database on AWS.',
    branch: ['EEE', 'ECE', 'CSE'],
    category: 'IoT',
    projectType: 'Major Project',
    technologies: ['ESP32', 'Current Sensor', 'AWS', 'InfluxDB', 'Grafana', 'Docker'],
    difficulty: 'Intermediate',
    budget: '₹2,500–₹4,500',
    budgetDisplay: '₹2,500–₹4,500',
    budgetMin: 2500,
    budgetMax: 4500,
    duration: '3–5 weeks',
    teamSize: '2–3',
    hardware: ['ESP32 Wi-Fi Board', 'SCT-013-000 100A Split-Core CT', 'ADS1115 16-Bit I2C ADC', 'Burden Resistors & Voltage Divider', '5V Power Supply'],
    software: ['EmonLib C++ Library', 'InfluxDB 2.x Time-Series DB', 'Grafana Dashboard', 'Docker on AWS EC2'],
    features: [
      'Non-invasive split-core CT clipping onto live conductors safely',
      'True RMS current, apparent power, and kilowatt-hour tracking',
      '16-bit high-resolution ADC sampling for low-current precision',
      'Real-time Grafana dashboard with live load widgets',
      'Surge alerts and peak load notification triggers'
    ],
    architecture: 'SCT-013 CT Sensor → ADS1115 16-bit ADC → ESP32 Wi-Fi Node → InfluxDB Line Protocol → AWS Cloud Server → Grafana Live Dashboard',
    architectureSteps: ['SCT-013 CT Sensor', 'ADS1115 16-bit ADC', 'ESP32 Wi-Fi Node', 'InfluxDB Line Protocol', 'AWS Cloud Server', 'Grafana Live Dashboard'],
    requirements: ['AC electrical fundamentals (RMS, Power Factor)', 'Safe non-invasive sensor clipping'],
    learningOutcomes: ['Analog signal conditioning for AC circuits', 'Time-series database modeling', 'Industrial cloud telemetry visualization'],
    tags: ['IoT', 'Energy', 'AWS', 'Grafana', 'EEE'],
    defaultMatch: 91,
    isFlagship: true,
    visualSummary: 'Energy meter + ESP32 + dashboard',
    galleryVisuals: [
      { title: 'Split-Core CT Sensor', subtitle: 'Non-Invasive 100A AC Transformer & ADS1115 ADC', type: 'hardware', accentColor: '#38bdf8' },
      { title: 'Telemetry Data Pipeline', subtitle: 'ESP32 → InfluxDB Line Protocol → AWS EC2', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Grafana Power Dashboard', subtitle: 'Real-time Wattage, Power Factor, and Tariff Graphs', type: 'dashboard', accentColor: '#ec4899' },
      { title: 'Industrial Container Stack', subtitle: 'Docker-Compose with InfluxDB & Grafana Services', type: 'deployment', accentColor: '#10b981' },
    ],
    gallery: {
      overview: '/projects/smart-energy-monitoring/overview.webp',
      hardware: '/projects/smart-energy-monitoring/hardware.webp',
      architecture: '/projects/smart-energy-monitoring/architecture.webp',
      dashboard: '/projects/smart-energy-monitoring/dashboard.webp',
      deployment: '/projects/smart-energy-monitoring/deployment.webp',
      prototype: '/projects/smart-energy-monitoring/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why is an external 16-bit ADC (ADS1115) used instead of the internal ESP32 ADC?', answer: 'The internal ESP32 SAR ADC has non-linearity issues below 0.1V and above 2.8V and significant electrical noise. The ADS1115 provides a calibrated 16-bit delta-sigma ADC with programmable gain amplifier, giving clean waveform reproduction across small currents.' },
      { question: 'What is the difference between Apparent Power and Real Power?', answer: 'Real power (Watts) is the actual energy consumed by resistive loads. Apparent power (VA) is the product of RMS voltage and RMS current. The ratio between them is the Power Factor (PF = Real Power / Apparent Power).' }
    ],
    bom: [
      { component: 'SCT-013-000 100A CT', specs: 'Non-invasive split core transformer', qty: 2, estCost: 650 },
      { component: 'ADS1115 I2C ADC Module', specs: '16-bit 4-channel with PGA', qty: 1, estCost: 260 },
      { component: 'ESP32 Dev Board', specs: '30-pin dual-core Wi-Fi', qty: 1, estCost: 450 },
      { component: 'Burden Resistors & Capacitors', specs: 'Precision 1% metal film resistors', qty: 1, estCost: 80 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Determine peak current limits and measurement accuracy goals.' },
      { step: '02', title: 'Circuit Design', desc: 'Build DC bias offset divider to map AC sine waves to 0-3.3V ADC.' },
      { step: '03', title: 'Firmware', desc: 'Implement RMS discrete integration over 50Hz mains cycles.' },
      { step: '04', title: 'Backend', desc: 'Setup InfluxDB bucket and write credentials.' },
      { step: '05', title: 'Database', desc: 'Configure retention policies for 1-second time-series metrics.' },
      { step: '06', title: 'Frontend', desc: 'Design Grafana dashboard widgets with gauges and charts.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy Docker container stack onto AWS EC2.' },
      { step: '08', title: 'Testing', desc: 'Calibrate current readings against a certified clamp multimeter.' },
      { step: '09', title: 'Documentation', desc: 'Compile project report including circuit schematic and formulas.' },
      { step: '10', title: 'Viva', desc: 'Practice explaining burden resistor calculations and power factor.' }
    ]
  },

  // 4. EV Charging Monitoring System
  {
    id: 'proj-4',
    title: 'EV Charging Monitoring System',
    slug: 'ev-charging-monitoring',
    tagline: 'Smart EV charging telemetry, billing calculator, and peak-load curtailment controller',
    description: 'An Electric Vehicle charging station telemetry node that monitors power factor, kWh consumption, dynamic current throttling, and automated user billing schedules.',
    problem: 'Simultaneous EV charging creates grid transformer overloads and high demand peaks, while station operators need automated billing based on energy consumed.',
    solution: 'An intelligent EV charging controller that dynamically throttles charging current during peak demand hours and provides automated billing through cloud telemetry.',
    howItWorks: 'A PZEM-004T energy meter communicates with an ESP32 over UART. The ESP32 evaluates grid load, switches solid-state relays, and streams live charging parameters to a cloud portal.',
    branch: ['EEE', 'ECE', 'CSE'],
    category: 'IoT',
    projectType: 'Major Project',
    technologies: ['ESP32', 'Energy Meter', 'Cloud', 'Node.js', 'WebSockets'],
    difficulty: 'Advanced',
    budget: '₹3,000–₹6,000',
    budgetDisplay: '₹3,000–₹6,000',
    budgetMin: 3000,
    budgetMax: 6000,
    duration: '4–6 weeks',
    teamSize: '2–4',
    hardware: ['ESP32 Board', 'PZEM-004T v3.0 AC Multi-function Module', '100A Split-Core CT', 'Solid State Relay (SSR) 40A', 'Heatsink & Enclosure Box'],
    software: ['C++ Firmware', 'WebSockets', 'Node.js Backend', 'Tailwind CSS & Chart.js', 'PostgreSQL'],
    features: ['True RMS Voltage, Current, and kWh measurement', 'Dynamic load curtailment to prevent transformer overloads', 'Automated billing calculation with peak/off-peak rates', 'Emergency over-voltage and thermal safety interlocks'],
    architecture: 'PZEM-004T Meter → ESP32 UART Bus → WebSockets Stream → Node.js Backend → PostgreSQL DB → EV Admin Portal',
    architectureSteps: ['PZEM-004T Meter', 'ESP32 UART Bus', 'WebSockets Stream', 'Node.js Backend', 'PostgreSQL DB', 'EV Admin Portal'],
    requirements: ['High-voltage safety precautions', 'UART serial communication basics'],
    learningOutcomes: ['AC power systems monitoring', 'Industrial safety relay control', 'Real-time billing calculation logic'],
    tags: ['EV', 'IoT', 'Energy Meter', 'Cloud', 'EEE'],
    defaultMatch: 88,
    visualSummary: 'EV charger + monitoring dashboard',
    galleryVisuals: [
      { title: 'UART Meter Interface', subtitle: 'PZEM-004T Multi-function AC Power Sensor', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'Charging Gateway Flow', subtitle: 'ESP32 → WebSockets → PostgreSQL → Dashboard', type: 'architecture', accentColor: '#38bdf8' },
      { title: 'Billing & Telemetry UI', subtitle: 'Real-time kWh Counter and Tariff Estimator', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Enclosure Setup', subtitle: '40A Solid State Relay with Thermal Heatsink', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/ev-charging-monitoring/overview.webp',
      hardware: '/projects/ev-charging-monitoring/hardware.webp',
      architecture: '/projects/ev-charging-monitoring/architecture.webp',
      dashboard: '/projects/ev-charging-monitoring/dashboard.webp',
      deployment: '/projects/ev-charging-monitoring/deployment.webp',
      prototype: '/projects/ev-charging-monitoring/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'How does PZEM-004T measure power factor?', answer: 'PZEM-004T uses an integrated metering ASIC that detects zero-crossing points of voltage and current waveforms to measure phase shift angle φ, calculating power factor as cos(φ).' }
    ],
    bom: [
      { component: 'PZEM-004T v3.0 + 100A CT', specs: '80-260VAC TTL UART module', qty: 1, estCost: 850 },
      { component: 'ESP32 Wi-Fi Controller', specs: '30-pin board', qty: 1, estCost: 450 },
      { component: 'SSR-40DA Solid State Relay', specs: 'Output 24-380VAC 40A', qty: 1, estCost: 480 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define charging current limits and billing calculation rules.' },
      { step: '02', title: 'Circuit Design', desc: 'Wire PZEM-004T to ESP32 UART and wire relay driver.' },
      { step: '03', title: 'Firmware', desc: 'Read voltage, current, and active power registers via serial.' },
      { step: '04', title: 'Backend', desc: 'Build Node.js API with WebSocket streaming.' },
      { step: '05', title: 'Database', desc: 'Create tables for charging sessions, kWh consumed, and invoices.' },
      { step: '06', title: 'Frontend', desc: 'Design live EV charging telemetry screen with stop/start controls.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Host server and database on cloud VM.' },
      { step: '08', title: 'Testing', desc: 'Test over-current curtailment under simulated heavy electrical loads.' },
      { step: '09', title: 'Documentation', desc: 'Write complete user guide, circuit diagram, and report.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva explanations on AC metering and SSR switching.' }
    ]
  },

  // 5. IoT Smart Home Automation
  {
    id: 'proj-5',
    title: 'IoT Smart Home Automation',
    slug: 'iot-smart-home-automation',
    tagline: 'Multi-appliance home automation hub with relay control, manual wall switch sync, and Firebase/MQTT',
    description: 'A cloud-connected smart home controller using ESP32 and optoisolated relays to control 230V AC home appliances via mobile app, local web interface, or physical toggle switches.',
    problem: 'Traditional home automation kits are expensive, proprietary, and fail when internet connections drop or when manual wall switches are toggled out-of-sync.',
    solution: 'A hybrid smart automation module that supports both cloud app control and physical 2-way switch inputs, syncing state seamlessly across all interfaces.',
    howItWorks: 'The ESP32 reads physical switch states on GPIO interrupt pins and listens for cloud commands via MQTT/Firebase. It toggles optocoupled relays and broadcasts updated state to mobile dashboards.',
    branch: ['ECE', 'EEE', 'CSE'],
    category: 'IoT',
    projectType: 'Mini Project',
    technologies: ['ESP32', 'Relay', 'MQTT', 'Firebase', 'Mobile'],
    difficulty: 'Beginner',
    budget: '₹1,500–₹3,000',
    budgetDisplay: '₹1,500–₹3,000',
    budgetMin: 1500,
    budgetMax: 3000,
    duration: '2–3 weeks',
    teamSize: '1–3',
    hardware: ['ESP32 NodeMCU', '4-Channel 5V Optocoupler Relay Board', 'Push Button Switches', 'AC 230V to 5V Hi-Link Power Module', 'Enclosure Box'],
    software: ['Arduino C++', 'Firebase Realtime Database / MQTT', 'Flutter / Responsive Web App'],
    features: ['Control 4 appliances remotely from anywhere in the world', 'Physical switch state sync without software desynchronization', 'Voice control integration via Google Home / Alexa webhook', 'Timer and scheduler routines for automated light switching'],
    architecture: 'Wall Switch / Mobile App → ESP32 Controller → Firebase / MQTT Broker → 4-Channel Relay Board → 230V Home Appliances',
    architectureSteps: ['Wall Switch / Mobile App', 'ESP32 Controller', 'Firebase / MQTT Broker', '4-Channel Relay Board', '230V Home Appliances'],
    requirements: ['Relay wiring safety when handling mains AC', 'Basic C++ coding'],
    learningOutcomes: ['GPIO interrupt handling for manual switches', 'Cloud database real-time listeners', 'Safe AC load switching'],
    tags: ['IoT', 'Home Automation', 'ESP32', 'Firebase', 'Relay'],
    defaultMatch: 94,
    visualSummary: 'ESP32 + appliances + mobile UI',
    galleryVisuals: [
      { title: '4-Channel Relay Node', subtitle: 'Optocoupled 10A Relays with Hi-Link Power Supply', type: 'hardware', accentColor: '#10b981' },
      { title: 'Dual Control Architecture', subtitle: 'Physical Wall Switch + Cloud Real-Time Database', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Mobile Control Dashboard', subtitle: 'One-Tap Toggle UI with Scheduling & Timer Controls', type: 'dashboard', accentColor: '#818cf8' },
      { title: 'In-Wall Installation', subtitle: 'Compact PCB Module Fitting Standard Switchboard Gang Boxes', type: 'deployment', accentColor: '#f59e0b' },
    ],
    gallery: {
      overview: '/projects/iot-smart-home-automation/overview.webp',
      hardware: '/projects/iot-smart-home-automation/hardware.webp',
      architecture: '/projects/iot-smart-home-automation/architecture.webp',
      dashboard: '/projects/iot-smart-home-automation/dashboard.webp',
      deployment: '/projects/iot-smart-home-automation/deployment.webp',
      prototype: '/projects/iot-smart-home-automation/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'How do you keep physical wall switch state synchronized with the mobile app?', answer: 'We connect physical wall switches to ESP32 digital input pins configured with CHANGE interrupts. When a wall switch toggles, the interrupt fires, inverts the relay state, and immediately pushes the new state to the cloud.' }
    ],
    bom: [
      { component: 'ESP32 DevKit', specs: 'Wi-Fi + BLE dual core', qty: 1, estCost: 450 },
      { component: '4-Channel Relay Board', specs: '10A 250VAC with optocouplers', qty: 1, estCost: 220 },
      { component: 'HLK-PM01 AC-DC Module', specs: '230VAC to 5VDC 600mA', qty: 1, estCost: 220 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'List target appliances and determine wattage ratings.' },
      { step: '02', title: 'Circuit Design', desc: 'Wire relay control pins and setup optocoupler isolation.' },
      { step: '03', title: 'Firmware', desc: 'Implement GPIO change interrupts and MQTT connection.' },
      { step: '04', title: 'Backend', desc: 'Set up Firebase Realtime DB rules and auth.' },
      { step: '05', title: 'Database', desc: 'Store appliance state schema (true/false/timers).' },
      { step: '06', title: 'Frontend', desc: 'Create mobile dashboard with switch cards.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy cloud functions for notifications.' },
      { step: '08', title: 'Testing', desc: 'Verify physical switch and mobile app concurrent toggles.' },
      { step: '09', title: 'Documentation', desc: 'Create wiring diagram, PPT, and report.' },
      { step: '10', title: 'Viva', desc: 'Practice explaining optocoupler electrical isolation.' }
    ]
  },

  // 6. IoT Fire & Gas Detection System
  {
    id: 'proj-6',
    title: 'IoT Fire & Gas Detection System',
    slug: 'iot-fire-gas-detection',
    tagline: 'Life-safety IoT detector with MQ-2 gas sensor, flame detection, GSM emergency alerts, and cloud telemetry',
    description: 'An emergency safety apparatus that senses LPG, smoke, and open flames, automatically activates ventilation exhaust relays, sounds loud alarms, and dispatches SMS alerts via GSM.',
    problem: 'Industrial and domestic gas leaks cause catastrophic explosions when undetected, and standard local buzzers are useless if premises are unoccupied.',
    solution: 'An intelligent safety sentinel that detects hazardous gas PPM thresholds and open flames, triggering immediate exhaust dissipation and automated cellular emergency alerts.',
    howItWorks: 'An MQ-2 sensor measures hydrocarbon gas concentration while an IR flame sensor checks for fires. The ESP32 triggers exhaust relays and dispatches urgent SMS alerts through GSM/Cloud webhooks.',
    branch: ['ECE', 'EEE', 'Mechanical'],
    category: 'IoT',
    projectType: 'Mini Project',
    technologies: ['ESP32', 'MQ Sensors', 'GSM', 'Cloud', 'Relay'],
    difficulty: 'Beginner',
    budget: '₹1,500–₹3,000',
    budgetDisplay: '₹1,500–₹3,000',
    budgetMin: 1500,
    budgetMax: 3000,
    duration: '2–3 weeks',
    teamSize: '1–2',
    hardware: ['ESP32 NodeMCU', 'MQ-2 Combustible Gas & Smoke Sensor', 'Infrared Flame Sensor', 'SIM800L GSM Module', '5V Relay for Exhaust Fan', 'Piezo Active Buzzer'],
    software: ['Arduino C++', 'Twilio / GSM AT Commands', 'Thingspeak / Cloud Dashboard'],
    features: ['Sub-second gas PPM detection for LPG, Propane, and Smoke', 'Optical flame detection sensitive to 760nm-1100nm infrared spectrum', 'Automatic relay trigger powering exhaust ventilation fan', 'Emergency SMS and call dispatched to building manager phone'],
    architecture: 'MQ-2 & Flame Sensors → ESP32 Controller → Buzzer & Relay Exhaust → GSM Module / Cloud → Manager Mobile Alert',
    architectureSteps: ['MQ-2 & Flame Sensors', 'ESP32 Controller', 'Buzzer & Relay Exhaust', 'GSM Module / Cloud', 'Manager Mobile Alert'],
    requirements: ['Breadboard prototyping basics', 'Sensor preheat calibration awareness'],
    learningOutcomes: ['Gas sensor analog calibration curves', 'Cellular AT command automation', 'Emergency life-safety control logic'],
    tags: ['IoT', 'Safety', 'ESP32', 'Sensors', 'GSM'],
    defaultMatch: 93,
    visualSummary: 'Sensors + alert dashboard',
    galleryVisuals: [
      { title: 'Gas & Flame Detector Node', subtitle: 'MQ-2 + Infrared Flame Sensor + Active Buzzer', type: 'hardware', accentColor: '#f59e0b' },
      { title: 'Safety Signal Pipeline', subtitle: 'Sensor Threshold → Hardware Interlock → GSM SMS Alert', type: 'architecture', accentColor: '#ec4899' },
      { title: 'Live PPM Telemetry UI', subtitle: 'Ambient Gas Concentration Gauge & Hazard History', type: 'dashboard', accentColor: '#00d2ff' },
      { title: 'Ventilation Relay Unit', subtitle: 'Automatic 12V Exhaust Fan Trigger & Siren', type: 'deployment', accentColor: '#10b981' },
    ],
    gallery: {
      overview: '/projects/iot-fire-gas-detection/overview.webp',
      hardware: '/projects/iot-fire-gas-detection/hardware.webp',
      architecture: '/projects/iot-fire-gas-detection/architecture.webp',
      dashboard: '/projects/iot-fire-gas-detection/dashboard.webp',
      deployment: '/projects/iot-fire-gas-detection/deployment.webp',
      prototype: '/projects/iot-fire-gas-detection/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why does an MQ-2 sensor require a preheating cycle before calibration?', answer: 'MQ-2 uses a tin dioxide (SnO2) sensing layer that must reach an internal operating temperature of around 200-300°C for oxygen ions to absorb on its surface, stabilizing the baseline resistance Ro.' }
    ],
    bom: [
      { component: 'MQ-2 Gas Sensor', specs: 'LPG, Propane, Methane, Smoke', qty: 1, estCost: 160 },
      { component: 'Flame Sensor Module', specs: 'IR phototransistor 60° angle', qty: 1, estCost: 90 },
      { component: 'ESP32 Board', specs: 'Wi-Fi controller', qty: 1, estCost: 450 },
      { component: 'SIM800L GSM Module', specs: 'Quad-band cellular module', qty: 1, estCost: 420 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define PPM hazard limits and emergency alert contact numbers.' },
      { step: '02', title: 'Circuit Design', desc: 'Wire gas sensor, flame sensor, and buzzer to ESP32.' },
      { step: '03', title: 'Firmware', desc: 'Implement sensor warm-up delay and threshold check loop.' },
      { step: '04', title: 'Backend', desc: 'Setup cloud webhook for SMS alerts.' },
      { step: '05', title: 'Database', desc: 'Log historical gas PPM readings and trigger events.' },
      { step: '06', title: 'Frontend', desc: 'Create real-time safety status gauge.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Configure cloud alerts and uptime monitoring.' },
      { step: '08', title: 'Testing', desc: 'Test with lighter gas and candle flame under controlled conditions.' },
      { step: '09', title: 'Documentation', desc: 'Compile project report and circuit schematics.' },
      { step: '10', title: 'Viva', desc: 'Prepare answers on electrochemical gas sensing physics.' }
    ]
  },

  // 7. Smart Street Light System
  {
    id: 'proj-7',
    title: 'Smart Street Light System',
    slug: 'smart-street-light-system',
    tagline: 'Energy-efficient municipal lighting with LDR daylight sensing and PIR motion dynamic dimming',
    description: 'An automated energy-conserving street lighting network that dims lights to 20% during quiet night hours and ramps brightness to 100% when vehicles or pedestrians approach.',
    problem: 'Municipal street lights burn at 100% capacity throughout the entire night regardless of traffic, wasting millions of kilowatt-hours and straining municipal budgets.',
    solution: 'An intelligent street lighting controller that uses LDR photoresistors for dusk-to-dawn switching and PIR motion sensors to modulate brightness via PWM duty cycle.',
    howItWorks: 'An LDR detects sunset. When dark, lights turn on at 20% idle brightness. As pedestrians or vehicles trigger PIR sensors, the microcontroller ramps the PWM signal to 100% for 30 seconds.',
    branch: ['ECE', 'EEE', 'Mechanical'],
    category: 'Embedded',
    projectType: 'Mini Project',
    technologies: ['Arduino/ESP32', 'LDR', 'PIR', 'PWM', 'Relay'],
    difficulty: 'Beginner',
    budget: '₹800–₹2,000',
    budgetDisplay: '₹800–₹2,000',
    budgetMin: 800,
    budgetMax: 2000,
    duration: '1–2 weeks',
    teamSize: '1–2',
    hardware: ['Arduino Uno / ESP32', 'LDR Light Sensor', 'HC-SR501 PIR Motion Sensors (x2)', 'High-power 1W White LEDs', 'TIP122 Darlington Transistors', 'Resistor Divider'],
    software: ['Arduino C++', 'Fritzing Schematics'],
    features: ['Automatic daylight lockout preventing daytime light operation', 'Smooth PWM dimming transitions (20% idle, 100% detected)', 'Up to 45% municipal energy savings compared to timer lighting', 'Low-cost build ideal for rapid 1-2 week semester deliverables'],
    architecture: 'LDR & PIR Sensors → Microcontroller Analog & Digital IO → PWM Dimming Comparator → Power Transistor Driver → LED Street Light Array',
    architectureSteps: ['LDR & PIR Sensors', 'Microcontroller Analog & Digital IO', 'PWM Dimming Comparator', 'Power Transistor Driver', 'LED Street Light Array'],
    requirements: ['Basic electronics and resistor divider circuits'],
    learningOutcomes: ['PWM duty cycle modulation', 'Comparator circuits and hysteresis', 'Power transistor switching'],
    tags: ['Embedded', 'Energy Saving', 'Arduino', 'ESP32', 'Beginner'],
    defaultMatch: 96,
    visualSummary: 'Street lights + LDR + ESP32',
    galleryVisuals: [
      { title: 'Lighting Sensor Module', subtitle: 'LDR Photoresistor & HC-SR501 PIR Motion Sensor', type: 'hardware', accentColor: '#f59e0b' },
      { title: 'PWM Dimming Control Logic', subtitle: 'Ambient Lux Comparator → PWM Duty Cycle Controller', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Energy Savings Meter', subtitle: 'Cumulative kWh Comparison (Standard vs Dynamic PWM)', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Breadboard Road Mockup', subtitle: 'Miniature Street Pole Mockup with Multi-Zone Switching', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/smart-street-light-system/overview.webp',
      hardware: '/projects/smart-street-light-system/hardware.webp',
      architecture: '/projects/smart-street-light-system/architecture.webp',
      dashboard: '/projects/smart-street-light-system/dashboard.webp',
      deployment: '/projects/smart-street-light-system/deployment.webp',
      prototype: '/projects/smart-street-light-system/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'How is energy savings calculated for this system?', answer: 'Standard 150W streetlights run 12 hours at full power = 1.8 kWh/pole/night. With dynamic PWM dimming to 20% (30W) during 12AM-5AM low-traffic hours, consumption drops to ~0.96 kWh, yielding 46% energy savings.' }
    ],
    bom: [
      { component: 'Arduino Nano V3', specs: 'ATmega328P mini board', qty: 1, estCost: 280 },
      { component: 'PIR Sensor HC-SR501', specs: 'Passive infrared sensor', qty: 2, estCost: 160 },
      { component: 'LDR & Transistor Kit', specs: 'LDR + TIP122 + LEDs', qty: 1, estCost: 140 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define daylight lux thresholds and idle dimming percentage.' },
      { step: '02', title: 'Circuit Design', desc: 'Build resistor divider for LDR and connect PIR digital out.' },
      { step: '03', title: 'Firmware', desc: 'Write analogRead() comparator and analogWrite() PWM ramps.' },
      { step: '04', title: 'Backend', desc: 'Optional serial telemetry logger.' },
      { step: '05', title: 'Database', desc: 'Store energy savings logs.' },
      { step: '06', title: 'Frontend', desc: 'Miniature road model demonstration setup.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Document standalone embedded operation.' },
      { step: '08', title: 'Testing', desc: 'Test motion trigger distance and light level transitions.' },
      { step: '09', title: 'Documentation', desc: 'Prepare circuit schematic, PPT slides, and report.' },
      { step: '10', title: 'Viva', desc: 'Rehearse PWM frequency and power savings math.' }
    ]
  },

  // 8. Smart Waste Management System
  {
    id: 'proj-8',
    title: 'Smart Waste Management System',
    slug: 'smart-waste-management',
    tagline: 'IoT fill-level monitoring with ultrasonic sensors, GPS route optimization, and municipal cloud dashboard',
    description: 'An intelligent municipal waste monitoring network where public trash bins measure fill levels in real-time, streaming GPS coordinates to optimize municipal garbage truck collection routes.',
    problem: 'Garbage trucks follow fixed routes daily, collecting half-empty bins while overflowing dumpsters cause public health hazards and pest infestations.',
    solution: 'Smart bins equipped with ultrasonic level sensors and GPS that notify municipal dispatchers when bins reach 80% capacity, dynamically generating fuel-efficient collection routes.',
    howItWorks: 'An ultrasonic sensor on the bin lid calculates fill percentage. When capacity exceeds 80%, the ESP32 attaches GPS coordinates and sends an alert over cellular/Wi-Fi to the central dispatcher dashboard.',
    branch: ['CSE', 'IT', 'ECE'],
    category: 'IoT',
    projectType: 'Major Project',
    technologies: ['ESP32', 'Ultrasonic', 'GPS', 'Cloud', 'Node.js', 'Google Maps API'],
    difficulty: 'Intermediate',
    budget: '₹2,000–₹4,000',
    budgetDisplay: '₹2,000–₹4,000',
    budgetMin: 2000,
    budgetMax: 4000,
    duration: '3–5 weeks',
    teamSize: '2–4',
    hardware: ['ESP32 DevKit', 'JSN-SR04T Waterproof Ultrasonic Sensor', 'NEO-6M GPS Module', '18650 Li-ion Battery & TP4056 Charger', 'Sealed Enclosure'],
    software: ['Arduino C++', 'Node.js REST API', 'Leaflet / Google Maps API', 'MongoDB Atlas'],
    features: ['Waterproof ultrasonic sensor measuring bin depth without moisture damage', 'Real-time bin fill percentage calculation with tilt/vandalism detection', 'Interactive municipal map visualizing red/yellow/green bin statuses', 'Dynamic traveling salesman route optimization for collection trucks'],
    architecture: 'Ultrasonic & GPS Sensors → ESP32 Wi-Fi/GSM → Cloud REST API → MongoDB Store → Municipal Dispatcher Map',
    architectureSteps: ['Ultrasonic & GPS Sensors', 'ESP32 Wi-Fi/GSM', 'Cloud REST API', 'MongoDB Store', 'Municipal Dispatcher Map'],
    requirements: ['Ultrasonic distance calculation principles', 'Basic web mapping (Leaflet/Maps)'],
    learningOutcomes: ['Low-power deep sleep battery optimization', 'Geographic coordinate parsing (NMEA GPS)', 'Fleet route optimization algorithms'],
    tags: ['IoT', 'Smart City', 'GPS', 'Ultrasonic', 'Cloud'],
    defaultMatch: 89,
    visualSummary: 'Smart bin + sensors + monitoring',
    galleryVisuals: [
      { title: 'Waterproof Bin Node', subtitle: 'JSN-SR04T Sonar Sensor & NEO-6M GPS Tracker', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'Municipal Telemetry Flow', subtitle: 'Bin Node → Cloud Ingestion → Route Optimization Engine', type: 'architecture', accentColor: '#38bdf8' },
      { title: 'City Bin Dispatcher Map', subtitle: 'Live Leaflet Map with Color-Coded Capacity Markers', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Rugged Enclosure', subtitle: 'Battery-Powered IP65 Weatherproof Bin Lid Mount', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/smart-waste-management/overview.webp',
      hardware: '/projects/smart-waste-management/hardware.webp',
      architecture: '/projects/smart-waste-management/architecture.webp',
      dashboard: '/projects/smart-waste-management/dashboard.webp',
      deployment: '/projects/smart-waste-management/deployment.webp',
      prototype: '/projects/smart-waste-management/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why use JSN-SR04T instead of HC-SR04 for waste bins?', answer: 'HC-SR04 has open transducer cones vulnerable to moisture, dust, and acidic fumes from decomposing organic garbage. JSN-SR04T has an integrated sealed waterproof probe designed for harsh environments.' }
    ],
    bom: [
      { component: 'JSN-SR04T Waterproof Sonar', specs: '20cm - 600cm sealed probe', qty: 1, estCost: 550 },
      { component: 'NEO-6M GPS Module', specs: 'UART GPS with ceramic antenna', qty: 1, estCost: 450 },
      { component: 'ESP32 Controller', specs: 'Low power sleep support', qty: 1, estCost: 450 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define bin dimensions and fill threshold percentages.' },
      { step: '02', title: 'Circuit Design', desc: 'Wire waterproof ultrasonic and GPS to hardware serial.' },
      { step: '03', title: 'Firmware', desc: 'Write depth calculation and deep sleep wake-up timers.' },
      { step: '04', title: 'Backend', desc: 'Build Node.js API to receive bin fill reports.' },
      { step: '05', title: 'Database', desc: 'Store bin coordinates, capacities, and timestamps.' },
      { step: '06', title: 'Frontend', desc: 'Plot bins on interactive city map with color indicators.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy map web app on cloud server.' },
      { step: '08', title: 'Testing', desc: 'Test fill detection with cardboard debris at varying angles.' },
      { step: '09', title: 'Documentation', desc: 'Compile report, circuit diagrams, and PPT.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva answers on route optimization and sensor durability.' }
    ]
  },

  // 9. RFID Smart Attendance System
  {
    id: 'proj-9',
    title: 'RFID Smart Attendance System',
    slug: 'rfid-smart-attendance',
    tagline: 'Contactless student attendance logger with RC522 RFID, MySQL database, and faculty web portal',
    description: 'An automated academic attendance logger where students tap RFID ID cards to instantly record attendance timestamps into a central MySQL database with web reporting.',
    problem: 'Manual roll calls consume 10-15 minutes of every lecture hour and are prone to proxy attendance and manual ledger errors.',
    solution: 'A contactless RFID attendance terminal that reads student smart cards in under 500ms, immediately logging attendance into a central database and alerting absentees.',
    howItWorks: 'The RC522 reader extracts the unique 4-byte UID from student RFID cards. The ESP32 checks credentials against a local cache, displays the student name on an LCD, and POSTs records to MySQL.',
    branch: ['CSE', 'IT', 'ECE'],
    category: 'Embedded',
    projectType: 'Mini Project',
    technologies: ['ESP32', 'RFID', 'MySQL', 'Web', 'PHP/Node.js'],
    difficulty: 'Beginner',
    budget: '₹1,500–₹3,000',
    budgetDisplay: '₹1,500–₹3,000',
    budgetMin: 1500,
    budgetMax: 3000,
    duration: '2–3 weeks',
    teamSize: '1–2',
    hardware: ['ESP32 DevKit', 'RC522 13.56MHz RFID Reader', '13.56MHz RFID Cards/Keyfobs (x5)', 'I2C 16x2 LCD Display', 'Buzzer & Status LEDs'],
    software: ['Arduino C++', 'Node.js or PHP Backend', 'MySQL Database', 'Tailwind CSS Admin Portal'],
    features: ['Instant contactless card tap logging under 500ms', 'I2C LCD feedback displaying student name and roll number', 'Automated percentage calculation per subject with low-attendance warnings', 'CSV / Excel report export for college faculty and department heads'],
    architecture: 'RFID Card Tap → RC522 SPI Reader → ESP32 Controller → REST API Post → MySQL Attendance Table → Faculty Web Portal',
    architectureSteps: ['RFID Card Tap', 'RC522 SPI Reader', 'ESP32 Controller', 'REST API Post', 'MySQL Attendance Table', 'Faculty Web Portal'],
    requirements: ['SPI bus communication fundamentals', 'Basic SQL table operations'],
    learningOutcomes: ['RFID transponder protocols (ISO 14443A)', 'Embedded HTTP client requests', 'Relational database schema modeling for academic records'],
    tags: ['Embedded', 'RFID', 'MySQL', 'Web', 'Attendance'],
    defaultMatch: 95,
    visualSummary: 'RFID reader + student card + dashboard',
    galleryVisuals: [
      { title: 'RFID Tap Terminal', subtitle: 'RC522 13.56MHz Reader with I2C LCD Display', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'Attendance Dataflow', subtitle: 'Card UID → ESP32 SPI → REST API → MySQL Database', type: 'architecture', accentColor: '#38bdf8' },
      { title: 'Faculty Attendance Portal', subtitle: 'Automated Subject Attendance Percentage & CSV Export', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Classroom Mounting Mockup', subtitle: 'Compact Standalone Desk Terminal with Audio Confirmation', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/rfid-smart-attendance/overview.webp',
      hardware: '/projects/rfid-smart-attendance/hardware.webp',
      architecture: '/projects/rfid-smart-attendance/architecture.webp',
      dashboard: '/projects/rfid-smart-attendance/dashboard.webp',
      deployment: '/projects/rfid-smart-attendance/deployment.webp',
      prototype: '/projects/rfid-smart-attendance/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'What frequency does the RC522 RFID reader operate at and what protocol does it use?', answer: 'RC522 operates at high-frequency 13.56MHz using the ISO/IEC 14443A protocol, communicating with the microcontroller via SPI (Serial Peripheral Interface) bus.' }
    ],
    bom: [
      { component: 'RC522 RFID Kit', specs: '13.56MHz module + 5 cards', qty: 1, estCost: 260 },
      { component: 'ESP32 Controller', specs: 'Wi-Fi enabled', qty: 1, estCost: 450 },
      { component: '1602 LCD with I2C', specs: 'PCF8574 driver', qty: 1, estCost: 220 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define attendance schema (RollNo, Time, Date, Subject).' },
      { step: '02', title: 'Circuit Design', desc: 'Wire RC522 to ESP32 SPI pins (MOSI, MISO, SCK, SS).' },
      { step: '03', title: 'Firmware', desc: 'Read 4-byte card UID and trigger confirmation buzzer.' },
      { step: '04', title: 'Backend', desc: 'Build API endpoint to handle attendance POSTs.' },
      { step: '05', title: 'Database', desc: 'Create MySQL database with Students and Attendance tables.' },
      { step: '06', title: 'Frontend', desc: 'Design faculty attendance dashboard with date filters.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy database and API onto server.' },
      { step: '08', title: 'Testing', desc: 'Simulate batch student card tapping and check for duplicate scans.' },
      { step: '09', title: 'Documentation', desc: 'Write complete user guide, PPT slides, and report.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva answers explaining SPI bus communication.' }
    ]
  },

  // 10. IoT Environmental Monitoring
  {
    id: 'proj-10',
    title: 'IoT Environmental Monitoring',
    slug: 'iot-environmental-monitoring',
    tagline: 'Continuous ambient air quality and weather telemetry with DHT22, MQ-135, and AWS IoT Core',
    description: 'A meteorological and air pollution sensing station monitoring temperature, humidity, air quality index (AQI), and harmful gas levels (CO2, Ammonia, Benzene) streamed to AWS.',
    problem: 'Indoor and urban outdoor spaces suffer from invisible toxic gas buildups (CO2, NH3, Benzene) that degrade cognitive performance and cause chronic respiratory illness.',
    solution: 'A continuous environmental monitoring station that calculates real-time Air Quality Index (AQI) and alerts facility occupants when CO2 or volatile compounds exceed healthy thresholds.',
    howItWorks: 'DHT22 measures temperature and humidity, while an MQ-135 sensor measures toxic gas concentrations. The ESP32 applies calibration math, computes AQI, and streams telemetry to AWS IoT.',
    branch: ['ECE', 'EEE', 'CSE'],
    category: 'IoT',
    projectType: 'Mini Project',
    technologies: ['ESP32', 'DHT22', 'MQ135', 'AWS', 'Grafana'],
    difficulty: 'Beginner',
    budget: '₹1,500–₹3,500',
    budgetDisplay: '₹1,500–₹3,500',
    budgetMin: 1500,
    budgetMax: 3500,
    duration: '2–3 weeks',
    teamSize: '1–3',
    hardware: ['ESP32 NodeMCU', 'MQ-135 Air Quality & Gas Sensor', 'DHT22 Precision Temp & Humidity Sensor', '0.96 inch I2C OLED Display', '5V Power Supply'],
    software: ['Arduino C++', 'AWS IoT Core / Thingspeak', 'Chart.js Dashboard'],
    features: ['Real-time Air Quality Index (AQI) score calculation', 'Detection of CO2, NH3, Benzene, and Alcohol volatile vapors', 'Temperature and relative humidity tracking with heat index calculation', 'Local OLED screen display plus cloud telemetry graphing'],
    architecture: 'MQ-135 & DHT22 Sensors → ESP32 Sampling → I2C OLED Display → AWS IoT Core → Grafana / Web Dashboard',
    architectureSteps: ['MQ-135 & DHT22 Sensors', 'ESP32 Sampling', 'I2C OLED Display', 'AWS IoT Core', 'Grafana / Web Dashboard'],
    requirements: ['Analog sensor calibration understanding', 'Basic I2C bus wiring'],
    learningOutcomes: ['Air quality index formula calculation', 'Gas sensor baseline resistance calibration', 'Cloud telemetry graphing'],
    tags: ['IoT', 'Environment', 'ESP32', 'AWS', 'Sensors'],
    defaultMatch: 92,
    visualSummary: 'ESP32 + environmental sensors',
    galleryVisuals: [
      { title: 'Environmental Probe Array', subtitle: 'MQ-135 Air Quality Sensor & DHT22 Precision Probe', type: 'hardware', accentColor: '#10b981' },
      { title: 'Air Quality Pipeline', subtitle: 'Raw Sensor Volts → AQI Math → AWS IoT Core Stream', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'AQI Weather Dashboard', subtitle: 'Live Heat Index, Gas Parts-Per-Million & Historical Curves', type: 'dashboard', accentColor: '#f59e0b' },
      { title: 'Desk Weather Station', subtitle: 'Compact Acrylic Stand with Real-Time OLED Readout', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/iot-environmental-monitoring/overview.webp',
      hardware: '/projects/iot-environmental-monitoring/hardware.webp',
      architecture: '/projects/iot-environmental-monitoring/architecture.webp',
      dashboard: '/projects/iot-environmental-monitoring/dashboard.webp',
      deployment: '/projects/iot-environmental-monitoring/deployment.webp',
      prototype: '/projects/iot-environmental-monitoring/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'What gases does the MQ-135 sensor detect and how is AQI derived?', answer: 'MQ-135 is sensitive to NH3, NOx, Alcohol, Benzene, Smoke, and CO2. By measuring surface resistance Rs relative to baseline clean air Ro (Rs/Ro ratio), the firmware calculates parts-per-million (PPM) values and maps them to standard AQI brackets (0-500).' }
    ],
    bom: [
      { component: 'MQ-135 Sensor', specs: 'Air quality sensor module', qty: 1, estCost: 180 },
      { component: 'DHT22 Sensor', specs: 'Digital temp & humidity', qty: 1, estCost: 260 },
      { component: 'ESP32 Controller', specs: 'Wi-Fi enabled', qty: 1, estCost: 450 },
      { component: 'OLED Display 0.96', specs: 'I2C 128x64 display', qty: 1, estCost: 240 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define target gases and safety thresholds.' },
      { step: '02', title: 'Circuit Design', desc: 'Wire DHT22 and MQ-135 to ESP32.' },
      { step: '03', title: 'Firmware', desc: 'Calibrate baseline Ro and write AQI conversion formula.' },
      { step: '04', title: 'Backend', desc: 'Setup AWS IoT Core or Thingspeak channel.' },
      { step: '05', title: 'Database', desc: 'Store hourly environmental metrics.' },
      { step: '06', title: 'Frontend', desc: 'Build responsive web weather gauge.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy automated threshold notifications.' },
      { step: '08', title: 'Testing', desc: 'Test with alcohol vapors and clean outdoor air.' },
      { step: '09', title: 'Documentation', desc: 'Complete project report, PPT, and schematics.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva answers on sensor calibration math.' }
    ]
  },

  // 11. IoT Patient Health Monitoring
  {
    id: 'proj-11',
    title: 'IoT Patient Health Monitoring',
    slug: 'iot-patient-health-monitoring',
    tagline: 'Wearable ECG, SpO2, heart rate telemetry, and MPU6050 fall detector with nurse call alerts',
    description: 'A clinical IoT telemetry unit streaming MAX30102 pulse oximetry, AD8232 ECG traces, and accelerometer fall detection directly to hospital nurses over secure local Wi-Fi.',
    problem: 'Elderly patients and hospital recovery wards require round-the-clock vitals observation, but traditional bedside monitors cost lakhs and immobilize patients.',
    solution: 'An affordable wearable patient telemetry node that continuously transmits ECG, BPM, and SpO2 to nurse monitoring screens, sounding emergency alerts upon sudden fall impact.',
    howItWorks: 'MAX30102 measures PPG blood absorption; AD8232 measures ECG electrical potentials. The ESP32 filters motion noise and streams waveform frames over WebSockets to a hospital workstation.',
    branch: ['ECE', 'CSE', 'AI & DS'],
    category: 'IoT',
    projectType: 'Major Project',
    technologies: ['ESP32', 'Sensors', 'Node.js', 'Cloud', 'WebSockets', 'React'],
    difficulty: 'Intermediate',
    budget: '₹2,500–₹5,000',
    budgetDisplay: '₹2,500–₹5,000',
    budgetMin: 2500,
    budgetMax: 5000,
    duration: '4–6 weeks',
    teamSize: '2–4',
    hardware: ['ESP32 WROOM-32', 'MAX30102 Pulse Oximeter & Heart Rate Module', 'AD8232 Single Lead ECG Kit', 'MPU6050 6-DOF IMU', 'Li-ion Battery & TP4056'],
    software: ['C++ Firmware', 'WebSockets', 'React.js Charting Interface', 'Node.js Server'],
    features: ['Live real-time ECG waveform rendering at 60Hz update rate', 'Blood oxygen (SpO2) and BPM calculation with motion artifact filtering', '3-axis accelerometer fall impact detection algorithm', 'Instant alert dispatched to nurse workstation upon sudden impact'],
    architecture: 'Sensors (ECG → SpO2 → IMU) → ESP32 Sampling → Encrypted WebSockets → Node.js Central Hub → Nurse Station Visualizer',
    architectureSteps: ['Sensors (ECG, SpO2, IMU)', 'ESP32 Sampling', 'Encrypted WebSockets', 'Node.js Central Hub', 'Nurse Station Visualizer'],
    requirements: ['Biomedical sensor fundamentals', 'Safe low-voltage power isolation'],
    learningOutcomes: ['Biomedical signal processing (QRS complex detection)', 'Wearable low-power ergonomics', 'Real-time telemetry streaming'],
    tags: ['IoT', 'Healthcare', 'Sensors', 'ESP32', 'Cloud'],
    defaultMatch: 90,
    visualSummary: 'Sensors + patient dashboard',
    galleryVisuals: [
      { title: 'Biomedical Sensor Kit', subtitle: 'MAX30102 Oximeter & AD8232 Single-Lead ECG', type: 'hardware', accentColor: '#ec4899' },
      { title: 'Real-Time Telemetry Flow', subtitle: 'Wearable ESP32 → WebSockets → Central Nurse Station', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Nurse Monitoring Canvas', subtitle: 'Live 60Hz ECG Trace, SpO2 & Heart Rate Graph', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Wearable Prototype Box', subtitle: 'Rechargeable LiPo Battery Housing with Fall Detector', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/iot-patient-health-monitoring/overview.webp',
      hardware: '/projects/iot-patient-health-monitoring/hardware.webp',
      architecture: '/projects/iot-patient-health-monitoring/architecture.webp',
      dashboard: '/projects/iot-patient-health-monitoring/dashboard.webp',
      deployment: '/projects/iot-patient-health-monitoring/deployment.webp',
      prototype: '/projects/iot-patient-health-monitoring/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'How does the MPU6050 detect an actual patient fall vs normal movement?', answer: 'The algorithm evaluates a two-stage threshold: First, a momentary freefall condition (resultant vector < 0.5g), followed within 200ms by an impact peak exceeding 3.0g, concluded by 5 seconds of post-fall inactivity.' }
    ],
    bom: [
      { component: 'MAX30102 Oximeter', specs: 'I2C PPG sensor', qty: 1, estCost: 350 },
      { component: 'AD8232 ECG Kit', specs: 'Lead pads + cable', qty: 1, estCost: 490 },
      { component: 'MPU6050 IMU', specs: '3-axis gyro + accel', qty: 1, estCost: 140 },
      { component: 'ESP32 + Battery', specs: 'NodeMCU + Li-ion pack', qty: 1, estCost: 750 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define vitals sample rates and emergency threshold triggers.' },
      { step: '02', title: 'Circuit Design', desc: 'Connect I2C sensor and analog ECG lead inputs.' },
      { step: '03', title: 'Firmware', desc: 'Implement PPG peak detection and fall impact algorithm.' },
      { step: '04', title: 'Backend', desc: 'Build Node.js server with WebSocket broadcast.' },
      { step: '05', title: 'Database', desc: 'Store patient vitals history and emergency events.' },
      { step: '06', title: 'Frontend', desc: 'Create live HTML5 canvas ECG waveform visualizer.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Host web app on local hospital subnet.' },
      { step: '08', title: 'Testing', desc: 'Test pulse readings against fingertip pulse oximeter.' },
      { step: '09', title: 'Documentation', desc: 'Prepare biomedical project report and PPT.' },
      { step: '10', title: 'Viva', desc: 'Rehearse viva answers on ECG QRS detection and PPG.' }
    ]
  },

  // 12. Obstacle Avoidance Robot
  {
    id: 'proj-12',
    title: 'Obstacle Avoidance Robot',
    slug: 'obstacle-avoidance-robot',
    tagline: 'Autonomous wheeled rover with ultrasonic sonar radar, servo scanner, and L298N motor driver',
    description: 'A 2WD/4WD autonomous rover that navigates unknown obstacle-rich indoor environments by scanning ahead with an ultrasonic sensor mounted on a mini servo motor.',
    problem: 'Manual robot teleoperation requires continuous line-of-sight and human intervention, making autonomous obstacle mapping and avoidance essential for robotics students.',
    solution: 'An autonomous wheeled robot that scans 180 degrees using a servo-mounted ultrasonic sensor, dynamically choosing the path with maximum obstacle clearance.',
    howItWorks: 'When forward distance falls below 25cm, the robot stops, commands the servo to look 90° left and 90° right, compares clearances, and turns toward the open path.',
    branch: ['Mechanical', 'ECE', 'Robotics'],
    category: 'Robotics',
    projectType: 'Mini Project',
    technologies: ['Arduino', 'Ultrasonic', 'Motor Driver', 'C++'],
    difficulty: 'Beginner',
    budget: '₹1,500–₹3,000',
    budgetDisplay: '₹1,500–₹3,000',
    budgetMin: 1500,
    budgetMax: 3000,
    duration: '2–3 weeks',
    teamSize: '1–2',
    hardware: ['Arduino Uno R3', 'HC-SR04 Ultrasonic Sensor', 'SG90 Micro Servo', 'L298N Dual H-Bridge Motor Driver', '2WD Robot Chassis + BO Motors', '7.4V 2S Li-ion Battery'],
    software: ['Arduino C++', 'Fritzing Schematics'],
    features: ['180-degree servo radar scanner evaluating left and right clearances', 'Closed-loop obstacle avoidance avoiding head-on collisions and dead ends', 'PWM differential motor speed control for smooth turning radiuses', 'Complete hardware chassis kit ideal for hands-on robotics beginners'],
    architecture: 'HC-SR04 Ultrasonic Sonar → SG90 Servo Head → Arduino Control Logic → L298N H-Bridge Driver → DC Gear Motors',
    architectureSteps: ['HC-SR04 Ultrasonic Sonar', 'SG90 Servo Head', 'Arduino Control Logic', 'L298N H-Bridge Driver', 'DC Gear Motors'],
    requirements: ['Basic electronics and DC motor principles'],
    learningOutcomes: ['H-bridge motor driver direction control', 'Servo angular positioning PWM', 'Reactive obstacle avoidance algorithms'],
    tags: ['Robotics', 'Arduino', 'Ultrasonic', 'Motor Driver', 'Beginner'],
    defaultMatch: 95,
    visualSummary: 'Arduino robot + ultrasonic sensor',
    galleryVisuals: [
      { title: 'Chassis & Motor Driver', subtitle: 'Acrylic 2WD Platform with L298N Dual H-Bridge', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'Sonar Scanning Pipeline', subtitle: 'Forward Obstacle Trigger → 180° Servo Sweep → Motor Turn', type: 'architecture', accentColor: '#38bdf8' },
      { title: 'Navigation Decision Tree', subtitle: 'Comparative Clearance Evaluation Algorithm', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Assembled Autonomous Bot', subtitle: 'Complete Autonomous Wheeled Rover with 2S Li-ion Power', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/obstacle-avoidance-robot/overview.webp',
      hardware: '/projects/obstacle-avoidance-robot/hardware.webp',
      architecture: '/projects/obstacle-avoidance-robot/architecture.webp',
      dashboard: '/projects/obstacle-avoidance-robot/dashboard.webp',
      deployment: '/projects/obstacle-avoidance-robot/deployment.webp',
      prototype: '/projects/obstacle-avoidance-robot/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'How does an H-Bridge motor driver control DC motor direction?', answer: 'An H-Bridge uses 4 switching transistors arranged like an "H". By turning on diagonal transistor pairs, current flows through the motor in one direction; turning on the opposing diagonal pair reverses current flow and motor rotation.' }
    ],
    bom: [
      { component: '2WD Robot Chassis Kit', specs: 'Wheels, chassis, BO motors', qty: 1, estCost: 450 },
      { component: 'L298N Motor Driver', specs: 'Dual H-bridge 2A module', qty: 1, estCost: 180 },
      { component: 'HC-SR04 + SG90 Servo', specs: 'Sonar + 9g mini servo', qty: 1, estCost: 220 },
      { component: 'Arduino Uno R3', specs: 'ATmega328P controller', qty: 1, estCost: 350 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define turning clearance and collision distance (25cm).' },
      { step: '02', title: 'Circuit Design', desc: 'Wire L298N inputs to Arduino and mount servo scanner.' },
      { step: '03', title: 'Firmware', desc: 'Write motor control functions (forward, backward, left, right).' },
      { step: '04', title: 'Backend', desc: 'Standalone embedded firmware.' },
      { step: '05', title: 'Database', desc: 'Not applicable for autonomous embedded bot.' },
      { step: '06', title: 'Frontend', desc: 'Chassis demonstration obstacle course.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Stand-alone firmware.' },
      { step: '08', title: 'Testing', desc: 'Test corner traps and dynamic obstacle avoidance.' },
      { step: '09', title: 'Documentation', desc: 'Compile robotics report, schematic, and PPT.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva answers on H-bridge and ultrasonic physics.' }
    ]
  },

  // 13. AI-Based Accident Detection
  {
    id: 'proj-13',
    title: 'AI-Based Accident Detection',
    slug: 'ai-accident-detection',
    tagline: 'Computer vision crash detection with OpenCV, ESP32 telemetry, and automated emergency SOS dispatch',
    description: 'An integrated road safety platform that detects vehicle collision trajectories using OpenCV computer vision algorithms and triggers ESP32 GPS distress alerts to emergency services.',
    problem: 'Traffic accident victims frequently suffer fatal outcomes due to delayed emergency response times when crashes occur in remote or unmonitored road segments.',
    solution: 'An automated computer vision surveillance system that detects severe vehicular impacts in real-time, extracting GPS location and dispatching immediate ambulance webhooks.',
    howItWorks: 'An edge camera streams video frames to an OpenCV pipeline that detects rapid velocity changes and vehicle deformation. It signals an ESP32 to broadcast GPS coordinates via cloud SMS.',
    branch: ['CSE', 'AI & DS', 'IT', 'ECE'],
    category: 'AI/ML',
    projectType: 'Major Project',
    technologies: ['Python', 'OpenCV', 'ESP32', 'Cloud', 'Twilio'],
    difficulty: 'Advanced',
    budget: '₹3,000–₹6,000',
    budgetDisplay: '₹3,000–₹6,000',
    budgetMin: 3000,
    budgetMax: 6000,
    duration: '4–6 weeks',
    teamSize: '2–4',
    hardware: ['HD USB Camera / IP Webcam', 'ESP32 NodeMCU', 'NEO-6M GPS Module', 'Piezo Buzzer & Indicator LEDs'],
    software: ['Python 3.10', 'OpenCV & NumPy', 'Flask REST API', 'Twilio SMS API', 'Tailwind CSS Monitor'],
    features: ['Real-time optical flow velocity tracking detecting sudden deceleration impacts', 'Vehicle collision bounding box intersection and deformation analysis', 'Automated GPS location coordinate extraction from roadside unit', 'Emergency SMS and call alert dispatched to nearest emergency ward'],
    architecture: 'Camera Video Feed → OpenCV Optical Flow → Crash Confidence Score → ESP32 GPS Telemetry → Cloud SOS Webhook',
    architectureSteps: ['Camera Video Feed', 'OpenCV Optical Flow', 'Crash Confidence Score', 'ESP32 GPS Telemetry', 'Cloud SOS Webhook'],
    requirements: ['Python and OpenCV basics', 'Optical flow motion vector concepts'],
    learningOutcomes: ['Computer vision motion tracking algorithms', 'Hardware-software serial communication', 'Emergency emergency response automation'],
    tags: ['AI', 'OpenCV', 'ESP32', 'Safety', 'Computer Vision'],
    defaultMatch: 91,
    visualSummary: 'Camera + AI detection interface',
    galleryVisuals: [
      { title: 'Roadside Camera Node', subtitle: 'HD Video Stream with Optical Flow Velocity Vectors', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'Crash Detection Pipeline', subtitle: 'Frame Differencing → Motion Centroid Discontinuity → SOS Webhook', type: 'architecture', accentColor: '#ec4899' },
      { title: 'Emergency Dispatch Portal', subtitle: 'Live Crash Incident Map with Pre-Impact Snapshot', type: 'dashboard', accentColor: '#f59e0b' },
      { title: 'Roadside Edge Controller', subtitle: 'ESP32 with GPS Module & Cellular SMS Transmitter', type: 'deployment', accentColor: '#10b981' },
    ],
    gallery: {
      overview: '/projects/ai-accident-detection/overview.webp',
      hardware: '/projects/ai-accident-detection/hardware.webp',
      architecture: '/projects/ai-accident-detection/architecture.webp',
      dashboard: '/projects/ai-accident-detection/dashboard.webp',
      deployment: '/projects/ai-accident-detection/deployment.webp',
      prototype: '/projects/ai-accident-detection/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'How does optical flow detect a vehicle crash?', answer: 'Optical flow calculates velocity vectors between consecutive video frames. A collision generates sudden, sharp discontinuities in motion magnitude and direction (extreme negative acceleration followed by abrupt vector scatter) differing sharply from normal smooth vehicle trajectories.' }
    ],
    bom: [
      { component: 'HD 1080p Webcam', specs: 'Wide angle with low light CMOS', qty: 1, estCost: 1200 },
      { component: 'ESP32 + NEO-6M GPS', specs: 'Microcontroller + GPS antenna', qty: 1, estCost: 900 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define collision optical flow thresholds and camera angles.' },
      { step: '02', title: 'Circuit Design', desc: 'Wire ESP32 and GPS module.' },
      { step: '03', title: 'Firmware', desc: 'Write serial listener to receive crash triggers from Python.' },
      { step: '04', title: 'Backend', desc: 'Implement Python OpenCV optical flow tracking.' },
      { step: '05', title: 'Database', desc: 'Log crash events, video clips, and timestamps.' },
      { step: '06', title: 'Frontend', desc: 'Build emergency dashboard with incident snapshots.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Configure cloud SMS notifications via Twilio.' },
      { step: '08', title: 'Testing', desc: 'Test crash detection on model toy cars and public traffic videos.' },
      { step: '09', title: 'Documentation', desc: 'Compile IEEE project report and PPT.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva answers on optical flow and motion vectors.' }
    ]
  },

  // 14. FLAGSHIP 4: AI CCTV Surveillance System
  {
    id: 'proj-14',
    title: 'AI CCTV Surveillance System',
    slug: 'ai-cctv-surveillance',
    tagline: 'Edge computer vision surveillance with YOLOv8, real-time person/intrusion detection, and cloud alerts',
    description: 'High-speed security platform deployed on edge hardware running lightweight quantized YOLO models to identify perimeter intrusions, classify human postures, and alert security managers.',
    problem: 'Traditional CCTV cameras record hundreds of hours of video passively, requiring human guards to continuously watch monitors—a task where fatigue causes missed security breaches.',
    solution: 'An intelligent edge surveillance pipeline that continuously runs YOLO neural networks on video feeds, detecting unauthorized perimeter breaches and dispatching instant snapshots.',
    howItWorks: 'An edge camera streams video frames to an inference engine running quantized YOLOv8n. The system tracks bounding boxes across customizable tripwire zones and triggers cloud webhooks.',
    branch: ['CSE', 'IT', 'AI & DS', 'ECE'],
    category: 'AI/ML',
    projectType: 'Final Year Project',
    technologies: ['Python', 'OpenCV', 'YOLO', 'AWS', 'Telegram API'],
    difficulty: 'Advanced',
    budget: '₹2,000–₹5,000',
    budgetDisplay: '₹2,000–₹5,000',
    budgetMin: 2000,
    budgetMax: 5000,
    duration: '4–6 weeks',
    teamSize: '2–4',
    hardware: ['HD USB Camera / IP RTSP Camera', 'Host Laptop or Raspberry Pi 4 / Jetson Nano', 'Enclosure & Mounts'],
    software: ['Python 3.10', 'Ultralytics YOLOv8', 'OpenCV', 'FastAPI Web Service', 'Telegram Webhook Bot'],
    features: [
      '20+ FPS object detection using quantized lightweight YOLOv8 neural network',
      'Configurable virtual tripwires and restricted polygon zone intrusion triggers',
      'Instant snapshot delivery to facility security staff via Telegram bot',
      'Cloud storage backup of flagged security incident video clips on AWS S3'
    ],
    architecture: 'Camera RTSP Stream → Frame Extraction → YOLOv8 Inference → Tripwire Polygon Logic → AWS S3 Snapshot Upload → Telegram Alert Dispatch',
    architectureSteps: ['Camera RTSP Stream', 'Frame Extraction', 'YOLOv8 Inference', 'Tripwire Polygon Logic', 'AWS S3 Snapshot Upload', 'Telegram Alert Dispatch'],
    requirements: ['Python and OpenCV proficiency', 'Basic deep learning object detection concepts'],
    learningOutcomes: ['Model quantization and edge neural inference', 'Spatial polygon intersection geometry in computer vision', 'Asynchronous cloud webhook alert pipelines'],
    tags: ['AI', 'Computer Vision', 'YOLO', 'Python', 'Surveillance'],
    defaultMatch: 94,
    isFlagship: true,
    visualSummary: 'Camera + YOLO detection boxes',
    galleryVisuals: [
      { title: 'Edge Inference Camera', subtitle: 'HD RTSP Video Stream with Real-Time Bounding Boxes', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'YOLOv8 Neural Pipeline', subtitle: 'Frame Ingestion → TensorRT / ONNX Engine → Tripwire Logic', type: 'architecture', accentColor: '#38bdf8' },
      { title: 'Live Surveillance Console', subtitle: 'Multi-Camera Grid with Intrusion Event Log and Replay', type: 'dashboard', accentColor: '#ec4899' },
      { title: 'Edge Deployment Container', subtitle: 'Dockerized OpenCV & FastAPI Service with GPU Acceleration', type: 'deployment', accentColor: '#10b981' },
    ],
    gallery: {
      overview: '/projects/ai-cctv-surveillance/overview.webp',
      hardware: '/projects/ai-cctv-surveillance/hardware.webp',
      architecture: '/projects/ai-cctv-surveillance/architecture.webp',
      dashboard: '/projects/ai-cctv-surveillance/dashboard.webp',
      deployment: '/projects/ai-cctv-surveillance/deployment.webp',
      prototype: '/projects/ai-cctv-surveillance/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why choose YOLOv8 over two-stage detectors like Faster R-CNN?', answer: 'Faster R-CNN uses a two-stage Region Proposal Network (RPN) which is computationally expensive and runs at only ~4-6 FPS on edge CPUs. YOLOv8 is a single-shot detector treating detection as a direct regression problem, achieving 25+ FPS while maintaining high mean Average Precision (mAP).' },
      { question: 'How do you prevent false positives caused by animals or shadows?', answer: 'We apply class filtering (only triggering alerts when the detected class is "person" with confidence > 0.70) combined with a multi-frame Kalman tracker requiring the bounding box centroid to persist for at least 5 consecutive frames.' }
    ],
    bom: [
      { component: 'HD 1080p Wide-Angle Camera', specs: 'USB 2.0 with low-light CMOS sensor', qty: 1, estCost: 1200 },
      { component: 'Mounting Arm & Cable Kit', specs: 'Adjustable bracket', qty: 1, estCost: 350 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define camera FOV, resolution, and perimeter tripwire rules.' },
      { step: '02', title: 'Circuit Design', desc: 'Set up edge hardware camera interface.' },
      { step: '03', title: 'Firmware', desc: 'Configure video capture stream and RTSP decoding.' },
      { step: '04', title: 'Backend', desc: 'Integrate YOLOv8 model and write polygon intersection math.' },
      { step: '05', title: 'Database', desc: 'Store incident timestamps, bounding boxes, and clip URLs.' },
      { step: '06', title: 'Frontend', desc: 'Build responsive web dashboard with live video feed and alerts.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Configure AWS S3 bucket and Telegram notification webhook.' },
      { step: '08', title: 'Testing', desc: 'Benchmark FPS under daylight and low-light environments.' },
      { step: '09', title: 'Documentation', desc: 'Write comprehensive IEEE report and architecture diagrams.' },
      { step: '10', title: 'Viva', desc: 'Practice explaining single-shot detection architecture and mAP metrics.' }
    ]
  },

  // 15. Network Intrusion Detection System
  {
    id: 'proj-15',
    title: 'Network Intrusion Detection System',
    slug: 'network-intrusion-detection',
    tagline: 'Machine learning packet inspection identifying port scans, DoS attacks, and anomalous traffic',
    description: 'A cybersecurity defense tool analyzing live TCP/UDP network packet streams using trained ML classifiers (Random Forest/XGBoost) to flag port scans, SYN floods, and malicious intrusions.',
    problem: 'Conventional rule-based firewalls fail to detect zero-day attacks and polymorphic network intrusions that do not match predefined static signatures.',
    solution: 'An intelligent NIDS that inspects network flow features (packet size distribution, flow duration, flag counts) using machine learning to detect anomalous attacks in real-time.',
    howItWorks: 'Scapy captures network traffic and computes statistical flow features. The pre-trained ML classifier scores the flow and writes flagged anomalies to a cybersecurity monitoring dashboard.',
    branch: ['CSE', 'IT', 'Cybersecurity'],
    category: 'Cybersecurity',
    projectType: 'Major Project',
    technologies: ['Python', 'ML', 'Linux', 'Scapy', 'Flask'],
    difficulty: 'Advanced',
    budget: '₹500–₹2,000',
    budgetDisplay: '₹500–₹2,000',
    budgetMin: 500,
    budgetMax: 2000,
    duration: '3–5 weeks',
    teamSize: '2–3',
    hardware: ['Standard Laptop / Linux VM (PC/Raspberry Pi)'],
    software: ['Python 3.10', 'Scapy Packet Sniffer', 'Scikit-Learn (Random Forest)', 'Flask REST API', 'Chart.js Dashboard'],
    features: ['Real-time raw packet sniffing with promiscuous mode network interface', 'Extraction of 20+ flow statistical features matching NSL-KDD / CIC-IDS datasets', 'Detection of SYN floods, Port Scans, and Brute Force SSH attacks', 'Interactive SOC dashboard showing live packet throughput and threat level'],
    architecture: 'Raw Network Interface → Scapy Packet Sniffer → Flow Feature Extractor → Random Forest ML Model → SOC Threat Dashboard',
    architectureSteps: ['Raw Network Interface', 'Scapy Packet Sniffer', 'Flow Feature Extractor', 'Random Forest ML Model', 'SOC Threat Dashboard'],
    requirements: ['Linux networking basics (TCP/IP headers, Wireshark)', 'Python machine learning concepts'],
    learningOutcomes: ['Packet header decoding (IP, TCP, UDP flags)', 'Machine learning feature engineering for cybersecurity', 'Security Operations Center (SOC) visualization'],
    tags: ['Cybersecurity', 'Python', 'ML', 'Networking', 'Linux'],
    defaultMatch: 92,
    visualSummary: 'Cybersecurity monitoring dashboard',
    galleryVisuals: [
      { title: 'Packet Capture Engine', subtitle: 'Promiscuous Mode Socket Sniffing with Scapy', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'NIDS Analysis Pipeline', subtitle: 'Raw Packets → Flow Aggregator → Trained Random Forest → Alert', type: 'architecture', accentColor: '#ec4899' },
      { title: 'SOC Cybersecurity Console', subtitle: 'Live Protocol Distribution, Threat Levels & Attacker IPs', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Linux VM Deployment', subtitle: 'Hardened Ubuntu Server with Automated IPTables Blocking', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/network-intrusion-detection/overview.webp',
      hardware: '/projects/network-intrusion-detection/hardware.webp',
      architecture: '/projects/network-intrusion-detection/architecture.webp',
      dashboard: '/projects/network-intrusion-detection/dashboard.webp',
      deployment: '/projects/network-intrusion-detection/deployment.webp',
      prototype: '/projects/network-intrusion-detection/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'What flow features are most effective for identifying a SYN flood attack?', answer: 'A high ratio of TCP SYN packets to ACK packets, high flow packet rate, and very short flow duration with minimal payload byte counts are classic signatures of SYN flooding.' }
    ],
    bom: [
      { component: 'Development Environment', specs: 'Open-source software tools & dataset', qty: 1, estCost: 0 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define attack categories to detect (Port scan, DoS, brute force).' },
      { step: '02', title: 'Circuit Design', desc: 'Not applicable (pure software/networking stack).' },
      { step: '03', title: 'Firmware', desc: 'Setup Scapy packet capture loop.' },
      { step: '04', title: 'Backend', desc: 'Extract flow statistics and train Random Forest model.' },
      { step: '05', title: 'Database', desc: 'Store threat incident logs, IP addresses, and timestamps.' },
      { step: '06', title: 'Frontend', desc: 'Build SOC dashboard showing live traffic graphs.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy on Linux server with systemd service.' },
      { step: '08', title: 'Testing', desc: 'Launch test port scans with Nmap and verify alert triggers.' },
      { step: '09', title: 'Documentation', desc: 'Compile cybersecurity report and thesis slides.' },
      { step: '10', title: 'Viva', desc: 'Practice explaining precision, recall, and false-positive reduction.' }
    ]
  },

  // 16. Cloud-Based Student Management System
  {
    id: 'proj-16',
    title: 'Cloud-Based Student Management System',
    slug: 'cloud-student-management',
    tagline: 'Enterprise academic ERP with role-based access, attendance tracking, and AWS deployment',
    description: 'A full-stack university portal managing student profiles, course registrations, semester grade reporting, and fee receipts with secure role-based access control (RBAC).',
    problem: 'Colleges often rely on fragmented legacy desktop software or paper ledgers, causing administrative bottlenecks and delayed grade dissemination.',
    solution: 'A cloud-native web portal that centralizes student academic records, course enrollments, and faculty grade management into a secure, responsive application.',
    howItWorks: 'A React frontend communicates with a Node.js Express backend. MySQL handles relational data with ACID compliance, and the entire stack is containerized on AWS.',
    branch: ['CSE', 'IT'],
    category: 'Cloud',
    projectType: 'Software Project',
    technologies: ['React', 'Node.js', 'MySQL', 'AWS', 'Docker'],
    difficulty: 'Intermediate',
    budget: '₹1,000–₹3,000',
    budgetDisplay: '₹1,000–₹3,000',
    budgetMin: 1000,
    budgetMax: 3000,
    duration: '3–5 weeks',
    teamSize: '2–4',
    hardware: ['Standard Laptop / Computer'],
    software: ['React 18 / Next.js', 'Node.js & Express.js', 'MySQL 8.0', 'Docker', 'AWS EC2'],
    features: ['Role-Based Access Control (Admin, Faculty, Student roles)', 'Student enrollment, course registration, and semester marks entry', 'Automated GPA/CGPA calculation and printable PDF grade cards', 'Audit logs tracking student grade modifications by faculty'],
    architecture: 'React Web UI → REST API Gateway → JWT Authentication → MySQL Database → AWS Cloud (Docker)',
    architectureSteps: ['React Web UI', 'REST API Gateway', 'JWT Authentication', 'MySQL Database', 'AWS Cloud (Docker)'],
    requirements: ['JavaScript/TypeScript proficiency', 'Relational database schema normalization'],
    learningOutcomes: ['Full-stack REST API development', 'JWT session security and authorization', 'Relational database transactions and indexing'],
    tags: ['Web', 'Cloud', 'Full Stack', 'MySQL', 'React'],
    defaultMatch: 90,
    visualSummary: 'Web application dashboard',
    galleryVisuals: [
      { title: 'Frontend Architecture', subtitle: 'Component Hierarchy with Role-Based Protected Routes', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Relational Database Schema', subtitle: 'Normalized 3NF MySQL Tables with Foreign Key Constraints', type: 'hardware', accentColor: '#38bdf8' },
      { title: 'Student & Faculty Portal', subtitle: 'Responsive Dashboard with Course Management & GPA Calculator', type: 'dashboard', accentColor: '#10b981' },
      { title: 'AWS Cloud Hosting', subtitle: 'Dockerized Node.js & MySQL on AWS EC2 with Nginx Reverse Proxy', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/cloud-student-management/overview.webp',
      hardware: '/projects/cloud-student-management/hardware.webp',
      architecture: '/projects/cloud-student-management/architecture.webp',
      dashboard: '/projects/cloud-student-management/dashboard.webp',
      deployment: '/projects/cloud-student-management/deployment.webp',
      prototype: '/projects/cloud-student-management/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why use JWT (JSON Web Tokens) instead of traditional server-side sessions?', answer: 'JWT is stateless and self-contained; the server verifies the cryptographic signature without querying session tables on every request, making it easily horizontally scalable across cloud instances.' }
    ],
    bom: [
      { component: 'Cloud Hosting', specs: 'AWS Free Tier / Local Stack', qty: 1, estCost: 0 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Map user roles (Admin, Faculty, Student) and permissions.' },
      { step: '02', title: 'Database Design', desc: 'Design normalized 3NF schema for students, courses, grades.' },
      { step: '03', title: 'Backend API', desc: 'Build Express REST endpoints with JWT middleware.' },
      { step: '04', title: 'Frontend UI', desc: 'Develop responsive React components and forms.' },
      { step: '05', title: 'Grade Logic', desc: 'Implement GPA/CGPA calculation formulas.' },
      { step: '06', title: 'PDF Generation', desc: 'Add downloadable semester grade card generator.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Dockerize and deploy onto AWS EC2.' },
      { step: '08', title: 'Testing', desc: 'Conduct role authorization and SQL injection vulnerability testing.' },
      { step: '09', title: 'Documentation', desc: 'Compile IEEE software engineering report and PPT.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva explanations on database ACID properties and JWT.' }
    ]
  },

  // 17. FLAGSHIP 5: DevOps CI/CD Web Application
  {
    id: 'proj-17',
    title: 'DevOps CI/CD Web Application',
    slug: 'devops-cicd-web-application',
    tagline: 'Enterprise automated software delivery pipeline with Docker, Jenkins, GitHub Actions, and AWS',
    description: 'A production-grade cloud deployment pipeline simulating modern software engineering: Automated GitHub pull request tests, SonarQube quality scanning, Docker builds, and zero-downtime deployment to AWS.',
    problem: 'Manual software deployments result in configuration drift, broken production builds, and painful downtime that modern technology companies have abandoned.',
    solution: 'An automated continuous integration and continuous deployment pipeline that automatically tests code, builds Docker images, runs security scans, and deploys to AWS upon every git push.',
    howItWorks: 'Developers push code to GitHub. A GitHub Actions / Jenkins runner executes unit tests and SonarQube code analysis, builds a Docker image, pushes to Amazon ECR, and deploys to EC2.',
    branch: ['CSE', 'IT'],
    category: 'DevOps',
    projectType: 'Final Year Project',
    technologies: ['Docker', 'Jenkins', 'GitHub Actions', 'AWS', 'Nginx', 'SonarQube'],
    difficulty: 'Intermediate',
    budget: '₹1,000–₹3,000',
    budgetDisplay: '₹1,000–₹3,000',
    budgetMin: 1000,
    budgetMax: 3000,
    duration: '4–6 weeks',
    teamSize: '2–3',
    hardware: ['Standard Laptop / AWS Cloud Instance'],
    software: ['Docker & Docker Compose', 'Jenkins Server', 'GitHub Actions CI', 'SonarQube Code Quality', 'AWS EC2 & ECR', 'Nginx'],
    features: [
      'Automated CI pipeline triggered on every git push and pull request',
      'SonarQube static code quality analysis and security vulnerability gate',
      'Multi-stage Docker builds creating minimal, secure container footprints',
      'Zero-downtime rolling deployments on AWS EC2 with Nginx reverse proxy'
    ],
    architecture: 'Developer Git Push → GitHub Actions / Jenkins → Unit Tests & SonarQube → Docker Image Build → AWS ECR Container Registry → AWS EC2 Production Server',
    architectureSteps: ['Developer Git Push', 'GitHub Actions / Jenkins', 'Unit Tests & SonarQube', 'Docker Image Build', 'AWS ECR Container Registry', 'AWS EC2 Production Server'],
    requirements: ['Git command line proficiency', 'Basic Linux server and Docker concepts'],
    learningOutcomes: ['Cloud-native CI/CD automation pipelines', 'Containerization best practices and multi-stage builds', 'Production infrastructure monitoring and rolling deployments'],
    tags: ['DevOps', 'Docker', 'Jenkins', 'AWS', 'CI/CD'],
    defaultMatch: 93,
    isFlagship: true,
    visualSummary: 'GitHub → Jenkins → Docker → AWS',
    galleryVisuals: [
      { title: 'CI/CD Pipeline Flow', subtitle: 'GitHub Push → Jenkins Stages → Docker Build → AWS Deploy', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Quality Gate Dashboard', subtitle: 'SonarQube Code Coverage, Bugs, and Vulnerability Report', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Docker Multi-Stage Build', subtitle: 'Minimal Production Container Image Optimization', type: 'hardware', accentColor: '#38bdf8' },
      { title: 'AWS Cloud Production', subtitle: 'EC2 Instance Running Containerized Microservices behind Nginx', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/devops-cicd-web-application/overview.webp',
      hardware: '/projects/devops-cicd-web-application/hardware.webp',
      architecture: '/projects/devops-cicd-web-application/architecture.webp',
      dashboard: '/projects/devops-cicd-web-application/dashboard.webp',
      deployment: '/projects/devops-cicd-web-application/deployment.webp',
      prototype: '/projects/devops-cicd-web-application/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'What is the purpose of a Multi-Stage Dockerfile in a production CI/CD pipeline?', answer: 'Multi-stage builds separate the build environment (compilers, npm build tools, devDependencies) from the final production runtime. Only the compiled production artifacts and runtime dependencies are copied to the final image, reducing image size by up to 80% and removing build-time attack surfaces.' },
      { question: 'What is the difference between Continuous Delivery and Continuous Deployment?', answer: 'In Continuous Delivery, code passes all automated tests and is packaged ready for release, but the final deployment to production requires manual human approval. In Continuous Deployment, every passing commit is deployed to production automatically without human intervention.' }
    ],
    bom: [
      { component: 'AWS Cloud Hosting Credits', specs: 'T2/T3 micro/small instance', qty: 1, estCost: 1200 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define CI stages: lint, test, security scan, build, deploy.' },
      { step: '02', title: 'Dockerfile', desc: 'Write optimized multi-stage Dockerfile for the web application.' },
      { step: '03', title: 'GitHub Actions', desc: 'Create .github/workflows/ci.yml pipeline configuration.' },
      { step: '04', title: 'Jenkins Server', desc: 'Setup Jenkins container and configure GitHub webhook triggers.' },
      { step: '05', title: 'Quality Gate', desc: 'Integrate SonarQube container and enforce test coverage thresholds.' },
      { step: '06', title: 'AWS Server', desc: 'Launch Ubuntu EC2 instance, configure security groups and Docker.' },
      { step: '07', title: 'Automated Deploy', desc: 'Write deployment shell scripts to pull fresh images and restart containers.' },
      { step: '08', title: 'Testing', desc: 'Test failure handling by pushing intentionally breaking code to verify pipeline aborts.' },
      { step: '09', title: 'Documentation', desc: 'Compile DevOps architecture report, pipeline diagrams, and slides.' },
      { step: '10', title: 'Viva', desc: 'Practice explaining Docker layer caching and CI/CD best practices.' }
    ]
  },

  // 18. Real-Time IoT Monitoring Dashboard
  {
    id: 'proj-18',
    title: 'Real-Time IoT Monitoring Dashboard',
    slug: 'realtime-iot-monitoring-dashboard',
    tagline: 'High-frequency telemetry ingestion platform with Node.js, MQTT broker, and Grafana',
    description: 'An enterprise IoT visualization platform capable of ingesting high-throughput sensor telemetry streams via MQTT, storing time-series records, and rendering interactive Grafana dashboards.',
    problem: 'Connecting multiple IoT sensor nodes to basic web servers causes socket exhaustion and UI freezing when devices transmit at high frequencies.',
    solution: 'A scalable time-series telemetry hub utilizing a Mosquitto MQTT broker, InfluxDB time-series storage, and Grafana visualization to handle dozens of concurrent IoT nodes.',
    howItWorks: 'Sensor nodes publish structured JSON telemetry to MQTT topics. A backend broker routes packets to InfluxDB, while Grafana continuously polls and renders sub-second live telemetry panels.',
    branch: ['CSE', 'IT', 'ECE'],
    category: 'Cloud',
    projectType: 'Major Project',
    technologies: ['Node.js', 'MQTT', 'React', 'Grafana', 'InfluxDB'],
    difficulty: 'Advanced',
    budget: '₹2,000–₹4,000',
    budgetDisplay: '₹2,000–₹4,000',
    budgetMin: 2000,
    budgetMax: 4000,
    duration: '3–5 weeks',
    teamSize: '2–3',
    hardware: ['ESP32 Telemetry Nodes (x2)', 'Sensors', 'Host Server / Cloud VM'],
    software: ['Eclipse Mosquitto MQTT', 'InfluxDB 2.x', 'Grafana Enterprise', 'Docker Compose'],
    features: ['Pub/Sub architecture decoupling sensor producers from data consumers', 'Sub-second real-time telemetry rendering across multiple dashboard gauges', 'Automated threshold alerts dispatched via Discord / Slack webhooks', 'Historical data aggregation and export to CSV for data analysis'],
    architecture: 'IoT Field Nodes → Mosquitto MQTT Broker → InfluxDB Time-Series DB → Grafana Server → Engineer Web UI',
    architectureSteps: ['IoT Field Nodes', 'Mosquitto MQTT Broker', 'InfluxDB Time-Series DB', 'Grafana Server', 'Engineer Web UI'],
    requirements: ['MQTT protocol basics', 'Docker compose multi-container orchestration'],
    learningOutcomes: ['Time-series database modeling', 'Industrial telemetry visualization', 'Decoupled pub/sub message brokers'],
    tags: ['IoT', 'Cloud', 'Grafana', 'MQTT', 'Docker'],
    defaultMatch: 91,
    visualSummary: 'Sensors → MQTT → Grafana',
    galleryVisuals: [
      { title: 'Telemetry Ingestion Architecture', subtitle: 'ESP32 Nodes → Mosquitto MQTT Broker → InfluxDB Engine', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Time-Series Data Model', subtitle: 'Buckets, Tags, and Field Values for High-Frequency Sensors', type: 'hardware', accentColor: '#38bdf8' },
      { title: 'Grafana Live Dashboard', subtitle: 'Multi-Gauge Real-Time Environmental and Power Telemetry', type: 'dashboard', accentColor: '#10b981' },
      { title: 'Docker Compose Stack', subtitle: 'Containerized Mosquitto, InfluxDB, and Grafana on Cloud VM', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/realtime-iot-monitoring-dashboard/overview.webp',
      hardware: '/projects/realtime-iot-monitoring-dashboard/hardware.webp',
      architecture: '/projects/realtime-iot-monitoring-dashboard/architecture.webp',
      dashboard: '/projects/realtime-iot-monitoring-dashboard/dashboard.webp',
      deployment: '/projects/realtime-iot-monitoring-dashboard/deployment.webp',
      prototype: '/projects/realtime-iot-monitoring-dashboard/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'What is Quality of Service (QoS) in MQTT and why does it matter for IoT?', answer: 'MQTT provides 3 QoS levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once, guaranteed delivery with potential duplicates), and QoS 2 (Exactly once, 4-step handshake ensuring no loss or duplication). Telemetry typically uses QoS 0 or 1 depending on sensor criticality.' }
    ],
    bom: [
      { component: 'ESP32 Nodes (Pair)', specs: 'Dual telemetry boards', qty: 2, estCost: 900 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define telemetry topics and sensor reporting frequencies.' },
      { step: '02', title: 'Docker Setup', desc: 'Write docker-compose.yml for Mosquitto, InfluxDB, and Grafana.' },
      { step: '03', title: 'Firmware', desc: 'Write ESP32 firmware publishing JSON telemetry payloads.' },
      { step: '04', title: 'Broker Config', desc: 'Configure MQTT access credentials and topic permissions.' },
      { step: '05', title: 'InfluxDB', desc: 'Setup bucket retention policies and token authentication.' },
      { step: '06', title: 'Grafana', desc: 'Build interactive panels with gauge, time series, and heatmaps.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Launch container stack on cloud instance.' },
      { step: '08', title: 'Testing', desc: 'Simulate high-frequency telemetry floods to verify zero dropped packets.' },
      { step: '09', title: 'Documentation', desc: 'Compile project report and architecture schematics.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva answers on MQTT QoS levels and time-series indexing.' }
    ]
  },

  // 19. AI Student Project Recommendation System
  {
    id: 'proj-19',
    title: 'AI Student Project Recommendation System',
    slug: 'ai-project-recommendation',
    tagline: 'Machine learning recommendation platform pairing student skills and branch to engineering projects',
    description: 'A machine learning recommendation engine that matches engineering students to tailored hardware and software capstones based on branch, known programming languages, budget, and difficulty.',
    problem: 'Engineering students spend weeks searching through disjointed forums and generic project lists, frequently choosing projects mismatched to their skill sets or budget.',
    solution: 'An intelligent recommendation platform utilizing content-based filtering and cosine similarity to recommend realistic, high-success engineering project blueprints.',
    howItWorks: 'The student selects their branch, tools, and budget. A Python ML service computes feature vectors and cosine similarity against a database of verified project blueprints, ranking the top matches.',
    branch: ['CSE', 'IT', 'AI & DS'],
    category: 'AI/ML',
    projectType: 'Software Project',
    technologies: ['Python', 'ML', 'React', 'Node.js', 'Scikit-Learn'],
    difficulty: 'Advanced',
    budget: '₹1,000–₹3,000',
    budgetDisplay: '₹1,000–₹3,000',
    budgetMin: 1000,
    budgetMax: 3000,
    duration: '3–5 weeks',
    teamSize: '2–3',
    hardware: ['Standard Laptop / Computer'],
    software: ['Python 3.10', 'Scikit-Learn / Pandas', 'React.js Frontend', 'FastAPI / Express API'],
    features: ['Cosine similarity matching algorithm calculating percentage compatibility scores', 'Multi-parameter filtering by engineering branch, budget, and hardware platform', 'Dynamic ranking of alternative project recommendations', 'User preference bookmarking and customized bill of materials estimation'],
    architecture: 'Student Profile Form → FastAPI ML Engine → Vector Feature Embeddings → Cosine Similarity Matcher → React Recommendations UI',
    architectureSteps: ['Student Profile Form', 'FastAPI ML Engine', 'Vector Feature Embeddings', 'Cosine Similarity Matcher', 'React Recommendations UI'],
    requirements: ['Python and machine learning basics', 'Vector similarity concepts'],
    learningOutcomes: ['Content-based recommendation algorithms', 'TF-IDF and feature vectorization', 'Full-stack AI model serving via REST APIs'],
    tags: ['AI', 'Recommendation', 'Python', 'ML', 'React'],
    defaultMatch: 93,
    visualSummary: 'AI interface + project cards',
    galleryVisuals: [
      { title: 'Recommendation Architecture', subtitle: 'Feature Vector Encoding → Cosine Similarity Engine → Ranked Cards', type: 'architecture', accentColor: '#00d2ff' },
      { title: 'Student Input Vector', subtitle: 'Multi-Dimensional Branch, Budget & Skill Parameter Matrix', type: 'hardware', accentColor: '#38bdf8' },
      { title: 'AI Matcher Dashboard', subtitle: 'Ranked Project Recommendations with Live Score Percentages', type: 'dashboard', accentColor: '#10b981' },
      { title: 'FastAPI Model Server', subtitle: 'Containerized Microservice Serving Sub-50ms Inference Responses', type: 'deployment', accentColor: '#818cf8' },
    ],
    gallery: {
      overview: '/projects/ai-project-recommendation/overview.webp',
      hardware: '/projects/ai-project-recommendation/hardware.webp',
      architecture: '/projects/ai-project-recommendation/architecture.webp',
      dashboard: '/projects/ai-project-recommendation/dashboard.webp',
      deployment: '/projects/ai-project-recommendation/deployment.webp',
      prototype: '/projects/ai-project-recommendation/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'How does Cosine Similarity evaluate project recommendations?', answer: 'Cosine similarity measures the cosine of the angle between two multi-dimensional vectors (the student skill vector and the project requirement vector) in inner product space. A value of 1 indicates identical alignment regardless of vector magnitude.' }
    ],
    bom: [
      { component: 'Development Environment', specs: 'Python & React open-source stack', qty: 1, estCost: 0 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Define recommendation feature space (branch, tech, budget, duration).' },
      { step: '02', title: 'Dataset', desc: 'Create structured metadata dataset of 20+ engineering projects.' },
      { step: '03', title: 'Vectorization', desc: 'Build feature encoder using TF-IDF and normalized scalar weights.' },
      { step: '04', title: 'Backend API', desc: 'Build FastAPI endpoint to calculate cosine similarity on input vectors.' },
      { step: '05', title: 'Database', desc: 'Store student profile preferences and saved projects.' },
      { step: '06', title: 'Frontend UI', desc: 'Develop responsive React interface with interactive filters.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy web app and ML service on cloud host.' },
      { step: '08', title: 'Testing', desc: 'Evaluate recommendation precision across varying student profiles.' },
      { step: '09', title: 'Documentation', desc: 'Compile IEEE project report, PPT slides, and formulas.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva answers on vector similarity and recommendation metrics.' }
    ]
  },

  // 20. Industrial IoT Predictive Maintenance
  {
    id: 'proj-20',
    title: 'Industrial IoT Predictive Maintenance',
    slug: 'industrial-iot-predictive-maintenance',
    tagline: 'Vibration & thermal telemetry with Edge ML anomaly detection preventing motor failure',
    description: 'An Industry 4.0 condition monitoring system using vibration accelerometers, temperature probes, and edge machine learning on ESP32 to detect motor bearing anomalies before catastrophic failure.',
    problem: 'Unplanned industrial motor failures cause costly factory assembly line stoppages and dangerous mechanical seizures that routine calendar maintenance fails to catch.',
    solution: 'An intelligent predictive maintenance node that analyzes motor vibration harmonics and casing temperature, flagging anomalous wear patterns days before physical failure.',
    howItWorks: 'An ADXL345 accelerometer samples motor casing vibration. The ESP32 computes Fast Fourier Transform (FFT) spectral peaks and runs a lightweight anomaly classifier, streaming health scores to AWS.',
    branch: ['ECE', 'EEE', 'Mechanical', 'AI & DS'],
    category: 'IoT',
    projectType: 'Final Year Project',
    technologies: ['ESP32', 'Vibration Sensor', 'ML', 'AWS', 'Grafana'],
    difficulty: 'Advanced',
    budget: '₹4,000–₹8,000',
    budgetDisplay: '₹4,000–₹8,000',
    budgetMin: 4000,
    budgetMax: 8000,
    duration: '5–7 weeks',
    teamSize: '2–4',
    hardware: ['ESP32 NodeMCU', 'ADXL345 3-Axis Digital Accelerometer', 'DS18B20 Industrial Waterproof Temperature Probe', 'Industrial Heavy-Duty Mounting Magnet', '5V Power Supply'],
    software: ['Arduino C++ (kissFFT Library)', 'Edge Impulse / TinyML', 'AWS IoT Core / DynamoDB', 'Grafana Dashboard'],
    features: ['High-frequency 3-axis vibration sampling up to 3200Hz', 'On-device Fast Fourier Transform (FFT) extracting dominant frequency peaks', 'Edge anomaly detection identifying bearing wear and motor unbalance', 'Cloud Grafana dashboard visualizing motor Health Index and trend predictions'],
    architecture: 'ADXL345 Accelerometer → ESP32 Edge FFT & ML → MQTT Telemetry → AWS IoT Core → Grafana Motor Health Dashboard',
    architectureSteps: ['ADXL345 Accelerometer', 'ESP32 Edge FFT & ML', 'MQTT Telemetry', 'AWS IoT Core', 'Grafana Motor Health Dashboard'],
    requirements: ['Vibration analysis basics (frequency spectrum, harmonics)', 'I2C and SPI digital sensor interfacing'],
    learningOutcomes: ['Vibration frequency spectral analysis (FFT)', 'TinyML embedded machine learning on microcontrollers', 'Industry 4.0 predictive maintenance workflows'],
    tags: ['IoT', 'Industrial', 'Predictive Maintenance', 'ML', 'ESP32'],
    defaultMatch: 92,
    visualSummary: 'Industrial machine + sensor + AI',
    galleryVisuals: [
      { title: 'Vibration & Thermal Probe', subtitle: 'ADXL345 High-G Accelerometer with Magnetic Motor Mount', type: 'hardware', accentColor: '#00d2ff' },
      { title: 'Edge FFT & Anomaly Pipeline', subtitle: 'Raw Acceleration → 128-point FFT Spectral Peaks → TinyML Anomaly Score', type: 'architecture', accentColor: '#38bdf8' },
      { title: 'Motor Health Dashboard', subtitle: 'Live RMS Velocity, Dominant Frequencies & Failure Warning', type: 'dashboard', accentColor: '#ec4899' },
      { title: 'Industrial Enclosure Unit', subtitle: 'IP65 Vibration-Isolated Enclosure with External Antenna', type: 'deployment', accentColor: '#10b981' },
    ],
    gallery: {
      overview: '/projects/industrial-iot-predictive-maintenance/overview.webp',
      hardware: '/projects/industrial-iot-predictive-maintenance/hardware.webp',
      architecture: '/projects/industrial-iot-predictive-maintenance/architecture.webp',
      dashboard: '/projects/industrial-iot-predictive-maintenance/dashboard.webp',
      deployment: '/projects/industrial-iot-predictive-maintenance/deployment.webp',
      prototype: '/projects/industrial-iot-predictive-maintenance/prototype.webp'
    },
    packageContents: [
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
    vivaQuestions: [
      { question: 'Why is Fast Fourier Transform (FFT) performed on motor vibration data?', answer: 'Raw time-domain vibration signals are a chaotic superposition of many frequencies. FFT decomposes the signal into discrete frequency components, isolating characteristic fault frequencies (e.g. 1x RPM for unbalance, 2x RPM for misalignment, and high-frequency harmonics for bearing raceway defects).' }
    ],
    bom: [
      { component: 'ADXL345 Accelerometer', specs: '13-bit digital I2C/SPI module', qty: 1, estCost: 280 },
      { component: 'DS18B20 Temp Probe', specs: 'Stainless steel waterproof', qty: 1, estCost: 190 },
      { component: 'ESP32 DevKit', specs: 'Dual-core 240MHz MCU', qty: 1, estCost: 450 },
      { component: 'Magnetic Sensor Mount', specs: 'Strong neodymium mount', qty: 1, estCost: 350 }
    ],
    roadmap: [
      { step: '01', title: 'Requirements', desc: 'Identify motor RPM and characteristic fault frequency bands.' },
      { step: '02', title: 'Circuit Design', desc: 'Mount ADXL345 and wire high-speed SPI/I2C bus to ESP32.' },
      { step: '03', title: 'Firmware', desc: 'Implement 1000Hz sampling loop and compute FFT spectral bins.' },
      { step: '04', title: 'Backend', desc: 'Configure MQTT broker to receive motor health metrics.' },
      { step: '05', title: 'Database', desc: 'Store time-series RMS vibration and temperature logs.' },
      { step: '06', title: 'Frontend', desc: 'Build Grafana dashboard displaying motor health index.' },
      { step: '07', title: 'Cloud Deployment', desc: 'Deploy cloud alert webhooks for anomalous vibration.' },
      { step: '08', title: 'Testing', desc: 'Simulate motor unbalance using an off-center weight on a test motor.' },
      { step: '09', title: 'Documentation', desc: 'Compile IEEE predictive maintenance report and PPT.' },
      { step: '10', title: 'Viva', desc: 'Prepare viva explanations on FFT vibration harmonics.' }
    ]
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
  { id: 'flagship', label: '⭐ Flagship (5)', count: PROJECTS_DATA.filter(p => p.isFlagship).length },
  { id: 'IoT', label: 'IoT', count: PROJECTS_DATA.filter(p => p.category === 'IoT' || p.technologies.includes('IoT')).length },
  { id: 'Embedded', label: 'Embedded', count: PROJECTS_DATA.filter(p => p.category === 'Embedded' || p.technologies.some(t => t.includes('Arduino') || t.includes('RFID'))).length },
  { id: 'AI/ML', label: 'AI/ML', count: PROJECTS_DATA.filter(p => p.category === 'AI/ML' || p.technologies.some(t => t.includes('AI') || t.includes('OpenCV') || t.includes('YOLO') || t.includes('ML'))).length },
  { id: 'Cloud', label: 'Cloud', count: PROJECTS_DATA.filter(p => p.category === 'Cloud' || p.technologies.includes('AWS') || p.technologies.includes('Cloud')).length },
  { id: 'DevOps', label: 'DevOps', count: PROJECTS_DATA.filter(p => p.category === 'DevOps' || p.technologies.includes('Docker') || p.technologies.includes('Jenkins')).length },
  { id: 'Web', label: 'Web', count: PROJECTS_DATA.filter(p => p.category === 'Web' || p.technologies.includes('React') || p.technologies.includes('Node.js')).length },
  { id: 'Cybersecurity', label: 'Cybersecurity', count: PROJECTS_DATA.filter(p => p.category === 'Cybersecurity').length },
  { id: 'Robotics', label: 'Robotics', count: PROJECTS_DATA.filter(p => p.category === 'Robotics').length },
];

export const BRANCHES_LIST = ['All Branches', 'ECE', 'EEE', 'CSE', 'IT', 'AI & DS', 'Mechanical'];

export const BUDGET_RANGES = [
  { id: 'all', label: 'All Budgets' },
  { id: 'under-1k', label: 'Under ₹1,000', min: 0, max: 1000 },
  { id: '1k-2k', label: '₹1,000–₹2,000', min: 1000, max: 2000 },
  { id: '2k-5k', label: '₹2,000–₹5,000', min: 2000, max: 5000 },
  { id: '5k-10k', label: '₹5,000–₹10,000', min: 5000, max: 10000 },
  { id: '10k-plus', label: '₹10,000+', min: 10000, max: 100000 },
];

export const DIFFICULTY_LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
