import { ReactNode } from "react";

type Props = {
  badge: VanType;
  children: ReactNode;
};

type VanType = "simple" | "rugged" | "luxury";

export default function TypeBadge({ badge, children }: Props) {
  return (
    <i
      className={`bg-${badge} flex h-8  w-fit justify-center  rounded-md  px-7  py-1 font-semibold not-italic text-labels`}
    >
      {children}
    </i>
  );
}
