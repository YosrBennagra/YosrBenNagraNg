import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  constructor(private produitService: ProduitService) { }
  nbProduitAvecLibele: number | undefined ;
  ListProduct:Produit[]=[]
  ListProductService:Produit[]=[]
  number : number=0; number9 : number=0;

  productCount: { [libelle: string]: number } = {};
  ngOnInit(): void {

    this.ListProductService = this.produitService.getAllProducts(); 

}
codeR!: string;
idProduit!: number;
code!: string;
libelle!: string;
prixUnitaire!: number;
tauxTVA!: number;

  produits: Produit[] = 
[
{idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02,},
{idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
{idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
{idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
{idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
  ];

  newProduct: any = {
    code: '',
    libelle: '',
    prixUnitaire: 0,
    tauxTVA: 0
  };

  rechercheCode: string = '';
  filteredProduits: any[] = this.produits;
  rechercheProducts() {
    if (this.rechercheCode.trim() === '') {
      this.filteredProduits = this.produits;
    } else {
      this.filteredProduits = this.produits.filter(produit =>
        produit.code !== undefined && produit.code.startsWith(this.rechercheCode)
      );
    }
  }
  calculerNbPLibelle(libelle:string){
    this.nbProduitAvecLibele=this.produitService.getNbProductsByLibelle(libelle);

  }
  toggleTVA(produit: any) {
    if (produit.tauxTVA !== 0.02) {
      produit.tauxTVA = 0.02;
      produit.showTVA = true;
    } else {
      produit.showTVA = !produit.showTVA;
    }
  }
  

  addProduct() {
    const newProduit: Produit = {
      idProduit: this.produits.length + 1,
      code: this.newProduct.code,
      libelle: this.newProduct.libelle,
      prixUnitaire: this.newProduct.prixUnitaire,
      tauxTVA: this.newProduct.tauxTVA,
    };
    console.log(this.newProduct.code);
    console.log(this.newProduct.libelle);
    console.log(this.newProduct.prixUnitaire);
    console.log(this.newProduct.tauxTVA);

    this.produits.push(newProduit);
    this.newProduct = {
      code: '',
      libelle: '',
      prixUnitaire: 0,
      tauxTVA: 0
    };
  }
  
}
