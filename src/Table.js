import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table id="table_id" class="display">
        <thead>
          <tr>
            <th rowspan="2">No</th>
            <th rowspan="2">Tanggal</th>
            <th rowspan="2">Ket./Uraian</th>
            <th colspan="2">Jumlah</th>
            <th rowspan="2">Saldo</th>
          </tr>
          <tr>
            <th>Debit</th>
            <th>Kredit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1 Januari 2021</td>
            <td>Saldo Awal</td>
          </tr>
          <tr>
            <td>2</td>
            <td>1 Januari 2021</td>
            <td>Gaji Karyawan</td>
          </tr>
          <tr>
            <td>3</td>
            <td>1 Januari 2021</td>
            <td>Serrvice AC</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1 Januari 2021</td>
            <td>Pembelian ATK</td>
          </tr>
          <tr>
            <td>5</td>
            <td>2 Januari 2021</td>
            <td>Pembayaran Order #3D20210001</td>
          </tr>
          <tr>
            <td>6</td>
            <td>2 Januari 2021</td>
            <td>Pembayaran Order #3D20210002</td>
          </tr>
          <tr>
            <td>7</td>
            <td>5 Januari 2021</td>
            <td>Pembayaran Order #3D20210005</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9 Januari 2021</td>
            <td>Pembayaran Order #3D20210021</td>
          </tr>
          <tr>
            <td>9</td>
            <td>14 Januari 2021</td>
            <td>Pembelian Unit PC</td>
          </tr>
          <tr>
            <td>10</td>
            <td>14 Januari 2021</td>
            <td>Pembayaran Order #3D20210007</td>
          </tr>
           <tr>
            <td>11</td>
            <td>18 Januari 2021</td>
            <td>Pembayaran Order #3D20210011</td>
          </tr>
           <tr>
            <td>12</td>
            <td>18 Januari 2021</td>
            <td>Pembayaran Order #3D20210012</td>
          </tr>
           <tr>
            <td>13</td>
            <td>25 Januari 2021</td>
            <td>Pembayaran Order #3D20210016</td>
          </tr>
           <tr>
            <td colspan="2">Total</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
