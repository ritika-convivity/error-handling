export async function GET(request: Request) {
    try {
        const random = Math.random();
        if (random < 0.5) {
            return Response.json({ message: 'Success' }, { status: 200 });
        } else {
            throw new Error("Internal Server Error");
        }
    } catch (error) {
        console.error('Error occurred:', error);
        throw error;
        // return Response.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
