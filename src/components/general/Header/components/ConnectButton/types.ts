import { PropsWithChildren } from "react";

import { Props as ButtonProps } from "components/general/Buttons/types";

interface Props extends PropsWithChildren {
  theme?: ButtonProps["theme"];
  connectText?: string;
  buttonSize?: "sm" | "md" | "lg";
}

export type { Props };
