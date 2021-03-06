import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWalletComponent } from './myWallet.component';

describe('BarcodeEntryComponent', () => {
  let component: MyWalletComponent;
  let fixture: ComponentFixture<MyWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
