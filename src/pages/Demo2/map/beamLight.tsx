import { useRef, type Ref } from "react";
import { useFrame, extend, type ThreeElements } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import {
  AdditiveBlending,
  Color,
  DoubleSide,
  Group,
  Points,
  Vector3,
  type ColorRepresentation,
} from "three";

const SparklesImplMaterial = extend(
  shaderMaterial(
    { uColor: new Color(), uOpacity: 1 },
    `
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    `
        uniform vec3 uColor;
        uniform float uOpacity;
        
        varying vec2 vUv;

        void main() {
            // Horizontal glow core: bright in the center and soft at both sides.
            float strength = 1.0 - abs(vUv.x - 0.5) * 2.0;
            strength = pow(strength, 2.0);

            // Vertical fade: transparent at both ends to simulate an isolated light beam.
            // A sine curve keeps the center bright and both ends soft.
            float verticalFade = sin(vUv.y * 3.14159); 
            // Sharpen both ends slightly.
            verticalFade = pow(verticalFade, 0.5);

            float brightness = strength * verticalFade * (0.6 + 0.4);

            // Final color.
            vec3 finalColor = uColor * brightness * 2.0;
            
            gl_FragColor = vec4(finalColor, brightness * uOpacity);
        }
    `
  )
);

export type SparklesProps = Omit<
  ThreeElements["points"],
  "ref" | "children"
> & {
  ref?: Ref<Points>;
  /** Number of particles (default: 100) */
  count?: number;
  /** Speed of particles (default: 1) */
  speed?: number | Float32Array;
  /** Opacity of particles (default: 1) */
  opacity?: number | Float32Array;
  /** Color of particles (default: 100) */
  color?: ColorRepresentation | Float32Array;
  /** Size of particles (default: randomized between 0 and 1) */
  size?: number | Float32Array;
  /** The space the particles occupy (default: 1) */
  scale?: number | [number, number, number] | Vector3;
};

const BeamLight = ({}: SparklesProps) => {
  const ref = useRef<Group>(null!);

  useFrame((_, delta) => {
    ref.current.children.forEach((beam) => {
      // Move upward.
      beam.position.y += beam.userData.speed * delta;

      // Boundary check: reset to the bottom after the beam rises too high.
      if (beam.position.y > beam.userData.resetHeight) {
        // Random horizontal position.
        beam.position.x = (Math.random() - 0.5) * range;
        beam.position.z = (Math.random() - 0.5) * range;

        // Start below the ground to avoid suddenly appearing in view.
        beam.position.y = 1 - Math.random() * 5;

        // Random beam segment length.
        beam.scale.y = 2.0 + Math.random() * 1.0;
      }
    });
  });

  const range = 20;

  return (
    <group ref={ref}>
      {Array.from({ length: 20 }, (_, k) => (
        <mesh
          key={k}
          position={[
            (Math.random() - 0.5) * range,
            5 - Math.random() * 5,
            (Math.random() - 0.5) * range,
          ]}
          scale={[1, 2.0 + Math.random() * 4.0, 1]}
          userData={{
            speed: 2 + Math.random(),
            resetHeight: 10 + Math.random() * 20,
          }}>
          <cylinderGeometry args={[0.03, 0.03, 1, 6, 1, true]} />
          <SparklesImplMaterial
            transparent
            depthWrite={false}
            side={DoubleSide}
            blending={AdditiveBlending}
            uColor={0x8fc2ff}
            uOpacity={0.5 + Math.random() * 0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

export default BeamLight;
