import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table id="table_id" class="display">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal</th>
            <th>Ket/Uraian</th>
            <th>Jumlah</th>
            <th>Saldo</th>
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
          </tr>
          <tr>
            <td>3</td>
            <td>1 Januari 2021</td>
          </tr>
          <tr>
            <td>4</td>
            <td>1 Januari 2021</td>
          </tr>
          <tr>
            <td>5</td>
            <td>2 Januari 2021</td>
          </tr>
          <tr>
            <td>6</td>
            <td>2 Januari 2021</td>
          </tr>
          <tr>
            <td>7</td>
            <td>5 Januari 2021</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9 Januari 2021</td>
          </tr>
          <tr>
            <td>9</td>
            <td>14 Januari 2021</td>
          </tr>
          <tr>
            <td>10</td>
            <td>14 Januari 2021</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
