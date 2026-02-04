let recentRequests = [];
/**
 * Determines whether a request from a given IP address is allowed based on a cooldown mechanism.
 * 
 * The function maintains a list of recent requests and enforces a cooldown period of 2 seconds
 * for each IP address. If the IP address is not on cooldown, the request is allowed and the IP
 * is added to the list of recent requests. In non-production environments, all requests are allowed.
 * 
 * @param {string} ip - The IP address of the requester.
 * @returns {boolean} - Returns `true` if the request is allowed, otherwise `false`.
 */
function cooldown(ip) {
    const currentTime = Date.now();
    let allowed       = false;
    let ipsOnCooldown = [];

    // remove requests older than 1 sec from recentRequests,
    // add newer requests to IPs on cooldown.
    for (let i=recentRequests.length-1; i>=0; i--) {
        if (recentRequests[i][1] < currentTime - 2000) {
            recentRequests.shift();
        }
        else {
            ipsOnCooldown.push(recentRequests[i][0]);
        }
    }

    // if current requester ip is not on cooldown, add to recentRequests,
    // and allow the current request.
    if (!ipsOnCooldown.includes(ip)) {
        recentRequests.push([ip, Date.now()]);
        allowed = true;
    }

    if (!global.prod) {
        allowed = true;
    }

    return allowed;
}