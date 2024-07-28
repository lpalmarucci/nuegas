import { cn } from "@/lib/utils";
import { InputProps } from "@/components/ui/input";
import { forwardRef } from "react";
import Image from "next/image";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex h-10 items-center rounded-md border border-input bg-white p-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
        className,
      )}
    >
      <input
        {...props}
        type="search"
        ref={ref}
        className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
      <Image src="/assets/icons/search.svg" alt="Search" height={20} width={20} />
    </div>
  );
});

Search.displayName = "Search";

export default Search;
