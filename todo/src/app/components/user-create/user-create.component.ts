import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public user: User = {
    name: "",
    email: "",
  };

  @Output() newItemEvent = new EventEmitter();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  userCreate(form: NgForm) {
  
  if (form.valid) {
    this._userService.createUser(this.user)
      .subscribe((data: any) => {
        alert("User succesfully added!");
        // Funkcija kuri nustato tuscias reiksmes formos laukeliams
        form.resetForm();
        this.newItemEvent.emit(data);
      });

      
  } else {
    // Atvaizduojame klaida ar pranesima, vartotojui, kad forma uzpildyta neteisingai
    alert("Please check your form data");
  }
}

}


 