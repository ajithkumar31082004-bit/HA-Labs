const fs = require('fs');
const path = require('path');

const eceProjects = [
  {
    num: 1,
    title: 'Smart Parking Occupancy & Guidance System',
    slug: 'smart-parking-occupancy-guidance-system',
    level: 'Intermediate',
    team: '3–4',
    skills: ['ESP32', 'IoT', 'Sensors', 'MQTT', 'Web Dashboard'],
    tagline: 'Ultrasonic sensor arrays with ESP32 and live cloud vacancy guidance heatmap',
    category: 'IoT',
    hardware: ['ESP32 DevKit v1', 'HC-SR04 Sonar Sensors (x4)', 'RC522 RFID Scanner', 'SG90 Servo', 'I2C 16x2 LCD', '5V Power Supply'],
    budgetDisplay: '₹3,500–₹5,000',
    budgetMin: 3500,
    budgetMax: 5000,
    duration: '3–6 weeks',
  },
  {
    num: 2,
    title: 'Precision IoT Smart Agriculture Node',
    slug: 'precision-iot-smart-agriculture-node',
    level: 'Beginner',
    team: '3',
    skills: ['ESP32', 'Sensors', 'MQTT', 'Low Power', 'Soil Telemetry'],
    tagline: 'Capacitive soil moisture and DHT22 atmospheric telemetry with automated solenoid valve pump',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'Capacitive Soil Moisture Sensor', 'DHT22 Temp/Humidity', '12V Submersible Water Pump', '5V Relay Module', 'Solar Panel 10W'],
    budgetDisplay: '₹2,500–₹4,000',
    budgetMin: 2500,
    budgetMax: 4000,
    duration: '2–4 weeks',
  },
  {
    num: 3,
    title: 'Industrial Motor Vibration Monitoring',
    slug: 'industrial-motor-vibration-monitoring',
    level: 'Advanced',
    team: '4',
    skills: ['ESP32', 'IMU', 'Signal Processing', 'FFT', 'Predictive Maintenance'],
    tagline: 'High-speed ADXL345 accelerometer telemetry with FFT harmonic spectrum analysis for predictive maintenance',
    category: 'Embedded',
    hardware: ['ESP32 Dual-Core', 'ADXL345 3-Axis Accelerometer', 'DS18B20 Temp Probe', 'OLED 0.96 inch I2C', 'Industrial Enclosure'],
    budgetDisplay: '₹4,000–₹6,500',
    budgetMin: 4000,
    budgetMax: 6500,
    duration: '4–6 weeks',
  },
  {
    num: 4,
    title: 'IoT Energy Monitoring Device',
    slug: 'iot-energy-monitoring-device',
    level: 'Intermediate',
    team: '3',
    skills: ['Current Sensor', 'ESP32', 'Cloud', 'AC Telemetry', 'Power Factor'],
    tagline: 'Non-invasive split-core CT sensor energy meter streaming RMS voltage, current, and kWh to cloud dashboard',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'SCT-013-000 Non-Invasive CT Sensor', 'ZMPT101B AC Voltage Sensor', 'I2C LCD', 'Flash Storage'],
    budgetDisplay: '₹3,000–₹4,500',
    budgetMin: 3000,
    budgetMax: 4500,
    duration: '3–5 weeks',
  },
  {
    num: 5,
    title: 'Wearable Health Monitoring Band',
    slug: 'wearable-health-monitoring-band',
    level: 'Intermediate',
    team: '3',
    skills: ['ESP32', 'BLE', 'Sensors', 'PPG Signal', 'Mobile Telemetry'],
    tagline: 'MAX30102 SpO2 and optical pulse rate band streaming telemetry over Bluetooth Low Energy to smartphone',
    category: 'Embedded',
    hardware: ['ESP32-PICO-D4 / ESP32-C3', 'MAX30102 PPG Sensor', 'MPU6050 Fall Detector', '0.49 inch OLED', '3.7V LiPo Battery & TP4056'],
    budgetDisplay: '₹3,200–₹4,800',
    budgetMin: 3200,
    budgetMax: 4800,
    duration: '3–5 weeks',
  },
  {
    num: 6,
    title: 'RFID Smart Attendance Terminal',
    slug: 'rfid-smart-attendance-terminal',
    level: 'Beginner',
    team: '2–3',
    skills: ['RFID', 'Embedded C', 'Database', 'SPI Protocol', 'MySQL'],
    tagline: 'Contactless 13.56MHz RC522 attendance scanner with local RTC clock and automated spreadsheet sync',
    category: 'Embedded',
    hardware: ['Arduino Uno / ESP32', 'RC522 RFID Reader', 'DS3231 RTC Module', '16x2 LCD', 'Buzzer', 'MicroSD Card Module'],
    budgetDisplay: '₹1,800–₹3,000',
    budgetMin: 1800,
    budgetMax: 3000,
    duration: '2–3 weeks',
  },
  {
    num: 7,
    title: 'Wireless Patient Alert System',
    slug: 'wireless-patient-alert-system',
    level: 'Advanced',
    team: '4',
    skills: ['BLE', 'ESP32', 'Sensors', 'Mesh Network', 'Nurse Station UI'],
    tagline: 'Multi-node bedside telemetry network broadcasting critical vitals with sub-second alert latency to nurse station',
    category: 'IoT',
    hardware: ['ESP32 Nodes (x3)', 'ECG AD8232 Sensor', 'MAX30102', 'Buzzer Siren', 'Nurse Station Tablet / PC Gateway'],
    budgetDisplay: '₹4,500–₹7,000',
    budgetMin: 4500,
    budgetMax: 7000,
    duration: '4–6 weeks',
  },
  {
    num: 8,
    title: 'Solar Adaptive Street Light',
    slug: 'solar-adaptive-street-light',
    level: 'Intermediate',
    team: '3',
    skills: ['Solar', 'PWM', 'LDR', 'ESP32', 'Power Optimization'],
    tagline: 'Autonomous PWM LED dimming with passive infrared vehicle detection and battery charge regulation',
    category: 'Embedded',
    hardware: ['ESP32 / Arduino Nano', 'PIR Motion Sensor (x2)', 'LDR Sensor', 'High-Power 12V LED COB', 'IRF540N MOSFET', '12V Solar Panel & Battery'],
    budgetDisplay: '₹2,800–₹4,200',
    budgetMin: 2800,
    budgetMax: 4200,
    duration: '3–4 weeks',
  },
  {
    num: 9,
    title: 'Fire & Smoke Early Warning System',
    slug: 'fire-smoke-early-warning-system',
    level: 'Intermediate',
    team: '3',
    skills: ['Sensors', 'IoT', 'Alerts', 'MQ-2', 'Twilio SMS'],
    tagline: 'Dual optical flame detector and MQ-2 electrochemical gas sensor with emergency Twilio siren dispatch',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'MQ-2 Gas Sensor', 'Flame IR Sensor', 'Loud Piezo Buzzer', 'SIM800L GSM / Wi-Fi', 'Status LEDs'],
    budgetDisplay: '₹2,600–₹4,000',
    budgetMin: 2600,
    budgetMax: 4000,
    duration: '2–4 weeks',
  },
  {
    num: 10,
    title: 'Portable Water Quality Monitoring Device',
    slug: 'portable-water-quality-monitoring-device',
    level: 'Advanced',
    team: '4',
    skills: ['pH', 'TDS', 'ESP32', 'Turbidity', 'Environmental Analytics'],
    tagline: 'Multi-probe handheld telemetry device calculating overall Water Quality Index (WQI) on color TFT display',
    category: 'IoT',
    hardware: ['ESP32 NodeMCU', 'Analog pH Meter Kit', 'TDS Conductivity Probe', 'Turbidity Sensor', 'DS18B20 Temp', 'ST7789 TFT Display'],
    budgetDisplay: '₹4,200–₹6,500',
    budgetMin: 4200,
    budgetMax: 6500,
    duration: '4–6 weeks',
  },
  {
    num: 11,
    title: 'LoRa Environmental Sensor Network',
    slug: 'lora-environmental-sensor-network',
    level: 'Advanced',
    team: '4–5',
    skills: ['LoRa', 'Wireless Communication', 'Long Range RF', 'Mesh Protocol', 'Gateway'],
    tagline: 'Sub-GHz 868MHz long-range wireless telemetry network transmitting sensor packets over 5km with solar nodes',
    category: 'IoT',
    hardware: ['SX1278 LoRa Transceivers (x3)', 'ESP32 Nodes (x2)', 'Raspberry Pi LoRa Gateway', 'BME280 Atmospheric Sensor', 'Omni Antenna 5dBi'],
    budgetDisplay: '₹5,500–₹8,500',
    budgetMin: 5500,
    budgetMax: 8500,
    duration: '5–7 weeks',
  },
  {
    num: 12,
    title: 'Vehicle Accident Detection & Alert System',
    slug: 'vehicle-accident-detection-alert-system',
    level: 'Advanced',
    team: '4',
    skills: ['GPS', 'IMU', 'GSM', 'Impact Algorithm', 'Emergency Dispatch'],
    tagline: 'Crash impact detection with NEO-6M GPS coordinates and instant GSM SOS distress messaging',
    category: 'Embedded',
    hardware: ['ESP32 / Arduino Mega', 'NEO-6M GPS Module', 'ADXL345 / MPU6050 Accelerometer', 'SIM800L GSM Module', 'Piezo Buzzer', '18650 Battery Pack'],
    budgetDisplay: '₹3,800–₹5,800',
    budgetMin: 3800,
    budgetMax: 5800,
    duration: '3–5 weeks',
  },
  {
    num: 13,
    title: 'Smart Waste Bin Monitoring Network',
    slug: 'smart-waste-bin-monitoring-network',
    level: 'Intermediate',
    team: '3',
    skills: ['Ultrasonic', 'IoT', 'Route Optimization', 'Fleet Dashboard'],
    tagline: 'Sonar depth fill-level monitoring with GPS bin mapping and dynamic waste collection vehicle route dispatch',
    category: 'IoT',
    hardware: ['ESP32 DevKit (x3)', 'JSN-SR04T Waterproof Ultrasonic Sensor', 'Solar Li-Ion Charger', 'Cloud Dashboard'],
    budgetDisplay: '₹3,200–₹4,800',
    budgetMin: 3200,
    budgetMax: 4800,
    duration: '3–4 weeks',
  },
  {
    num: 14,
    title: 'Secure Home Automation Gateway',
    slug: 'secure-home-automation-gateway',
    level: 'Advanced',
    team: '4',
    skills: ['Raspberry Pi', 'MQTT', 'Security', 'TLS/SSL', 'Home Assistant'],
    tagline: 'End-to-end encrypted local hub running Home Assistant with mutual TLS certificates and offline fallback',
    category: 'IoT',
    hardware: ['Raspberry Pi 4 (2GB/4GB)', 'ESP32 Smart Relays (x4)', 'Zigbee USB Dongle', 'MicroSD 32GB High Endurance'],
    budgetDisplay: '₹6,000–₹9,500',
    budgetMin: 6000,
    budgetMax: 9500,
    duration: '4–6 weeks',
  },
  {
    num: 15,
    title: 'Offline Voice-Controlled Appliance System',
    slug: 'offline-voice-controlled-appliance-system',
    level: 'Advanced',
    team: '3–4',
    skills: ['Speech', 'ESP32', 'Embedded', 'DSP', 'Zero Cloud Latency'],
    tagline: 'Edge voice keyword spotting model on ESP32-S3 controlling relays with zero internet dependency and 80ms latency',
    category: 'Embedded',
    hardware: ['ESP32-S3 8MB PSRAM', 'INMP441 I2S Digital Microphone', '4-Channel Optocoupler Relay Module', 'MAX98357A I2S DAC Audio Amp', 'Mini Speaker'],
    budgetDisplay: '₹3,500–₹5,200',
    budgetMin: 3500,
    budgetMax: 5200,
    duration: '4–5 weeks',
  },
  {
    num: 16,
    title: 'Edge-AI Object Detection Camera',
    slug: 'edge-ai-object-detection-camera',
    level: 'Advanced',
    team: '4',
    skills: ['Raspberry Pi', 'OpenCV', 'AI', 'TensorFlow Lite', 'Camera Pipeline'],
    tagline: 'Real-time MobileNet SSD neural inference at 15 FPS on edge camera with bounding box overlay and telemetry',
    category: 'AI/ML',
    hardware: ['Raspberry Pi 4 / Pi Zero 2W', 'Sony IMX219 Pi Camera Module v2', 'Cooling Heatsink Fan', 'Mini HDMI Display'],
    budgetDisplay: '₹6,500–₹10,500',
    budgetMin: 6500,
    budgetMax: 10500,
    duration: '5–7 weeks',
  },
  {
    num: 17,
    title: 'Navigation Assistance Device',
    slug: 'navigation-assistance-device',
    level: 'Advanced',
    team: '4',
    skills: ['ToF', 'IMU', 'BLE', 'Embedded', 'Haptic Guidance'],
    tagline: 'Dual VL53L0X laser Time-of-Flight depth sensors and ERM haptic motor vibration band for visually impaired assistance',
    category: 'Embedded',
    hardware: ['ESP32 DevKit', 'VL53L0X Laser ToF Sensor (x2)', 'MPU6050 Gyro/Accel', 'Haptic Motor Drivers (x2)', 'LiPo 3.7V Battery'],
    budgetDisplay: '₹3,600–₹5,400',
    budgetMin: 3600,
    budgetMax: 5400,
    duration: '4–6 weeks',
  },
  {
    num: 18,
    title: 'Industrial Wireless Sensor Network',
    slug: 'industrial-wireless-sensor-network',
    level: 'Advanced',
    team: '5',
    skills: ['LoRa', 'MQTT', 'Networking', 'Modbus', 'SCADA Integration'],
    tagline: 'Multi-hop RS485 Modbus and LoRa industrial node network streaming temperature, pressure, and flow to SCADA dashboard',
    category: 'IoT',
    hardware: ['ESP32 Industrial Din Rail Nodes (x3)', 'MAX485 Modbus Transceivers', 'SX1276 LoRa Modules', 'Industrial 24V SMPS'],
    budgetDisplay: '₹6,200–₹9,800',
    budgetMin: 6200,
    budgetMax: 9800,
    duration: '5–8 weeks',
  },
  {
    num: 19,
    title: 'AI-Based Traffic Flow Counter',
    slug: 'ai-based-traffic-flow-counter',
    level: 'Advanced',
    team: '4',
    skills: ['Raspberry Pi', 'OpenCV', 'DeepSORT', 'Vehicle Tracking', 'Analytics'],
    tagline: 'Computer vision vehicle detection, speed estimation, and vehicle classification (Car/Bus/Truck/Bike) with CSV exports',
    category: 'AI/ML',
    hardware: ['Raspberry Pi 4 4GB', 'C920 HD Webcam / IP Camera', 'Aluminum Enclosure', 'MicroSD 64GB Class 10'],
    budgetDisplay: '₹7,000–₹11,000',
    budgetMin: 7000,
    budgetMax: 11000,
    duration: '5–7 weeks',
  },
  {
    num: 20,
    title: 'Mobile Air Quality Mapping System',
    slug: 'mobile-air-quality-mapping-system',
    level: 'Intermediate',
    team: '3',
    skills: ['ESP32', 'GPS', 'PM Sensor', 'GIS Mapping', 'Heatmap Visualizer'],
    tagline: 'Vehicle-mounted laser particulate matter sensor (PM2.5/PM10) logging geocoded pollution heatmaps to OpenStreetMap',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'PMS5003 Laser Dust Sensor', 'MQ-135 Air Quality Sensor', 'NEO-6M GPS Module', 'OLED 0.96 inch', 'MicroSD Datalogger'],
    budgetDisplay: '₹3,800–₹5,800',
    budgetMin: 3800,
    budgetMax: 5800,
    duration: '3–5 weeks',
  }
];

const eeeProjects = [
  {
    num: 1,
    title: 'Solar PV Performance Monitoring System',
    slug: 'solar-pv-performance-monitoring-system',
    level: 'Intermediate',
    team: '3',
    skills: ['Solar', 'ESP32', 'Sensors', 'Irradiance', 'Efficiency Calculation'],
    tagline: 'Real-time solar irradiance pyranometer, panel temperature, DC voltage, and current analytics to measure PV degradation',
    category: 'Embedded',
    hardware: ['ESP32 NodeMCU', 'INA219 High-Side DC Sensor', 'Silicon Pyranometer / LDR', 'DS18B20 Panel Temp', '12V 20W Solar Panel', '16x2 I2C LCD'],
    budgetDisplay: '₹3,500–₹5,200',
    budgetMin: 3500,
    budgetMax: 5200,
    duration: '3–5 weeks',
  },
  {
    num: 2,
    title: 'Smart EV Charging Scheduler',
    slug: 'smart-ev-charging-scheduler',
    level: 'Advanced',
    team: '4',
    skills: ['EV', 'IoT', 'Load Management', 'Time-of-Use Tariffs', 'Grid Protection'],
    tagline: 'Dynamic EV charging load balancing with off-peak electricity pricing optimization and peak grid transformer safety cutout',
    category: 'IoT',
    hardware: ['ESP32 Dual-Core', 'ACS712 30A Current Sensor', '40A Contactor / Solid State Relay', 'DS3231 RTC', 'Nextion HMI Touchscreen Display'],
    budgetDisplay: '₹4,800–₹7,200',
    budgetMin: 4800,
    budgetMax: 7200,
    duration: '4–6 weeks',
  },
  {
    num: 3,
    title: 'Lithium Battery Health Monitor',
    slug: 'lithium-battery-health-monitor',
    level: 'Advanced',
    team: '3–4',
    skills: ['BMS', 'ESP32', 'Battery Analytics', 'Coulomb Counting', 'Cell Balancing'],
    tagline: '3S/4S lithium battery management with individual cell voltage telemetry, internal resistance estimation, and State-of-Health (SoH)',
    category: 'Embedded',
    hardware: ['ESP32 DevKit', 'ADS1115 16-Bit ADC', 'Active Inductive Cell Balancer', 'NTC 10K Thermistors (x3)', 'OLED Display', '3S 18650 Battery Pack'],
    budgetDisplay: '₹4,200–₹6,500',
    budgetMin: 4200,
    budgetMax: 6500,
    duration: '4–6 weeks',
  },
  {
    num: 4,
    title: 'Automatic Power Factor Correction Trainer',
    slug: 'automatic-power-factor-correction-trainer',
    level: 'Advanced',
    team: '4',
    skills: ['Power Electronics', 'Control', 'Phase Angle', 'Capacitor Bank', 'AC Power'],
    tagline: 'Zero-crossing detector measuring voltage-current phase displacement with automated relay-switched capacitor bank correction',
    category: 'Embedded',
    hardware: ['Arduino Mega / ESP32', 'Zero-Crossing Detector Circuit', 'Capacitor Banks (x3)', 'High-Voltage Relays (x3)', 'Inductive Load (Choke Coil)', 'Current Transformer'],
    budgetDisplay: '₹5,000–₹7,800',
    budgetMin: 5000,
    budgetMax: 7800,
    duration: '5–7 weeks',
  },
  {
    num: 5,
    title: 'Smart Prepaid Energy Meter',
    slug: 'smart-prepaid-energy-meter',
    level: 'Intermediate',
    team: '3',
    skills: ['Metering', 'ESP32', 'IoT', 'Relay Disconnect', 'Payment Gateway API'],
    tagline: 'Digital prepaid kWh meter with automated remote cutoff relay, tamper detection switch, and instant recharge wallet sync',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'ADE7758 / PZEM-004T Energy Meter', '40A Latching Relay', 'Tamper Microswitch', 'Buzzer', 'Status LEDs'],
    budgetDisplay: '₹3,400–₹5,000',
    budgetMin: 3400,
    budgetMax: 5000,
    duration: '3–5 weeks',
  },
  {
    num: 6,
    title: 'BLDC Motor Speed Controller',
    slug: 'bldc-motor-speed-controller',
    level: 'Advanced',
    team: '4',
    skills: ['BLDC', 'PWM', 'Control', 'Six-Step Commutation', 'Hall Sensors'],
    tagline: 'Microcontroller 3-phase inverter driver executing six-step trapezoidal commutation with digital Hall effect feedback',
    category: 'Embedded',
    hardware: ['STM32 / ESP32', 'IR2104 Gate Drivers (x3)', 'IRF3205 N-Channel MOSFETs (x6)', 'BLDC Outrunner Motor 1000KV', 'Digital Hall Sensors', '12V Power Source'],
    budgetDisplay: '₹4,500–₹6,800',
    budgetMin: 4500,
    budgetMax: 6800,
    duration: '4–6 weeks',
  },
  {
    num: 7,
    title: 'Three-Phase Fault Detection Trainer',
    slug: 'three-phase-fault-detection-trainer',
    level: 'Advanced',
    team: '4',
    skills: ['Power Systems', 'Sensors', 'Relay Protection', 'Symmetrical Components'],
    tagline: 'Detection and classification of Line-to-Ground (L-G), Line-to-Line (L-L), and 3-phase symmetrical short circuit faults',
    category: 'Embedded',
    hardware: ['ESP32 / Arduino Mega', 'Step-down 230V-12V Transformers (x3)', 'Current Transformers (x3)', 'Fault Simulation Pushbuttons', 'Tripping Relays', 'LCD Screen'],
    budgetDisplay: '₹4,800–₹7,500',
    budgetMin: 4800,
    budgetMax: 7500,
    duration: '4–6 weeks',
  },
  {
    num: 8,
    title: 'Microgrid Load Sharing Demonstrator',
    slug: 'microgrid-load-sharing-demonstrator',
    level: 'Advanced',
    team: '5',
    skills: ['Microgrid', 'Control', 'Droop Control', 'Islanded Mode', 'Renewables'],
    tagline: 'Dual distributed renewable energy sources (Solar + Wind emulator) with droop control logic for seamless load sharing without blackout',
    category: 'Embedded',
    hardware: ['ESP32 Controller', 'DC-DC Buck Converters (x2)', 'Current/Voltage Telemetry Nodes', 'Dynamic Load Resistors', 'Digital Switching Relays'],
    budgetDisplay: '₹5,500–₹8,800',
    budgetMin: 5500,
    budgetMax: 8800,
    duration: '5–7 weeks',
  },
  {
    num: 9,
    title: 'Solar MPPT Controller',
    slug: 'solar-mppt-controller',
    level: 'Advanced',
    team: '4',
    skills: ['Solar', 'Power Electronics', 'Perturb & Observe', 'Synchronous Buck'],
    tagline: 'Synchronous buck converter running Perturb & Observe (P&O) maximum power point tracking extracting 98% panel efficiency',
    category: 'Embedded',
    hardware: ['ESP32 / Arduino Nano', 'IR2104 Synchronous Gate Driver', 'High-Frequency Inductor 33uH', 'Low RDS(on) MOSFETs', 'ACS712 Current Sensor', 'OLED Display'],
    budgetDisplay: '₹3,800–₹5,800',
    budgetMin: 3800,
    budgetMax: 5800,
    duration: '4–6 weeks',
  },
  {
    num: 10,
    title: 'Regenerative Braking Energy Logger',
    slug: 'regenerative-braking-energy-logger',
    level: 'Advanced',
    team: '4',
    skills: ['EV', 'Motor Control', 'Energy Recovery', 'Supercapacitor', 'Bi-directional DC'],
    tagline: 'Bi-directional DC-DC converter capturing kinetic back-EMF energy into a supercapacitor bank during EV motor deceleration',
    category: 'Embedded',
    hardware: ['ESP32 DevKit', 'PMDC Motor with Flywheel', 'Supercapacitor 10F 16V Bank', 'Bi-directional Current Sensor INA226', 'Electronic Brake Relay'],
    budgetDisplay: '₹4,600–₹7,000',
    budgetMin: 4600,
    budgetMax: 7000,
    duration: '4–6 weeks',
  },
  {
    num: 11,
    title: 'Transformer Health Monitoring System',
    slug: 'transformer-health-monitoring-system',
    level: 'Intermediate',
    team: '3',
    skills: ['Temperature', 'Current', 'IoT', 'Oil Level', 'Thermal Imaging'],
    tagline: 'Continuous distribution transformer telemetry measuring oil temperature, dielectric oil level, vibration, and phase load imbalance',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'DS18B20 Waterproof Probe', 'Float Level Sensor', 'SCT-013 CT Sensors (x3)', 'MQ-7 Dissolved Gas Detector', 'Cloud Dashboard'],
    budgetDisplay: '₹3,600–₹5,400',
    budgetMin: 3600,
    budgetMax: 5400,
    duration: '3–5 weeks',
  },
  {
    num: 12,
    title: 'Industrial Motor Overload Protector',
    slug: 'industrial-motor-overload-protector',
    level: 'Intermediate',
    team: '3',
    skills: ['Protection', 'Embedded', 'Thermal Inverse-Time', 'Microcontroller Relay'],
    tagline: 'Microprocessor-based inverse-time thermal overload relay curve tripping motor contactor before stator winding burnout',
    category: 'Embedded',
    hardware: ['Arduino Uno / ESP32', 'Current Transformer 20A', 'Thermal Relay Emulation Circuit', 'Industrial Solid State Relay 25A', 'Warning Buzzer'],
    budgetDisplay: '₹2,800–₹4,200',
    budgetMin: 2800,
    budgetMax: 4200,
    duration: '3–4 weeks',
  },
  {
    num: 13,
    title: 'Smart Water Pump Protection System',
    slug: 'smart-water-pump-protection-system',
    level: 'Intermediate',
    team: '3',
    skills: ['Motor Control', 'Sensors', 'Dry-Run Detection', 'Phase Failure', 'Auto Restart'],
    tagline: 'Monitors pump dry-run condition via power factor drop, under-voltage, and single-phasing with automated recovery timer',
    category: 'Embedded',
    hardware: ['ESP32 / Arduino Nano', 'PZEM-004T Power Module', 'Water Flow Sensor', 'Heavy Duty 30A Relay', 'Status Indicator LEDs'],
    budgetDisplay: '₹3,000–₹4,500',
    budgetMin: 3000,
    budgetMax: 4500,
    duration: '3–4 weeks',
  },
  {
    num: 14,
    title: 'Wind Turbine Condition Monitoring',
    slug: 'wind-turbine-condition-monitoring',
    level: 'Advanced',
    team: '4',
    skills: ['Renewable Energy', 'Vibration', 'RPM Anemometer', 'Gearbox Health'],
    tagline: 'Anemometer wind speed, generator RPM optical tachometer, and tower vibration telemetry streaming to remote wind park portal',
    category: 'IoT',
    hardware: ['ESP32 Dual-Core', 'Optical Interrupter Tachometer', 'ADXL345 Vibration Sensor', 'Cup Anemometer', 'Mini Wind Generator Model'],
    budgetDisplay: '₹4,200–₹6,800',
    budgetMin: 4200,
    budgetMax: 6800,
    duration: '4–6 weeks',
  },
  {
    num: 15,
    title: 'EV Battery Swapping Station Monitor',
    slug: 'ev-battery-swapping-station-monitor',
    level: 'Advanced',
    team: '4',
    skills: ['EV', 'RFID', 'Battery', 'Multi-Bay Charging', 'Cloud Billing'],
    tagline: 'Multi-slot battery swapping cabinet checking authenticated RFID driver tokens, thermal runaway, and ready-to-dispatch pack SoH',
    category: 'IoT',
    hardware: ['ESP32 Master Gateway', 'RC522 RFID Reader', 'INA219 Bay Voltage/Current Sensors (x4)', 'Electronic Solenoid Cabinet Locks', 'Touch Display'],
    budgetDisplay: '₹5,200–₹8,200',
    budgetMin: 5200,
    budgetMax: 8200,
    duration: '5–7 weeks',
  },
  {
    num: 16,
    title: 'Smart Electrical Safety Panel',
    slug: 'smart-electrical-safety-panel',
    level: 'Intermediate',
    team: '3',
    skills: ['Current Monitoring', 'Protection', 'Arc Fault Detection', 'Earth Leakage'],
    tagline: 'Integrated miniature smart DB panel with residual current sensing (GFCI), arc signature detection, and instant push alerts',
    category: 'Embedded',
    hardware: ['ESP32 DevKit', 'Differential Current Toroid Transformer', 'Optical Arc Sensor', 'High-Speed Triac Cutout', 'Buzzer & OLED'],
    budgetDisplay: '₹3,400–₹5,000',
    budgetMin: 3400,
    budgetMax: 5000,
    duration: '3–5 weeks',
  },
  {
    num: 17,
    title: 'Demand Response Load Controller',
    slug: 'demand-response-load-controller',
    level: 'Advanced',
    team: '4',
    skills: ['Smart Grid', 'IoT', 'Peak Shedding', 'Grid Frequency Monitoring'],
    tagline: 'Monitors grid AC frequency drop during peak grid congestion and automatically sheds non-essential domestic loads (HVAC/Water heater)',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'Precision Frequency Counter Circuit', 'Smart Relay Array (4-Channel)', 'Energy Metering IC', 'Web Control Interface'],
    budgetDisplay: '₹4,000–₹6,200',
    budgetMin: 4000,
    budgetMax: 6200,
    duration: '4–6 weeks',
  },
  {
    num: 18,
    title: 'Piezoelectric Energy Harvesting Floor',
    slug: 'piezoelectric-energy-harvesting-floor',
    level: 'Intermediate',
    team: '3',
    skills: ['Energy Harvesting', 'Piezo Disc', 'Supercapacitor', 'LTC3588 Rectification'],
    tagline: 'Array of PZT piezoelectric discs converting footstep mechanical kinetic pressure into regulated DC electricity stored in supercapacitors',
    category: 'Embedded',
    hardware: ['Piezoelectric Ceramic Discs (x12)', 'Full Bridge Schottky Rectifiers', 'LTC3588 Piezo Harvester Energy Board', 'Supercapacitor 5.5V 1F', 'Ultra-low power LED node'],
    budgetDisplay: '₹2,600–₹4,200',
    budgetMin: 2600,
    budgetMax: 4200,
    duration: '3–4 weeks',
  },
  {
    num: 19,
    title: 'Solar Streetlight Fault Detection',
    slug: 'solar-streetlight-fault-detection',
    level: 'Intermediate',
    team: '3',
    skills: ['Solar', 'IoT', 'Panel Cleaning Alert', 'Battery Dead Cell'],
    tagline: 'Automated diagnostic node identifying dirt/dust accumulation, blown LED drivers, and degraded battery cells with GPS mapping',
    category: 'IoT',
    hardware: ['ESP32 DevKit', 'INA219 Current/Voltage Sensors (x2)', 'LDR Photodiode Reference', 'LoRa / Wi-Fi Module', 'Status OLED'],
    budgetDisplay: '₹3,200–₹4,800',
    budgetMin: 3200,
    budgetMax: 4800,
    duration: '3–4 weeks',
  },
  {
    num: 20,
    title: 'Automated Conveyor Motor Controller',
    slug: 'automated-conveyor-motor-controller',
    level: 'Intermediate',
    team: '4',
    skills: ['Automation', 'Motor Control', 'VFD Simulator', 'Optocoupler', 'Proximity Sensor'],
    tagline: 'Conveyor belt automation with optical item sorting, inductive proximity sensors, and variable PWM speed acceleration/deceleration control',
    category: 'Embedded',
    hardware: ['Arduino Mega / ESP32', 'L298N / BTS7960 43A Motor Driver', '12V High-Torque Geared DC Motor', 'Inductive Proximity Sensor', 'IR Beam Break Sensor (x2)'],
    budgetDisplay: '₹3,800–₹5,800',
    budgetMin: 3800,
    budgetMax: 5800,
    duration: '3–5 weeks',
  }
];

function buildProjectObject(p, branch) {
  const isECE = branch === 'ECE';
  const prefix = isECE ? 'ece' : 'eee';
  const id = `proj-${prefix}-${p.num}`;
  
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

  const bom = p.hardware.map((item, idx) => ({
    component: item,
    specs: 'Standard University Engineering Lab Grade',
    qty: 1,
    estCost: 150 + ((idx * 170) % 650)
  }));

  const vivaQuestions = [
    {
      question: `What is the core working principle of ${p.title}?`,
      answer: `${p.tagline}. It acquires real-time physical telemetry through precision sensors, performs edge noise filtering, and coordinates control via microcontroller firmware with fail-safe limits.`
    },
    {
      question: `Why was this hardware architecture selected for this ${branch} project?`,
      answer: `The design balances cost, processing bandwidth, and low power consumption. By offloading time-critical sensing to edge microcontrollers and high-level telemetry to cloud dashboards, we achieve sub-second latency and high reliability.`
    },
    {
      question: `How does the system handle sensor faults or power fluctuations?`,
      answer: `The system incorporates software debounce filtering, brownout detection, and watchdog timer interrupts to automatically recover from transient signal noise or supply dips.`
    }
  ];

  const roadmap = [
    { step: '01', title: 'Component Sourcing & Bench Verification', desc: 'Inspect pinouts, verify datasheets, and calibrate sensors on breadboard.' },
    { step: '02', title: 'Circuit Assembly & Power Rail Testing', desc: 'Solder circuit modules, wire regulated power buses, and test voltage levels.' },
    { step: '03', title: 'Microcontroller Firmware Development', desc: 'Code sensor sampling algorithms, state machines, and control logic.' },
    { step: '04', title: 'Telemetry & Connectivity Integration', desc: 'Connect Wi-Fi / MQTT / LoRa protocols for real-time packet serialization.' },
    { step: '05', title: 'Dashboard & Interface Prototyping', desc: 'Build responsive monitoring portal with live indicators and historical graphs.' },
    { step: '06', title: 'Stress Testing & Fault Emulation', desc: 'Validate boundary conditions, load stress, and fail-safe safety triggers.' },
    { step: '07', title: 'IEEE Project Report Compilation', desc: 'Draft abstract, block diagrams, circuit equations, and experimental results.' },
    { step: '08', title: 'Viva Defense Presentation Preparation', desc: 'Rehearse slide deck and internal/external examiner technical question bank.' }
  ];

  return {
    id,
    title: p.title,
    slug: p.slug,
    tagline: p.tagline,
    description: `A production-ready, university-vetted engineering project for ${branch} students. Features ${p.tagline}. Includes verified circuit schematics, fully commented firmware code, and viva defense question bank.`,
    problem: `Traditional manual systems suffer from measurement latency, human error, lack of remote logging, and inability to act upon anomalous conditions before hardware damage occurs.`,
    solution: `An automated, sensor-driven architecture integrating precision signal conditioning, ${p.skills.slice(0, 3).join(', ')}, and cloud/edge analytics for real-time protection and monitoring.`,
    howItWorks: `Sensors acquire analog/digital telemetry, pass through signal conditioning to the microcontroller, which processes state transitions, computes control actions, and broadcasts packets over telemetry protocols.`,
    branch: [branch],
    category: p.category,
    projectType: p.level === 'Advanced' ? 'Final Year Project' : 'Major Project',
    technologies: p.skills,
    difficulty: p.level,
    budget: p.budgetDisplay,
    budgetDisplay: p.budgetDisplay,
    budgetMin: p.budgetMin,
    budgetMax: p.budgetMax,
    duration: p.duration,
    teamSize: p.team,
    hardware: p.hardware,
    software: ['Arduino C++ / PlatformIO', 'Python / Node.js', 'Tailwind CSS Dashboard', 'MySQL / InfluxDB', 'Docker'],
    features: [
      `Continuous real-time telemetry sampling with ${p.skills[0]}`,
      'Instant fault trip and threshold safety cutoff within 100ms',
      'Local display diagnostics and remote cloud dashboard monitoring',
      'Non-volatile parameter storage and brownout auto-recovery',
      'Comprehensive external viva defense documentation bank'
    ],
    architecture: `Sensors & Transducers → Signal Conditioning → ${p.skills[0]} Controller → Communication Gateway → Cloud Dashboard / Relational Storage`,
    architectureSteps: ['Sensors & Transducers', 'Signal Conditioning', `${p.skills[0]} Controller`, 'Communication Gateway', 'Cloud Dashboard'],
    requirements: ['Basic circuit breadboarding experience', 'C/C++ firmware toolchain familiarity', 'Regulated 5V/12V DC lab power supply'],
    learningOutcomes: [
      `${p.skills[0]} firmware architecture and pin multiplexing`,
      'Hardware sensor interfacing and analog signal noise filtering',
      'Real-time communication protocol implementation (MQTT / BLE / LoRa)',
      'Academic project documentation to IEEE capstone standards'
    ],
    tags: [branch, p.level, ...p.skills],
    defaultMatch: 95 - (p.num % 6),
    isFlagship: p.num <= 2,
    visualSummary: `${p.title} + ${p.skills[0]} + telemetry dashboard`,
    gallery: {
      overview: `/projects/smart-parking-system/overview.webp`,
      hardware: `/projects/smart-parking-system/hardware.webp`,
      architecture: `/projects/smart-parking-system/architecture.webp`,
      dashboard: `/projects/smart-parking-system/dashboard.webp`,
      deployment: `/projects/smart-parking-system/deployment.webp`,
      prototype: `/projects/smart-parking-system/prototype.webp`
    },
    galleryVisuals: [
      { title: 'Edge Hardware Node', subtitle: `${p.hardware[0]} with sensor matrix`, type: 'hardware', accentColor: isECE ? '#087443' : '#ea580c' },
      { title: 'System Dataflow', subtitle: 'Sensors → MCU → Cloud Gateway', type: 'architecture', accentColor: '#16a34a' },
      { title: 'Live Telemetry UI', subtitle: 'Responsive real-time dashboard', type: 'dashboard', accentColor: '#84cc16' },
      { title: 'Prototype Deployment', subtitle: 'Bench assembly and field enclosure', type: 'deployment', accentColor: '#087443' }
    ],
    packageContents: defaultPackageContents,
    vivaQuestions,
    bom,
    roadmap
  };
}

const allProjects = [
  ...eceProjects.map(p => buildProjectObject(p, 'ECE')),
  ...eeeProjects.map(p => buildProjectObject(p, 'EEE'))
];

console.log(`Generated ${allProjects.length} projects (${eceProjects.length} ECE, ${eeeProjects.length} EEE).`);

const fileContent = `export interface VivaQuestion {
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

export const PROJECTS_DATA: Project[] = ${JSON.stringify(allProjects, null, 2)};

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
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'projects.ts'), fileContent, 'utf8');
console.log('Successfully updated src/data/projects.ts with all 20 ECE and 20 EEE projects!');
