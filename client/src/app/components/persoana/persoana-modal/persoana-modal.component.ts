import axios from 'axios';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { REPLACE_DIACRITICS } from 'src/app/utils/utils-input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-persoana-modal',
  templateUrl: './persoana-modal.component.html',
  styleUrls: ['./persoana-modal.component.scss']
})
export class PersoanaModalComponent implements OnInit {
  @Input() id_persoana: number | undefined;
  modal = {} as any;
  masini: any = [];
  selectedCar: number = 1;

  constructor(private _spinner: NgxSpinnerService, public activeModal: NgbActiveModal, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    axios.get('/api/masina').then(({ data }) => {
      this.masini = data;
      this._spinner.hide();
    }).catch(() => this.toastr.error('Eroare la preluarea informațiilor!'));
    if (this.id_persoana) {
      this._spinner.show();
      axios.get(`/api/persoana/${this.id_persoana}`).then(({ data }) => {
        this.modal = data;
        this._spinner.hide();
      }).catch(() => this.toastr.error('Eroare la preluarea informației!'));
    }
  }

  save(): void {
    this._spinner.show();
    if (!(this.modal.firstname && this.modal.lastname && this.modal.cnp)) {
      this.toastr.error('Eroare la salvarea informației!')
      this._spinner.hide();
      return
    }
    let age = 0;
    let year = parseInt(this.modal.cnp.substr(1, 2))
    let sex = parseInt(this.modal.cnp[0])
    if (sex === 1 || sex === 2) {
      year += 1900
    } else {
      if (sex === 3 || sex === 4) {
        year += 1800
      } else {
        if (sex === 5 || sex === 6) {
          year += 2000
        }
      }
    }
    age = new Date().getFullYear() - year
    this.modal.age = age
    if (!this.id_persoana) {
      axios.post('/api/persoana', this.modal).then(() => {
        this._spinner.hide();
        this.toastr.success('Informația a fost salvată cu succes!');
        this.activeModal.close();
      }).catch(() => this.toastr.error('Eroare la salvarea informației!'));
    } else {
      axios.put('/api/persoana', this.modal).then(() => {
        this._spinner.hide();
        this.toastr.success('Informația a fost modificată cu succes!');
        this.activeModal.close();
      }).catch(() => this.toastr.error('Eroare la modificarea informației!'));
    }
  }

  selectSearch(term: string, item: any): boolean {
    const isWordThere = [] as any;
    const splitTerm = term.split(' ').filter(t => t);

    item = REPLACE_DIACRITICS(item.firstname);

    splitTerm.forEach(term => isWordThere.push(item.indexOf(REPLACE_DIACRITICS(term)) !== -1));
    const all_words = (this_word: any) => this_word;

    return isWordThere.every(all_words);
  }

}
