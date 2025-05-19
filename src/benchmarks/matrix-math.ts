import initMatrixMathWasm, { sum_rust } from '../../libs/matrix-math-wasm/pkg/matrix_math_wasm';

export async function arrSum() {
  await initMatrixMathWasm();
  const data = Array(1_000_000).fill(0).map(() => Math.random());

  const t0 = performance.now();
  const sumTs = sum(data);
  const t1 = performance.now();

  const tsResText = `TypeScript sum: ${sumTs} in ${t1 - t0} ms`;
  console.log(`TypeScript sum: ${sumTs} in ${t1 - t0} ms`);

  const t2 = performance.now();
  const sumRust = sum_rust(new Float64Array(data));
  const t3 = performance.now();

  const wasmResText = `Rust WASM sum: ${sumRust} in ${t3 - t2} ms`;
  console.log(`Rust WASM sum: ${sumRust} in ${t3 - t2} ms`);

  return {
    tsResText,
    wasmResText
  }
}

function sum(data: Array<number>): number {
    return data.reduce((acc, val) => acc + val, 0);
}