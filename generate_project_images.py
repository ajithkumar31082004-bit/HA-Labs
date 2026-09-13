import os
from PIL import Image, ImageDraw, ImageFont

# 20 Projects slugs and metadata
PROJECTS = [
    ("smart-parking-system", "Smart Parking System", "IoT + AWS", "#00d2ff"),
    ("smart-agriculture-irrigation", "Smart Agriculture & Irrigation", "IoT + Automation", "#10b981"),
    ("smart-energy-monitoring", "Smart Energy Monitoring System", "IoT + Cloud", "#38bdf8"),
    ("ev-charging-monitoring", "EV Charging Monitoring System", "IoT + CleanTech", "#818cf8"),
    ("iot-smart-home-automation", "IoT Smart Home Automation", "IoT + Home Automation", "#f59e0b"),
    ("iot-fire-gas-detection", "IoT Fire & Gas Detection System", "IoT + Life Safety", "#ef4444"),
    ("smart-street-light-system", "Smart Street Light System", "Embedded + Energy Saving", "#eab308"),
    ("smart-waste-management", "Smart Waste Management System", "IoT + Municipal Smart City", "#14b8a6"),
    ("rfid-smart-attendance", "RFID Smart Attendance System", "Embedded + Campus ERP", "#06b6d4"),
    ("iot-environmental-monitoring", "IoT Environmental Monitoring", "IoT + Climate Analytics", "#84cc16"),
    ("iot-patient-health-monitoring", "IoT Patient Health Monitoring", "IoT + Biomedical Telemetry", "#ec4899"),
    ("obstacle-avoidance-robot", "Obstacle Avoidance Robot", "Robotics + Autonomous Navigation", "#a855f7"),
    ("ai-accident-detection", "AI-Based Accident Detection", "AI + Computer Vision", "#f43f5e"),
    ("ai-cctv-surveillance", "AI CCTV Surveillance System", "AI + Edge YOLOv8", "#3b82f6"),
    ("network-intrusion-detection", "Network Intrusion Detection System", "Cybersecurity + Packet ML", "#6366f1"),
    ("cloud-student-management", "Cloud-Based Student Management", "Cloud + Full Stack Web", "#0284c7"),
    ("devops-cicd-web-application", "DevOps CI/CD Web Application", "DevOps + Kubernetes/Docker", "#10b981"),
    ("realtime-iot-monitoring-dashboard", "Real-Time IoT Monitoring Dashboard", "Cloud + MQTT / Grafana", "#00d2ff"),
    ("ai-project-recommendation", "AI Student Project Recommendation", "AI + Machine Learning", "#8b5cf6"),
    ("industrial-iot-predictive-maintenance", "Industrial IoT Predictive Maintenance", "Industry 4.0 + TinyML", "#d946ef"),
]

IMAGE_TYPES = [
    ("overview", "01. PROJECT SYSTEM OVERVIEW", "High-level functional block diagram & technical scope"),
    ("hardware", "02. HARDWARE & CIRCUIT PINOUT", "Sensor interfacing, power distribution & microcontrollers"),
    ("architecture", "03. DATAFLOW ARCHITECTURE", "Telemetry ingestion, protocols, REST/MQTT API & DB"),
    ("dashboard", "04. REAL-TIME DASHBOARD UI", "Telemetry metrics, controls, live charts & indicators"),
    ("deployment", "05. CLOUD DEPLOYMENT & DOCKER", "Containerization, AWS EC2 hosting & Nginx gateway"),
    ("prototype", "06. FINAL WORKING PROTOTYPE", "Benchtop prototype assembly & viva demonstration")
]

BASE_DIR = os.path.join(os.getcwd(), "public", "projects")

def create_tech_card(slug, proj_title, tech_tag, accent_hex, img_type, title_text, desc_text):
    width, height = 1200, 750
    img = Image.new("RGB", (width, height), color="#060913")
    draw = ImageDraw.Draw(img)

    # Convert accent hex to RGB
    h = accent_hex.lstrip('#')
    accent_rgb = tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

    # Grid background lines
    grid_spacing = 40
    for x in range(0, width, grid_spacing):
        draw.line([(x, 0), (x, height)], fill="#0c1326", width=1)
    for y in range(0, height, grid_spacing):
        draw.line([(0, y), (width, y)], fill="#0c1326", width=1)

    # Outer border with glowing corner markers
    border_pad = 30
    draw.rectangle(
        [border_pad, border_pad, width - border_pad, height - border_pad],
        outline="#172545",
        width=2
    )

    # Accent corner markers
    corner_len = 25
    # Top-left
    draw.line([(border_pad, border_pad), (border_pad + corner_len, border_pad)], fill=accent_hex, width=3)
    draw.line([(border_pad, border_pad), (border_pad, border_pad + corner_len)], fill=accent_hex, width=3)
    # Top-right
    draw.line([(width - border_pad, border_pad), (width - border_pad - corner_len, border_pad)], fill=accent_hex, width=3)
    draw.line([(width - border_pad, border_pad), (width - border_pad, border_pad + corner_len)], fill=accent_hex, width=3)
    # Bottom-left
    draw.line([(border_pad, height - border_pad), (border_pad + corner_len, height - border_pad)], fill=accent_hex, width=3)
    draw.line([(border_pad, height - border_pad), (border_pad, height - border_pad - corner_len)], fill=accent_hex, width=3)
    # Bottom-right
    draw.line([(width - border_pad, height - border_pad), (width - border_pad - corner_len, height - border_pad)], fill=accent_hex, width=3)
    draw.line([(width - border_pad, height - border_pad), (width - border_pad, height - border_pad - corner_len)], fill=accent_hex, width=3)

    # Header Ribbon
    draw.rectangle([border_pad, border_pad, width - border_pad, border_pad + 60], fill="#0a1024")
    draw.line([(border_pad, border_pad + 60), (width - border_pad, border_pad + 60)], fill="#1e315b", width=1)

    # Header text
    draw.text((border_pad + 25, border_pad + 20), "HA LABS // ENGINEERING SPECIFICATION", fill="#64748b")
    draw.text((width - border_pad - 220, border_pad + 20), f"STATUS: VERIFIED BUILD", fill=accent_hex)

    # Center card panel
    panel_left, panel_top = border_pad + 50, border_pad + 90
    panel_right, panel_bottom = width - border_pad - 50, height - border_pad - 50
    draw.rectangle([panel_left, panel_top, panel_right, panel_bottom], fill="#080e1c", outline="#1a2b4c", width=1)

    # Accent top bar for panel
    draw.line([(panel_left, panel_top), (panel_right, panel_top)], fill=accent_hex, width=3)

    # Content inside panel
    draw.text((panel_left + 40, panel_top + 40), title_text, fill=accent_hex)
    draw.text((panel_left + 40, panel_top + 80), proj_title, fill="#ffffff")
    draw.text((panel_left + 40, panel_top + 130), desc_text, fill="#94a3b8")

    # Diagram preview wireframe / visual structure
    wire_y = panel_top + 180
    wire_w = panel_right - panel_left - 80
    wire_h = 240
    draw.rectangle([panel_left + 40, wire_y, panel_left + 40 + wire_w, wire_y + wire_h], fill="#050a14", outline="#1e293b", width=1)

    # Mock flow diagram nodes inside wireframe
    num_nodes = 5
    node_w = 150
    node_h = 70
    spacing = (wire_w - (num_nodes * node_w)) // (num_nodes + 1)
    
    node_names = {
        "overview": ["1. Sensor Acquisition", "2. Microcontroller", "3. Local Edge Processing", "4. Cloud Ingestion", "5. User Dashboard"],
        "hardware": ["Power Supply (5V/3.3V)", "Sensor Bus (I2C/SPI)", "Main MCU (ESP32/Pi)", "Actuators & Relays", "Telemetry Shield"],
        "architecture": ["Physical Telemetry", "MQTT / HTTP Gateway", "Node.js REST Engine", "Relational / NoSQL DB", "Client Visualizer"],
        "dashboard": ["Live Heatmap Matrix", "Historical Charts", "Device Control Swarm", "Event Logs & Alerts", "Export Reports"],
        "deployment": ["Source Code Repository", "Docker Container", "Nginx Reverse Proxy", "AWS EC2 Host", "HTTPS TLS Domain"],
        "prototype": ["Enclosure Assembly", "Circuit Validation", "Firmware Calibration", "Load Stress Test", "Examiner Viva Pack"]
    }.get(img_type, ["Input", "Process", "Gateway", "Storage", "Output"])

    for i in range(num_nodes):
        nx = panel_left + 40 + spacing + i * (node_w + spacing)
        ny = wire_y + (wire_h - node_h) // 2
        # Node box
        draw.rectangle([nx, ny, nx + node_w, ny + node_h], fill="#0c152a", outline=accent_hex, width=1)
        draw.text((nx + 10, ny + 25), node_names[i], fill="#f8fafc")
        
        # Connectors
        if i < num_nodes - 1:
            arrow_start_x = nx + node_w
            arrow_end_x = nx + node_w + spacing
            arrow_y = ny + node_h // 2
            draw.line([(arrow_start_x, arrow_y), (arrow_end_x, arrow_y)], fill=accent_hex, width=2)

    # Footer banner inside panel
    draw.text((panel_left + 40, panel_bottom - 40), f"Technology: {tech_tag}   |   HA Labs Ecosystem Blueprint   |   © 2026 HA Labs", fill="#475569")

    # Save to WebP
    proj_dir = os.path.join(BASE_DIR, slug)
    os.makedirs(proj_dir, exist_ok=True)
    out_path = os.path.join(proj_dir, f"{img_type}.webp")
    img.save(out_path, "WEBP", quality=90)
    print(f"Generated {out_path}")

print("Starting generation of 120 project visual assets...")
for slug, title, tag, color in PROJECTS:
    for img_type, title_text, desc_text in IMAGE_TYPES:
        create_tech_card(slug, title, tag, color, img_type, title_text, desc_text)

print("Finished generating all 120 project images in public/projects/!")
