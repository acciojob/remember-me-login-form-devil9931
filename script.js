//your JS code here. If required.

 const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheck = document.getElementById('checkbox');
    const existingBtn = document.getElementById('existing');
    const form = document.getElementById('loginForm');

    // On page load check if credentials exist
    const savedUser = localStorage.getItem('savedUsername');
    const savedPass = localStorage.getItem('savedPassword');

    if (savedUser && savedPass) {
      // Show existing user button
      existingBtn.style.display = 'inline-block';
    }

    // Handle form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      if (!username || !password) {
        alert("Please enter valid details.");
        return;
      }

      alert(`Logged in as ${username}`);

      if (rememberCheck.checked) {
        // Save credentials
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
        existingBtn.style.display = 'inline-block';
      } else {
        // Remove credentials
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
        existingBtn.style.display = 'none';
      }

      // Optionally clear the fields
      usernameInput.value = '';
      passwordInput.value = '';
      rememberCheck.checked = false;
    });

    // Handle existing user login
    existingBtn.addEventListener('click', function () {
      const savedUser = localStorage.getItem('savedUsername');
      if (savedUser) {
        alert(`Logged in as ${savedUser}`);
      }
    });