import { cn } from "@/lib/utils";

type AllowedTag = "section" | "div" | "article";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: AllowedTag;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  innerClassName,
  as: Tag = "section",
  id,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn("py-16 lg:py-24", className)}>
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
