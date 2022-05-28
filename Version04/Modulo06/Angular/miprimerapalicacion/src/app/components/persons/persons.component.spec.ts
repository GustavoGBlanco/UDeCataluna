import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonsService } from 'src/app/services/persons.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { PersonsComponent } from './persons.component';

describe('PersonsComponent', () => {
  let component: PersonsComponent;
  let fixture: ComponentFixture<PersonsComponent>;
  let personService: PersonsService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ PersonsComponent ],
      providers: [ PersonsService, HttpClient ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    personService = TestBed.inject(PersonsService);
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
