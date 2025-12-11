import { personne } from './personne.js';
export type role = 'user' | 'admin';
export class utilisateur extends personne {
  constructor(id: number,nom: string,public role: role) {
    super(id, nom);}
  getrole(): string {
    return this.role;}
  peutemprunter(): boolean {
    return this.role === 'user' || this.role === 'admin';}
  peutgerer(): boolean {
    return this.role === 'admin';}
}