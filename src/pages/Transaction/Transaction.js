import React, { forwardRef, useState } from 'react'
import Container from '@material-ui/core/Container';
import Page from 'material-ui-shell/lib/containers/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CancelIcon from '@material-ui/icons/Cancel';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import GetAppIcon from '@material-ui/icons/GetApp';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import CancellationDialog from './CancellationDialog';
import EventDialog from './EventDialog';
import InfoDialog from './InfoDialog';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Helmet } from 'react-helmet'
import { ToastEmitter } from '../../components/Toast';
import { useAuth } from 'base-shell/lib/providers/Auth'
import { useIntl } from 'react-intl'
import 'react-toastify/dist/ReactToastify.css';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    CancelIcon: forwardRef((props, ref) => <CancelIcon {...props} ref={ref} />),
    CancelScheduleSendIcon: forwardRef((props, ref) => <CancelScheduleSendIcon {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    CreateIcon: forwardRef((props, ref) => <CreateIcon {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} color='action' />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    InfoIcon: forwardRef((props, ref) => <InfoIcon {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    GetAppIcon: forwardRef((props, ref) => <GetAppIcon {...props} ref={ref} />),
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
  const auth = useAuth()
  const intl = useIntl()
  const [isCancellationDialogOpen, setCancellationDialogOpen] = useState(false)
  const [isInfoDialogOpen, setInfoDialogOpen] = useState(false)
  const [isEventDialogOpen, setEventDialogOpen] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState()
  
  const handleDialogClose = (dialogName) => {
    if (dialogName === 'info') {
      setInfoDialogOpen(false)
    }

    if (dialogName === 'cancellation') {
      setCancellationDialogOpen(false)
    }

    if (dialogName === 'event') {
      setEventDialogOpen(false)
    }
  }

  const displayTransactionDialog = () => {
    if (isCancellationDialogOpen === true) {
      return <CancellationDialog isOpen={isCancellationDialogOpen} transaction={selectedTransaction} handleClose={handleDialogClose}/>
    }

    return null
  }

  const displayInfoDialog = () => {
    if (isInfoDialogOpen === true) {
      return <InfoDialog isOpen={isInfoDialogOpen} transaction={selectedTransaction} handleClose={handleDialogClose}/>
    }

    return null
  }

  const displayEventDialog = () => {
    if (isEventDialogOpen === true) {
      return <EventDialog isOpen={isEventDialogOpen} transaction={selectedTransaction} handleClose={handleDialogClose}/>
    }

    return null
  }

  const downloadReceipt = (transaction) => {
    ToastEmitter('info', 'Downloading the transaction receipt!')
    window.open(process.env.REACT_APP_WEB_API + '/deliveries/' + transaction['id'].toString() + '/receipts')
  }

  const renderStatus = (transaction) => {   
    if (transaction.status === null) {
      return ''
    } 
    
    let status = transaction.status.replace('_', ' ')

    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  const cancelTransaction = (transaction) => {
    // Cancellation is only available in for_pickup status
    if (transaction.status === 'cancelled') {
      ToastEmitter('info', 'Transaction is already cancelled!')
    } else if (transaction.status === 'for_pickup') {
      setSelectedTransaction(transaction)
      setCancellationDialogOpen(true)
    } else {
      ToastEmitter('info', 'Can\'t cancel the transaction, transaction is already in ' + transaction.status)
    }
  }

  const showInfoDialog = (transaction) => {
    setSelectedTransaction(transaction)
    setInfoDialogOpen(true)
  }

  const showEventDialog = (transaction) => {
    setSelectedTransaction(transaction)
    setEventDialogOpen(true)
  }

  return (
    <Page pageTitle={intl.formatMessage({ id: 'transaction' })}>
       <Helmet>
        <title>{ 'E-lamove | Transactions' }</title>
      </Helmet>
      <Scrollbar>
        {displayTransactionDialog()}
        {displayInfoDialog()}
        {displayEventDialog()}
        <Container>
        <h1>{''}</h1>
        <MaterialTable
          
          icons={tableIcons}
          title={'List of Transactions'}
          options={{
            search: false,
            sorting: false
          }}
          columns={[
            { title: 'Tracking ID', field: 'tracking_number'},
            { title: 'Receipt ID', field: 'receipt_id'},
            { title: 'Sender', field: 'sender.full_name' },
            { title: 'Item Description', field: 'item_description' },
            { title: 'Item Value', field: 'item_value' },
            { title: 'Status', field: 'status', render: renderStatus},
          ]}
          data={query =>
            new Promise((resolve, reject) => {
              let url = process.env.REACT_APP_WEB_API + '/deliveries?'
              url += 'limit=' + query.pageSize
              url += '&page=' + (query.page + 1)

              fetch(url, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + auth.auth.token,
                }
              })
                .then(response => {
                  if (response.ok) {
                    return response.json()
                  }

                  return Promise.reject(response);
                })
                .then(result => {
                  resolve({
                    data: (result.data.deliveries !== undefined) ? result.data.deliveries : 0,
                    page: (result.data.page !== undefined) ? parseInt(result.data.page, 10) - 1 : 0,
                    totalCount: (result.data.total !== undefined) ? result.data.total : 0
                  })
                }).catch(error => {
                  
                  if (error.status === 401) {
                    ToastEmitter('error', 'Session expired, please re-login!')
                    setTimeout(function(){
                      auth.setAuth({ isAuthenticated: false })
                    }, 1500);
                  }

                  resolve({
                    data: [],
                    page: 0,
                    totalCount: 0,
                  })
                })
            })
          }
          actions={[
            {
              icon: tableIcons.InfoIcon,
              tooltip: 'Show Transaction Info',
              onClick: (event, rowData) => showInfoDialog(rowData)
            },
            {
              icon: tableIcons.CreateIcon,
              tooltip: 'Create Event',
              onClick: (event, rowData) => showEventDialog(rowData)
            },
            {
              icon: tableIcons.CancelScheduleSendIcon,
              tooltip: 'Cancel Transaction',
              onClick: (event, rowData) => cancelTransaction(rowData)
            },
            {
              icon: tableIcons.GetAppIcon,
              tooltip: 'Download Receipt',
              onClick: (event, rowData) => downloadReceipt(rowData)
            }
          ]}
          // detailPanel={[
          //   {
          //     tooltip: 'Show Name',
          //     render: rowData => {
          //       return (
          //         <div
          //           style={{
          //             fontSize: 100,
          //             textAlign: 'center',
          //             color: 'white',
          //             backgroundColor: '#43A047',
          //           }}
          //         >
          //           {rowData.sender.full_name}
          //           {rowData.sender.province}
          //         </div>
          //       )
          //     },
          //   },
          // ]}
        />
        </Container>
        
      </Scrollbar>
        
    </Page>
  )
}

export default Transaction;