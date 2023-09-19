import figlet from "figlet";

const server = Bun.serve({
    port:Bun.env.port || 3000,
    fetch(req) {
        const url = new URL(req.url);
        if(url.pathname === '/') return new Response('Home Page!');
        if(url.pathname === '/blog') return new Response(' Blog');
        return new Response('404! Not FOund!')
    }
});

console.log(`listening on port ${server.port}...`);