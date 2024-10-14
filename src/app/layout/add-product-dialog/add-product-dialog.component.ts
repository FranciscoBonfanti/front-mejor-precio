import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
})
export class AddProductDialogComponent {
  quantity: number = 1;

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any
  ) {}

  onAddToCart(): void {
    this.dialogRef.close({ ...this.product, quantity: this.quantity });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
