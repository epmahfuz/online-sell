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
  productList: ProductModel[]; 
  productList2: ProductModel[] = [
    {
      categoryId:"1",
      _id:'1',
      name: 'Ayr Tangra – Whole, Bengali Cut & Cleaned W/Head & Tail (900 gms)',
      quantity: 10,
      price: 450,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/06/Ayr-tangra2-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"1",
      _id:'2',
      name: 'Bata (Desi) – Whole, Gutted & Cleaned, (500 gms)',
      quantity: 5,
      price: 300,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/06/Bata-fish2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"1",
      _id:'3',
      name: 'Bengal/Desi Catla- Large – Premium- Live- Whole, Bengali Cut {With Head & Tail} (3 kg)',
      quantity: 10,
      price: 500,
      image: 'https://kolkatafish.com/wp-content/uploads/2022/05/Desi-catla-Large-2-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"1",
      _id:'4',
      name: 'Bengal/Desi Rohu (Rui)-Premium- Live – Whole, Bengali Cut {With Head & Tail} (1.5 kg)',
      quantity: 12,
      price: 600,
      image: 'https://kolkatafish.com/wp-content/uploads/2020/08/Live-Ruhi_Fotor-1-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"1",
      _id:'5',
      name: 'Koi (Climbing Gourami)-Desi-Large, Whole, Gutted & Cleaned (500 gms)',
      quantity: 10,
      price: 500,
      image: 'https://kolkatafish.com/wp-content/uploads/2023/03/desi-koi-large-1.jpg',
      counterInCart: 0
    },
    {
      categoryId:"2",
      _id:'6',
      name: 'Chapra Chingri – Desi-(Red & White Shrimp)-Cleaned & Deveined- with out Head {250 gms Net wt}',
      quantity: 10,
      price: 500,
      image: 'https://kolkatafish.com/wp-content/uploads/2022/09/deis-chapra.jpg',
      counterInCart: 0
    },
    {
      categoryId:"2",
      _id:'7',
      name: 'Golda Chingri (Giant River Prawn) Extra Large-Whole, Deveined & Cleaned (1 Kg)',
      quantity: 7,
      price: 1000,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/04/golda-large-2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"2",
      _id:'8',
      name: 'Hilsa (Ilish) Medium-Whole, Bengali Cut & Cleaned (1.2 Kg)',
      quantity: 1,
      price: 1500,
      image: 'https://kolkatafish.com/wp-content/uploads/2020/10/Hilsa-S-1_Fotor-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"2",
      _id:'9',
      name: 'Tiger Prawn (Bagda Chingri) Medium-Headless -Deveined, Cut & Cleaned With Out Head (300 gms)',
      quantity: 50,
      price: 1200,
      image: 'https://kolkatafish.com/wp-content/uploads/2023/05/bagda-headless.jpg',
      counterInCart: 0
    },
    {
      categoryId:"2",
      _id:'10',
      name: 'Sea Water shrimp/Harina Chingri -Cleaned (250 gms)- Small',
      quantity: 50,
      price: 1000,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/06/horina-chingri1-1-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"3",
      _id:'11',
      name: 'Chicken – Biriyani Cut – {Large Pcs} (1 Kg)',
      quantity: 15,
      price: 800,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/07/Biriyani-cut-chicken.jpg',
      counterInCart: 0
    },
    {
      categoryId:"3",
      _id:'12',
      name: 'Chicken – Curry Cut – {Medium Pcs} (500 gms)',
      quantity: 15,
      price: 700,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/07/Chicken-curry-cut-medium-2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"3",
      _id:'13',
      name: 'Chicken Drumstick (2 Piece)',
      quantity: 2,
      price: 100,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/07/drumsticks.jpg',
      counterInCart: 0
    },
    {
      categoryId:"3",
      _id:'14',
      name: 'Chicken Leg – Curry Cut (Medium Pcs) (500 gms)',
      quantity: 4,
      price: 300,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/09/Chicken-Leg-2-1-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"3",
      _id:'15',
      name: 'Chicken-Whole- With Out Skin (1 Kg Net Wt.)',
      quantity: 1,
      price: 500,
      image: 'https://kolkatafish.com/wp-content/uploads/2022/09/Whole-chicken.jpg',
      counterInCart: 0
    },
    {
      categoryId:"4",
      _id:'16',
      name: 'Basa (Vietnamese) -Frozen, 1 Piece Whole Fillet (500 gms)',
      quantity: 1,
      price: 500,
      image: 'https://kolkatafish.com/wp-content/uploads/2022/08/Frozen-Basa.jpg',
      counterInCart: 0
    },
    {
      categoryId:"4",
      _id:'17',
      name: 'Octopus -Small- Frozen {Whole & Cleaned} (500 grams)',
      quantity: 20,
      price: 700,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/04/Octopus2-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"4",
      _id:'18',
      name: 'Shrimp (Frozen)-Cleaned & Deveined- (250 gms)',
      quantity: 15,
      price: 400,
      image: 'https://kolkatafish.com/wp-content/uploads/2022/08/Frozen-Shrimp.jpg',
      counterInCart: 0
    },
    {
      categoryId:"4",
      _id:'19',
      name: 'Squid Tube – Whole {Cleaned & Fresh Frozen} (250 grams)',
      quantity: 5,
      price: 500,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/03/squid-tube-1-450x450.jpg',
      counterInCart: 0
    },
    {
      categoryId:"4",
      _id:'20',
      name: 'Squid Rings {Frozen} (250 grams)',
      quantity: 25,
      price: 600,
      image: 'https://kolkatafish.com/wp-content/uploads/2021/03/squid-rings-450x450.jpg',
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
    this.cartUpdateRealtime();
    this.categoryProductList("all");
    this.onChangeSelectedCategory();
    
  }
  categoryProductList(categoryId){
    if(categoryId=='all'){
      this.getAllProduct();
    } else {
      this.getProductsByCategoryId(categoryId);
    }
    console.log("Product List: ", this.productListShow);
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe(
      (products: any) => {
        this.productList = products.Data;
        this.productListShow = products.Data;
        this.patchCartInfo();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getProductsByCategoryId(categoryId:string) {
    this.productService.getProductByCategoryId(categoryId).subscribe(
      (products: any) => {
        this.productListShow = products.Data;
        this.productList = products.Data;
        this.patchCartInfo();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onChangeSelectedCategory(){
    this.productService.$selectedCategoryId.subscribe(({key, value})=>{
      this.selectedCategoryName = value;
      this.categoryProductList(key);
    });
  }

  cartUpdateRealtime() {
    this.cartService.$updateCartInfo.subscribe((cartItem) => {
      if (cartItem) {
        if(cartItem.isDeleted){
          let foundIndex = this.productList.findIndex(product=> product._id === cartItem._id);
          this.productList[foundIndex].counterInCart = 0;
        }
        this.patchCartInfo();
      }
    });
  }

  patchCartInfo(){
    this.addedInCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    this.addedInCart.forEach((cartProduct:ProductModel) => {
      let foundIndex = this.productList.findIndex(product=> product._id === cartProduct._id);
      this.productList[foundIndex] = cartProduct;
    });
  }

  addToCart(product:ProductModel){
    product.counterInCart += 1;
    this.addedInCart.push(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({_id: product._id, price: product.price, counter: 1, isDeleted:false});
  }

  saveInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.addedInCart));
  }
  
  increaseInCart(product:ProductModel){
    product.counterInCart += 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({_id: product._id, price: product.price, counter: 1, isDeleted:false});
  }

  updateCounterInCart(product:ProductModel){
    let foundIndex = this.addedInCart.findIndex(cartProduct=> cartProduct._id === product._id);
    if(product.counterInCart){
      this.addedInCart[foundIndex] = product;
    } else {
       this.addedInCart = this.addedInCart.filter(cartProduct => cartProduct._id != product._id );
    } 
  }

  decreaseInCart(product:ProductModel){
    product.counterInCart -= 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({ _id: product._id, price: product.price, counter: -1, isDeleted: false});
  }
}
