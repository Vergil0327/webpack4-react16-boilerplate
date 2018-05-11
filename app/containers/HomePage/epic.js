import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators'; // rxjs v5.5+
import { PING, PONG } from './constants';

const pingEpic = (action$) =>
  action$.pipe(
    ofType(PING),
    delay(500), // Asynchronously wait 1000ms then continue
    mapTo({ type: PONG })
  );

export default pingEpic;
