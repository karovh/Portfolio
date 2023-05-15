import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PortfolioComponent } from './portfolio.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuComponent,
    PortfolioComponent,
    InicioComponent,
    SobreMiComponent,
    ProyectosComponent,
    SkillsComponent,
    ContactoComponent,
    FooterComponent
  ],
  exports: [
    MenuComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule

  ]
})
export class PortfolioModule { }
