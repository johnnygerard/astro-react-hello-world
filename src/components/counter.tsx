import { type FC, useState } from "react";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
  initialCount?: number;
};

export const Counter: FC<Props> = ({ className, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className={tw("rounded bg-white p-4 text-gray-800", className)}>
      <p className="text-lg font-semibold">Count: {count}</p>
      <button
        type="button"
        className="mt-3 rounded bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
    </div>
  );
};
