import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   stages: [
//     { duration: '1m', target: 100 },
//     { duration: '1m', target: 200 },
//     { duration: '1m', target: 200 },
//   ],
// };
let id = Math.floor(Math.random() * (14000000 - 2000000)) + 2000000;

export default function (id) {
  let res = http.get(`http://127.0.0.1:3000/${id}`);
  check(res, {
    'status was 200': r => r.status === 200
  });
  sleep(0.1);
}
