import { ReactNode } from "react";
// import { Van } from '../types/vanType';

// type TypeOfVan = Pick<Van, 'type'>

type Props = {
  badge: string;
  children: ReactNode;
};


export default function TypeBadge({ badge, children }: Props) {
  return (
    <i
      className={`bg-${badge} flex h-8  w-fit justify-center  rounded-md  px-7  py-1 font-semibold not-italic text-labels`}
    >
      {children}
    </i>
  );
}
