import React from 'react'
import FormSinhVien from './FormSinhVien'
import FormSinhVienRedux from './FormSinhVienRedux'
import TableSinhVien from './TableSinhVien'

export default function BaiTapSinhVien() {
    return (
        <div>
            <FormSinhVienRedux/>
            {/* <FormSinhVien/> */}
            <TableSinhVien/>
        </div>
    )
}
