import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  Produits: Produit[] = [];

  constructor() { 
    this.Produits=[
  {idProduit:1,code:"FZEF3345",libelle:"PC", prixUnitaire:12.5, tauxTVA:0.02,},
  {idProduit:2,code:"GFDG4345",libelle:"TV", prixUnitaire:30, tauxTVA:0.1980},  
  {idProduit:3,code:"5434FTGR",libelle:"Table", prixUnitaire:20, tauxTVA:0.1980},
  {idProduit:4,code:"G564R42G",libelle:"TV", prixUnitaire:50, tauxTVA:0.1980},
];
}

  getAllProducts(): Produit[] {
    return this.Produits;
  }

  getNbProductsByLibelle(libelle: string) {
    let nb = 0;
    this.Produits.forEach((p) => {
      p.libelle === libelle ? nb++ : nb;
    });
    return nb;
  }
}
