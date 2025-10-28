//types.tsx
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
