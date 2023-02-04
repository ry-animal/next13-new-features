"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="text-red-500 font-bold">{error.message}</div>
      <button className="btn" onClick={() => reset()}>
        Reset Error Boundary
      </button>
    </div>
  );
}
