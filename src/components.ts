// namespace Components {
//   export namespace subComponents {
//     export class Test {}
//   }
//   export class Div {
//     constructor (private content: string) {
//       const elem = document.createElement('div');
//       elem.innerText = content;
//       document.body.appendChild(elem);
//     }
//   }
// }

// es6 写法 ts如何使用import
export class Div {
  constructor (private content: string) {
    const elem = document.createElement('div');
    elem.innerText = content;
    document.body.appendChild(elem);
  }
}