import React, { FC } from 'react';
import { SVGProps } from '../types';

/**
 * RedisJSON
 */
export const RedisJSON: FC<SVGProps> = ({ size, fill, ...rest }) => {
  return (
    <a
      target="_blank"
      href="http://redisjson.io"
      title="RedisJSON is a Redis module that implements ECMA-404 The JSON Data Interchange Standard as a native data type."
    >
      <svg version="1.1" id="RedisJSON" x="0px" y="0px" viewBox="0 0 32 32" width={size} height={size} {...rest}>
        <path
          fill={fill ? fill : '#DC382D'}
          d="M22,1H10.6C8.3,1,7.1,3.9,7.1,6v0.9h1V6c0-1.7,0.9-4,2.5-4h10.8l0.4,4.9c0,2.2,1.8,3.9,3.9,3.9h5.2V27
	c0,1.6-1.3,2.9-2.9,2.9H11c-1.6,0-2.9-1.3-2.9-2.9v-1.7h-1V27c0,2.2,1.8,3.9,3.9,3.9h17c2.2,0,3.9-1.8,3.9-3.9V10.1L22,1z M22.8,6.9
	l-0.3-4.2l7.7,7.1h-4.5C24.1,9.9,22.8,8.5,22.8,6.9L22.8,6.9z M3.3,8.6C3.1,8.7,2.9,8.8,2.7,8.9C2.6,9.1,2.4,9.3,2.4,9.5
	c-0.1,0.3-0.1,0.6-0.1,0.9v2.8c0,0.4-0.1,0.9-0.3,1.3c-0.3,0.3-0.6,0.5-1,0.4v0.9c0.4,0,0.7,0.2,0.9,0.5c0.2,0.4,0.3,0.8,0.3,1.3
	v2.8c0,0.3,0,0.6,0.1,0.9c0.1,0.2,0.2,0.4,0.4,0.6C2.9,22,3,22.2,3.2,22.2c0.2,0.1,0.4,0.1,0.6,0.1h1v-0.8H4.1c-0.2,0-0.3,0-0.5-0.1
	c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.1-0.3-0.1-0.4s0-0.3,0-0.5v-2.8c0-0.3,0-0.6-0.2-0.9c0-0.3-0.1-0.5-0.3-0.6
	c-0.1-0.1-0.3-0.2-0.5-0.3c-0.1-0.1-0.2-0.1-0.4-0.1l0,0c0.1,0,0.3-0.1,0.4-0.1c0.2-0.1,0.3-0.2,0.5-0.3c0.2-0.2,0.3-0.4,0.4-0.6
	c0.1-0.3,0.2-0.6,0.2-0.9v-2.8c0-0.2,0-0.3,0-0.4c0-0.1,0.1-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.3C3.8,9.4,4,9.4,4.1,9.4h0.7V8.5h-1
	C3.7,8.5,3.5,8.6,3.3,8.6z M7.5,22l1.3-3.6H7.6l-1,3.6H7.5z M8.6,13.9c0.3-0.3,0.3-0.8,0-1.2c-0.3-0.3-0.9-0.3-1.2,0l0,0
	c-0.3,0.3-0.3,0.8,0,1.2C7.7,14.3,8.2,14.3,8.6,13.9C8.6,14,8.6,13.9,8.6,13.9z M13.7,15.5c-0.2,0.1-0.3,0.2-0.5,0.3
	c-0.2,0.2-0.3,0.4-0.4,0.6c-0.1,0.3-0.2,0.6-0.2,0.9v2.8c0,0.2,0,0.3,0,0.5c0,0.1-0.1,0.3-0.1,0.4c-0.1,0.1-0.2,0.2-0.3,0.3
	c-0.1,0.1-0.3,0.1-0.5,0.1H11v0.8h1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.4-0.2,0.5-0.3c0.2-0.2,0.3-0.4,0.4-0.6c0.1-0.3,0.1-0.6,0.1-0.9
	v-2.8c0-0.4,0.1-0.9,0.3-1.3c0.2-0.3,0.6-0.5,0.9-0.5v-0.9c-0.4,0-0.7-0.2-0.9-0.4c-0.2-0.4-0.3-0.8-0.3-1.3v-2.8
	c0-0.3,0-0.6-0.1-0.9c-0.1-0.2-0.2-0.4-0.4-0.6c-0.2-0.1-0.3-0.3-0.5-0.3c-0.2-0.1-0.4-0.1-0.6-0.1h-1v0.9h0.7c0.2,0,0.3,0,0.5,0.1
	c0.1,0.1,0.2,0.2,0.3,0.3s0.1,0.3,0.1,0.4c0,0.1,0,0.3,0,0.4v2.8c0,0.3,0,0.6,0.2,0.9c0.1,0.2,0.2,0.4,0.4,0.6
	c0.1,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.2,0.1,0.4,0.1l0,0C14,15.4,13.8,15.5,13.7,15.5z"
        />
      </svg>
    </a>
  );
};
