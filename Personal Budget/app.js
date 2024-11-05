// app.js

// Example of adding a transaction
document.getElementById('add-transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
  
    const transaction = {
      type,
      amount,
      date,
      description
    };
  
    // Save transaction to localStorage (for simplicity)
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  
    // Update UI (not shown here)
  });
  
  // Example of data visualization using Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [{
        label: '# of Transactions',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  


  document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Save user to localStorage (for simplicity)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
  
        alert('Sign Up Successful!');
        window.location.href = 'login.html';
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        // Check user credentials (for simplicity)
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
  
        if (user) {
          alert('Login Successful!');
          window.location.href = 'dashboard.html';
        } else {
          alert('Invalid username or password');
        }
      });
    }
  });
  