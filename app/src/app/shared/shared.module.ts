import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule, ModalModule } from 'ng2-bootstrap';
import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';

// import shared components 
import { SplashComponent } from './splash/splash.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, TooltipModule, ModalModule],
    declarations: [SplashComponent, TooltipComponent],
    exports: [SplashComponent, TooltipComponent],
    providers: [ComponentLoaderFactory]
})

export class SharedModule { }


export { SplashComponent } from './splash/splash.component';
export { TooltipComponent } from './tooltip/tooltip.component';
