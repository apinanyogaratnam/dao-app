import React from 'react';
import {IconType} from '..';

export const IconChevronRight: IconType = ({
  height = 16,
  width = 16,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.30468 3.29243C5.11758 3.47973 5.01248 3.73374 5.01248 3.99858C5.01248 4.26342 5.11758 4.51743 5.30468 4.70473L8.59106 7.99376L5.30468 11.2828C5.20936 11.3749 5.13333 11.4851 5.08102 11.607C5.02872 11.7288 5.00119 11.8599 5.00004 11.9925C4.99889 12.1251 5.02414 12.2567 5.07432 12.3794C5.1245 12.5022 5.1986 12.6137 5.2923 12.7075C5.38601 12.8012 5.49744 12.8754 5.62009 12.9256C5.74274 12.9758 5.87415 13.0011 6.00666 13C6.13918 12.9988 6.27013 12.9713 6.39189 12.9189C6.51365 12.8666 6.62377 12.7905 6.71583 12.6951L10.7078 8.6999C10.8949 8.5126 11 8.2586 11 7.99376C11 7.72891 10.8949 7.47491 10.7078 7.28761L6.71583 3.29243C6.52868 3.10519 6.27489 3 6.01026 3C5.74562 3 5.49183 3.10519 5.30468 3.29243Z"
        fill="currentColor"
      />
    </svg>
  );
};
