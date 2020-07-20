import { Component } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DailogMaterialComponent } from './dailog-material/dailog-material.component';
import { MaterialTablesComponent } from './material-tables/material-tables.component';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Welcome..';
  hoby: 'Krishna';
  ngOnInit() {  }
// Snackbar........................
    constructor(private snakbar: MatSnackBar, public dailog: MatDialog, public router: Router){ }
      openSnakBar(messgae, action){
      const SnackBarRef =  this.snakbar.open(messgae, action);
      SnackBarRef.afterDismissed().subscribe(() => {
        alert('The snacker was dismissed');
      });
      SnackBarRef.onAction().subscribe(() => {
          alert('The Snacker action was triggred !');
      });
    }
// End
OpenDailog(){
  this.dailog.open(DailogMaterialComponent);
}

// Dailog
ShowMaterialDatatable(){
   this.dailog.open(MaterialTablesComponent);
}
OnSaving(){
  // this.dailog.open(UserComponent);
  this.router.navigateByUrl('./User');
}
logout(){

}
}


