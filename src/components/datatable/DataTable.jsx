import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import { userColumns, userRows, productRows, productColumns } from '../../DataSource';
import { Link, useNavigate } from 'react-router-dom';

export default function DataTable() {
    let Headerdata;
    const URL = window.location.pathname.substring(1);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    switch (URL) {
        case 'products':
            Headerdata = {
                Title: 'Add New Product',
                viewPath: '/products/test',
                newPath: '/products/new',
                columns: productColumns
            }
            break;
        default:
            Headerdata = {
                Title: 'Add New User',
                viewPath: '/users/test',
                newPath: '/users/new',
                columns: userColumns
            }
    }

    useEffect(() => {
        setItems((URL === 'products' ? productRows : userRows));
    }, [navigate, URL]);


    const deleteItem = (id) => {
        setItems(items.filter((obj) => obj.id !== id));
    }

    const actionColumn = [
        {
            field: "action",
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to={Headerdata.viewPath} style={{ textDecoration: 'none' }}>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => deleteItem(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='dataTable'>
            <div className='dataTableTitle'>
                {Headerdata.Title}
                <Link to={Headerdata.newPath} style={{ textDecoration: 'none' }} className='link'>
                    Add New
                </Link>
            </div>
            <DataGrid className='dataGrid'
                rows={items}
                columns={Headerdata.columns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 7 },
                    },
                }}
                pageSizeOptions={[5, 7, 10]}
                checkboxSelection
            />
        </div>
    )
}
