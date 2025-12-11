export interface livre {
  id: number;
  titre: string;
  auteur: string;
  annee: number;
  disponible: boolean;
}
export function creerlivre(id: number, titre: string, auteur: string, annee: number): livre {
  return {
    id,
    titre,
    auteur,
    annee,
    disponible: true
  };
}