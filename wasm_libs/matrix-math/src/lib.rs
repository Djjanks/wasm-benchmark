use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sum_rust(a: &[f64]) -> f64 {
    a.iter().sum()
}

// #[cfg(test)]
// mod tests {
//     use super::*;

//     #[test]
//     fn it_works() {
//         let result = add(2, 2);
//         assert_eq!(result, 4);
//     }
// }
