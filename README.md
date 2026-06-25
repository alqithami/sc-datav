<div align="center">
  <h1>3D Geospatial Data Visualization Dashboard</h1>
  <p>An English baseline for a 3D geospatial dashboard built with Three.js, React 19, TypeScript, and ECharts.</p>
  <p>Prepared as a clean visualization foundation for future CH-MARL maritime logistics adaptation.</p>

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

## Status

This fork is now maintained as an English baseline. The visible dashboard text, documentation, UI labels, chart labels, table headers, control labels, and source comments have been translated to English where they are part of the application interface or developer-facing code.

The remaining Chinese strings, if any, should be treated as source geospatial metadata inside static GeoJSON assets or embedded binary/image content. Rendered Sichuan city labels are converted to English at runtime through `src/utils/sichuanCityNames.ts`.

## Dashboard Routes

After starting the development server, open these routes locally:

| Route | Dashboard |
| --- | --- |
| `/#/` | Landing carousel |
| `/#/demo0` | Economic operations dashboard |
| `/#/demo1` | Smart city dashboard |
| `/#/demo2` | Power grid operations dashboard |
| `/#/demo3` | 3D turbine model demo |

## Features

1. **3D geospatial visualization**: Three.js-based 3D map rendering with animated outline trails and side-sweep lighting effects.
2. **Regional map display**: Accurate rendering of Sichuan Province using GeoJSON assets.
3. **Linked charts**: Bar charts, line charts, radar charts, pie charts, heatmaps, and scrolling data tables.
4. **Responsive dashboard layout**: Full-screen adaptive layouts for data-wall and command-center style displays.
5. **Interactive controls**: Leva-based tuning panels and in-dashboard layer controls.
6. **Reusable baseline**: A clean English starting point that can be copied into a new CH-MARL maritime logistics repository.

## Technology Stack

- **Core framework**: React 19 + TypeScript
- **Build tool**: Vite
- **3D visualization**: Three.js + @react-three/fiber + @react-three/drei
- **Data visualization**: ECharts
- **Geospatial processing**: D3-geo
- **Animation**: GSAP
- **Styling**: Styled-components
- **Debug controls**: Leva
- **State management**: Zustand
- **Adaptive layout**: autofit.js

## Project Structure

```text
src/
├── assets/                  # Static assets, geospatial data, textures, and model files
│   ├── sc.json              # Sichuan Province geospatial data
│   └── sc_outline.json      # Sichuan Province outline data
├── components/              # Shared UI and visualization components
│   ├── chart.tsx            # ECharts wrapper component
│   └── seamVirtualScroll.tsx # Seamless virtual scrolling table component
├── hooks/                   # Custom animation, sizing, and timing hooks
├── pages/                   # Dashboard pages and demos
│   ├── Index/               # Landing carousel page
│   ├── Demo0/               # Economic operations dashboard
│   ├── Demo1/               # Smart city dashboard
│   ├── Demo2/               # Power grid operations dashboard
│   └── Demo3/               # 3D turbine model demo
├── types/                   # Shared TypeScript types
├── utils/                   # Utility helpers, including English city-name mapping
└── App.tsx                  # Application root component
```

## Development

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

## Deployment Base Path

The Vite base path is configurable. This makes the project easier to copy into a new repository without hard-coding the old fork name.

```bash
# For a root-domain deployment
pnpm build

# For a GitHub Pages repository deployment, replace the path with the new repo name
VITE_BASE_PATH=/chmarl-datav/ pnpm build
```

## Copying to a New Repository

GitHub may not allow you to fork a fork into the same account. Use this project as a downloadable/copyable baseline instead:

```bash
git clone https://github.com/alqithami/sc-datav.git chmarl-datav
cd chmarl-datav
rm -rf .git
git init
git add .
git commit -m "Initial CH-MARL dashboard baseline"
git branch -M main
git remote add origin https://github.com/<your-account>/<new-repository>.git
git push -u origin main
```

After the new repository is created, update its GitHub About description to something like:

> CH-MARL maritime logistics dashboard based on a Three.js geospatial data visualization baseline.

## Future CH-MARL Adaptation

For CH-MARL, the likely next refactor is to replace the Sichuan-specific assets and sample dashboards with maritime logistics layers:

- Vessel trajectories and AIS-derived movement layers.
- Port, berth, anchorage, and maritime corridor geospatial layers.
- MARL agent state, action, reward, constraint, and fairness panels.
- Congestion, emissions, ETA, and risk heatmaps.
- Live event tables for port calls, arrivals, departures, route changes, and constraint violations.

## License

This project inherits the upstream license. See `LICENSE`.
