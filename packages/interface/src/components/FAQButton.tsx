import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { createBreakpoint } from "react-use";
import { Button } from "./ui/Button";

const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 350 });

export const FAQButton = (): JSX.Element => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "S";

  return (
    <RainbowConnectButton.Custom>
      {({ mounted }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            <Button suppressHydrationWarning variant="secondary" >
                    {isMobile ? "FAQ" : "How does this work"}
            </Button>
            
          </div>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};
