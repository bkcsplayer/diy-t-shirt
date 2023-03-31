import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  //定义初始体恤衫上的logo图案
  logoDecal: './khtain-digital-logo.PNG',
  fullDecal: './khtain-digital-logo.PNG',
});

export default state;