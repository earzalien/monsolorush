export interface SuperZizi {
id: number;
nom: string;
costume: string;
pouvoir: string;
accessoire: string;
faiblesse: string;
devise: string;
image: string;
}

export interface TousLesZizis {
  zizis: SuperZizi[];
}

export interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ZiziProps {
  zizi: SuperZizi;
  isOpen: boolean;
  onToggle: () => void;
}
