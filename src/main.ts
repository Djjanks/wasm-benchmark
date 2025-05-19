import './style.css'
import typescriptLogo from '../assets/typescript.svg'
import javascriptLogo from '../assets/javascript.svg'
import rustLogo from '../assets/rust.svg'
import webassemblyLogo from '../assets/webassembly.svg'
import { arrSum } from './benchmarks/matrix-math.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://learn.javascript.ru/" target="_blank">
      <img src="${javascriptLogo}" class="logo" alt="JavaScript logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://www.rust-lang.org/" target="_blank">
      <img src="${rustLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://webassembly.org/" target="_blank">
      <img src="${webassemblyLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TS vs WASM Benchmarks</h1>
    <div class="card">
      <button id="matrix-benchmark" type="button">Sum Array</button>
    </div>
    <pre id="benchmark-result" style="text-align:left; padding-top: 1rem;"></pre>
  </div>
`

const matrixBenchmarkButton = document.querySelector<HTMLButtonElement>('#matrix-benchmark');
const resultBox = document.querySelector<HTMLPreElement>('#benchmark-result');

async function sumBench() {
    let { tsResText, wasmResText } = await arrSum();
    console.log('tadaaa', tsResText, wasmResText);
    
    resultBox!.textContent = `${tsResText}\n${wasmResText}`;
}

matrixBenchmarkButton?.addEventListener('click', sumBench)