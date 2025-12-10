import axios from "axios";

it("O endpoint root deve responder com status 200", async () => {
    const response = await axios.get("http://localhost:5000");
    expect(response.status).toBe(200);
});

it("O endpoint /challenges deve responder com os dados recebidos", async () => {
    const testData = { challenge: "Test Challenge" };
    const response = await axios.post("http://localhost:5000/challenges", testData);
    expect(response.data.receivedData).toEqual(testData);
});

it ("O endpoint /challenges deve responder com status 200", async () => {
    const testData = { challenge: "Test Challenge" };
    const response = await axios.post("http://localhost:5000/challenges", testData);
    expect (response.status).toBe(200);
});
