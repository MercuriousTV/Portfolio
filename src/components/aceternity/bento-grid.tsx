// components/aceternity/bento-grid.tsx
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:1-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto my-20",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  img?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  icon,
  img,
}) => {
  return (
    <div
      className={cn(
        "row-span-auto rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-[#ffffff15] backdrop-blur-md  flex flex-col space-y-4",
        className
      )}
    >
      {header}
      {img && (
        <div className="flex-grow-0 w-full h-auto mb-4">
          <img
            src={img}
            alt={title?.toString()}
            className="w-full h-auto rounded-xl"
          />
        </div>
      )}
      <div className="flex items-center space-x-2">
        {icon}
        <div className="flex flex-col">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
