import { Component,OnInit  } from '@angular/core';
import { Policy } from '../../policy';
import { ApiService  } from '../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  policies:  Policy[];
  selectedPolicy:  Policy  = { access :  null , username:null, password:  null , rds:null,admin:null,servicedesk:null};
  
  constructor(private apiService: ApiService){}

  createOrUpdatePolicy(form){
      console.log(form.value);
      this.apiService.createPolicy(form.value).subscribe((policy: Policy)=>{
        console.log("User created, ", policy);
      });
  }

}
