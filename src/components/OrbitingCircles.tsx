import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { Children } from "react";
import { twMerge } from "tailwind-merge";

interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

type OrbitStyle = CSSProperties & {
  "--duration": number;
  "--radius": number;
  "--angle": number;
  "--icon-size": string;
};

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle className="stroke-1 stroke-white/10" cx="50%" cy="50%" r={radius} fill="none" />
        </svg>
      )}
      {Children.map(children, (child, index) => {
        const angle = (360 / Children.count(children)) * index;
        const style: OrbitStyle = {
          "--duration": calculatedDuration,
          "--radius": radius,
          "--angle": angle,
          "--icon-size": `${iconSize}px`,
        };

        return (
          <div
            style={style}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${
                reverse ? "[animation-direction:reverse]" : ""
              }`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
