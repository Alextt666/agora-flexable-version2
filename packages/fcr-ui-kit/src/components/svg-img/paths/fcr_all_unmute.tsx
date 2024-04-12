import React from 'react';

import { PathOptions } from '../svg-dict';

export const path = ({ iconPrimary }: PathOptions) => (
  <g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0482 16.8852C14.0482 13.0826 17.1308 10 20.9333 10C24.7359 10 27.8184 13.0826 27.8184 16.8852V26.0654C27.8184 29.868 24.7359 32.9506 20.9333 32.9506C17.1308 32.9506 14.0482 29.868 14.0482 26.0654V16.8852ZM10.6065 21.0165C11.4938 21.0165 12.2131 21.7358 12.2131 22.6231V26.0657C12.2131 30.8823 16.1177 34.7869 20.9342 34.7869C25.7508 34.7869 29.6554 30.8823 29.6554 26.0657V22.6231C29.6554 21.7358 30.3746 21.0165 31.2619 21.0165C32.1492 21.0165 32.8684 21.7358 32.8684 22.6231V26.0657C32.8684 32.6568 27.5253 38 20.9342 38C14.3431 38 9 32.6568 9 26.0657V22.6231C9 21.7358 9.71927 21.0165 10.6065 21.0165ZM29.2459 37.3837C28.4837 37.3837 27.743 37.2921 27.0341 37.1193C28.0176 36.576 28.9208 35.9053 29.7216 35.1294C33.4039 34.8847 36.315 31.8203 36.315 28.0759V25.3464C36.315 24.7282 36.8161 24.2271 37.4343 24.2271C38.0525 24.2271 38.5536 24.7282 38.5536 25.3464V28.0759C38.5536 33.2165 34.3864 37.3837 29.2459 37.3837ZM34.7062 28.0747C34.7062 30.3118 33.3606 32.2346 31.4345 33.0779C32.778 31.0717 33.5616 28.6588 33.5616 26.063V21.9873C33.5616 20.7198 32.534 19.6922 31.2665 19.6922C29.999 19.6922 28.9715 20.7198 28.9715 21.9873L28.9715 15.7352C28.9715 15.6042 28.9683 15.4738 28.9621 15.3443C29.0566 15.3394 29.1516 15.337 29.2472 15.337C32.2622 15.337 34.7062 17.7811 34.7062 20.796V28.0747Z"
      fill={iconPrimary}></path>
  </g>
);
export const viewBox = '0 0 48 48';
