import { Button, ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type="submit" className={cn("select-none", props.className)}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {props.children}
    </Button>
  );
}

export default SubmitButton;
