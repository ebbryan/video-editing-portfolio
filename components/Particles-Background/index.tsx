"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesBackgroundProps {
  dotColor?: string;
  lineColor?: string;
  backgroundColor?: string;
  particleCount?: number;
  speed?: number;
  linkDistance?: number;
  hoverDistance?: number;
}

export default function ParticlesBackground({
  dotColor = "#ffff",
  lineColor = "#ffff",
  backgroundColor = "transparent",
  particleCount = 70,
  speed = 1.2,
  linkDistance = 1,
  hoverDistance = 190,
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      console.log("[ParticlesBackground] Container loaded:", container);
    },
    [],
  );

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: backgroundColor,
        },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "connect",
          },
          onClick: {
            enable: false,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          connect: {
            distance: hoverDistance,
            links: {
              opacity: 0.7,
            },
            radius: hoverDistance,
          },
          push: {
            quantity: 3,
          },
        },
      },
      particles: {
        color: {
          value: dotColor,
        },
        links: {
          color: lineColor,
          distance: linkDistance,
          enable: true,
          opacity: 0.2,
          width: 0.12,
          triangles: {
            enable: false,
          },
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: speed,
          straight: false,
          attract: {
            enable: false,
          },
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: particleCount,
        },
        opacity: {
          value: { min: 0.2, max: 0.4 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.2, max: 3.5 },
        },
      },
      detectRetina: true,
    }),
    [
      backgroundColor,
      dotColor,
      lineColor,
      linkDistance,
      hoverDistance,
      particleCount,
      speed,
    ],
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
