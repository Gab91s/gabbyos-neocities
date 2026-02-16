
/* website age */
    const hourInMillis = 3600000;
    const dayInMillis = 86400000;
    const monthInMillis = 2592000000; // this number assumes a month with 30 days
    
    // replace the below date with your date
    const myDate = new Date("Sat, 18 Oct 2025 16:14:04 -0000");

    function getAge() {
        let diff = Date.now() - myDate.valueOf();

        let months = Math.floor(diff / monthInMillis);
        diff = diff - (months * monthInMillis);

        let days = Math.floor(diff / dayInMillis);
        diff = diff - (days * dayInMillis);

        let hours = Math.floor(diff / hourInMillis);

        let formattedTime = " " + months + " months, " + days + " days, " + hours + " hours";
        document.getElementById("Age").innerText = formattedTime;
    }
    getAge();
    setInterval(getAge, 60000); // Calls getAge() every minute

    // get date
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
const yyyy = today.getFullYear();

const formattedDate = `${dd}/${mm}/${yyyy}`;