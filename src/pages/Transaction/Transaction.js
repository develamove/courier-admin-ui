import React, { forwardRef, useState } from 'react'
import Container from '@material-ui/core/Container';
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import MaterialTable from 'material-table'

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios';
import { ToastEmitter } from '../../components/Toast';
import TransactionDialog from './TransactionDialog';
import { useConfirm } from 'material-ui-confirm';
import 'react-toastify/dist/ReactToastify.css';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} color='action' />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const Transaction = () => {
  const intl = useIntl()
  const confirm = useConfirm();
  // const [trasanctions, setTrasanctions] = useState([])
  const [isTransDialogOpen, setTransDialogOpen] = useState(false)

  const [selectedTransaction, setSelectedTransaction] = useState()


  const displayTransactionDialog = () => {
    if (isTransDialogOpen === true) {
      return <TransactionDialog isOpen={isTransDialogOpen} transaction={selectedTransaction}/>
    }

    return null
  }

  const requestCancelTransaction = (trasanction) => {
    axios.put(process.env.REACT_APP_WEB_API + '/deliveries/' + trasanction['id'].toString(), {
      is_cancelled: 'T'
    })
    .then(function (response) {
      console.log(response)
      ToastEmitter('success', 'Transaction are now cancelled')
    })
    .catch(function (error) {
      ToastEmitter('error', 'Something went wrong')
    })
  }

  const deleteTransaction = (trasanction) => {
    confirm({ description: 'Cancel Transaction?, this action is permanent' })
      .then(() => {
        requestCancelTransaction({id: trasanction['id']})
      })
      .catch(() => { /* ... */ });
  }

  return (
    <Page pageTitle={intl.formatMessage({ id: 'transaction' })}>
      <Scrollbar>
        {displayTransactionDialog()}
        <Container>
        <h1>Informations</h1>
        
        <MaterialTable
          icons={tableIcons}
          search={false}
          title="Trasanctions"
          columns={[
            {
              title: 'Tracking ID',
              field: 'tracking_id',
            },
            {
              title: 'Receipt ID',
              field: 'receipt_id',
            },
            { title: 'Cash on Develiry', field: 'is_cod' },
            { title: 'Provincial', field: 'is_provincial' },
            { title: 'Successful', field: 'is_successful' },
            { title: 'Remitted', field: 'is_remitted' },
            { title: 'Total Amount', field: 'total_amount' },
            { title: 'Created', field: 'created_timestamp' },
          ]}
          data={query =>
            new Promise((resolve, reject) => {
              console.log('query', query)
              let url = process.env.REACT_APP_WEB_API + '/deliveries?'
              url += 'limit=' + query.pageSize
              url += '&page=' + (query.page + 1)
              fetch(url)
                .then(response => response.json())
                .then(result => {
                  resolve({
                    data: result.data.deliveries,
                    page: result.data.page - 1,
                    totalCount: result.data.total,
                  })
                })
            })
          }
          actions={[
            {
              icon: tableIcons.Edit,
              tooltip: 'Modify Trasaction',
              onClick: (event, rowData) => {
                setSelectedTransaction(rowData)
                setTransDialogOpen(!isTransDialogOpen)
              }
            },
            {
              icon: tableIcons.Delete,
              tooltip: 'Cancel Trasaction',
              onClick: (event, rowData) => {
                deleteTransaction(rowData)
              }
            }
          ]}
        />
        </Container>
        
      </Scrollbar>
        
    </Page>
  )
}

export default Transaction;