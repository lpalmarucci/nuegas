import { Button, ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type SubmitButtonProps = ButtonProps & { loading: boolean };

function SubmitButton({ loading, ...props }: SubmitButtonProps) {
  return (
    <Button {...props} type="submit" className={cn("select-none", props.className)}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {props.children}
    </Button>
  );
}

export default SubmitButton;
