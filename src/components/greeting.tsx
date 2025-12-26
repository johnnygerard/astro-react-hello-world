import type { FC } from "react";
import { tw } from "~/utils/tw";

type Props = {
  className?: string;
  name?: string;
};

export const Greeting: FC<Props> = ({ className, name = "world" }) => (
  <div className={tw("rounded bg-white p-4 text-gray-800", className)}>
    <p className="text-lg font-semibold">Hello, {name}!</p>
  </div>
);
