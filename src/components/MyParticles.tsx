import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

function MyParticles() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <MyWrapper>
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#1E1E23',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.5,
                size: 30,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#2ed198',
            },
            links: {
              color: '#2ed198',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </MyWrapper>
  );
}

export default MyParticles;

const MyWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1
`;
