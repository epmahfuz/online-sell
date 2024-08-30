import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {
  orders: any[] = [];
  selectedOrderIndex: number | null = null;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService // Import the CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllOrder();
  }
  onClickAdminPanel(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }
  
  getAllOrder() {
    this.categoryService.getAllOrder().subscribe(
      (orders: any) => {
        this.orders = orders.Data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  updateOrder(status:string, orderId:string){
    let payload = {
      status: status,
    }
    this.categoryService.updateAOrder(payload, orderId).subscribe(res => {
      
      console.log("A order is  updated !: ", res);
      //this.goToCategoryList();
    }, (error=>{
      //this.isSaving = false;
      console.log(error);
    }));
  }
  getStatusColorClass(status) {
    switch (status) {
      case 'Pending':
        return 'pending-status';
      case 'Processing':
        return 'processing-status';
      case 'Shipped':
        return 'shipped-status';
      case 'Delivered':
        return 'delivered-status';
      case 'Cancelled':
        return 'cancelled-status';
      default:
        return '';
    }
  }
  // Function to handle order click event
  onorderClick(index: number) {
    this.selectedOrderIndex = index;
  }
  // Function to handle save button click event
  onSaveClick() {
    // Perform save logic here, e.g., send data to server
    console.log('Save clicked!');
  }
}
