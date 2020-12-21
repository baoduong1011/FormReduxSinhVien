import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableSinhVien extends Component {
    renderSinhVien = () => {
       return this.props.mangSinhVien.map((sv, index) => {
             return <tr key={index}>
                 <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                <button onClick={() => {
                    this.props.dispatch({
                        type:'XOA_SINH_VIEN',
                        sinhVienXoa:sv
                    })
                }} className="btn btn-danger">Xoá</button>
                <button className="btn btn-primary" onClick={()=>{
                    this.props.dispatch({
                        type:'SUA_SINH_VIEN',
                        sinhVienSua: sv
                    })
                }}>Sửa</button>
            </td>
             </tr>
         })
    }



    render() {
        return (
            <div>
                <div className="mb-2 card-header bg-dark text-white text-center">Bảng sinh viên</div>
                <table className='table'>
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead> 

                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLyFormSinhVien.mangSinhVien
    }
}

export default connect(mapStateToProps)(TableSinhVien)









































