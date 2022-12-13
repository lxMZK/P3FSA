import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import config from '../config/particles.json';

export default function Graphics() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return <Particles id="tsparticles" init={particlesInit} options={config} />;
}
