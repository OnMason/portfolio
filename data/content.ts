// All site copy lives in this file. Edit text here — the components in
// /components only handle layout and styling.

export const site = {
  name: "Pranav Prasanna Rao",
  shortName: "Pranav Rao",
  email: "raopranav09@gmail.com",
  github: "https://github.com/OnMason",
  linkedin: "https://www.linkedin.com/in/pranavrao09",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
];

export const hero = {
  headline: "Hardware Engineer | RTL, Embedded Systems & Circuit Design",
  subheadline:
    "UC Irvine EE student (Semiconductors & Optoelectronics) building FPGA cores, embedded firmware, and PCBs. Currently a Hardware Engineering Intern at Tesla, working on PCB design and failure analysis.",
};

export const about = {
  paragraph:
    "Hi! I'm Pranav, a third-year Electrical Engineering student at UC Irvine specializing in Semiconductors & Optoelectronics. I'm currently a Hardware Engineering Intern at Tesla working on PCB design and failure analysis, and a Hardware/Software R&D Engineer at UCI's HERO Lab, where I split my time between analog circuit design and embedded firmware. Before that, I spent the summer validating wireless sensor hardware at Revvo AI. Outside of that, I like building things from scratch to understand them better, from RISC-V processors in Verilog to custom PCBs and embedded sensor projects.",
  // Drop your photo at /public/about.jpg and it will appear automatically.
  photo: "/about.jpg",
};

export type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Hardware",
    skills: [
      { name: "Verilog/RTL", level: "Advanced" },
      { name: "RISC-V", level: "Advanced" },
      { name: "Circuit Analysis", level: "Advanced" },
      { name: "Soldering", level: "Advanced" },
      { name: "Vivado", level: "Intermediate" },
      { name: "Oscilloscope", level: "Intermediate" },
      { name: "FPGA", level: "Intermediate" },
      { name: "Schematic Capture", level: "Intermediate" },
      { name: "I2C / UART / SPI", level: "Intermediate" },
      { name: "LTSpice", level: "Intermediate" },
    ],
  },
  {
    title: "Software",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "KiCad", level: "Intermediate" },
      { name: "Altium", level: "Intermediate" },
      { name: "SystemVerilog", level: "Intermediate" },
      { name: "Assembly", level: "Intermediate" },
      { name: "MATLAB", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
      { name: "GDB", level: "Beginner" },
      { name: "Tcl / Make", level: "Beginner" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "PyTorch", level: "Intermediate" },
      { name: "ONNX", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "MediaPipe", level: "Intermediate" },
      { name: "PhysNet / DeepPhys", level: "Intermediate" },
      { name: "LangGraph", level: "Beginner" },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  // Optional — omitted while a role's work location isn't confirmed yet.
  location?: string;
  dates: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Hardware Engineering Intern – PCB Design & Failure Analysis",
    company: "Tesla",
    location: "Palo Alto, CA",
    dates: "September 2026 – December 2026",
    bullets: [
      "Engineered custom PCBAs and modular bed-of-nails test fixtures from schematic capture through assembly and bring-up, routing 120+ probe points to reach 94% nodal access for structural test coverage and manufacturing validation",
      "Developed automated test software for Keysight i3070 ICT and x1149 boundary-scan platforms, using Python to sequence execution, parse parametric measurements, and log test records on high-volume automotive telemetry boards",
      "Executed root-cause failure analysis using oscilloscope profiling, X-ray, and microscopy, tracing intermittent power rail shorts to flexure-induced MLCC cracking during fixture actuation, prompting a fixture redesign that eliminated board flex failures",
    ],
  },
  {
    role: "Hardware Validation Intern",
    company: "Revvo AI",
    location: "San Mateo, CA",
    dates: "June 2026 – September 2026",
    bullets: [
      "Reviewed schematics and PCB designs for a battery-powered wireless sensor node, catching pre-fabrication issues before they became field failures",
      "Built an automated test framework in Python interfacing with an oscilloscope, JLink, and programmable power supply, cutting manual bench-characterization time significantly",
      "Validated hundreds of wireless tire-health sensor units daily across RF, threshold, and firmware checks to certify units for field deployment",
    ],
  },
  {
    role: "Hardware/Software R&D Engineer",
    company: "HERO Lab, UC Irvine",
    location: "Irvine, CA",
    dates: "March 2026 – Present",
    bullets: [
      "Designed the analog front-end for a grant-funded contactless heart-sound sensing system, building a multi-channel MEMS microphone array for capturing weak cardiac signals",
      "Built a sensor-fusion algorithm that weights each microphone by SNR and distance to reconstruct clean heart-rate signals, prototyped in Python and ported to embedded firmware",
      "Optimized deep learning models like PhysNet and DeepPhys for edge deployment through ONNX quantization, balancing model size, latency, and compute efficiency",
    ],
  },
  {
    role: "Embedded Systems Developer",
    company: "Open Project Space",
    location: "Irvine, CA",
    dates: "September 2025 – May 2026",
    bullets: [
      "Built an ultrasonic proximity-triggered trash can with sub-100ms response time using interrupt-driven distance sensing in Embedded C",
      "Designed servo actuation sequences driven by real-time ultrasonic readings, calibrating PWM control for repeatable mechanical motion",
      "Soldered and built 7+ embedded hardware projects, debugging GPIO and UART interfaces for stable, fault-free operation",
    ],
  },
];

export type Project = {
  title: string;
  // Path under /public, or null to render a neutral placeholder box.
  image: string | null;
  // Alt text describing what the image shows (falls back to the title).
  imageAlt?: string;
  // Optional small italic caption rendered beneath the image.
  imageCaption?: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Single-Cycle RV32I Processor",
    image: "/projects/rv32i.png",
    imageAlt:
      "Vivado simulation waveform showing clock, reset, and register values across processor cycles",
    description:
      "Designed and verified a 9-module single-cycle RISC-V (RV32I) processor in Verilog, supporting R-type, I-type, load, and store instructions. Built a custom 32-bit ALU, synchronous register file, and full datapath, verified through a self-written Vivado testbench with cycle-accurate waveform analysis. Currently being extended into a pipelined, hazard-resolved core with SystemVerilog verification.",
    tags: ["Verilog", "RISC-V", "RTL Design", "Vivado", "Computer Architecture"],
    link: "https://github.com/OnMason/RV32I-Single-Cycle-Processor",
  },
  {
    title: "Ultrasonic Proximity-Triggered Trash Can",
    image: "/projects/trashcan.png",
    imageAlt:
      "Prototype build with the trash can lid open, driven by a breadboarded ultrasonic sensor and servo",
    description:
      "Built a touchless trash can using an HC-SR04 ultrasonic sensor with interrupt-driven echo timing, achieving sub-100ms lid response across a calibrated 0–30cm range. Designed servo actuation logic in Embedded C with a non-blocking auto-close timer, tested across 50+ repeatable cycles.",
    tags: ["Embedded C", "ESP32", "Interrupt-Driven", "Sensors", "PWM"],
    link: "https://github.com/OnMason/ultrasonic-proximity-trash-can",
  },
  {
    title: "Optical Material Classifier (ClimaCorre)",
    image: "/projects/climacorre.png",
    imageAlt:
      "Glowing LED and resistor on a breadboard wired to an ESP32 development board",
    imageCaption: "illustrative",
    description:
      "Designed a mixed-signal circuit using an RGB LED and photodiode sensing to differentiate plastic types (HDPE vs. PET) by wavelength-dependent reflectance, across 2+ functional prototypes. Built the analog capture chain feeding an ESP32 for real-time signal processing, emitting an optical signature for classification.",
    tags: ["Mixed-Signal Circuit", "ESP32", "Photodiode Sensing", "Optical Sensing"],
    link: "https://github.com/OnMason/climacorre-optical-plastic-sensor",
  },
  {
    title: "WiFi Weather Station",
    image: "/projects/weather.png",
    imageAlt:
      "16x2 LCD display node showing live temperature and humidity readings from the sensor node",
    description:
      "Built a two-node ESP32-C3 weather monitor: a sensor node reads temperature, humidity (AHT20, ±0.2°C/±2% RH), and ambient light, then transmits live readings over WiFi to a separate display node running a 16x2 I2C LCD, refreshing every 10 seconds for a stable readout.",
    tags: ["ESP32", "WiFi", "IoT", "I2C", "Sensors"],
    link: "https://github.com/OnMason/wifi-weather-station",
  },
  {
    title: "Real-Time rPPG Vitals Pipeline",
    image: "/projects/rppg.png",
    imageAlt:
      "Welch power spectral density plot with the detected heart-rate peak marked at 90.1 BPM",
    description:
      "Built a real-time rPPG (remote photoplethysmography) pipeline in Python using MediaPipe facial landmark detection and Fourier-based signal processing to extract heart rate from video, validated against 100+ patients from the UBFC dataset. Trained and benchmarked PhysNet and DeepPhys models in PyTorch for vitals emulation.",
    tags: ["Python", "PyTorch", "Signal Processing", "Computer Vision", "MediaPipe"],
    link: "https://github.com/OnMason/rppg-pipeline",
  },
  {
    title: "Hand-Soldered FM/AM Radio",
    image: "/projects/radio.png",
    imageAlt:
      "Finished FM/AM radio in a clear acrylic case with a lit seven-segment frequency display and four-button interface",
    description:
      "Hand-soldered a fully functional FM/AM radio from 20+ discrete components and ICs around an RDA5807 tuner, covering the full FM (87.5–108 MHz) and AM (530–1700 kHz) broadcast bands with a 4-button volume and tuning interface. Built end-to-end from multi-page schematics — component selection through board bring-up — debugging reception failures down to cold joints and grounding faults with a multimeter.",
    tags: ["Analog Circuits", "RF", "Soldering", "RDA5807", "Schematic Reading"],
    link: "https://github.com/OnMason/fm-am-radio",
  },
];
