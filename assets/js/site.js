function shuffle(items) {
    var cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleNodes(list) {
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
}

var list = document.getElementById("feed");
shuffleNodes(list);