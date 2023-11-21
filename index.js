<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Your existing head content -->

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('user_form');

      form.addEventListener('submit', function (event) {
        if (!validateForm()) {
          event.preventDefault(); 
        }
      });

      function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const dobInput = document.getElementById('dob');
        const acceptTermsCheckbox = document.getElementById('acceptTerms');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '' || dobInput.value.trim() === '') {
          alert('Please fill in all fields.');
          return false;
        }

        if (!acceptTermsCheckbox.checked) {
          alert('Please accept the terms.');
          return false;
        }

        return true;
      }
    });
  </script>

  <!-- Rest of your head content -->
</head>

<body>
  <!-- Your existing body content -->

</body>

</html>
