import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inventaris',
  templateUrl: './inventaris.page.html',
  styleUrls: ['./inventaris.page.scss'],
})
export class InventarisPage implements OnInit {
  id_inventaris: null | undefined;
  nama_barang: any;
  jumlah_barang: any;
  status: any;
  modal_tambah: boolean | undefined;
  modal_edit: boolean | undefined 
  constructor(public _ApiService: ApiService, private modal:ModalController) {
    this.ngOnInit(); {
      this.getinventaris();
    }

    this.getinventaris(); {
      this._ApiService.tampil('tampildata_inventaris.php').subscribe({
        next: (res: any) => {
          console.log('sukses', res);
          this.id_inventaris = res;
        },
        error: (err: any) => {
          console.log(err);
        },
      })
    }
   }
  getinventaris() {
    throw new Error('Method not implemented.');
  }

   reset_model(){
    this.id_inventaris = null;
    this.nama_barang = '';
    this.jumlah_barang = '';
    this.status = '';
   }

   open_modal_tambah(isOpen: boolean){
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
   }

   open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id_inventaris = idget
    console.log(this.id_inventaris);
    this.ambilinventaris(this.id_inventaris);
    this.modal_tambah = false;
    this.modal_edit = true;
   }

   tambahinventaris() {
    if(this.nama_barang != ' ' && this.jumlah_barang !='' && this.status !='') {
      let data = {
        nama_barang : this.nama_barang,
        jumlah_barang : this.jumlah_barang,
        status : this.status,
      }
      this._ApiService.tambah(data, '/tambah_inventaris.php').subscribe({
        next: (hasil: any) => {
          this.reset_model();
          console.log('berhasil tambah inventaris');
          this.getinventaris();
          this.modal_tambah = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.log('gagal tambah inventaris');
        }
      })
    } else {
      console.log('Data Inventaris gagal diisi')
    }
   }

   hapusinventaris(id: any) {
    this._ApiService.hapus(id, '/delete_inventaris.php').subscribe({ next: (res: any) => {
      console.log('sukses', res);
      this.getinventaris();
      console.log("Inventaris berhasil dihapus");
    },
    error: (error: any) => {
      console.log('gagal');
    }
  })
   }

   ambilinventaris(id: any) {
    this._ApiService.lihat(id,
      '/read_inventaris.php').subscribe({
        next: (result: any) => {
          console.log('sukses', result);
          let inventaris = result;
          this.id_inventaris = inventaris.id_inventaris;
          this.nama_barang = inventaris.nama_barang;
          this.jumlah_barang = inventaris.jumlah_barang;
          this.status = inventaris.statusl;          
        },
        error: (error: any) => {
          console.log('Error: gagal mengambil Data Inventaris')
        }
      })
   }

   editinventaris() {
    let data = {
      id_inventaris: this.id_inventaris,
      nama_barang: this.nama_barang,
      jumlah_barang: this.jumlah_barang,
      status: this.status
    }
    this._ApiService.edit(data, '/update_inventaris.php').subscribe({
      next: (hasil: any) => {
        console.log(hasil);
        this.reset_model();
        this.getinventaris();
        console.log('Data Inventaris berhasil diubah');
        this.modal.dismiss();
      },
    })
   }



  ngOnInit() {
  }

}
