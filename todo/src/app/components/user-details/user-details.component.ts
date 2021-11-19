import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user: User | null = null;
  private userId: string | null = null;

  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
  ) {

  }
 
  ngOnInit(): void {
    // Gauname :id parametra
    /* Noredami naudoti si buta, butinai turime konstruktoriuje prideti:
    private route: ActivatedRoute,
    private router: Router
    */
    this.userId = this.route.snapshot.paramMap.get('id');

    this._userService.getUser(this.userId).subscribe((data: any) => {
      this.user = data;
      console.log(this.user?.tasks);
    })

  }

}