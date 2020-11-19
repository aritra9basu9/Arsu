import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';

  name:String= "Drishti";

  public display()
  {
    return 2222;
  }


}
