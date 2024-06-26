import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  listUsers: User[] = [
    {
      idCustomer: 1,
      firstName: "Mila",
      lastName: " Kunis",
      birthDate: "1999-06-30",
      accountCategory: "Admin",
      email: "mila@kunis.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
      profession: "Software Engineer"
    },
    {
      idCustomer: 2,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
      profession: "Software Engineer"
    },
    {
      idCustomer: 3,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
      profession: "Software Engineer"
    },
    {
      idCustomer: 4,
      firstName: "Ryan",
      lastName: "Gossling",
      birthDate: "1999-06-30",
      accountCategory: "Golden",
      email: "Ryan@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
      profession: "Software Engineer"
    },
    {
      idCustomer: 5,
      firstName: "Robert",
      lastName: "Downey",
      birthDate: "1999-06-30",
      accountCategory: "Blocked Account",
      email: "robert@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
      profession: "Software Engineer"
    }

  ];


  isDeleteButtonDisabled(user: User): boolean {
    return user.accountCategory === 'Admin';
  }

  deleteUser(user: User): void {
    if (!this.isDeleteButtonDisabled(user)) {
      // Find the index of the user in the list
      const index = this.listUsers.findIndex(u => u.idCustomer === user.idCustomer);
      // If the user is found, remove them from the list
      if (index !== -1) {
        this.listUsers.splice(index, 1);
      }
    }
  }
}
