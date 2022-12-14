import React, {useState, useEffect} from 'react';
// import ListTransactions from './ListTransactions';
import { DataTable } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

export default function CurrentAccTable() {

    const [transactions, setTransactions] = useState([])

const mockTransactions = [{Date: '01/01/22', Payee: 'Costa', Category: 'Eating Out', Out: '8.99', In: '0.00'},
                          {Date: '01/01/22', Payee: 'Tesco', Category: 'Groceries', Out: '45.89', In: '0.00'},
                          {Date: '01/01/22', Payee: 'Private', Category: 'Rent', Out: '775.00', In: '0.00'},
                          {Date: '03/01/22', Payee: 'Asos', Category: 'Clothing', Out: '0.00', In: '35.00'},
                          {Date: '05/01/22', Payee: 'TFGM', Category: 'Tram', Out: '1.85', In: '0.00'},
                          {Date: '05/01/22', Payee: 'eON', Category: 'Gas', Out: '75.00', In: '0.00'},
                          {Date: '07/01/22', Payee: 'TFGM', Category: 'Tram', Out: '1.85', In: '0.00'},
                          {Date: '08/01/22', Payee: 'Wilkos', Category: 'Nails', Out: '1.25', In: '0.00'},
                          {Date: '10/01/22', Payee: 'Virgin', Category: 'Internet', Out: '33.30', In: '0.00'},
                          {Date: '10/01/22', Payee: '3', Category: 'Mobile', Out: '15.00', In: '0.00'},
                          {Date: '10/01/22', Payee: 'Next', Category: 'Clothing', Out: '55.00', In: '0.00'},
    
]

useEffect(() => {setTransactions(mockTransactions)}, [])

const listTransactions = transactions.map((transaction) => {
    
    return(
<DataTable.Row style={styles.tableRow}>
    <DataTable.Cell>{transaction.Date}</DataTable.Cell>
    <DataTable.Cell>{transaction.Payee}</DataTable.Cell>
    <DataTable.Cell>{transaction.Category}</DataTable.Cell>
    <DataTable.Cell numeric>{transaction.Out}</DataTable.Cell>
    <DataTable.Cell numeric>{transaction.In}</DataTable.Cell>
  </DataTable.Row>
)
})

    return (
   <View style={styles.container}>
   <DataTable>
    <DataTable.Header style={styles.head}>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Payee</DataTable.Title>
        <DataTable.Title>Category</DataTable.Title>
        <DataTable.Title numeric>Out (£)</DataTable.Title>
        <DataTable.Title numeric>In (£)</DataTable.Title>
        </DataTable.Header>
        </DataTable>
        <View style={styles.row}>
        {listTransactions}
        </View>
        </View>
);
};


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        // paddingTop: 100, 
        // paddingHorizontal: 10
    },
    head: { 
        height: 50, 
        backgroundColor: colors.secondary,
    },
    row: { 
        height: 40, 
        marginTop: 50,
    },
    tableRow: {
        backgroundColor: colors.white,
    }
})