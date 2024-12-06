<?php
// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION["user_id"])) {
    header("Location: login.html"); // Redirect to login if not logged in
    exit();
}

echo "<h1>Welcome, " . $_SESSION["username"] . "!</h1>";
echo "<p>You are logged in.</p>";
?>
