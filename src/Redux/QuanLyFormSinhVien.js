const stateDefault = {
    mangSinhVien: [
        {maSinhVien:'1',tenSinhVien:'Nguyễn Văn A',email:'nguyenvana@gmail.com',soDienThoai:'0909090909'},
        {maSinhVien:'2',tenSinhVien:'Nguyễn Văn B',email:'nguyenvanb@gmail.com',soDienThoai:'00808080808'},
    ],
    sinhVienSua: {
        maSinhVien:'1',
        tenSinhVien:'a',
        email:'',
        soDienThoai:''
    },
    sinhVienRedux : {
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
}

export const QuanLyFormSinhVien = (state = stateDefault ,  action ) => {
    switch (action.type) {
        case 'SET_SV_REDUX': {
            state.sinhVienRedux = action.sinhVienRedux;
            return {...state}
        }

        case 'THEM_SINH_VIEN' :{
            const mangSinhVienUpdate = [...state.mangSinhVien,state.sinhVienRedux.values];
            console.log('state.mangSinhVien: ',state.mangSinhVien);
            console.log('state.sinhVienRedux.values: ',state.sinhVienRedux.values);
            return {...state,mangSinhVien:mangSinhVienUpdate};
        }

        case 'XOA_SINH_VIEN' : {
            let newSinhVien = [...state.mangSinhVien];
            let index = newSinhVien.findIndex(sv => sv.maSinhVien === action.sinhVienXoa.maSinhVien);
            if(index!==-1){
                newSinhVien.splice(index,1);
            }
            state.mangSinhVien = newSinhVien;
            return {...state}
        }

        case 'SUA_SINH_VIEN' : {
            state.sinhVienSua = {...action.sinhVienSua};
            let newSinhVienRedux = {...state.sinhVienRedux};
            newSinhVienRedux.values = {...action.sinhVienSua};

            return {...state,sinhVienRedux:newSinhVienRedux};
        }

        case 'CAP_NHAT_SINH_VIEN': {
            let mangSinhVienUpdate = [...state.mangSinhVien];
            let flagSV = mangSinhVienUpdate.find(sv => sv.maSinhVien === state.sinhVienRedux.values.maSinhVien);
            if(flagSV) {
                flagSV.tenSinhVien = state.sinhVienRedux.values.tenSinhVien;
                flagSV.email = state.sinhVienRedux.values.email;
                flagSV.soDienThoai = state.sinhVienRedux.values.soDienThoai;
            }

            state.mangSinhVien = mangSinhVienUpdate;
            return {...state}

        }


    }
    return {...state};
}