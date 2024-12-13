'use client';

import React from 'react';
import { useAppKit } from '@reown/appkit/react';

export default function Connect() {
  const { open } = useAppKit(); // Access AppKit hooks

  return (
    <button
      onClick={() => open()} // Wrap open in an anonymous function
      className="connect-button"
    >
      Connect Wallet
    </button>
  );
}
