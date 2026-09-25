import type { ReactElement } from "react";

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CompassIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="15.5 8.5 13.2 13.2 8.5 15.5 10.8 10.8 15.5 8.5" />
    </svg>
  );
}

export function EggIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3C8.2 8 6.3 12.6 6.3 15.7a5.7 5.7 0 0 0 11.4 0C17.7 12.6 15.8 8 12 3z" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

export function FlaskIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <line x1="8" y1="2" x2="16" y2="2" />
      <path d="M10 2v6.5L5.5 17a2.8 2.8 0 0 0 2.5 4h8a2.8 2.8 0 0 0 2.5-4L14 8.5V2" />
      <line x1="7.5" y1="14" x2="16.5" y2="14" />
    </svg>
  );
}

export function CapsuleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="8.5" width="20" height="7" rx="3.5" transform="rotate(45 12 12)" />
      <line x1="7.5" y1="16.5" x2="16.5" y2="7.5" />
    </svg>
  );
}

export function KnifeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 20.5l6.8-6.8" />
      <path d="M10.3 13.7l7-7a2.1 2.1 0 0 0-3-3l-7.7 7.7" />
      <path d="M6.6 10.4l7 7" />
    </svg>
  );
}

export function TeacupIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 8.5h12.5v5.5a5 5 0 0 1-5 5h-2.5a5 5 0 0 1-5-5V8.5z" />
      <path d="M16 10h1.5a3 3 0 0 1 0 6H16" />
      <path d="M6.5 2.5c1 1 1 2 0 3" />
      <path d="M10.5 2.5c1 1 1 2 0 3" />
    </svg>
  );
}

export function MoleculeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="6.5" r="2.3" />
      <circle cx="18" cy="6.5" r="2.3" />
      <circle cx="12" cy="18" r="2.3" />
      <line x1="8" y1="7.5" x2="10.3" y2="15.8" />
      <line x1="16" y1="7.5" x2="13.7" y2="15.8" />
      <line x1="8.3" y1="6.5" x2="15.7" y2="6.5" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 20c0-9.5 6-15.5 15-15.5C19 13.5 13.5 20 5 20z" />
      <path d="M5 20c3-3.3 6-7.3 9-12.3" />
    </svg>
  );
}

export const postIcons: Record<string, (props: IconProps) => ReactElement> = {
  "minha-jornada": CompassIcon,
  "7-fontes-de-proteina": EggIcon,
  "fome-e-compulsao-pos-tirzepatida": ClockIcon,
  "exames-metabolicos": FlaskIcon,
  "suplementacao-basica": CapsuleIcon,
  "miudos-nutrientes-densos": KnifeIcon,
  "chas-funcionais": TeacupIcon,
  "creatina-nova-dose-anvisa": MoleculeIcon,
};
