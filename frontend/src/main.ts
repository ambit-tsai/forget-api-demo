import './style.css';
import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';
import userApis from '@@api/system/user.controller';
import { onBeforeRequest, onResponded } from 'forget-api/request';

onBeforeRequest((options) => {
    options!.headers = {
        'Content-Type': 'application/json',
    };
});
onResponded((response) => response.text());

async function test() {
    try {
        const result = await userApis.updateUserInfo({
            id: 'xxx',
            name: 'Ambit',
        });
        console.log('[test]', result);
    } catch (error) {
        console.warn('[test]', error);
    }
}
test();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
