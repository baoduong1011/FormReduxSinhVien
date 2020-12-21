import React, { Component } from 'react';
import {connect} from 'react-redux';
class FormSinhVienRedux extends Component {

    handleChangeInput = (event) => {
        let {value,name} = event.target ; 
        let typeInput = event.target.getAttribute('typeinput');
        const newValues = {...this.props.sinhVienRedux.values};
        newValues[name]=value;
        const newErrors = {...this.props.sinhVienRedux.errors};
        newErrors[name] = value.trim() === '' ? ' không được bỏ trống' : '';


        if(typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)){
                newErrors[name] = name + ' không đúng định dạng !';
            }
        } 

        if(typeInput === 'phone') {
            const regexNumber = /^[0-9]+$/;
            if(!regexNumber.test(value)){
                newErrors[name] = name + ' không đúng định dạng !';
            }
        }



        this.props.dispatch({
            type:'SET_SV_REDUX',
            sinhVienRedux: {
                values:newValues,
                errors:newErrors
            }
        })

    }

    handleSubmit =(event) => {
        event.preventDefault();
        let valid = true ; 
        for (let key in this.props.sinhVienRedux.values) {
            if(this.props.sinhVienRedux.values[key].trim() === ''){
                valid=false;    
            }
        }

        for(let key in this.props.sinhVienRedux.errors) {
            if(this.props.sinhVienRedux.errors[key] !== '') {
                valid = false;
            }
        }

        if(!valid) {
            alert('Dữ liệu không hợp lệ !');
            return ;
        } 

        this.props.dispatch({
            type:'THEM_SINH_VIEN'
        })
    }

    render() {
        let {maSinhVien,tenSinhVien,email,soDienThoai} = this.props.sinhVienRedux.values;
        return (
            <div>
                <form className="card text-left" onSubmit={this.handleSubmit}>
                <div className="card-header bg-dark text-white">Thông tin sinh viên</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <h3>Mã sinh viên</h3>
                                <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} value={maSinhVien}  />
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.maSinhVien}</p>
                            </div>
                            <div className="form-group">
                                <h3>Tên sinh viên</h3>
                                <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} value={tenSinhVien} />
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.tenSinhVien}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <h3>Email</h3>
                                <input typeinput="email" className="form-control" name="email" onChange={this.handleChangeInput} value={email} />
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.email}</p>
                            </div>
                            <div className="form-group">
                                <h3>Số điện thoại</h3>
                                <input typeinput="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput} value={soDienThoai} />
                                <p className="text text-danger">{this.props.sinhVienRedux.errors.soDienThoai}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-success" type="submit">Thêm sinh viên</button>

                        <button className="btn btn-primary" type="button" onClick={()=>{
                            this.props.dispatch({
                                type:'CAP_NHAT_SINH_VIEN'
                            })
                        }}>Cập nhật sinh viên</button>
                    </div>

                </div>
            </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        sinhVienRedux: state.QuanLyFormSinhVien.sinhVienRedux
    }
}

export default connect (mapStateToProps)(FormSinhVienRedux)