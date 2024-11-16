const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = 'world678678';

        return { body: `Hello, ${name}!` };
    }
});
