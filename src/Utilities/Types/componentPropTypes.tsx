export interface LayoutProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
}

export interface InfoPopupProps {
  children: React.ReactNode;
  text?: string;
}

export interface ErrorProps {
  children: React.ReactNode;
  type: "success" | "error";
  notShowIndicator?: boolean;
}
