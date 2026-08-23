let expenses = [];


function addExpense() {

    let name =
        document.getElementById("expenseName").value;

    let amount =
        document.getElementById("expenseAmount").value;


    if (name === "" || amount === "") {

        alert("Please enter expense and amount");

        return;
    }


    let expense = {

        name: name,

        amount: Number(amount)
    };


    expenses.push(expense);


    showExpenses();


    document.getElementById("expenseName").value = "";

    document.getElementById("expenseAmount").value = "";
}


function showExpenses() {

    let list =
        document.getElementById("expenseList");


    list.innerHTML = "";


    let total = 0;


    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;


        list.innerHTML += `

            <div class="expense">

                <span>
                    ${expenses[i].name}
                </span>

                <span>
                    ₹${expenses[i].amount}
                </span>

                <button onclick="deleteExpense(${i})">
                    Delete
                </button>

            </div>

        `;
    }


    document.getElementById("total").textContent =
        total;
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    showExpenses();
}