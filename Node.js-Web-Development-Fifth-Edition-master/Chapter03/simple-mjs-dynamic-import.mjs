
(async () => {
    const simple2 = await import('./simple2.mjs');

    console.log(simple2.hello());
    console.log(simple2.next());
    console.log(simple2.next());
    console.log(`count = ${simple2.default()}`);
    console.log(`Meaning: ${simple2.meaning}`);
})();