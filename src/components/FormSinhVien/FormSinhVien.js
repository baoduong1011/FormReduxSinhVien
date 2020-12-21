


 



import React, { Component } from 'react'

export default class FormSinhVien extends Component {

    state = {
        values: {
            maSinhVien:'',
            tenSinhVien:'',
            email:'',
            soDienThoai:''
        },
        errors : {
            maSinhVien:'',
            tenSinhVien:'',
            email:'',
            soDienThoai:''
        }
 
    }

    handleInput = (event) => {
            let {name,value} = event.target;
            let typeInput = event.target.getAttribute('typeinput');
            const newValues = {...this.state.values}; 
            newValues[name] = value;

            const newErrors = {...this.state.errors};
            newErrors[name] = value.trim() === '' ? name + ' không được bỏ trống !' : '';

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
            this.setState({
                values:newValues,
                errors:newErrors
            })
    }


    render() {
        let {maSinhVien,tenSinhVien,email,soDienThoai} =this.state.values;
        return (
            <div>
                  <form className="card text-left">
            <h1 className="text-center text-light bg-primary p-3">QUẢN LÝ SINH VIÊN</h1>
           <div className="card-header bg-dark text-white text-center">Thông tin sinh viên</div>
           <div className="card-body">
               <div className="row">
                   <div className="col-6">
                        <div className='form-group'>
                            <h4>Mã sinh viên</h4>
                            <input onChange={this.handleInput}  className="form-control" name="maSinhVien"  value={maSinhVien} />
                            <p className="text text-danger">{this.state.errors.maSinhVien}</p>
                        </div>
                   </div>
                   <div className="col-6">
                        <div className='form-group'>
                            <h4>Tên sinh viên</h4>
                            <input  onChange={this.handleInput} className="form-control" name="tenSinhVien" value={tenSinhVien} />
                            <p className="text text-danger">{this.state.errors.tenSinhVien}</p>
                        </div>
                   </div>
               </div>


               <div className="row">
                   <div className="col-6">
                        <div className='form-group'>
                            <h4>Email</h4>
                            <input  onChange={this.handleInput}  typeinput="email" className="form-control" value={email} name="email"/>
                            <p className="text text-danger">{this.state.errors.email}</p>
                        </div>
                   </div>
                   <div className="col-6">
                        <div className='form-group'>
                            <h4>Số điện thoại</h4>
                            <input onChange={this.handleInput} typeinput="phone" className="form-control" value={soDienThoai} name="soDienThoai"/>
                            <p className="text text-danger">{this.state.errors.soDienThoai}</p>
                        </div>
                   </div>
               </div>
               <div className="text-center">
                        <button className="btn btn-success" type="submit">Thêm sinh viên</button>

                        <button className="btn btn-primary" type="button" onClick={()=>{
                            
                        }}>Cập nhật sinh viên</button>
                </div>
           </div>
        </form>
            </div>
        )
    }
}
