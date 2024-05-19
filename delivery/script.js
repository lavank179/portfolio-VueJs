featureFlagEnabled();

async function testPassword() {
  const response = await fetch(
    "https://lavan-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/0/password.json"
  );

  const password = await prompt(
    "Please Enter the password to continue. \n If don't know please contact the ADMIN!!! \n PH - 8072097287"
  );

  if (password === await response.json()) {
    alert("Password is correct... Thank You for visiting my details!");
    setVisible('#loading', false);
  } else {
    alert("Incorrect Password... Please try again!");
    setVisible('#loading', true);
    testPassword();
  }
}

async function featureFlagEnabled() {
  const response = await fetch(
    "https://lavan-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/2/feature-flags/portfolio.json"
  );
  
  if(await response.json() === "true1") {
    testPassword();
  } else {
    setVisible('#loading', false);
  }
}

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 2000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('#app', true);
  setVisible('#loading', false);
});