<div align="center">
  <h1>3D Data Visualization Dashboard</h1>
  <p>A 3D map visualization dashboard built with Three.js, React 19, and ECharts.</p>
  <p>Includes 3D map rendering, animated outline trails, side-sweep lighting, linked charts, and dashboard-style layouts.</p>

<p>
    <a href="https://github.com/alqithami/sc-datav/pulls">
      <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
    <a href="https://react.dev/">
      <img src="https://img.shields.io/badge/React-19.1.1-61dafb?style=flat-square&logo=react" alt="React">
    </a>
    <a href="https://threejs.org/">
      <img src="https://img.shields.io/badge/Three.js-0.181.2-black?style=flat-square&logo=three.js" alt="Three.js">
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178c6?style=flat-square&logo=typescript" alt="TypeScript">
    </a>
  </p>
</div>

## Preview

| [Preview](https://knight-l.github.io/sc-datav/#/demo0) | [Preview](https://knight-l.github.io/sc-datav/#/demo1) |
| ------------------------------------------------------- | ------------------------------------------------------- |
| ![demo1](./public/demo_0.jpg)                           | ![demo2](./public/demo_1.jpg)                           |

| [Preview](https://knight-l.github.io/sc-datav/#/demo2) | [Preview](https://knight-l.github.io/sc-datav/#/demo3) |
| ------------------------------------------------------- | ------------------------------------------------------- |
| ![demo3](./public/demo_2.jpg)                           | ![demo4](./public/demo_3.jpg)                           |

## Map Outline Texture Download Tool

[https://github.com/knight-L/sat-hunter](https://github.com/knight-L/sat-hunter)

## Features

1. **3D map visualization**: Three.js-based 3D map rendering with animated outline trails and side-sweep lighting effects.
2. **Provincial map display**: Accurate geographic rendering for Sichuan Province.
3. **Linked charts**: Multiple chart types, including bar charts, line charts, radar charts, pie charts, and scrolling data tables.
4. **Responsive design**: Adapts to different screen sizes.
5. **Real-time tuning panel**: Uses Leva for interactive parameter adjustment.

## Technology Stack

This project is a modern web-based data visualization dashboard. The main technologies include:

- **Core framework**: React 19 + TypeScript
- **Build tool**: Vite (Rolldown version)
- **3D visualization**: Three.js + @react-three/fiber + @react-three/drei
- **Data visualization**: ECharts
- **Geospatial processing**: D3-geo
- **Animation**: GSAP
- **Styling**: Styled-components
- **Debug controls**: Leva
- **Adaptive layout**: autofit.js

## Project Structure

```
src/
├── assets/             # Static assets
│   ├── sc.json         # Sichuan Province geospatial data
│   └── sc_outline.json # Sichuan Province outline data
├── components/         # Shared components
│   ├── chart.tsx       # Chart component
│   └── seamVirtualScroll.tsx # Seamless virtual scrolling component
├── hooks/              # Custom hooks
├── pages/              # Dashboard pages and demos
│   ├── Index/          # Landing carousel page
│   ├── Demo0/          # Economic operations dashboard
│   ├── Demo1/          # Smart city dashboard
│   ├── Demo2/          # Power grid operations dashboard
│   └── Demo3/          # 3D turbine model demo
└── App.tsx             # Application root component
```

## Development Guide

### Requirements

- Node.js >= 18
- PNPM >= 8

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

### Build and Preview

```bash
pnpm build
pnpm preview
```

## Notes

This fork has been translated to English for documentation and user-facing interface text. The underlying geospatial assets and image assets remain unchanged.
