import { Component, inject, input, output } from '@angular/core';

import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  private toastr = inject(ToastrService);
  // @Input() usersFromHomeComponent: any;
  // @Output() cancelRegister = new EventEmitter();
  cancelRegister = output<boolean>();
  model: any = {};

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
    })
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
