import { Component, OnInit, Input } from '@angular/core';
import { Policy } from '../../policy';
import { ApiService } from '../../api.service';

@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {

  policies: Policy[];
  selectedPolicy:  Policy  = { access :  null , username:null, password:  null , rds:false,admin:false,servicedesk:false};
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
    this.apiService.readPolicies().subscribe((policies: Policy[])=>{
      console.log(typeof(policies));
      // policies.forEach( (e) =>{
      //   e.rds = false
      //   e.servicedesk=false
      //   e.admin=false
      // })
      this.policies = policies;
      console.log(this.policies);
    })
  }

  deletePolicy(id){
    this.apiService.deletePolicy(id).subscribe((policy: Policy)=>{
      console.log("User deleted, ", policy);
    });
  }

  selectPolicy(policy: Policy){
    console.log(policy);
    this.selectedPolicy = policy;
    this.apiService.updatePolicy(policy).subscribe((policy: Policy)=>{
      console.log("Policy updated" , policy);
    });
  }  

}
