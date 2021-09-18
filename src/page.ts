// namespace Home {
//   export class Page {
//     constructor () {
//       new Components.Div('This is Hedaer');
//       new Components.Div('This is Content');
//       new Components.Div('This is Footer');
//     }
//   }
// }

/* 
  amd规范的代码不能在浏览器中直接运行，需要引入require.js
  在这里直接在html中cdn引入
*/

// es6 写法 ts如何使用import
import { Div } from './components';
export default  class Page {
  constructor () {
    new Div('This is Hedaer');
    new Div('This is Content');
    new Div('This is Footer');
  }
}

$(function () {
  alert('JSPang')
})