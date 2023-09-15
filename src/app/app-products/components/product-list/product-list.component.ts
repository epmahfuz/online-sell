import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[] = [
    {
      catId:"1",
      id:'1',
      name: 'Ayr Tangra – Whole, Bengali Cut & Cleaned W/Head & Tail (900 gms)',
      quantity: 10,
      price: 450,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/06/Ayr-tangra2-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"1",
      id:'2',
      name: 'Bata (Desi) – Whole, Gutted & Cleaned, (500 gms)',
      quantity: 5,
      price: 300,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/06/Bata-fish2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"1",
      id:'3',
      name: 'Bengal/Desi Catla- Large – Premium- Live- Whole, Bengali Cut {With Head & Tail} (3 kg)',
      quantity: 10,
      price: 500,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2022/05/Desi-catla-Large-2-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"1",
      id:'4',
      name: 'Bengal/Desi Rohu (Rui)-Premium- Live – Whole, Bengali Cut {With Head & Tail} (1.5 kg)',
      quantity: 12,
      price: 600,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2020/08/Live-Ruhi_Fotor-1-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"1",
      id:'5',
      name: 'Koi (Climbing Gourami)-Desi-Large, Whole, Gutted & Cleaned (500 gms)',
      quantity: 10,
      price: 500,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2023/03/desi-koi-large-1.jpg',
      counterInCart: 0
    },
    {
      catId:"2",
      id:'6',
      name: 'Chapra Chingri – Desi-(Red & White Shrimp)-Cleaned & Deveined- with out Head {250 gms Net wt}',
      quantity: 10,
      price: 500,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2022/09/deis-chapra.jpg',
      counterInCart: 0
    },
    {
      catId:"2",
      id:'7',
      name: 'Golda Chingri (Giant River Prawn) Extra Large-Whole, Deveined & Cleaned (1 Kg)',
      quantity: 7,
      price: 1000,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/04/golda-large-2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"2",
      id:'8',
      name: 'Hilsa (Ilish) Medium-Whole, Bengali Cut & Cleaned (1.2 Kg)',
      quantity: 1,
      price: 1500,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2020/10/Hilsa-S-1_Fotor-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"2",
      id:'9',
      name: 'Tiger Prawn (Bagda Chingri) Medium-Headless -Deveined, Cut & Cleaned With Out Head (300 gms)',
      quantity: 50,
      price: 1200,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2023/05/bagda-headless.jpg',
      counterInCart: 0
    },
    {
      catId:"2",
      id:'10',
      name: 'Sea Water shrimp/Harina Chingri -Cleaned (250 gms)- Small',
      quantity: 50,
      price: 1000,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/06/horina-chingri1-1-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"3",
      id:'11',
      name: 'Chicken – Biriyani Cut – {Large Pcs} (1 Kg)',
      quantity: 15,
      price: 800,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/07/Biriyani-cut-chicken.jpg',
      counterInCart: 0
    },
    {
      catId:"3",
      id:'12',
      name: 'Chicken – Curry Cut – {Medium Pcs} (500 gms)',
      quantity: 15,
      price: 700,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/07/Chicken-curry-cut-medium-2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"3",
      id:'13',
      name: 'Chicken Drumstick (2 Piece)',
      quantity: 2,
      price: 100,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/07/drumsticks.jpg',
      counterInCart: 0
    },
    {
      catId:"3",
      id:'14',
      name: 'Chicken Leg – Curry Cut (Medium Pcs) (500 gms)',
      quantity: 4,
      price: 300,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/09/Chicken-Leg-2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"3",
      id:'15',
      name: 'Chicken-Whole- With Out Skin (1 Kg Net Wt.)',
      quantity: 1,
      price: 500,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2022/09/Whole-chicken.jpg',
      counterInCart: 0
    },
    {
      catId:"4",
      id:'16',
      name: 'Basa (Vietnamese) -Frozen, 1 Piece Whole Fillet (500 gms)',
      quantity: 1,
      price: 500,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2022/08/Frozen-Basa.jpg',
      counterInCart: 0
    },
    {
      catId:"4",
      id:'17',
      name: 'Octopus -Small- Frozen {Whole & Cleaned} (500 grams)',
      quantity: 20,
      price: 700,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/04/Octopus2-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"4",
      id:'18',
      name: 'Shrimp (Frozen)-Cleaned & Deveined- (250 gms)',
      quantity: 15,
      price: 400,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2022/08/Frozen-Shrimp.jpg',
      counterInCart: 0
    },
    {
      catId:"4",
      id:'19',
      name: 'Squid Tube – Whole {Cleaned & Fresh Frozen} (250 grams)',
      quantity: 5,
      price: 500,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/03/squid-tube-1-450x450.jpg',
      counterInCart: 0
    },
    {
      catId:"4",
      id:'20',
      name: 'Squid Rings {Frozen} (250 grams)',
      quantity: 25,
      price: 600,
      imgLink: 'https://kolkatafish.com/wp-content/uploads/2021/03/squid-rings-450x450.jpg',
      counterInCart: 0
    }
  ];
  productListShow: ProductModel[];
  addedInCart: ProductModel[] = [];
  selectedCategoryName = "All Products";
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.patchCartInfo();
    this.cartUpdateRealtime();
    this.categoryProductList("all");
    this.onChangeSelectedCategory();
  }
  categoryProductList(catId){
    if(catId=='all'){
      this.productListShow = this.productList;
    } else {
      this.productListShow = this.productList.filter(product=>{
        return product.catId === catId;
      });
    }
    console.log("Product List: ", this.productListShow);
  }

  onChangeSelectedCategory(){
    this.productService.$selectedCategoryId.subscribe(({key, value})=>{
      console.log("catId: ", key);
      this.selectedCategoryName = value;
      this.categoryProductList(key);
    });
  }

  cartUpdateRealtime() {
    this.cartService.$updateCartInfo.subscribe((cartItem) => {
      if (cartItem) {
        if(cartItem.isDeleted){
          let foundIndex = this.productList.findIndex(product=> product.id === cartItem.id);
          this.productList[foundIndex].counterInCart = 0;
        }
        this.patchCartInfo();
      }
    });
  }

  patchCartInfo(){
    this.addedInCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    this.addedInCart.forEach((cartProduct:ProductModel) => {
      let foundIndex = this.productList.findIndex(product=> product.id === cartProduct.id);
      this.productList[foundIndex] = cartProduct;
    });
  }

  addToCart(product:ProductModel){
    product.counterInCart += 1;
    this.addedInCart.push(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({id: product.id, price: product.price, counter: 1, isDeleted:false});
  }

  saveInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.addedInCart));
  }
  
  increaseInCart(product:ProductModel){
    product.counterInCart += 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({id: product.id, price: product.price, counter: 1, isDeleted:false});
  }

  updateCounterInCart(product:ProductModel){
    let foundIndex = this.addedInCart.findIndex(cartProduct=> cartProduct.id === product.id);
    if(product.counterInCart){
      this.addedInCart[foundIndex] = product;
    } else {
       this.addedInCart = this.addedInCart.filter(cartProduct => cartProduct.id != product.id );
    } 
  }

  decreaseInCart(product:ProductModel){
    product.counterInCart -= 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({ id: product.id, price: product.price, counter: -1, isDeleted: false});
  }
}
