import React from "react";

function ErrorPage() {
  return (
    <div>
      <img src="/images/error-404.png" alt="go to homepage" />
      <h2>Uh-oh, looks like this route does not exist!</h2>
      <a href="/">Go back to the homepage</a>
    </div>
  );
}

export default ErrorPage;
