function Logout()
{
    var result = confirm("Are you sure to log-out of your account");
    if (result == false)
        {
            var aft = document.getElementById("state");
            aft.href="Contents.html"
        }     
    }