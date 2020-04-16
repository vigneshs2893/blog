import IsServer from './IsServer';
export default function IsTab() {
  if (!IsServer()) {
    return window.innerWidth <= 991;
  }
}
