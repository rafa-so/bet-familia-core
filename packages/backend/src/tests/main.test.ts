import axios from "axios";

it("O endpoint root deve responder com status 200", async () => {
    const response = await axios.get("http://localhost:5000");
    expect(response.status).toBe(200);
});
