// Transações bancárias

const user = {
    name: "Luciano",
    transactions: [],
    balance: 0
}

// Adicionar transações por meio de OBJETOS

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        return user.balance += transaction.value
    } else if (transaction.type == 'debit') {
        return user.balance -= transaction.value
    }
}

/* ADICIONANDO TRANSAÇÕES */
createTransaction({
    type: 'credit',
    value: 50
})
createTransaction({
    type: 'debit',
    value: 80
})

createTransaction({
    type: 'debit',
    value: 200
})

createTransaction({
    type: 'credit',
    value: 380
})


// RELATÓRIOS 

function getHigherTransactionByType(type) {
    let higherTransaction
    let maior = 0
    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > maior) {
            maior = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction,
        console.log(higherTransaction)
}

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')


// Valor médio das transações de um usuário independente do tipo
function getAverageTransactionValue(users) {
    let sum = 0
    for (let i = 0; i < users.transactions.length; i++) {
        sum += user.transactions[i].value
    }
    const average = sum / users.transactions.length
    return average,
        console.log(average)
}

getAverageTransactionValue(user)


// Return QUANTIDADE de transações de cada tipo (credit/debit)
// { credit: x, debit: y}
function getTransactionsCount() {
    let transactionCount = {
        credit: 0,
        debit: 0
    }
    for (transaction of user.transactions) {
        if (transaction.type == 'credit') {
            transactionCount.credit++
        } else if (transaction.type == 'debit') {
            transactionCount.debit++
        }
    }
    return transactionCount,
        console.log(transactionCount)
}

getTransactionsCount()

// const user = {
//     name: "Ana Paula",
//     transactions: [],
//     balance: 0
//   };
  
//   function createTransaction(transaction) {
//     user.transactions.push(transaction)
  
//     if (transaction.type === 'credit') {
//       user.balance += transaction.value
//     } else {
//       user.balance -= transaction.value
//     }
//   }
  
//   function getHigherTransactionByType(type) {
//     let highValue = 0
//     let highTransaction = 0;
  
//     for (let transaction of user.transactions) {
//       if(transaction.value > highValue && transaction.type === type) {
//         highValue = transaction.value 
//         highTransaction = transaction
//       }
//     }
  
//     return highTransaction
//   }
  
//   function getAverageTransactionValue() {
//     let sum = 0
  
//     for (let transaction of user.transactions) {
//       sum += transaction.value
//     }
  
//     return sum/user.transactions.length
//   }
  
//   function getTransactionsCount() {
//     let count = { credit: 0, debit: 0 }
  
//     for (transaction of user.transactions) {
//       if (transaction.type === 'credit') {
//         count.credit += 1
//       } else {
//         count.debit += 1
//       }
//     }
  
//     return count
//   }
  
//   createTransaction({ type: "credit", value: 50 });
//   createTransaction({ type: "credit", value: 120 });
//   createTransaction({ type: "debit", value: 80 });
//   createTransaction({ type: "debit", value: 30 });
  
//   console.log(user.balance);
  
//   console.log(getHigherTransactionByType("credit")); 
//   console.log(getHigherTransactionByType("debit")); 
  
//   console.log(getAverageTransactionValue());
//   console.log(getTransactionsCount());