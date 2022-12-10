import { Component , OnInit, ViewChild} from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/Entity/User';
import { ResourceLoader } from '@angular/compiler';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent {

  userdata : any
  id! : number;
  user :User = new User ;
  form: boolean = false;
  users:User[]= [];
  editMode : boolean = false;
  currentdataId!: number ;
  @ViewChild('userform')forms!:NgForm;
  
  
  
  
  
    constructor( private service : UserServicesService) {
      this.userdata=[];
  
    }
  
  
    ngOnInit() : void{
     
      this.getallusers();
        }
      
       UserCreate(u:any){
        if(!this.editMode)
  this.service.postUser(u).subscribe(() => {
    this.getallusers;
    this.form = false;

  });
  else
  this.service.updateUser(this.currentdataId, u).subscribe();
       }
      
        getallusers(){
          this.service.getUser().subscribe(response=>{
            this.userdata = response;
            console.log(this.userdata);
            })
        }
      
      
        deleteUser(id : number){
          this.service.deleteUser(id).subscribe(response=>{
            console.log(response);
          alert('user delete success');
    
            
            
      
            })
        }

        editUser(id : number){
          this.currentdataId = id ;
        let  currentuser = this.service.getbyid(id).subscribe(res => {
          console.log(res);
          this.forms.setValue(
            {
              prenom : res.prenom,
              nom :res.nom,
              nenfants : res.nombreenfants
              
            }
          )
        
        }

      
          );
        
          this.editMode =true ;

 
          


           
  
            
  
  
  
      
        }
      
      }
      
