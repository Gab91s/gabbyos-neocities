// Discord status script from https://rice.place/other/discord.html | works with lanyard API https://www.npmjs.com/package/lanyard-rest-api
async function discordChecker() {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/880937194867548190');
      const gabs91 = await response.json();
      document.getElementById("status-details").innerHTML = `
      ${gabs91.data.discord_user.username} is ${gabs91.data.discord_status}
      `
      const statusColors = {
        online: "#5dff8a",
        idle: "#cb9654",
        dnd: "#d83a43",
        offline: "#5d5d5d",
      };
      document.getElementById("status-blob").style.backgroundColor = statusColors[gabs91.data.discord_status];
    } catch (error) {
      console.error("failed to fetch!!", error);
    }
};

discordChecker();
setInterval(discordChecker, 2000);